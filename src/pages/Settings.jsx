import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeOptions = [
    { id: 'system', label: '💻 System' },
    { id: 'light', label: '☀️ Light' },
    { id: 'dark', label: '🌙 Dark' },
    { id: 'midnight', label: '🌑 Midnight' },
    { id: 'ocean', label: '🌊 Ocean' },
    { id: 'forest', label: '🌲 Forest' },
    { id: 'sunset', label: '🌅 Sunset' },
    { id: 'lavender', label: '🪻 Lavender' },
  ];

  return (
    <div className="container page-fade-in">
      <div className="settings-wrapper">
        <div className="settings-text">
          <h1 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'left' }}>Interface <span className="text-gradient">Settings</span></h1>
          <p className="hero-subtitle" style={{ textAlign: 'left' }}>Customize the workspace atmosphere to suit your style.</p>
        </div>
        
        <div className="theme-button-container">
          {themeOptions.map((opt) => (
            <button
              key={opt.id}
              className={`theme-btn-clean ${theme === opt.id ? 'active' : ''}`}
              onClick={() => setTheme(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;