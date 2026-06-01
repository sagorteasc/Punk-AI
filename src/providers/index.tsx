import MantineUIProvider from "./MantineUIProvider";

const Providers = ({children}: {children: React.ReactNode}) => {
    return <MantineUIProvider>{children}</MantineUIProvider>;
};

export default Providers;