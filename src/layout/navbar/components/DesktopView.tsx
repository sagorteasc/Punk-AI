import { Button, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

const DesktopView = () => {
  return (
    <>
      <Group visibleFrom="md" gap={"xl"}>
        <Link to="/" className="text-[#6D6D6D]">
          Use Cases
        </Link>
        <Link to="/" className="text-[#6D6D6D]">
          Technology
        </Link>
        <Link to="/" className="text-[#6D6D6D]">
          Pricing
        </Link>
      </Group>

      <Group visibleFrom="md">
        <Button
          variant="white"
          className="shadow-md text-[#363535]! source-code-pro font-bold! text-sm"
        >
          Sign In
        </Button>
      </Group>
    </>
  );
};

export default DesktopView;
