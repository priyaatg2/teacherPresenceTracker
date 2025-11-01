// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBbJTbvznNiSEqqWIIW9ZZ3Yef8avFt6F4",
  authDomain: "teacher-presence-tracker.firebaseapp.com",
  databaseURL: "https://teacher-presence-tracker-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "teacher-presence-tracker",
  storageBucket: "teacher-presence-tracker.appspot.com",
  messagingSenderId: "600572644335",
  appId: "1:600572644335:web:3df019e4f0498d9d61441a"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);