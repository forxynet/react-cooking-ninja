import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAoWRTlPW44nwUJ-cH52pykaWUF-m_V39o",
  authDomain: "cooking-ninja-site-eec1d.firebaseapp.com",
  projectId: "cooking-ninja-site-eec1d",
  storageBucket: "cooking-ninja-site-eec1d.firebasestorage.app",
  messagingSenderId: "637397005605",
  appId: "1:637397005605:web:4da72f976b43c5e20cd6cc"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()


export { projectFirestore }