// userid=TyYilqFWUlYcbIVqZlRggKrWsQ92
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_kfGTVNVvkw5uuT_Wzl37FgMevk5mzbE",
  authDomain: "house-market-f0164.firebaseapp.com",
  projectId: "house-market-f0164",
  storageBucket: "house-market-f0164.appspot.com",
  messagingSenderId: "180401350705",
  appId: "1:180401350705:web:1a2b76024b8e528c718d10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()