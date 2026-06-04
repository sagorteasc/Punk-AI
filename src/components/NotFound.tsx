import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C88C2C]/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        <h1 className="font-ocrx text-7xl md:text-9xl text-[#111111]">404</h1>

        <div className="mx-auto my-6 h-px w-40 bg-linear-to-r from-transparent via-[#C88C2C] to-transparent" />

        <p className="mx-auto max-w-md text-[#5C5C5C]">
          The page you're looking for doesn't exist, was moved, or never made it
          into production.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded px-6 py-3 text-sm font-bold text-[#363535] font-source-code-pro transition-transform duration-200 hover:-translate-y-1 hover:cursor-pointer"
            style={{
              boxShadow: `
                0 0 0 1px #EBEBEB,
                0 1px 3px rgba(143, 143, 143, 0.2),
                inset 0 -2.4px 0 rgba(62, 62, 62, 0.04)
              `,
              background: "#FFFFFF",
            }}
          >
            <ArrowLeft size={16} />
            RETURN HOME
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NotFound;
