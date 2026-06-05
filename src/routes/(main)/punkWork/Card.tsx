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
        className="relative h-105 overflow-hidden rounded-xl border border-(--card-border) bg-(--card-color) p-4"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#DAD9CD]">
          {hovered ? (
            <Pause size={14} fill="currentColor" className="text-black" />
          ) : (
            <Play size={14} fill="currentColor" className="text-black" />
          )}
        </div>

        <h3 className="my-3 text-xl font-semibold text-(--primary-color)">
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
          className="absolute bottom-0 left-1/2 h-28 w-[80%] -translate-x-1/2 rounded-t-xl bg-(--card-slide-bg) shadow-(--card-slide-shadow) cursor-pointer"
        />
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
