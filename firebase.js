// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXn6BHL18R3jc3BvlP3VJiGlDpeoKZFt0",
    authDomain: "instagra-c.firebaseapp.com",
    projectId: "instagra-c",
    storageBucket: "instagra-c.appspot.com",
    messagingSenderId: "11473918254",
    appId: "1:11473918254:web:06c707b4bc7a6d1b5d02bf",
    measurementId: "G-2TDB1N5ZCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);