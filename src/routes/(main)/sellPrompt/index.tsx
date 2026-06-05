import YoutubeVideo from "./YoutubeVideo";

const SellPrompt = () => {
  return (
    <div className="max-w-360 mx-auto my-20 md:mt-24 md:mb-36">
      <div className="text-center space-y-3 w-11/12 md:w-2/3 mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl lg:text-[64px] text-(--black-text) font-ocrx">
          Sell With a Prompt
        </h2>
        <p className="text-(--third-color)">
          Punk is the first multi-agent system built for identity resolution at
          scale, targeting individuals rather than broad audiences. Describe
          your ideal customer in natural language, and Punk finds them, runs
          your ads to them, and tracks results. All from one place.
        </p>
      </div>

      <YoutubeVideo />
    </div>
  );
};

export default SellPrompt;
