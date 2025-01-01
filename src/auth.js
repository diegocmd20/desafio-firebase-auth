import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import firebaseApp from "@/firebaseConfig";

const auth = getAuth(firebaseApp);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };
