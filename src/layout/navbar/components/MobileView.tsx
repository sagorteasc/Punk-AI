import { Button, Drawer, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

type MobileViewTypes = { opened: boolean; close: () => void };

const MobileView = ({ opened, close }: MobileViewTypes) => {
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Menu" hiddenFrom="md">
        <div className="flex flex-col gap-5 mb-5">
          <Link to="/" className="text-[#6D6D6D]">
            Use Cases
          </Link>
          <Link to="/" className="text-[#6D6D6D]">
            Technology
          </Link>
          <Link to="/" className="text-[#6D6D6D]">
            Pricing
          </Link>
        </div>

        <Group hiddenFrom="md">
          <Button
            variant="white"
            className="shadow-md text-[#363535]! source-code-pro font-bold! text-sm"
          >
            Sign In
          </Button>
        </Group>
      </Drawer>
    </>
  );
};

export default MobileView;
