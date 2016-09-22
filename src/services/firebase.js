import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAIAhQahIzxfnDq1PfzvHNmgB-qPKf5bjQ",
    authDomain: "moviehack-4d204.firebaseapp.com",
    databaseURL: "https://moviehack-4d204.firebaseio.com",
    storageBucket: "moviehack-4d204.appspot.com",
    messagingSenderId: "393063610573"
};
const app = firebase.initializeApp(config, 'MovieHack');
const db = app.database().ref('users');
export default db;