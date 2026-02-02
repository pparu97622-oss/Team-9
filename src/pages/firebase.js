import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD89uR0hVPMB68fTBZhkTvGxRvq3A44CY8",
  authDomain: "user-management-9ca50.firebaseapp.com",
  projectId: "user-management-9ca50",
  storageBucket: "user-management-9ca50.firebasestorage.app",
  messagingSenderId: "746728399530",
  appId: "1:746728399530:web:258eab9213ffd79e54e6d3",
  measurementId: "G-LMJDP28L4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export these so useAuth.js can use them
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();