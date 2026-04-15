import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvyKJDfOdft24e0cGh0lF0JNrIT4PssgM",
  authDomain: "helper365-a1a18.firebaseapp.com",
  projectId: "helper365-a1a18",
  storageBucket: "helper365-a1a18.firebasestorage.app",
  messagingSenderId: "870788153892",
  appId: "1:870788153892:web:e8d2b6f52c65a14cb94eb1",
  measurementId: "G-VVPND2XYQD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
