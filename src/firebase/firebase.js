/** @format */

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAx1UU4xrwrah76TgMnWgQMeB7_nzffGb4",
	authDomain: "netflix-clone-a641d.firebaseapp.com",
	projectId: "netflix-clone-a641d",
	storageBucket: "netflix-clone-a641d.appspot.com",
	messagingSenderId: "760385415316",
	appId: "1:760385415316:web:c5b9f9e2ef7d56ecddac81",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
