import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzNNMBehFk6O9pyQc8cGuVgKRadA6RvRA",
  authDomain: "trang-farm.firebaseapp.com",
  projectId: "trang-farm",
  storageBucket: "trang-farm.appspot.com",
  messagingSenderId: "500771134858",
  appId: "1:500771134858:web:0ede3e810d167d89367c73",
  measurementId: "G-WSK0Y6J3L3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
