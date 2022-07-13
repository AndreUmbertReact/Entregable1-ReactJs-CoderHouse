

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCm15m8iZyR9E8nusK4d0QfgiuuxP1NRvI",
    authDomain: "namour-handbags.firebaseapp.com",
    projectId: "namour-handbags",
    storageBucket: "namour-handbags.appspot.com",
    messagingSenderId: "560663455473",
    appId: "1:560663455473:web:11f0eac978a2fe99586b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);