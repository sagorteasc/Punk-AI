import YoutubeThumbnail from "/youtubeThumbnail.svg";
import Logo from "/logoYoutubeVideo.svg";

const YoutubeVideo = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div>
        <div className="relative mb-8">
          <a
            href="https://youtu.be/boJG84Jcf-4?si=4Lg4zcoBINbAP9fr"
            target="_blank"
          >
            <img src={YoutubeThumbnail} alt="Youtube Video" />
          </a>

          <div className="absolute top-6 left-6.5 sm:top-12 sm:left-12 lg:top-16 lg:left-16">
            <h5 className="text-4xl md:text-[52px] text-white leading-10 md:leading-15">
              Indroducing <br /> Punk
            </h5>
          </div>

          <div className="absolute bottom-6.5 left-6 sm:bottom-12 sm:left-12 lg:bottom-16 lg:left-16">
            <img className="text-white w-auto h-10" src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="flex overflow-hidden rounded-2xl bg-[#fafafa] drop-shadow-2xl shadow-2xl">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 bg-transparent px-6 py-5 text-[#6B6B6B] outline-none"
            />

            <button className="bg-linear-to-bl from-[#313131] to-[#222222] px-10 text-sm font-bold text-white rounded-lg m-1.5">
              GET EARLY ACCESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
