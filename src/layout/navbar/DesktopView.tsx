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
          className="text-[#363535]! rounded font-source-code-pro font-bold! text-sm"
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
