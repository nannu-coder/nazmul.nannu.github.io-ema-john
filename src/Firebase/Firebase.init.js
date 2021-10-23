import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const InitializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default InitializeFirebase;