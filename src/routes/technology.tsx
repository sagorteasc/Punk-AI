import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/technology")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C88C2C]/10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-360 mx-auto w-11/12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-[#C88C2C]/20 bg-white px-5 py-2 font-source-code-pro text-xs tracking-[0.25em] text-[#C88C2C] uppercase shadow-sm">
            {t("routes.badge")}
          </span>

          <h1 className="mt-8 font-ocrx text-[clamp(3rem,7vw,6rem)] text-(--primary-color)">
            {t("routes.title")}
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg text-(--third-color)">
            {t("routes.description")}
          </p>

          <div className="mx-auto mt-10 flex w-fit items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#C88C2C] animate-pulse" />
            <div className="h-2 w-2 rounded-full bg-[#C88C2C] animate-pulse delay-150" />
            <div className="h-2 w-2 rounded-full bg-[#C88C2C] animate-pulse delay-300" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded px-6 py-3 text-sm font-bold  text-(--btn-text)! bg-(--btn-bg)! shadow-(--btn-shadow) font-source-code-pro transition-transform duration-200 hover:-translate-y-1 hover:cursor-pointer"
          >
            <ArrowLeft size={16} />
            {t("routes.returnHome")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
