import { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
// This path matches your screenshot: src/hooks/useAuth.js -> src/pages/firebase.js
import { auth, googleProvider } from "../pages/firebase";

export const useAuth = () => {
  
  const setAuthCookies = (user) => {
    // 2-hour expiry (2 hours * 60 mins * 60 secs * 1000 ms)
    const expiry = new Date(new Date().getTime() + 2 * 60 * 60 * 1000).toUTCString();
    
    document.cookie = `uid=${user.uid}; expires=${expiry}; path=/`;
    document.cookie = `token=${user.accessToken}; expires=${expiry}; path=/`;
    document.cookie = `name=${encodeURIComponent(user.displayName || 'User')}; expires=${expiry}; path=/`;
    document.cookie = `photo=${user.photoURL || ''}; expires=${expiry}; path=/`;
  };

  const registerUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful! Try logging in now.");
    } catch (err) { 
      alert("Registration failed: " + err.message); 
    }
  };

  const loginEmail = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setAuthCookies(res.user);
      window.location.href = "/";
    } catch (err) { 
      alert("Login failed: " + err.message); 
    }
  };

  const loginGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      setAuthCookies(res.user);
      window.location.href = "/";
    } catch (err) { 
      alert("Google Login failed: " + err.message); 
    }
  };

  const logout = () => {
    signOut(auth);
    const past = "Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = `token=; expires=${past}; path=/`;
    document.cookie = `uid=; expires=${past}; path=/`;
    document.cookie = `name=; expires=${past}; path=/`;
    document.cookie = `photo=; expires=${past}; path=/`;
    window.location.reload();
  };

  return { registerUser, loginEmail, loginGoogle, logout };
};