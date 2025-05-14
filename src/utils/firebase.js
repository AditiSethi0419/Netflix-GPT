// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4c2tRqmmCuIeHyVYJNSlydrjAt-LoXTo",
  authDomain: "netflix-gpt-d53d4.firebaseapp.com",
  projectId: "netflix-gpt-d53d4",
  storageBucket: "netflix-gpt-d53d4.firebasestorage.app",
  messagingSenderId: "336016060393",
  appId: "1:336016060393:web:255f9758597d2fa2cf6578",
  measurementId: "G-XGCKS2CWBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);