import { motion } from "motion/react";
import { Play } from "lucide-react";

type CardData = {
  id: number;
  title: string;
  description: string;
};

type CardType = {
  data: CardData;
};

const Card = ({ data }: CardType) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-xl border border-[#C3C3C3] bg-[#F5F5F5] p-4"
    >
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#DAD7D2]">
        <Play size={14} fill="currentColor" />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-(--primary-color)">
        {data.title}
      </h3>

      <p className="text-sm leading-relaxed text-(--secondary-color)">
        {data.description}
      </p>
    </motion.div>
  );
};

export default Card;
