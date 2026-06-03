import { navMenuLinks } from "@/constant";
import { Button, Drawer, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

type MobileViewTypes = { opened: boolean; close: () => void };

const MobileView = ({ opened, close }: MobileViewTypes) => {
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Menu" hiddenFrom="md">
        <div className="flex flex-col gap-5 mb-5">
          {navMenuLinks.map((link) => (
            <Link key={link.title} to={link.link} className="text-[#6D6D6D]">
              {link.title}
            </Link>
          ))}
        </div>

        <Group hiddenFrom="md">
          <Button
            variant="white"
            className="text-[#363535]! font-source-code-pro rounded font-bold! text-sm"
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
      </Drawer>
    </>
  );
};

export default MobileView;
