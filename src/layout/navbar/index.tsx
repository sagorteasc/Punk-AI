import {
  Burger,
  Button,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavLogoLight from "/logo.svg";
import NavLogoDark from "/logoWhite.svg";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure();

  const [visible, setVisible] = useState(true);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

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
            <Link to="/">
              {computedColorScheme === "dark" ? (
                <img className="w-40 h-10" src={NavLogoDark} alt="NavLogo" />
              ) : (
                <img className="w-40 h-10" src={NavLogoLight} alt="NavLogo" />
              )}
            </Link>

            <DesktopView />

            <Group hiddenFrom="md" gap="xs">
              <Button
                variant="white"
                onClick={toggleColorScheme}
                className="text-(--btn-text)! bg-(--btn-bg)! shadow-(--btn-shadow) transition-transform hover:-translate-y-1 hover:cursor-pointer"
              >
                {computedColorScheme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </Button>

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
