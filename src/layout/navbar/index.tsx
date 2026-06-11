import { Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavLogoLight from "/logo.svg";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : -100,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-(--bg-color)/80 backdrop-blur-lg"
    >
      <div className="max-w-360 py-4 mx-auto">
        <div className="w-11/12 mx-auto">
          <Group justify="space-between">
            <Link to={"/"}>
              <img
                className="w-32 md:w-40 h-auto"
                src={NavLogoLight}
                alt="NavLogo"
              />
            </Link>

            <DesktopView />

            <Group hiddenFrom="md" gap={6} wrap="nowrap">
              <Burger opened={opened} onClick={toggle} />
            </Group>
          </Group>
        </div>

        <MobileView opened={opened} close={close} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
