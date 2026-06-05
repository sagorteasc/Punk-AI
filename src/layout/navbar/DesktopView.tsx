import { navMenuLinks } from "@/constant";
import {
  Button,
  Group,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";

const DesktopView = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Group visibleFrom="md" gap={"xl"}>
        {navMenuLinks.map((link) => (
          <Link
            key={link.title}
            to={link.link}
            className="text-(--navlink-text)"
          >
            {link.title}
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
          className="text-(--btn-text)! bg-(--btn-bg)! rounded font-source-code-pro font-bold! text-sm transition-transform hover:-translate-y-1 hover:cursor-pointer shadow-(--btn-shadow)"
        >
          SIGN UP
        </Button>
      </Group>
    </>
  );
};

export default DesktopView;
