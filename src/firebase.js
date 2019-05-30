import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA8sJnl6AzhRYPEUk2sd6I4SUXnONoONW0",
    authDomain: "mancity-95950.firebaseapp.com",
    databaseURL: "https://mancity-95950.firebaseio.com",
    projectId: "mancity-95950",
    storageBucket: "mancity-95950.appspot.com",
    messagingSenderId: "976885035345",
    appId: "1:976885035345:web:6baa3ce411a1e1ad"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');

  export {
    firebase,
    firebaseMatches
  };