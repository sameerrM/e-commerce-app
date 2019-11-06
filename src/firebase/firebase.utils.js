import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: `process.env.REACT_APP_FIREBASE_KEY`,
    authDomain: "e-commerce-85c6a.firebaseapp.com",
    databaseURL: "https://e-commerce-85c6a.firebaseio.com",
    projectId: "e-commerce-85c6a",
    storageBucket: "e-commerce-85c6a.appspot.com",
    messagingSenderId: "965021677108",
    appId: "1:965021677108:web:d2397fa865fe681616fc61"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;