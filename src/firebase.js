import firebase from 'firebase/app';
import "firebase/auth";

export const auth =firebase.initializeApp({
    apiKey: "AIzaSyCss4WrOYHXYFjHk7TTIX8VKW4rfGd6wvQ",
    authDomain: "chatapp-ca1ed.firebaseapp.com",
    projectId: "chatapp-ca1ed",
    storageBucket: "chatapp-ca1ed.appspot.com",
    messagingSenderId: "886492041099",
    appId: "1:886492041099:web:bc480472cfe15087e5a98e"
  }).auth();