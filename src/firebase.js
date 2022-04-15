import  { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCWraY3_goR-zUwh8PAlRf1mcMVSF73Sps",
    authDomain: "blog-1bb84.firebaseapp.com",
    projectId: "blog-1bb84",
    storageBucket: "blog-1bb84.appspot.com",
    messagingSenderId: "1001767653755",
    appId: "1:1001767653755:web:5b0b18ad52f0e81c222dde"
  };

//   init firebase app 
const app = initializeApp(firebaseConfig);

// initialise firestore 
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }

