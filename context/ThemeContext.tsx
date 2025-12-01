'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Themes, DEFAULT_THEME } from '@/const/color';

type ThemeName = keyof typeof Themes;

interface ThemeContextProps {
  themeName: ThemeName;
  theme: (typeof Themes)[ThemeName];
  toggleTheme: () => void;
  setTheme: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME);

  useEffect(() => {
    const saved = localStorage.getItem('theme-name') as ThemeName | null;
    if (saved && Themes[saved]) {
      setThemeName(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-name', themeName);
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'primary' ? 'dark' : 'primary'));
  };

  const setTheme = (name: ThemeName) => {
    if (Themes[name]) setThemeName(name);
  };

  return (
    <ThemeContext.Provider
      value={{ themeName, theme: Themes[themeName], toggleTheme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider />');
  return ctx;
}
