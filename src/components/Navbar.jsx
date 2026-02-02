import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../context/ThemeContext"; // Import Theme Hook

const Navbar = () => {
  const { logout } = useAuth();
  const { theme, setCurrentTheme, currentTheme } = useTheme(); // Access Theme State
  
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  };

  const token = getCookie("token");
  const photo = getCookie("photo");
  const name = getCookie("name");

  // Toggle between Dark and Light quickly
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav style={{ ...styles.nav, background: theme.bg, borderBottom: `1px solid ${theme.primary}33` }}>
      <div style={styles.leftSection}>
        <Link to="/" style={{ ...styles.logo, color: theme.primary }}>TEAM_9</Link>
        
        {token && (
          <div style={styles.links}>
            <Link to="/" style={{ ...styles.navLink, color: theme.text }}>Home</Link>
            <Link to="/dashboard" style={{ ...styles.navLink, color: theme.text }}>Dashboard</Link>
            <Link to="/users" style={{ ...styles.navLink, color: theme.text }}>Users</Link>
          </div>
        )}
      </div>

      <div style={styles.rightSection}>
        {/* THEME TOGGLE BUTTON */}
        <button onClick={toggleTheme} style={styles.themeBtn}>
          {currentTheme === 'dark' ? '☀️' : '🌙'}
        </button>

        {token ? (
          <div style={styles.profileArea}>
            <img 
              src={photo && photo !== "null" ? photo : `https://ui-avatars.com/api/?name=${name}`} 
              alt="Profile" 
              style={{ ...styles.avatar, borderColor: theme.primary }} 
            />
            <button onClick={logout} style={styles.logoutBtn}>Log Out</button>
          </div>
        ) : (
          <Link to="/auth" style={{ ...styles.loginLink, color: theme.text, borderColor: theme.text }}>Login</Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 40px', transition: '0.3s' },
  leftSection: { display: 'flex', alignItems: 'center', gap: '40px' },
  logo: { fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none' },
  links: { display: 'flex', gap: '25px' },
  navLink: { textDecoration: 'none', fontSize: '14px', fontWeight: '500', opacity: 0.8 },
  rightSection: { display: 'flex', alignItems: 'center', gap: '20px' },
  themeBtn: { background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', padding: '5px' },
  profileArea: { display: 'flex', alignItems: 'center', gap: '15px' },
  avatar: { width: '35px', height: '35px', borderRadius: '50%', border: '2px solid' },
  logoutBtn: { background: '#ff4b4b', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' },
  loginLink: { textDecoration: 'none', border: '1px solid', padding: '5px 15px', borderRadius: '4px' }
};

export default Navbar;