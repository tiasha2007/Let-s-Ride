import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAKuUIhOX5ZcTkDToZi-q_2IcVsHkdQ7sg",
  authDomain: "complaint-forum-2980f.firebaseapp.com",
  projectId: "complaint-forum-2980f",
  storageBucket: "complaint-forum-2980f.appspot.com",
  messagingSenderId: "290415198078",
  appId: "1:290415198078:web:8958be448ed4e4a6e53d2f"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

