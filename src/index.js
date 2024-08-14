import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "normalize.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./i18n";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_kz from "./locales/kz/translation.json";
import global_uz from "./locales/uz/translation.json";
import global_ru from "./locales/ru/translation.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "kz",
  resources: {
    uz: {
      global: global_uz,
    },
    kz: {
      global: global_kz,
    },
    ru: {
      global: global_ru,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
