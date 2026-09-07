import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_YOUR_KEY_HERE",
  authDomain: "theskilludaanindia.firebaseapp.com",
  projectId: "theskilludaanindia",
  storageBucket: "theskilludaanindia.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
