import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// We need auth and store thus importing them
// Thusn 1st firebase import help us in 2nd and third import


const config = {
    apiKey: "AIzaSyAg_n-hjqXw2Iqb9DT0zh2xkfSesNUMOmk",
    authDomain: "shop-db-a7f46.firebaseapp.com",
    databaseURL: "https://shop-db-a7f46.firebaseio.com",
    projectId: "shop-db-a7f46",
    storageBucket: "shop-db-a7f46.appspot.com",
    messagingSenderId: "556635492512",
    appId: "1:556635492512:web:9bddcbf2d87a650d1ff9c5",
    measurementId: "G-QFD48LCDV0"
  };



  firebase.initializeApp(config);

// as we need these methods called on firebase thus exporting them
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

// alwasys promots or popup of googel accounts
//  signin with selected account with popup
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;