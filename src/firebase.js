import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBf-crtgzI1twywFMoKvlOPGlJuZbu2lZ0",
    authDomain: "wehealth-8bccc.firebaseapp.com",
    projectId: "wehealth-8bccc",
    storageBucket: "wehealth-8bccc.appspot.com",
    messagingSenderId: "180523022544",
    appId: "1:180523022544:web:65e0149c850a3d283c86d5"
};

const app = firebase.initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}
