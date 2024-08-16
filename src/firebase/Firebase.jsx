// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNQ78P_ZTDzusLY06m7eRTie3cCCLJdbM",
  authDomain: "wcu-p-52e24.firebaseapp.com",
  projectId: "wcu-p-52e24",
  storageBucket: "wcu-p-52e24.appspot.com",
  messagingSenderId: "925891639645",
  appId: "1:925891639645:web:af093176dab425666c10b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export (app, auth);