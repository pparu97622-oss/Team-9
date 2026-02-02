import React from 'react';
import { useTheme, themes } from '../context/ThemeContext';

const Settings = () => {
  const { setCurrentTheme, currentTheme } = useTheme();

  return (
    <div style={{ padding: '40px' }}>
      <h1>Visual Customization</h1>
      <p>Select a theme to personalize your workspace.</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
        gap: '15px',
        marginTop: '30px'
      }}>
        {Object.keys(themes).map((key) => (
          <button
            key={key}
            onClick={() => setCurrentTheme(key)}
            style={{
              padding: '20px',
              cursor: 'pointer',
              backgroundColor: themes[key].bg,
              color: themes[key].text,
              border: currentTheme === key ? `3px solid ${themes[key].primary}` : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              boxShadow: currentTheme === key ? '0 0 10px rgba(0,0,0,0.5)' : 'none'
            }}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Settings;