// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIyuorY0eAC3r5MR04XX0WV2PTozGgHKU",
  authDomain: "sih-prototype-techteds.firebaseapp.com",
  projectId: "sih-prototype-techteds",
  storageBucket: "sih-prototype-techteds.appspot.com",
  messagingSenderId: "868595842020",
  appId: "1:868595842020:web:c972c39a74c4c3a080e5f1",
  measurementId: "G-1S4EVPRJCL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);
