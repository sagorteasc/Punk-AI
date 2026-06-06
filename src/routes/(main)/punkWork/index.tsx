import { useTranslation } from "react-i18next";
import AllTabs from "./AllTabs";

const PunkWork = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-360 mx-auto mb-20 md:mb-36">
      <div className="text-center space-y-3 w-11/12 mx-auto mb-9">
        <h2 className="text-3xl md:text-5xl lg:text-[54px] text-(--punkWork-text) font-ocrx">
          {t("punkWork.title")}
        </h2>
        <p className="text-(--third-color)">{t("punkWork.description")}</p>
      </div>

      <AllTabs />
    </div>
  );
};

export default PunkWork;
