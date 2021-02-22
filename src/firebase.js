import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBJO2rLJx5sIMBqJsdIo1b1k44lgaCab7s",
    authDomain: "clone-aa733.firebaseapp.com",
    projectId: "clone-aa733",
    storageBucket: "clone-aa733.appspot.com",
    messagingSenderId: "933705412322",
    appId: "1:933705412322:web:36cae4ed94201f2a88f8bb",
    measurementId: "G-STJEWWK75V"
};
const firbaseApp = firebase.initializeApp(firebaseConfig)
const db = firbaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GithubAuthProvider()


export { db, auth, provider }