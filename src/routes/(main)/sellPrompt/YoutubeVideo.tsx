import YoutubeThumbnail from "/youtubeThumbnail.svg";
import Logo from "/logoWhite.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const YoutubeVideo = () => {
  const [playing, setPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="w-5/6 mx-auto">
      <div className="relative mb-8 overflow-hidden rounded-2xl">
        {/* Thumbnail */}
        <motion.button
          onClick={() => setPlaying(true)}
          animate={{
            scale: playing ? 1.06 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full cursor-pointer"
        >
          <img src={YoutubeThumbnail} alt="Youtube Video" className="w-full" />

          <div className="absolute left-[2%] top-[3%] md:left-[1%] md:top-[1%]">
            <h5 className="text-lg sm:text-2xl md:text-4xl lg:text-[52px] text-white leading-tight">
              Introducing Punk
            </h5>
          </div>

          <div className="absolute left-[1%] bottom-[7%] md:bottom-[4%]">
            <img className="h-5 sm:h-7 md:h-10 w-auto" src={Logo} alt="Logo" />
          </div>
        </motion.button>

        <AnimatePresence>
          {playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-20 bg-black"
            >
              {/* Close Button */}
              <motion.button
                onClick={() => {
                  setPlaying(false);
                  setVideoLoaded(false);
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="absolute top-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-bl from-[#313131] to-[#222222] text-white cursor-pointer"
              >
                ✕
              </motion.button>

              {/* Loading Spinner */}
              {!videoLoaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-30 flex items-center justify-center"
                >
                  <div className="h-12 w-12 animate-spin rounded-full border-2 border-white border-t-transparent" />
                </motion.div>
              )}

              {/* Player */}
              <motion.div
                initial={{
                  scale: 0.96,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full"
              >
                <iframe
                  className={`h-full w-full transition-opacity duration-500 ${
                    videoLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  src="https://www.youtube.com/embed/boJG84Jcf-4?autoplay=1"
                  title="Punk"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  onLoad={() => setVideoLoaded(true)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mx-auto max-w-xl">
        <div className="flex overflow-hidden rounded-2xl bg-(--glass-bg) shadow-(--glass-shadow) w-11/12 mx-auto">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-1 bg-transparent px-1.5 md:px-6 py-5 text-(--input-text) outline-none"
          />

          <button className="bg-linear-to-bl from-(--linear-btn-from) to-(--linear-btn-to) px-2 md:px-5 text-[8px]! md:text-sm! font-bold text-white rounded-lg m-1.5 hover:cursor-pointer">
            GET EARLY ACCESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
