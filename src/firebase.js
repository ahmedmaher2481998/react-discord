import { initializeApp } from "firebase/app";
import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyCnMRbduX1Dqtfe-h_s_IotvVhiB-9nBlY",
	authDomain: "discord-clone-40bd1.firebaseapp.com",
	projectId: "discord-clone-40bd1",
	storageBucket: "discord-clone-40bd1.appspot.com",
	messagingSenderId: "441189608151",
	appId: "1:441189608151:web:ed6f5d3c4351fc07ff1e92",
};

const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, provider, auth };
