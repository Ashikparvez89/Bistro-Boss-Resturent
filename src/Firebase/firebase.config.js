// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFoiVYwwGZe3WWmlKZKqkN_2P6OCreP-0",
  authDomain: "bistro-resturent-baae3.firebaseapp.com",
  projectId: "bistro-resturent-baae3",
  storageBucket: "bistro-resturent-baae3.appspot.com",
  messagingSenderId: "42163208294",
  appId: "1:42163208294:web:5ec21f3cfcf05852606da7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

