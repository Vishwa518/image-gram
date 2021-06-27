import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrbLgNxKN9RGZXk8fJRHeb_ch8xxUPB0c",
  authDomain: "image-gram-ce881.firebaseapp.com",
  databaseURL: "https://image-gram-ce881-default-rtdb.firebaseio.com",
  projectId: "image-gram-ce881",
  storageBucket: "image-gram-ce881.appspot.com",
  messagingSenderId: "1007494544060",
  appId: "1:1007494544060:web:84eea4fcb8464b4c95aeb9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
