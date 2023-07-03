// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU6bn7PDqM7IjbwnEDXu4MTiL_udsY33c",
  authDomain: "hiro-aa02c.firebaseapp.com",
  projectId: "hiro-aa02c",
  storageBucket: "hiro-aa02c.appspot.com",
  messagingSenderId: "442314852481",
  appId: "1:442314852481:web:86558af26f058ea7136580",
  measurementId: "G-KZMDJB94TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);
export default app;
