import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnGq7u9b8yWqXvZt8a7b6c5d4e3f2g1h0",
  authDomain: "theskilludaanindia.firebaseapp.com",
  projectId: "theskilludaanindia",
  storageBucket: "theskilludaanindia.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef1234567890"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
