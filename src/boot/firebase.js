import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANwtLB7rlqN6UV1LuH3zvxauhS_2w5Fhs",
  authDomain: "quasar-awesome-todo-58d0b.firebaseapp.com",
  databaseURL:
    "https://quasar-awesome-todo-58d0b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quasar-awesome-todo-58d0b",
  storageBucket: "quasar-awesome-todo-58d0b.appspot.com",
  messagingSenderId: "987723876593",
  appId: "1:987723876593:web:6867b6666fddddbd764150",
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
let firebaseAuth = getAuth(app);
const db = getDatabase(app);
export { firebaseAuth, db };
