import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-r2ddFlASez0YlnclE_L6Nqni4SSlT2c",
    authDomain: "galacticode-c01e5.firebaseapp.com",
    databaseURL: "https://galacticode-c01e5.firebaseio.com",
    projectId: "galacticode-c01e5",
    storageBucket: "galacticode-c01e5.appspot.com",
    messagingSenderId: "563649578190",
    appId: "1:563649578190:web:860622b8e77d679e643c9f",
    measurementId: "G-NQ50YYP26P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
export const signInWithGoogle = () auth.signInWithGoogle(provider);
export default firebase;


const githupProvider = new firebase.auth.GithubAuthProvider();

githupProvider.setCustomParameters({
    prompt: "select_account"
});