
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
import 'firebase/auth';
// import { getFirestore}  from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ELr_vRwzDCms8198BvjRV2AKb3SgYHw",
  authDomain: "hotelapp-12d89.firebaseapp.com",
  projectId: "hotelapp-12d89",
  storageBucket: "hotelapp-12d89.appspot.com",
  messagingSenderId: "795155663807",
  appId: "1:795155663807:web:6ceca7c6c9a0da8427af0a",
  measurementId: "G-KRNXZPWMLB"
};

// Initialize Firebase
let app;
if(!firebase.apps.length){
     app = firebase.initializeApp(firebaseConfig);
}else{
    firebase.app;
}
const auth=firebase.auth();
// const database=app.database();


export {auth};