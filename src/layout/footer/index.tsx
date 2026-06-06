import FooterLogoLight from "/logo.svg";
import FooterLogoDark from "/logoWhite.svg";
import Twitter from "/twitter.svg";
import Discord from "/discord.svg";
import Instagram from "/instagram.svg";
import Gmail from "/gmail.svg";
import MetaLogo from "/meta.svg";
import USAFlag from "/usa.svg";
import CanadaFlag from "/canada.svg";
import { Link } from "@tanstack/react-router";
import { useComputedColorScheme } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const computedColorScheme = useComputedColorScheme();
  const { t, i18n } = useTranslation();

  const isFrench = i18n.language === "fr-CA";

  return (
    <footer className="border-t border-(--footer-border) bg-(--footer-bg)">
      <div className="max-w-360 mx-auto py-10">
        <div className="w-11/12 mx-auto">
          <div className="grid gap-10 md:grid-cols-3 items-stretch">
            <div className="flex h-full flex-col items-center text-center border-b border-dotted border-[#ADADAD] px-0 py-7 md:border-b-0 md:border-r md:px-7 md:py-0">
              <div className="flex items-center justify-center gap-2 h-12">
                <img src={MetaLogo} alt="Meta Logo" />
                <h2 className="text-2xl font-semibold text-(--meta-text)">
                  Meta
                </h2>
              </div>

              <h3
                className={`mt-4 mb-3 text-(--primary-color) ${
                  isFrench ? "min-h-15" : ""
                }`}
              >
                {t("footer.metaTitle")}
              </h3>

              <p className="flex-1 text-sm text-(--secondary-color)">
                {t("footer.metaDescription")}
              </p>
            </div>

            <div className="flex h-full flex-col items-center text-center border-b border-dotted border-[#ADADAD] px-0 py-7 md:border-b-0 md:border-r md:px-7 md:py-0">
              <div className="flex items-center justify-center h-12">
                <img src={USAFlag} alt="USA Flag" />
              </div>

              <h3
                className={`mt-4 mb-3 text-(--primary-color) ${
                  isFrench ? "min-h-15" : ""
                }`}
              >
                {t("footer.usaTitle")}
              </h3>

              <p className="flex-1 text-sm text-(--secondary-color)">
                {t("footer.usaDescription")}
              </p>
            </div>

            <div className="flex h-full flex-col items-center text-center px-0 py-7 md:px-7 md:py-0">
              <div className="flex items-center justify-center h-12">
                <img src={CanadaFlag} alt="Canada Flag" />
              </div>

              <h3
                className={`mt-4 mb-3 text-(--primary-color) ${
                  isFrench ? "min-h-15" : ""
                }`}
              >
                {t("footer.canadaTitle")}
              </h3>

              <p className="flex-1 text-sm text-(--secondary-color)">
                {t("footer.canadaDescription")}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center md:pl-8">
                {computedColorScheme === "dark" ? (
                  <img
                    className="w-40 h-10"
                    src={FooterLogoDark}
                    alt="Footer Logo"
                  />
                ) : (
                  <img
                    className="w-40 h-10"
                    src={FooterLogoLight}
                    alt="Footer Logo"
                  />
                )}
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to="/"
                  className="rounded bg-linear-to-bl from-[#313131] to-[#222222] p-3  hover:from-black transition-colors duration-75 w-10 h-10"
                >
                  <img className="w-4 h-4" src={Twitter} alt="Twitter" />
                </Link>

                <Link
                  to="/"
                  className="rounded bg-linear-to-bl from-[#313131] to-[#222222] p-3 hover:from-[#5865F2] hover:to-[#5865F2] transition-colors duration-75 w-10 h-10"
                >
                  <img className="w-4 h-4" src={Discord} alt="Discord" />
                </Link>

                <Link
                  to="/"
                  className="rounded bg-linear-to-bl from-[#313131] to-[#222222] p-3 hover:bg-linear-to-r hover:from-[#E4405F] hover:to-[#E4405F] transition-colors duration-75 w-10 h-10"
                >
                  <img className="w-4 h-4" src={Instagram} alt="Instagram" />
                </Link>

                <Link
                  to="/"
                  className="rounded bg-linear-to-bl from-[#313131] to-[#222222] p-3 hover:from-[#EA4335] hover:to-[#EA4335] transition-colors duration-75 w-10 h-10"
                >
                  <img className="w-4 h-4" src={Gmail} alt="Gmail" />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 text-(--black-text)">
                <a href="#">{t("footer.privacyPolicy")}</a>
                <a href="#">{t("footer.termsOfService")}</a>
              </div>

              <div>
                <button className="rounded bg-linear-to-bl from-(--linear-btn-from) to-(--linear-btn-to) px-9 py-2 text-sm text-white font-source-code-pro shadow-2xl drop-shadow-2xl">
                  {t("footer.faq")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
