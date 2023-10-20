'use client';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { NavigationContext, ThemeContext } from './context/context';
import { GlobalStyle } from './styles/global-styles';

import { darkTheme, lightTheme } from './styles/theme';
import { Header } from './components/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialTheme = window.localStorage.getItem('themeName') || 'light';
  const [themeMode, setThemeMode] = useState(initialTheme);
  const themeStyle = themeMode === 'light' ? lightTheme : darkTheme;
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    open === false ? setOpen(true) : setOpen(false);
  };

  const changeTheme = () => {
    const newThemeName = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeName);
    localStorage.setItem('themeName', newThemeName);
  };

  return (
    <html>
      <body>
        <ThemeContext.Provider value={{ themeMode, changeTheme }}>
          <ThemeProvider theme={themeStyle}>
            <GlobalStyle />
            <NavigationContext.Provider value={{ open, toggleMenu }}>
              <Header />
              {children}
            </NavigationContext.Provider>
          </ThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
