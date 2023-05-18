// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuUnyfHN8QAL1hw858KDoqUqdUFhwoVms",
    authDomain: "educational-toys-923a6.firebaseapp.com",
    projectId: "educational-toys-923a6",
    storageBucket: "educational-toys-923a6.appspot.com",
    messagingSenderId: "931934023314",
    appId: "1:931934023314:web:e4543d6aeb0ccec797004b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app