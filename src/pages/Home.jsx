import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container page-fade-in">
      {/* Professional Hero Section */}
      <section className="hero-banner">
        <div className="settings-wrapper" style={{ padding: '60px 20px' }}>
          <span className="badge-primary">Team 9 Management System</span>
          <h1 className="hero-title">
            Streamline Your <span className="text-gradient">Team Workflow</span>
          </h1>
          <p className="hero-subtitle">
            A high-performance directory solution designed for modern organizations. 
            Manage users, monitor status, and customize your workspace environment.
          </p>
          <div className="hero-actions">
            <Link to="/users" className="main-btn">Open Directory</Link>
            <Link to="/settings" className="secondary-btn">System Themes</Link>
          </div>
        </div>
      </section>

      {/* Enterprise Feature Grid */}
      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-icon">📊</div>
          <h3>Real-time Sync</h3>
          <p>Integrated with Reqres API for seamless data management and live updates.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎨</div>
          <h3>Custom Themes</h3>
          <p>Switch between 8 professional color palettes that sync across the entire app.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🛡️</div>
          <h3>Local Persistence</h3>
          <p>Your team members and preferences are saved locally using advanced browser storage.</p>
        </div>
      </div>

      <footer className="home-footer">
        <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>
          <p>© 2026 Team 9 Project. All rights reserved.</p>
          <p>Version 1.0.4 | Secure Enterprise Solution</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;