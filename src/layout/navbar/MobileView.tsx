import { navMenuLinks } from "@/constant";
import { Button, Drawer } from "@mantine/core";
import { Link } from "@tanstack/react-router";

type MobileViewTypes = {
  opened: boolean;
  close: () => void;
};

const MobileView = ({ opened, close }: MobileViewTypes) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      hiddenFrom="md"
      padding="xl"
      styles={{
        content: {
          background: "#F5F5F5",
        },
        header: {
          background: "#F5F5F5",
        },
      }}
    >
      <div className="flex h-full min-h-[80vh] flex-col">
        {/* Logo / Brand */}
        <div className="mb-8">
          <h2 className="font-ocrx text-4xl text-[#111111]">Punk</h2>

          <p className="mt-2 text-sm text-[#6D6D6D]">
            Identity resolution powered by AI
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-[#C88C2C] to-transparent" />

        {/* Navigation */}
        <div className="mt-8 flex flex-col gap-6">
          {navMenuLinks.map((link) => (
            <Link
              key={link.title}
              to={link.link}
              onClick={close}
              className="group flex items-center justify-between text-lg font-medium text-[#6D6D6D] transition-all duration-200 hover:text-[#C88C2C]"
            >
              <span>{link.title}</span>

              <span className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-10">
          <Button
            fullWidth
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

          <p className="mt-4 text-center text-xs text-[#8A8A8A]">
            © 2026 Punk AI
          </p>
        </div>
      </div>
    </Drawer>
  );
};

export default MobileView;
