import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBBPMTsq8wJb9DSRKNZbAkPO2FThhKLy3c",
    authDomain: "noteslice-reactapp.firebaseapp.com",
    projectId: "noteslice-reactapp",
    storageBucket: "noteslice-reactapp.appspot.com",
    messagingSenderId: "740799995157",
    appId: "1:740799995157:web:39bb891aea0f2a0ea95d1c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase

