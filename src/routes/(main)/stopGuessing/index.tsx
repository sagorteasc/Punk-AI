import AnimateImage from "/StopGuessing.png";

const StopGuessing = () => {
  return (
    <div className="max-w-360 mx-auto mb-20 md:mb-36">
      <div className="text-center space-y-3 w-11/12 md:w-3/4 mx-auto mb-9">
        <h2 className="text-3xl md:text-5xl lg:text-[54px] text-(--stopGuessing-text) font-ocrx mb-5">
          Stop Guessing, Start Knowing
        </h2>
        <p className="text-(--third-color) mb-10">
          Punk crawls through the entire digital ecosystem for patterns that
          lead to your customer description, finds those people, and sends your
          ads directly to them.
        </p>

        <img src={AnimateImage} alt="Animated Image" className="mx-auto" />
      </div>
    </div>
  );
};

export default StopGuessing;
