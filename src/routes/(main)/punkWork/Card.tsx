import { motion } from "motion/react";
import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Modal } from "@mantine/core";

type CardData = {
  id: number;
  title: string;
  description: string;
};

type CardType = {
  data: CardData;
};

const Card = ({ data }: CardType) => {
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative h-95 overflow-hidden rounded-xl border border-[#C3C3C3] bg-[#F5F5F5] p-4"
      >
        {hovered ? (
          <Pause size={14} fill="currentColor" />
        ) : (
          <Play size={14} fill="currentColor" />
        )}

        <h3 className="mb-2 text-xl font-semibold text-(--primary-color)">
          {data.title}
        </h3>

        <p className="text-sm leading-relaxed text-(--secondary-color)">
          {data.description}
        </p>

        <motion.button
          onClick={() => setOpened(true)}
          animate={{
            y: hovered ? 10 : 80,
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 h-28 w-[80%] -translate-x-1/2 rounded-t-xl bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] cursor-pointer"
        ></motion.button>
      </motion.div>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        styles={{
          body: {
            height: "400px",
          },
        }}
      ></Modal>
    </>
  );
};

export default Card;
