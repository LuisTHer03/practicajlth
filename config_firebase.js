// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdE6U6sL1TomZGVc21rrxtsou-SFEDRrQ",
  authDomain: "proyecto-jlth.firebaseapp.com",
  projectId: "proyecto-jlth",
  storageBucket: "proyecto-jlth.firebasestorage.app",
  messagingSenderId: "243496592653",
  appId: "1:243496592653:web:2de50941a9a39fd83bbc44",
  measurementId: "G-D5CDMWG8V0"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Añadimos
const appFirebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(appFirebase);
export default appFirebase;
