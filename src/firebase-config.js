// Import the functions you need from the SDKs you need
import "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMnWOgZFj5sdpUrfQ80EKE1xZN7wHniqc",
  authDomain: "pain-hours-logger.firebaseapp.com",
  projectId: "pain-hours-logger",
  storageBucket: "pain-hours-logger.appspot.com",
  messagingSenderId: "337595358914",
  appId: "1:337595358914:web:f285873fafd2fb7cf5e55b",
  measurementId: "G-ZDQPM3EZ7N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore();





