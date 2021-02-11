import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCsk8CvtTWPSbCBaeKZkILi9zTuFWYwqf0",
    authDomain: "financasapp-4b103.firebaseapp.com",
    projectId: "financasapp-4b103",
    storageBucket: "financasapp-4b103.appspot.com",
    messagingSenderId: "94349732741",
    appId: "1:94349732741:web:025350fef45957f83f32ec"
};

//not to have duplicate connection
if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}
export default firebase;

