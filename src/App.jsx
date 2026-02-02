import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';

// Page Imports
import Auth from './pages/Auth';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';

// Global Styles
import './App.css';

function App() {
  /**
   * We check for the 'token' cookie to see if the user is logged in.
   * This is what protects your Dashboard and User data.
   */
  const isAuthenticated = document.cookie.includes("token=");

  return (
    <Router>
      <div className="app-main-layout">
        {/* Navbar stays visible on all pages */}
        <Navbar />

        <main className="content-area" style={{ padding: '20px' }}>
          <Routes>
            {/* 1. AUTHENTICATION ROUTE */}
            {/* If already logged in, redirect away from Login to Home */}
            <Route 
              path="/auth" 
              element={!isAuthenticated ? <Auth /> : <Navigate to="/" />} 
            />

            {/* 2. PROTECTED ROUTES (Requires Login) */}
            <Route 
              path="/" 
              element={isAuthenticated ? <Home /> : <Navigate to="/auth" />} 
            />
            
            <Route 
              path="/dashboard" 
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />} 
            />

            <Route 
              path="/users" 
              element={isAuthenticated ? <Users /> : <Navigate to="/auth" />} 
            />

            {/* DYNAMIC ROUTE: Shows specific user based on ID */}
            <Route 
              path="/user/:id" 
              element={isAuthenticated ? <UserDetail /> : <Navigate to="/auth" />} 
            />

            <Route 
              path="/settings" 
              element={isAuthenticated ? <Settings /> : <Navigate to="/auth" />} 
            />

            <Route 
              path="/profile" 
              element={isAuthenticated ? <UserProfile /> : <Navigate to="/auth" />} 
            />

            {/* 3. 404 FALLBACK */}
            {/* Redirect any unknown URL back to Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;