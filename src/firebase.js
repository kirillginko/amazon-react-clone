import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtAZ5VEme8iQnIwNkNZVUkcq4rWNxz7VA",
  authDomain: "clone-a4a78.firebaseapp.com",
  projectId: "clone-a4a78",
  storageBucket: "clone-a4a78.appspot.com",
  messagingSenderId: "524172469261",
  appId: "1:524172469261:web:9391b4f13f9cf574e6a144",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
