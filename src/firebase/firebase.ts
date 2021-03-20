import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDRz8_yrabGLjTmgG_TIZLZDaxmUZbUta8",
    authDomain: "react-shop-ed474.firebaseapp.com",
    databaseURL: "https://react-shop-ed474.firebaseio.com",
    projectId: "react-shop-ed474",
    storageBucket: "react-shop-ed474.appspot.com",
    messagingSenderId: "320364608999",
    appId: "1:320364608999:web:9321104f46dbc8ee30d142"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth: firebase.User | null, additionalData?: any)  => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${ userAuth.uid }`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('Error created user ', e.message)
        }
    }

    return userRef  
}

export const auth: any = firebase.auth()
export const firestore = firebase.firestore()
export const session = firebase.auth.Auth.Persistence.SESSION

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

