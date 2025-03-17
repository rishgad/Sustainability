// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC-DGPrtq_a9Y-xEEqRdXCNTwnu1KWtl0",
  authDomain: "homesustainability-7dc38.firebaseapp.com",
  projectId: "homesustainability-7dc38",
  storageBucket: "homesustainability-7dc38.appspot.com",
  messagingSenderId: "159947422315",
  appId: "1:159947422315:web:6fc5c5d6f56bc55e668f2e",
  measurementId: "G-KPDXVM12LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
