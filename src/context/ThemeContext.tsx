import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import themes from '../themes';

type ThemeName = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themeObject: typeof themes.theme1;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme1',
  setTheme: () => {},
  themeObject: themes.theme1,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    const stored = localStorage.getItem('theme') as ThemeName;
    return stored || 'theme1'; // ✅ Default theme
  });

  const setTheme = (theme: ThemeName) => {
    setThemeState(theme);
    localStorage.setItem('theme', theme);
  };

  const themeObject = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeObject }}>
      <StyledThemeProvider theme={themeObject}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
