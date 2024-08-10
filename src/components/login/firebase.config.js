// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Ybb1bdPbaQ_yxbLgCi6o1hBAcKwDbGA",
  authDomain: "test-376f1.firebaseapp.com",
  projectId: "test-376f1",
  storageBucket: "test-376f1.appspot.com",
  messagingSenderId: "1032317629635",
  appId: "1:1032317629635:web:e4f1ef93cdaa31c0e05e76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
