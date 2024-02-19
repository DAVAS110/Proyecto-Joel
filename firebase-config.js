import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCMDfjc5kBnFf53yG_-9GP5jDbrM8HizZI",
  authDomain: "proyecyo-joel.firebaseapp.com",
  databaseURL: "https://proyecyo-joel-default-rtdb.firebaseio.com",
  projectId: "proyecyo-joel",
  storageBucket: "proyecyo-joel.appspot.com",
  messagingSenderId: "225560915328",
  appId: "1:225560915328:web:40ddb677c131cb6ffb6565",
  measurementId: "G-SC3M7P0XVZ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
