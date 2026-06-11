import { Loader } from "@mantine/core";
import { motion } from "motion/react";

const Loading = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C88C2C]/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 text-center"
      >
        <Loader size={64} color="#C88C2C" type="bars" className="mx-auto" />

        <h2 className="mt-8 font-ocrx text-4xl md:text-6xl text-(--primary-color)">
          Loading
        </h2>

        <p className="mt-4 font-source-code-pro text-sm tracking-[0.2em] uppercase text-(--third-color)">
          Preparing Experience
        </p>

        <div className="mx-auto mt-6 flex w-fit items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#C88C2C] animate-pulse" />
          <div className="h-2 w-2 rounded-full bg-[#C88C2C] animate-pulse delay-150" />
          <div className="h-2 w-2 rounded-full bg-[#C88C2C] animate-pulse delay-300" />
        </div>
      </motion.div>
    </section>
  );
};

export default Loading;
