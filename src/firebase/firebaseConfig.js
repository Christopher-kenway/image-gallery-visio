// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBzAh5zP5bhgIuJmoxL3x6hZ_ILkB3TjLU",
  authDomain: "image-gallery-cb37d.firebaseapp.com",
  projectId: "image-gallery-cb37d",
  storageBucket: "image-gallery-cb37d.appspot.com",
  messagingSenderId: "760729167392",
  appId: "1:760729167392:web:f0ad826cfcf50671897e45",
  measurementId: "G-C29TBNRVEL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, storage, db   };
export default firebaseApp;
