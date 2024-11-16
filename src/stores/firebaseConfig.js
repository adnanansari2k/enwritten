import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCuw7vvyQOIq9iK-0d6XwPKgB896o0k0iI",
  authDomain: "note-be8a4.firebaseapp.com",
  projectId: "note-be8a4",
  storageBucket: "note-be8a4.firebasestorage.app",
  messagingSenderId: "861406985317",
  appId: "1:861406985317:web:361718601f24ae5cbb5a8c",
  measurementId: "G-V5XK4631J4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
