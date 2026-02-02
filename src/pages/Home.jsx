import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Helper to read cookies
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  };

  const userName = getCookie("name") || "Guest";

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.welcome}>Welcome Back, {userName}!</h1>
        <p style={styles.subtitle}>Manage your users, settings, and profile all in one professional dashboard.</p>
      </header>

      {/* Action Cards */}
      <div style={styles.grid}>
        <Link to="/users" style={styles.card}>
          <div style={styles.icon}>👥</div>
          <h3>User Management</h3>
          <p>View and manage all registered users in the system.</p>
        </Link>

        <Link to="/settings" style={styles.card}>
          <div style={styles.icon}>🎨</div>
          <h3>Theme Settings</h3>
          <p>Personalize your experience with 10 unique themes.</p>
        </Link>

        <Link to="/profile" style={styles.card}>
          <div style={styles.icon}>👤</div>
          <h3>Your Profile</h3>
          <p>Check your Google account details and access tokens.</p>
        </Link>
      </div>

      {/* Status Bar */}
      <footer style={styles.statusFooter}>
        <div style={styles.statusItem}>
          <span style={styles.dot}></span> System Online
        </div>
        <div style={styles.statusItem}>
          Session expires in: <strong>2 Hours</strong>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: { padding: '40px', maxWidth: '1200px', margin: '0 auto' },
  hero: { textAlign: 'center', marginBottom: '50px' },
  welcome: { fontSize: '2.5rem', marginBottom: '10px' },
  subtitle: { color: '#888', fontSize: '1.1rem' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '25px',
    marginBottom: '50px' 
  },
  card: {
    padding: '30px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    textDecoration: 'none',
    color: 'inherit',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.2s, border-color 0.2s',
    textAlign: 'center'
  },
  icon: { fontSize: '3rem', marginBottom: '15px' },
  statusFooter: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '20px', 
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '0.9rem',
    color: '#666'
  },
  statusItem: { display: 'flex', alignItems: 'center', gap: '8px' },
  dot: { height: '10px', width: '10px', backgroundColor: '#4caf50', borderRadius: '50%' }
};

export default Home;