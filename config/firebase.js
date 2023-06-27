// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
// import { getFIrestore } 'firebase/firestore';

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc, query, orderBy } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC__PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export { db, sortData };

export const db = getFirestore(app);
//const analytics = getAnalytics(app);

//buat const sortData
const bukuCollectionRef = collection(db, "buku");
const sortData = query(bukuCollectionRef, orderBy("tahun_terbit", "desc"));

export {sortData};
