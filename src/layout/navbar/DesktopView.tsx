import { navMenuLinks } from "@/constant";
import { Button, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

const DesktopView = () => {
  return (
    <>
      <Group visibleFrom="md" gap={"xl"}>
        {navMenuLinks.map((link) => (
          <Link key={link.title} to={link.link} className="text-[#6D6D6D]">
            {link.title}
          </Link>
        ))}
      </Group>

      <Group visibleFrom="md">
        <Button
          variant="white"
          className="text-[#363535]! rounded font-source-code-pro font-bold! text-sm transition-transform hover:-translate-y-1 hover:cursor-pointer"
          style={{
            boxShadow: `
              0 0 0 1px #EBEBEB,
              0 1px 3px rgba(143, 143, 143, 0.2),
              inset 0 -2.4px 0 rgba(62, 62, 62, 0.04)
            `,
          }}
        >
          SIGN UP
        </Button>
      </Group>
    </>
  );
};

export default DesktopView;
