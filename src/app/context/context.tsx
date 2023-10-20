import { createContext } from 'react';
import { Languages } from '../translation/translation';

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

interface LanguageInterface {
   language: string;
   changeLanguage: (lang: Languages) => void;
 }
export const LanguageContext = createContext<LanguageInterface>({
   language: Languages.RU,
   changeLanguage: ()=> {},
});
