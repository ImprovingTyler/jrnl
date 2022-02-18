// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSi0QLsrrr-hq3DWKSaaUDq-rRRGh1NOY",
  authDomain: "jrnl-7e606.firebaseapp.com",
  projectId: "jrnl-7e606",
  storageBucket: "jrnl-7e606.appspot.com",
  messagingSenderId: "56356826329",
  appId: "1:56356826329:web:47b302df53882b0999e2c8",
  measurementId: "G-MDVLYT5W3H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
