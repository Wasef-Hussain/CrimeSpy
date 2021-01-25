import firebase from 'firebase/app'
import 'firebase/auth'

import 'firebase/firebase-firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDnj5iCrgF3WiNLSb3OHgFTHiF_5N8nbDU",
    authDomain: "crimespyfirebase.firebaseapp.com",
    projectId: "crimespyfirebase",
    storageBucket: "crimespyfirebase.appspot.com",
    messagingSenderId: "1090907545921",
    appId: "1:1090907545921:web:fa50ea11d0aa88e1ec41c0",
    measurementId: "G-N5GHRXN3BG"
}
// Initialize Firebase



    
       const firebaseapp = firebase.initializeApp(firebaseConfig)
        
    




export const auth = firebaseapp.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {db, storage};
export default firebaseapp