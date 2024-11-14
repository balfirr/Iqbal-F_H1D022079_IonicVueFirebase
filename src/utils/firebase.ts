// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDWhJ10KQxZMdoobEJ-amljLT-q6H9QcAo",
    authDomain: "vue-firebase-7fc80.firebaseapp.com",
    projectId: "vue-firebase-7fc80",
    storageBucket: "vue-firebase-7fc80.firebasestorage.app",
    messagingSenderId: "1043060252738",
    appId: "1:1043060252738:web:30969b2136580c95848ddb",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };