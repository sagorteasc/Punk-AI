import "@mantine/core/styles.css";
import {
  colorsTuple,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
  virtualColor,
  type CSSVariablesResolver,
} from '@mantine/core'
import type React from 'react'


const cssResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    // New Colors
    // Backgrounds
    '--mantine-color-bg-primary': '#F8F8F6',
    '--mantine-color-bg-secondary': '#F3F3F3',
    '--mantine-color-campaign-bg': '#FFFFFF',
    '--mantine-color-campaign-status': '#FFFFFF',
    
    // Dividers
    '--mantine-color-divider': '#B5B5B5',
    '--mantine-color-underline': '#8D8D8D',
    '--mantine-color-profile-stroke': '#ACACAC',

    // chat block
    '--mantine-color-user-block': '#EFEEEB',
    
    // Texts
    '--mantine-color-text-primary': '#151515',
    '--mantine-color-text-secondary': '#62646A',
    
    // Widgets
    '--mantine-color-widget-primary': '#FFFFFF',
    '--mantine-color-header-icon': '#ECEDEE',
    '--mantine-color-widget-secondary': '#F3F3F3',
    '--mantine-color-widget-stroke': '#DBDBDB',
    '--mantine-color-tab-bg': '#F3F3F3',
    
    // Buttons
    '--mantine-color-button-primary': '#151515',
    '--mantine-color-button-secondary': '#FFFFFF',
    '--mantine-color-button-stroke': '#DBDBDB',
  },
  dark: {
    // New Colors
    // Backgrounds
    '--mantine-color-bg-primary': '#30302E',
    '--mantine-color-bg-secondary': '#3D3D3A',
    '--mantine-color-campaign-bg': '#151517',
    '--mantine-color-campaign-status': '#1E2B22',

    // Dividers
    '--mantine-color-divider': '#50504C',
    '--mantine-color-underline': '#8D8D8D',
    '--mantine-color-profile-stroke': '#2E2F33',

    // Texts
    '--mantine-color-text-primary': '#FAF9F5',
    '--mantine-color-text-secondary': '#E8E6DC',

    // chat block
    '--mantine-color-user-block': '#3D3D3A',

    // Widgets
    '--mantine-color-widget-primary': '#3D3D3A',
    '--mantine-color-widget-secondary': '#30302E',
    '--mantine-color-header-icon': '#7B7B7B',
    '--mantine-color-widget-stroke': 'transparent',
    '--mantine-color-tab-bg': '#151517',

    // Buttons
    '--mantine-color-button-primary': '#272727',
    '--mantine-color-button-secondary': '#454545',
    '--mantine-color-button-stroke': 'transparent',
  },
})

const MantineUIProvider = ({ children }: { children: React.ReactNode }) => {
  const themeOverride = createTheme({
    black: '#151515',
    white: '#EAEAEA',
    colors: {
      primaryLight: colorsTuple('#151515'),
      primaryDark: colorsTuple('#272727'),
      primary: virtualColor({
        name: 'primary',
        dark: 'primaryDark',
        light: 'primaryLight',
      }),
    },
    breakpoints: {
      xs: '30em',
      sm: '40em',
      md: '48em',
      lg: '64em',
      xl: '80em',
      xxl: '90em',
    },
    primaryColor: 'primary',
  })

  const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)


  return <MantineProvider theme={theme} cssVariablesResolver={cssResolver} forceColorScheme="light">{children}</MantineProvider>;
};

export default MantineUIProvider;

