import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/pricing")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C88C2C]/10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-[#C88C2C]/20 bg-white px-5 py-2 font-source-code-pro text-xs tracking-[0.25em] text-[#C88C2C] uppercase shadow-sm">
            Under Development
          </span>

          <h1 className="mt-8 font-ocrx text-6xl md:text-8xl lg:text-9xl text-[#111111]">
            Coming Soon
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg text-[#5C5C5C]">
            We're crafting something special behind the scenes. This experience
            is currently being built and will be available in a future update.
          </p>

          <div className="mx-auto mt-10 flex w-fit items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#C88C2C] animate-pulse" />
            <div className="h-2 w-2 rounded-full bg-[#C88C2C] animate-pulse delay-150" />
            <div className="h-2 w-2 rounded-full bg-[#C88C2C] animate-pulse delay-300" />
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => navigate({ to: "/" })}
          className="mt-20 inline-flex items-center gap-3 rounded-xl bg-linear-to-bl from-[#313131] to-[#222222] px-6 py-3 text-white shadow-lg transition-transform hover:-translate-y-1 hover:cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Home
        </motion.button>
      </div>
    </section>
  );
}
