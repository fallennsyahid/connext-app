// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpWyZRmltHT3axnt42dORhkVwkFuyGjFI",
  authDomain: "connext-42832.firebaseapp.com",
  projectId: "connext-42832",
  storageBucket: "connext-42832.firebasestorage.app",
  messagingSenderId: "35881046371",
  appId: "1:35881046371:web:f1ceaa1a705f2b8c168356",
  measurementId: "G-9YGY3YF6EB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
