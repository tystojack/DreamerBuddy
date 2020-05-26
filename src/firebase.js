import firebase from "firebase/app"

import "firebase/firestore"

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDL6nDhNJcjaeyx4hWlQ4fBGY0eYJlPdig",
    authDomain: "projecta-b8f1b.firebaseapp.com",
    databaseURL: "https://projecta-b8f1b.firebaseio.com",
    projectId: "projecta-b8f1b",
    storageBucket: "projecta-b8f1b.appspot.com",
    messagingSenderId: "605833894932",
    appId: "1:605833894932:web:14c0b6825009101c05db01",
    measurementId: "G-X5BNDL6T3C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase