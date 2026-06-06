import { useTranslation } from "react-i18next";
import YoutubeVideo from "./YoutubeVideo";

const SellPrompt = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-360 mx-auto my-20 md:mt-24 md:mb-36">
      <div className="text-center space-y-3 w-11/12 md:w-2/3 mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl lg:text-[64px] text-(--black-text) font-ocrx">
          {t("sellPrompt.title")}
        </h2>
        <p className="text-(--third-color)">{t("sellPrompt.description")}</p>
      </div>

      <YoutubeVideo />
    </div>
  );
};

export default SellPrompt;
