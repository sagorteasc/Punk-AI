import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavLogo from "/logo.svg";
import DesktopView from "./components/DesktopView";
import MobileView from "./components/MobileView";

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <nav className="max-w-5xl mx-auto">
      <Container className="py-4">
        <Group justify="space-between">
          <img src={NavLogo} alt="NavLogo" />

          <DesktopView />

          <Burger opened={opened} onClick={toggle} hiddenFrom="md" />
        </Group>
      </Container>

      <MobileView opened={opened} close={close} />
    </nav>
  );
};

export default Navbar;
