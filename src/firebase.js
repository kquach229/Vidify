import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByTCS075KzlMxeA3VIh6k00WyoBI1xG7k",
  authDomain: "vidify-7ed15.firebaseapp.com",
  databaseURL: "https://vidify-7ed15.firebaseio.com",
  projectId: "vidify-7ed15",
  storageBucket: "vidify-7ed15.appspot.com",
  messagingSenderId: "961402237842",
  appId: "1:961402237842:web:5235766ef59a78010c474b",
  measurementId: "G-S58M3SWDV5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
