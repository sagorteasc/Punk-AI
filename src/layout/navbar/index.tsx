import { Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavLogo from "/logo.svg";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <nav className="border-b border-[#f3f1bf]">
      <div className="max-w-360 py-4 mx-auto">
        <div className="w-11/12 mx-auto">
          <Group justify="space-between">
            <img className="w-40 h-10" src={NavLogo} alt="NavLogo" />

            <DesktopView />

            <Burger opened={opened} onClick={toggle} hiddenFrom="md" />
          </Group>
        </div>

        <MobileView opened={opened} close={close} />
      </div>
    </nav>
  );
};

export default Navbar;
