// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import type { DefaultTheme } from 'styled-components'; // ✅ type-only import
import themes from '../themes';

type ThemeName = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themeObject: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme1',
  setTheme: () => {},
  themeObject: themes.theme1 as DefaultTheme, // ensure type compatibility
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    const stored = localStorage.getItem('theme') as ThemeName;
    return stored || 'theme1'; // ✅ default theme
  });

  const setTheme = (theme: ThemeName) => {
    setThemeState(theme);
    localStorage.setItem('theme', theme);
  };

  const themeObject = themes[theme] as DefaultTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeObject }}>
      <StyledThemeProvider theme={themeObject}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
