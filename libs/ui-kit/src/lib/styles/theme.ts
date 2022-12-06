import { buildThemeHelpers } from './build-theme-helpers';

export const theme = {
  colors: {
    primaryText: '#000000E5',
    secondaryText: '#00000066',
  },

  breakpoints: {
    xs: '360px',
    sm: '640px',
    md: '990px',
    lg: '1200px',
    xl: '1800px',
  },
} as const;

export type TTheme = typeof theme;

const { colors, breakpoints } = buildThemeHelpers(theme);

export { colors, breakpoints };