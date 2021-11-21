import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdna8fiUl7Efdm3kPff1XabiDlE7UCEvo",
  authDomain: "quitter2-4837b.firebaseapp.com",
  projectId: "quitter2-4837b",
  storageBucket: "quitter2-4837b.appspot.com",
  messagingSenderId: "699690879175",
  appId: "1:699690879175:web:9213465e48ca9d113096e2"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db