 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsEJfwe7YgPrqfDqE39X0_57_Utk9Wkeg",
    authDomain: "todoreact-e93c3.firebaseapp.com",
    projectId: "todoreact-e93c3",
    storageBucket: "todoreact-e93c3.appspot.com",
    messagingSenderId: "1091028626867",
    appId: "1:1091028626867:web:4b014c40af88d6cf5e6fc6",
    measurementId: "G-ZL62VECY4Z"
};
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);

 export const collectionVar = "to-doreact";