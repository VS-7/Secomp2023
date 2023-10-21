import { initializeApp } from "firebase/app";
import { get } from "http";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account "
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
//export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);