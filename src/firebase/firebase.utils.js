import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDk3NYGikWsQVckUL8pb0La-sITyXmh3c8",
    authDomain: "e-commerce-85c6a.firebaseapp.com",
    databaseURL: "https://e-commerce-85c6a.firebaseio.com",
    projectId: "e-commerce-85c6a",
    storageBucket: "e-commerce-85c6a.appspot.com",
    messagingSenderId: "965021677108",
    appId: "1:965021677108:web:d2397fa865fe681616fc61"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;