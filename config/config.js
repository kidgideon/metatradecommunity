// firebase.js
import { initializeApp } from "firebase/app";

// Optional: import only what you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAXUAco8WTLvfXktRl03byX65Lv47m30Bg",
  authDomain: "metatradecommunity.firebaseapp.com",
  projectId: "metatradecommunity",
  storageBucket: "metatradecommunity.firebasestorage.app",
  messagingSenderId: "994779182090",
  appId: "1:994779182090:web:c4d38711fcbc54cc17dbf3",
  measurementId: "G-N0BRNG8DJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

