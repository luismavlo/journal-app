import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9m6Dujy0lar5CqWSSpbHmAzPzp5PQQQs",
  authDomain: "react-journal-app-c031d.firebaseapp.com",
  projectId: "react-journal-app-c031d",
  storageBucket: "react-journal-app-c031d.appspot.com",
  messagingSenderId: "437631528996",
  appId: "1:437631528996:web:c914ec378d038f9c04e8b1"
};



const firebaseApp = firebase.initializeApp( firebaseConfig );

const db = firebaseApp.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase }