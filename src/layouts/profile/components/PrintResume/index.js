import { useTranslation } from "react-i18next";

// Data
import jobDetails from "layouts/profile/data/jobs";
import { certificates } from "examples/Certifications/SectionCarousel";

const siteUrl = process.env.REACT_APP_SITE_URL || "";

/**
 * Compact, image-free version of the CV used only for printing / "Save as PDF".
 * It is mounted by the profile page just before the browser prints, so it
 * never shows on screen and search engines do not see it as duplicate text.
 * Styles: src/assets/print.css
 */
function PrintResume() {
  const { t } = useTranslation();
  const timeline = t("timeline", { returnObjects: true });
  const skillGroups = t("skillGroups", { returnObjects: true });
  const modules = t("functionalModules", { returnObjects: true });
  const references = t("references", { returnObjects: true });

  const contact = [
    t("phone"),
    t("mail"),
    t("location"),
    "linkedin.com/in/carmensalinas",
    siteUrl.replace(/^https?:\/\//, ""),
  ];

  return (
    <article className="print-resume">
      <header>
        <h1>{t("name")}</h1>
        <p className="headline">{t("headline")}</p>
        <p className="contact">{contact.filter(Boolean).join("  ·  ")}</p>
      </header>

      <section>
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </section>

      <section>
        <h2>{t("skills")}</h2>
        {skillGroups.map(({ name, items }) => (
          <p key={name} className="line">
            <strong>{name}:</strong> {items.join(", ")}
          </p>
        ))}
      </section>

      <section>
        <h2>{t("title3")}</h2>
        {timeline.map(({ title, date, job, note }) => {
          const details = job ? jobDetails[job] : null;
          const meta = [details?.project && `${t("project")}: ${details.project}`, note]
            .filter(Boolean)
            .join(" · ");
          return (
            <div key={title} className="job">
              <div className="job-head">
                <strong>{title}</strong>
                <span>{date}</span>
              </div>
              {meta && <p className="meta">{meta}</p>}
              {job && (
                <ul>
                  {t(`${job}Items`, { returnObjects: true }).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {details?.tools && (
                <p className="meta">
                  {t("tools")}: {t(`${job}Tools`)}
                </p>
              )}
            </div>
          );
        })}
      </section>

      <section>
        <h2>{t("functionalTitle")}</h2>
        {modules.map(({ name, items }) => (
          <p key={name} className="line">
            <strong>{name}:</strong> {items.map((item) => item.replace(/\.$/, "")).join("; ")}.
          </p>
        ))}
      </section>

      <section>
        <h2>{t("title4")}</h2>
        <p className="line">
          {certificates.map(({ altText, typeKey }) => `${altText} (${t(typeKey)})`).join("  ·  ")}
        </p>
      </section>

      <section>
        <h2>{t("referencesTitle")}</h2>
        <ul className="references">
          {references.map(({ name, role, company }) => (
            <li key={name}>
              <strong>{name}</strong> – {role}, {company}
            </li>
          ))}
        </ul>
        <p className="meta">{t("referencesNote")}</p>
      </section>
    </article>
  );
}

export default PrintResume;
