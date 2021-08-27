import { firebaseAuth } from "boot/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export default {
  async registerUser({ context }, payload) {
    try {
      const response = await createUserWithEmailAndPassword(
        firebaseAuth,
        payload.email,
        payload.password
      );
    } catch (err) {
      console.warn(err);
    }
  },
  async loginUser({ context }, payload) {
    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        payload.email,
        payload.password
      );
    } catch (err) {
      console.warn(err);
    }
  },
};
