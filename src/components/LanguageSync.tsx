import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSync = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const segments = location.pathname.split("/");

    const isFrench = segments.includes("fr");

    i18n.changeLanguage(isFrench ? "fr-CA" : "en");
  }, [location.pathname, i18n]);

  return null;
};

export default LanguageSync;
