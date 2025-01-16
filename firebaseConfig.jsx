// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCME-9GIf5mXxFJ8xRJJlvcl4vT0mTxy3I",
  authDomain: "marketplace-app-1222d.firebaseapp.com",
  projectId: "marketplace-app-1222d",
  storageBucket: "marketplace-app-1222d.firebasestorage.app",
  messagingSenderId: "390180335664",
  appId: "1:390180335664:web:eb8eb63f475fb100b37df5",
  measurementId: "G-43CVZ7L9W1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);