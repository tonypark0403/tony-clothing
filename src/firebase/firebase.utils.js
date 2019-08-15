import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvTH9MG9uV2wDX47cqxC4vltv7EK9UIm0",
  authDomain: "tony-clothing-shop.firebaseapp.com",
  databaseURL: "https://tony-clothing-shop.firebaseio.com",
  projectId: "tony-clothing-shop",
  storageBucket: "",
  messagingSenderId: "308413904573",
  appId: "1:308413904573:web:7f5d908d96f417ad"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // console.log(firestore.doc("users/GSGrMqyop93nhKs6IiTk"));
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // if user not exise, registerd and returned
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider); //pop up all of auth styles. Here is google.

export default firebase;
