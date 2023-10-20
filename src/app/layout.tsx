'use client';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  LanguageContext,
  NavigationContext,
  ThemeContext,
} from './context/context';
import { GlobalStyle } from './styles/global-styles';

import { darkTheme, lightTheme } from './styles/theme';
import { Header } from './components/header';
import { Languages } from './translation/translation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialTheme = window.localStorage.getItem('themeName') || 'light';
  const [themeMode, setThemeMode] = useState(initialTheme);
  const themeStyle = themeMode === 'light' ? lightTheme : darkTheme;
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Languages>(Languages.RU);

  const toggleMenu = () => {
    open === false ? setOpen(true) : setOpen(false);
  };

  const changeTheme = () => {
    const newThemeName = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeName);
    localStorage.setItem('themeName', newThemeName);
  };

  const changeLanguage = (lang: Languages) => {
    setLanguage(lang);
  };

  return (
    <html>
      <body>
        <LanguageContext.Provider value={{ language, changeLanguage }}>
          <ThemeContext.Provider value={{ themeMode, changeTheme }}>
            <ThemeProvider theme={themeStyle}>
              <GlobalStyle />
              <NavigationContext.Provider value={{ open, toggleMenu }}>
                <Header />
                {children}
              </NavigationContext.Provider>
            </ThemeProvider>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
