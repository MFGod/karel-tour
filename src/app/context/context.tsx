import { createContext } from 'react';

export interface ThemeInterface {
   themeMode: string;
  changeTheme?: () => void;
}

export const ThemeContext = createContext<ThemeInterface>({
   themeMode: 'light',
  changeTheme: () => {},
});

interface NavigationInterface {
  open: boolean;
  toggleMenu?: () => void;
}
export const NavigationContext = createContext<NavigationInterface>({
  open: false,
  toggleMenu: () => {},
});
