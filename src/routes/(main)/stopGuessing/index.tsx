import { useTranslation } from "react-i18next";
import AnimateImage from "/StopGuessing.png";

const StopGuessing = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-360 mx-auto mb-20 md:mb-36">
      <div className="text-center space-y-3 w-11/12 md:w-3/4 mx-auto mb-9">
        <h2 className="text-3xl md:text-5xl lg:text-[54px] text-(--stopGuessing-text) font-ocrx mb-5">
          {t("stopGuessing.title")}
        </h2>
        <p className="text-(--third-color) mb-10">
          {t("stopGuessing.description")}
        </p>

        <img src={AnimateImage} alt="Animated Image" className="mx-auto" />
      </div>
    </div>
  );
};

export default StopGuessing;
