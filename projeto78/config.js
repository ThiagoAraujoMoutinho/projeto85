import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBQNsun2Buez3iYXN8zse3fn3YYuM9YSYw",
  authDomain: "ciclistaeletronico-c74d3.firebaseapp.com",
  projectId: "ciclistaeletronico-c74d3",
  storageBucket: "ciclistaeletronico-c74d3.appspot.com",
  messagingSenderId: "824490347961",
  appId: "1:824490347961:web:5a607754bd0c8f8d173a68"
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
