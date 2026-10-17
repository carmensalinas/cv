/**
 * Runs after `react-scripts build`.
 *
 * 1. Opens the built site in headless Chrome and saves the rendered HTML of
 *    /es and /en (and / in Spanish), so search engines and link previews get
 *    the CV text without running JavaScript.
 * 2. Writes sitemap.xml and robots.txt with the public address of the site.
 *
 * Chrome is looked up in CHROME_PATH and the usual install locations. If none
 * is found the HTML is left as is (the site still works, only less SEO-friendly).
 */
const fs = require("fs");
const http = require("http");
const path = require("path");

const BUILD = path.join(__dirname, "..", "build");
const LANGUAGES = ["es", "en"];
const DEFAULT_LANGUAGE = "es";

function readSiteUrl() {
  if (process.env.REACT_APP_SITE_URL) return process.env.REACT_APP_SITE_URL;
  const env = fs.readFileSync(path.join(__dirname, "..", ".env"), "utf8");
  const match = env.match(/^REACT_APP_SITE_URL=(.*)$/m);
  return match ? match[1].trim() : "";
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/opt/pw-browsers/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  ];
  return candidates.find((candidate) => candidate && fs.existsSync(candidate));
}

const CONTENT_TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

// serves the build like Firebase does: files first, index.html for everything else
function startServer(template) {
  const server = http.createServer((req, res) => {
    const file = path.join(BUILD, decodeURIComponent(req.url.split("?")[0]));
    if (file.startsWith(BUILD) && fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, {
        "Content-Type": CONTENT_TYPES[path.extname(file)] || "application/octet-stream",
      });
      res.end(fs.readFileSync(file));
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(template);
    }
  });
  return new Promise((resolve) => {
    server.listen(0, () => resolve(server));
  });
}

async function renderPage(browser, url) {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    // no analytics hits from the build
    if (/googletagmanager|google-analytics/.test(request.url())) request.abort();
    else request.continue();
  });
  await page.evaluateOnNewDocument(() => localStorage.clear());
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  await page.waitForSelector("#app h5");

  const html = await page.evaluate(() => {
    // Emotion writes its CSS with insertRule in production, so the <style> tags
    // are empty in the DOM. Copy the rules into the tags so the saved HTML is
    // styled; src/App.js removes these copies once React has started.
    document.querySelectorAll("style[data-emotion]").forEach((style) => {
      if (!style.textContent && style.sheet) {
        style.textContent = Array.from(style.sheet.cssRules, (rule) => rule.cssText).join("\n");
      }
      style.setAttribute("data-prerender", "");
    });
    return `<!DOCTYPE html>\n${document.documentElement.outerHTML}`;
  });
  await page.close();
  return html;
}

function writeSeoFiles(siteUrl) {
  const today = new Date().toISOString().slice(0, 10);
  const alternates = LANGUAGES.map(
    (lng) => `    <xhtml:link rel="alternate" hreflang="${lng}" href="${siteUrl}/${lng}"/>`
  ).join("\n");
  const urls = LANGUAGES.map(
    (lng) => `  <url>
    <loc>${siteUrl}/${lng}</loc>
    <lastmod>${today}</lastmod>
${alternates}
  </url>`
  ).join("\n");
  fs.writeFileSync(
    path.join(BUILD, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
  );
  fs.writeFileSync(
    path.join(BUILD, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  );
}

async function main() {
  const siteUrl = readSiteUrl();
  if (!siteUrl) throw new Error("REACT_APP_SITE_URL is not set (see .env)");
  writeSeoFiles(siteUrl);

  const chrome = findChrome();
  if (!chrome) {
    console.warn("prerender: Chrome not found, set CHROME_PATH. Skipping prerender.");
    return;
  }

  // eslint-disable-next-line global-require
  const puppeteer = require("puppeteer-core");
  const template = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");
  const server = await startServer(template);
  const base = `http://localhost:${server.address().port}`;
  const browser = await puppeteer.launch({
    executablePath: chrome,
    headless: "new",
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    const pages = {};
    for (const lng of LANGUAGES) {
      // eslint-disable-next-line no-await-in-loop
      pages[lng] = await renderPage(browser, `${base}/${lng}`);
      fs.mkdirSync(path.join(BUILD, lng), { recursive: true });
      fs.writeFileSync(path.join(BUILD, lng, "index.html"), pages[lng]);
      console.log(`prerender: /${lng}`);
    }
    // the home page starts in the default language; React then switches to the
    // visitor's saved or browser language
    fs.writeFileSync(path.join(BUILD, "index.html"), pages[DEFAULT_LANGUAGE]);
    console.log("prerender: /");
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
