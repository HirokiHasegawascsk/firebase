// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJSIFyuqKWF06rjGYwgERXxaaz_fxI2_E",
  authDomain: "kaigofika-poc01.firebaseapp.com",
  projectId: "kaigofika-poc01",
  storageBucket: "kaigofika-poc01.appspot.com",
  messagingSenderId: "901508578456",
  appId: "1:901508578456:web:96ead9da431a1cbe73e4ed",
  measurementId: "G-462364426F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);