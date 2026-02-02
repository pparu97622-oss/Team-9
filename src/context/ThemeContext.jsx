import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  // --- Standard Themes ---
  light: { bg: '#ffffff', text: '#000000', primary: '#007bff' },
  dark: { bg: '#1a1a1a', text: '#ffffff', primary: '#646cff' },
  
  // --- Nature & Environment ---
  ocean: { bg: '#0077be', text: '#ffffff', primary: '#00a3cc' },
  forest: { bg: '#1b3022', text: '#e0e0e0', primary: '#4e9a06' },
  sunset: { bg: '#2d142c', text: '#feb47b', primary: '#ff8c00' },
  midnight: { bg: '#0b0e14', text: '#d1d1d1', primary: '#5c5cff' },
  
  // --- Artistic & Pastel ---
  lavender: { bg: '#f3e5f5', text: '#4a148c', primary: '#9c27b0' },
  espresso: { bg: '#211a1d', text: '#d7ccc8', primary: '#a67c52' },
  slate: { bg: '#2c3e50', text: '#ecf0f1', primary: '#1abc9c' },
  rose: { bg: '#2d0b13', text: '#ffe4e1', primary: '#e91e63' },

  // --- NEW: 10 Additional Themes ---
  cyberpunk: { bg: '#000505', text: '#00ff41', primary: '#ff00ff' },
  nordic: { bg: '#eceff1', text: '#263238', primary: '#455a64' },
  dracula: { bg: '#282a36', text: '#f8f8f2', primary: '#bd93f9' },
  honey: { bg: '#fff9c4', text: '#5d4037', primary: '#fbc02d' },
  matrix: { bg: '#000000', text: '#00ff00', primary: '#003300' },
  cobalt: { bg: '#193549', text: '#ffffff', primary: '#ffc600' },
  crimson: { bg: '#3a0101', text: '#ffffff', primary: '#ff4d4d' },
  mint: { bg: '#e8f5e9', text: '#1b5e20', primary: '#4caf50' },
  space: { bg: '#02010a', text: '#ffffff', primary: '#5b39c6' },
  gold: { bg: '#1c1c1c', text: '#d4af37', primary: '#ffd700' }
};

export const ThemeProvider = ({ children }) => {
  // Initialize from LocalStorage
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('app_theme') || 'dark'
  );

  // Persistence Hook
  useEffect(() => {
    localStorage.setItem('app_theme', currentTheme);
  }, [currentTheme]);

  const activeTheme = themes[currentTheme] || themes.dark;

  return (
    <ThemeContext.Provider value={{ 
      theme: activeTheme, 
      setCurrentTheme, 
      currentTheme 
    }}>
      <div style={{ 
        backgroundColor: activeTheme.bg, 
        color: activeTheme.text, 
        minHeight: '100vh',
        transition: 'background-color 0.4s ease, color 0.4s ease' 
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);