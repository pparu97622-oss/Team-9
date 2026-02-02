import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { registerUser, loginEmail, loginGoogle } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      loginEmail(email, password);
    } else {
      registerUser(email, password);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{isLogin ? 'Login' : 'Register'}</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <input 
            type="email" 
            placeholder="Email Address" 
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit" style={styles.mainBtn}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div style={styles.divider}>OR</div>

        <button onClick={loginGoogle} style={styles.googleBtn}>
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="google" 
            style={{ width: '18px', marginRight: '10px' }} 
          />
          Sign in with Google
        </button>

        <p style={styles.toggleText}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            onClick={() => setIsLogin(!isLogin)} 
            style={styles.toggleLink}
          >
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

// Quick inline styles for layout
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' },
  card: { padding: '40px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: '350px', textAlign: 'center', background: '#fff' },
  title: { marginBottom: '20px', color: '#333' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' },
  mainBtn: { padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  divider: { margin: '20px 0', color: '#888', fontSize: '12px' },
  googleBtn: { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', width: '100%', background: '#fff', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer' },
  toggleText: { marginTop: '20px', fontSize: '14px', color: '#666' },
  toggleLink: { color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }
};

export default Auth;