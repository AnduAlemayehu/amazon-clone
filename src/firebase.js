// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD25_IXQPOMESHcnYLw7ZySeXKFGFFT6M4",
  authDomain: "clone-21811.firebaseapp.com",
  projectId: "clone-21811",
  storageBucket: "clone-21811.appspot.com",
  messagingSenderId: "646672340598",
  appId: "1:646672340598:web:56156a665fd37d32acf157",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
