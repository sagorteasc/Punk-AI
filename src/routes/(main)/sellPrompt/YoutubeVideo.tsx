import YoutubeThumbnail from "/youtubeThumbnail.svg";
import Logo from "/logoYoutubeVideo.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const YoutubeVideo = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-5/6 mx-auto">
      <div className="relative mb-8">
        <button
          onClick={() => setOpened(true)}
          className="w-full cursor-pointer"
        >
          <img src={YoutubeThumbnail} alt="Youtube Video" className="w-full" />
        </button>

        <div className="absolute left-[6%] top-[10%]">
          <h5 className="text-4xl lg:text-[52px] text-white leading-tight">
            Inrtoducing Punk
          </h5>
        </div>

        <div className="absolute left-[6%] bottom-[15%] md:bottom-[12%]">
          <img className="text-white w-auto h-10" src={Logo} alt="Logo" />
        </div>
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
            className="flex-1 bg-transparent px-4 md:px-6 py-5 text-[#6B6B6B] outline-none"
          />

          <button className="bg-linear-to-bl from-[#313131] to-[#222222] px-2 md:px-5 text-[8px]! md:text-sm! font-bold text-white rounded-lg m-1.5 hover:cursor-pointer">
            GET EARLY ACCESS
          </button>
        </div>
      </div>

      <AnimatePresence>
        {opened && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80"
              onClick={() => setOpened(false)}
            />

            <div className="fixed inset-0 z-60 flex items-center justify-center p-4 md:p-10">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-5xl"
              >
                <button
                  onClick={() => setOpened(false)}
                  className="absolute -top-12 right-0 text-5xl text-white"
                >
                  ×
                </button>

                <div className="aspect-video overflow-hidden rounded-2xl">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/boJG84Jcf-4?autoplay=1"
                    title="Punk"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default YoutubeVideo;
