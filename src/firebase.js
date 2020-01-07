import * as firebase from "firebase";

const config= {
    apiKey: "AIzaSyBj7WrTjS0eG8QNtNfROfVrKu0bAs0Wv3I",
    authDomain: "verserassetleasingservices.firebaseapp.com",
    databaseURL: "https://verserassetleasingservices.firebaseio.com",
    projectId: "verserassetleasingservices",
    storageBucket: "verserassetleasingservices.appspot.com",
    messagingSenderId: "276831868663"
  };

 export const firebaseApp = firebase.initializeApp(config);
