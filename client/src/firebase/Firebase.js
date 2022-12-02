import {initializeApp} from "firebase/app"
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC9YzPHUwFDZQKqjVzLgxK0_kLPZv2Y8o4",
    authDomain: "jobs-59e6a.firebaseapp.com",
    projectId: "jobs-59e6a",
    storageBucket: "jobs-59e6a.appspot.com",
    messagingSenderId: "543520311487",
    appId: "1:543520311487:web:5c327d58eee7da4f481e0a",
    measurementId: "G-52N9P1JN7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const provider=new GoogleAuthProvider()
export default app