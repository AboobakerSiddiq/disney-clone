import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKhfHR-lHHQhsWu8WIDenI3KnUeGllfE8",
  authDomain: "disney-clone-2db86.firebaseapp.com",
  projectId: "disney-clone-2db86",
  storageBucket: "disney-clone-2db86.appspot.com",
  messagingSenderId: "1027652263232",
  appId: "1:1027652263232:web:ca8611cb97149b641e2ea5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
