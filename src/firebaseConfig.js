import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCf1iRc3LEriklu9HMcsEV4dIFEGL4ClT0",
    authDomain: "desafio-firebase-auth-a89e5.firebaseapp.com",
    projectId: "desafio-firebase-auth-a89e5",
    storageBucket: "desafio-firebase-auth-a89e5.firebasestorage.app",
    messagingSenderId: "1087409980523",
    appId: "1:1087409980523:web:16b24c5ca45a97507c1d2e"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;