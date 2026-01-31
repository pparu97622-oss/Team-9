import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="glass-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-square">9</div>
          <span>Team<span className="light-text">Management</span></span>
        </div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Home
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Directory
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;