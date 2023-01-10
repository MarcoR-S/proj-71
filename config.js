import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDMGLPZ1G7y7jpvK916QTvYRf5MGf_4nek",
  authDomain: "ciclista-ddfab.firebaseapp.com",
  databaseURL: "https://ciclista-ddfab-default-rtdb.firebaseio.com",
  projectId: "ciclista-ddfab",
  storageBucket: "ciclista-ddfab.appspot.com",
  messagingSenderId: "262823151641",
  appId: "1:262823151641:web:724f8c2c97bc6102e18288"
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
