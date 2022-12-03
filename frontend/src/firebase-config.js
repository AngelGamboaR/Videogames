import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig= {
  apiKey: "AIzaSyARwgxOakGeTGGNLOEFHn-0TxPzS9GxDvc",
  authDomain: "videgamesapp.firebaseapp.com",
  projectId: "videgamesapp",
  storageBucket: "videgamesapp.appspot.com",
  messagingSenderId: "16090400600",
  appId: "1:16090400600:web:a9f7ec41a47a2161be872d",
  measurementId: "G-FQKL7T20NY"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Firestore = getFirestore(app);
export const db = getFirestore(app);
