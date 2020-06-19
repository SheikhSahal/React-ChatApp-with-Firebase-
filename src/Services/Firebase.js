import React from 'react'
import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAMPbFQWZmQW_8FH_xNmZ40HYFbRt86tXM",
    authDomain: "stchatapp-31869.firebaseapp.com",
    databaseURL: "https://stchatapp-31869.firebaseio.com",
    projectId: "stchatapp-31869",
    storageBucket: "stchatapp-31869.appspot.com",
    messagingSenderId: "878428645607",
    appId: "1:878428645607:web:c907bf322e918cb8a01a42",
    measurementId: "G-2QDXVTBLLF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;