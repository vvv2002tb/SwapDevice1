import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV9fJayglk8yZ_pk4eHdEjMTtmc7C_JgA",
  authDomain: "account-3e270.firebaseapp.com",
  projectId: "account-3e270",
  storageBucket: "account-3e270.appspot.com",
  messagingSenderId: "653825449838",
  appId: "1:653825449838:web:86d337fbe50c176214eb7f",
  measurementId: "G-G6Q9K7LREZ"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp};