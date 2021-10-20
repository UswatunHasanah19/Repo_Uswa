import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User} from "firebase/auth";
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { promises } from "dns";

export const firebaseConfig = {
    apiKey: "AIzaSyBPqf-yR_FJ9DIpgL_Zh_bBnqQNq8mIK-k",
    authDomain: "appuswa-c8ce4.firebaseapp.com",
    projectId: "appuswa-c8ce4",
    storageBucket: "appuswa-c8ce4.appspot.com",
    messagingSenderId: "684627767785",
    appId: "1:684627767785:web:b7b058ee221c9d95cb1b78",
    measurementId: "G-40YXF4ZPW8"
  }

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
  
export async function registerUser(email: string, password: string): Promise<User> {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
     // signed in
     const user = userCredential.user
     return user
}

export async function loginUser(email: string, password: string): Promise<User> {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
  
    // signed in
    const user = userCredential.user
    return user
  }