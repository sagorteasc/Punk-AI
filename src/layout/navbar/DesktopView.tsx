import { navMenuLinks } from "@/constant";
import {
  Button,
  Group,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { Languages, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

const DesktopView = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();
  const { t, i18n } = useTranslation();

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Group visibleFrom="md" gap={"xl"}>
        {navMenuLinks.map((link) => (
          <Link
            key={link.translationKey}
            to={link.link}
            className="text-(--navlink-text)"
          >
            {t(link.translationKey)}
          </Link>
        ))}
      </Group>

      <Group visibleFrom="md" gap="sm">
        <Button
          variant="white"
          onClick={toggleColorScheme}
          className="text-(--btn-text)! bg-(--btn-bg)! transition-transform hover:-translate-y-1 hover:cursor-pointer shadow-(--btn-shadow)"
        >
          {computedColorScheme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </Button>

        <Button
          variant="white"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "fr-CA" : "en")
          }
          className="text-(--btn-text)! bg-(--btn-bg)! font-source-code-pro font-bold! transition-transform hover:-translate-y-1 hover:cursor-pointer shadow-(--btn-shadow)"
        >
          <Languages size={18} className="mr-1" />{" "}
          {i18n.language === "en" ? "FR" : "EN"}
        </Button>

        <Button
          variant="white"
          className="text-(--btn-text)! bg-(--btn-bg)! rounded font-source-code-pro font-bold! text-sm transition-transform hover:-translate-y-1 hover:cursor-pointer shadow-(--btn-shadow)"
        >
          {t("signUp")}
        </Button>
      </Group>
    </>
  );
};

export default DesktopView;
