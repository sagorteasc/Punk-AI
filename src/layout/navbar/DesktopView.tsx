import { navMenuLinks } from "@/constant";
import { Button, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

const DesktopView = () => {
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
          className="text-(--btn-text)! bg-(--btn-bg)! rounded font-source-code-pro font-bold! text-sm transition-transform hover:-translate-y-1 hover:cursor-pointer shadow-(--btn-shadow)"
        >
          SIGN UP
        </Button>
      </Group>
    </>
  );
};

export default DesktopView;
