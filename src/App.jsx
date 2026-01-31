import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;