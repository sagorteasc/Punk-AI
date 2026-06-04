import YoutubeThumbnail from "/youtubeThumbnail.svg";
import Logo from "/logoYoutubeVideo.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const YoutubeVideo = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-5/6 mx-auto">
      <div className="relative mb-8 overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          {!playing ? (
            <motion.button
              key="thumbnail"
              onClick={() => setPlaying(true)}
              className="w-full cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <img
                src={YoutubeThumbnail}
                alt="Youtube Video"
                className="w-full"
              />

              <div className="absolute left-[6%] top-[10%]">
                <h5 className="text-4xl lg:text-[52px] text-white leading-tight">
                  Introducing Punk
                </h5>
              </div>

              <div className="absolute left-[6%] bottom-[15%] md:bottom-[12%]">
                <img className="h-10 w-auto" src={Logo} alt="Logo" />
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="relative aspect-video"
            >
              <motion.button
                onClick={() => setPlaying(false)}
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className=" absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-linear-to-bl from-[#313131] to-[#222222] text-white cursor-pointer"
              >
                ✕
              </motion.button>

              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/boJG84Jcf-4?autoplay=1"
                title="Punk"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mx-auto max-w-xl">
        <div
          className="flex overflow-hidden rounded-2xl bg-[#fafafa] w-11/12 mx-auto"
          style={{
            boxShadow: `
              0 6.31px 13.68px rgba(0,0,0,0.12),
              0 24.2px 24.2px rgba(0,0,0,0.22),
              0 53.65px 32.61px rgba(0,0,0,0.06),
              0 95.73px 37.87px rgba(0,0,0,0.02),
              0 150.44px 42.08px rgba(0,0,0,0),
              inset 0 3.16px 10.52px rgba(255,255,255,0.17),
              inset 1.05px 1.05px 1.05px rgba(255,255,255,0.4),
              inset -1.05px -1.05px 2.1px rgba(255,255,255,0.25)
            `,
            background: "linear-gradient(180deg, #FAFAFA 0%, #E6E6E6 100%)",
          }}
        >
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-1 bg-transparent px-1.5 md:px-6 py-5 text-[#6B6B6B] outline-none"
          />

          <button className="bg-linear-to-bl from-[#313131] to-[#222222] px-2 md:px-5 text-[8px]! md:text-sm! font-bold text-white rounded-lg m-1.5 hover:cursor-pointer">
            GET EARLY ACCESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
