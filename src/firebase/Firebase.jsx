// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKvVVYyYIf4WLuGo7Dbdmd-xnugABuix8",
  authDomain: "wealth-creation-university.firebaseapp.com",
  projectId: "wealth-creation-university",
  storageBucket: "wealth-creation-university.appspot.com",
  messagingSenderId: "458389044851",
  appId: "1:458389044851:web:549e63507cfe5199577406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;