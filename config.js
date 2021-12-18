import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAB718CK7dEt7pnghCf5Bze4NBkj9CiiQI",
    authDomain: "cargame-cc01c.firebaseapp.com",
    databaseURL: "https://cargame-cc01c-default-rtdb.firebaseio.com",
    projectId: "cargame-cc01c",
    storageBucket: "cargame-cc01c.appspot.com",
    messagingSenderId: "282696628772",
    appId: "1:282696628772:web:44117cc177cc749d5ef6b1"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


