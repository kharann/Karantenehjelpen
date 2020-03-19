import firebase from "firebase/app";

import "firebase/auth";

console.log(process.env.VUE_APP_FIREBASE_CONFIG);
const config = JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG);
console.log(config);
firebase.initializeApp(config);


// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const { currentUser } = auth;

db.settings({});

// firebase collections
const usersCollection = db.collection("users");
const additionalUserInfoCollection = db.collection("userInfo");

export default {
  db,
  auth,
  currentUser,
  usersCollection,
  additionalUserInfoCollection
};
