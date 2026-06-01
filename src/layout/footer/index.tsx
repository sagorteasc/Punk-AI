import FooterLogo from "/logo.svg";
import Twitter from "/twitter.svg";
import Discord from "/discord.svg";
import Instagram from "/instagram.svg";
import Gmail from "/gmail.svg";
import MetaLogo from "/meta.svg";
import USAFlag from "/usa.svg";
import CanadaFlag from "/canada.svg";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-[#e0e0e0]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center text-center border-b border-dotted border-[#ADADAD] px-0 py-7 md:border-b-0 md:border-r md:px-7 md:py-0">
            <div className="flex items-center justify-center gap-2 h-12">
              <img src={MetaLogo} alt="Meta Logo" />
              <h2 className="text-2xl font-semibold text-[#1C2B33]">Meta</h2>
            </div>

            <h3 className="mt-4 mb-3 text-(--primary-color)">
              Meta Approved Safe Workflow
            </h3>

            <p className="flex-1 text-sm text-(--secondary-color)">
              We use Meta’s official approved Developer App. One-time secure
              connection. No Ads Manager access ever needed.
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-b border-dotted border-[#ADADAD] px-0 py-7 md:border-b-0 md:border-r md:px-7 md:py-0">
            <div className="flex items-center justify-center h-12">
              <img src={USAFlag} alt="USA Flag" />
            </div>

            <h3 className="mt-4 mb-3 text-(--primary-color)">
              USA Privacy Compliant
            </h3>

            <p className="flex-1 text-sm text-(--secondary-color)">
              Built to meet CCPA/CPRA and 19+ state privacy laws. Precise
              location data is handled as sensitive information with full user
              control.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-0 py-7 md:px-7 md:py-0">
            <div className="flex items-center justify-center h-12">
              <img src={CanadaFlag} alt="Canada Flag" />
            </div>

            <h3 className="mt-4 mb-3 text-(--primary-color)">
              Canada Privacy Compliant
            </h3>

            <p className="flex-1 text-sm text-(--secondary-color)">
              Fully compliant with federal PIPEDA and provincial laws. Location
              data is treated as sensitive and requires your explicit approval.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2">
              <img src={FooterLogo} alt="Punk" className="h-10 w-auto" />
            </div>

            <div className="bg-[#D9D9D9] rounded-full p-1"></div>

            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="rounded bg-linear-to-bl from-[#313131] to-[#222222] p-3  hover:from-black transition-colors duration-75"
              >
                <img src={Twitter} alt="Twitter" />
              </Link>

              <Link
                to="/"
                className="rounded bg-linear-to-bl from-[#313131] to-[#222222] p-3 hover:from-[#5865F2] hover:to-[#5865F2] transition-colors duration-75"
              >
                <img src={Discord} alt="Discord" />
              </Link>

              <Link
                to="/"
                className="rounded bg-linear-to-bl from-[#313131] to-[#222222] p-3 hover:bg-linear-to-r hover:from-[#E4405F] hover:to-[#E4405F] transition-colors duration-75"
              >
                <img src={Instagram} alt="Instagram" />
              </Link>

              <Link
                to="/"
                className="rounded bg-linear-to-bl from-[#313131] to-[#222222] p-3 hover:from-[#EA4335] hover:to-[#EA4335] transition-colors duration-75"
              >
                <img src={Gmail} alt="Gmail" />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-[#000000]">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>

            <div>
              <button className="rounded bg-linear-to-bl from-[#313131] to-[#222222] px-9 py-2 text-sm text-white source-code-pro drop-shadow-2xl">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
