import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDenvwIOM8GkVQW0lZZSOszMtFni1OlxF4",
  authDomain: "olx-clone-58917.firebaseapp.com",
  projectId: "olx-clone-58917",
  storageBucket: "olx-clone-58917.appspot.com",
  messagingSenderId: "453799380911",
  appId: "1:453799380911:web:891b61719ebbc10bea515a",
  measurementId: "G-406V12ZTNR"
};

export default firebase.initializeApp(firebaseConfig);
