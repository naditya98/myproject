
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvkUMaV-U3zLS32we1Gpxc2i9eIseb3Ac",
    authDomain: "mumble-f5b70.firebaseapp.com",
    databaseUrl: "https://mummble-react-f5b70.firebaseio.com",
    projectId: "mumble-f5b70",
    storageBucket: "mumble-f5b70.appspot.com",
    messagingSenderId: "595927879007",
    appId: "1:595927879007:web:af0466d786993e40a0faea",
    measurementId: "G-XF1H3BPR3S"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };