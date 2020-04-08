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
  // The object we received upon user auth
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    //Doc refrenece object
    const userRef = firestore.doc(`users/${userAuth.uid}`);
   //snapshot object 
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      // date when the user was created
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  // we might use doc refrence
    return userRef;
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