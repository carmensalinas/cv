import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// self-hosted fonts (Roboto and the round Material icons)
import "assets/fonts.css";
// compact layout used when printing or saving the CV as PDF
import "assets/print.css";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

// import i18n (needs to be bundled ;))
import "./i18n";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
