import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBFKfS-HHtjJWR1EOohcveNj7dKXuz5_cg",
    authDomain: "shope-b33b0.firebaseapp.com",
    projectId: "shope-b33b0",
    storageBucket: "shope-b33b0.appspot.com",
    messagingSenderId: "169482465224",
    appId: "1:169482465224:web:76dca591762a6f699edafd",
    measurementId: "G-4Z315Q45YS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;