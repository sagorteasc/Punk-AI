import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const MantineUIProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
};

export default MantineUIProvider;
