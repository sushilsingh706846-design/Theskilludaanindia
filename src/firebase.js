import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBefmCHRGf2is3Fhhh6oy3AoM2yXlY9dxc",
  authDomain: "the-skill-udaan.firebaseapp.com",
  projectId: "the-skill-udaan",
  storageBucket: "the-skill-udaan.firebasestorage.app",
  messagingSenderId: "1065500772369",
  appId: "1:1065500772369:web:81bdcfb4c815da7f79c9b0",
  measurementId: "G-MVNBRSTST6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
