// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";//authentication - email/password/google/facebook
import { getFirestore } from "firebase/firestore";//storing the database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDARi7FNDFTysX2IyukfJ2nOqYg3u9LkVo",
  authDomain: "ecomm-682b4.firebaseapp.com",
  projectId: "ecomm-682b4",
  storageBucket: "ecomm-682b4.appspot.com",
  messagingSenderId: "109351629249",
  appId: "1:109351629249:web:5c70e51de522beda0f3f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
