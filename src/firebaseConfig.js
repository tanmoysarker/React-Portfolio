//<script src="https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js"></script>
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAlDFrnwknkKuDAJ2vXHJX-dAjezcGPF0U",
    authDomain: "tanmoysarker-8a3b0.firebaseapp.com",
    databaseURL: "https://tanmoysarker-8a3b0.firebaseio.com",
    projectId: "tanmoysarker-8a3b0",
    storageBucket: "tanmoysarker-8a3b0.appspot.com",
    messagingSenderId: "670117407424",
    appId: "1:670117407424:web:edbb20819286c1da7f1b25",
    measurementId: "G-BPGPENQM64"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const database = firebase.database().ref('/notes');