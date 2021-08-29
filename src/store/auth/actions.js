import { firebaseAuth } from "boot/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { LocalStorage, Loading } from "quasar";
import showErrorMessage from "src/functions/show-error-message";
export default {
  async registerUser(_, payload) {
    Loading.show();
    try {
      const response = await createUserWithEmailAndPassword(
        firebaseAuth,
        payload.email,
        payload.password
      );
    } catch (err) {
      console.warn(err);
      showErrorMessage(err.message);
      Loading.hide();
    }
  },
  async loginUser(_, payload) {
    Loading.show();
    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        payload.email,
        payload.password
      );
    } catch (err) {
      console.warn(err);
      showErrorMessage(err.message);
      Loading.hide();
    }
  },
  logoutUser() {
    signOut(firebaseAuth);
  },
  handleAuthStateChange({ commit, dispatch }) {
    onAuthStateChanged(firebaseAuth, (user) => {
      Loading.hide();
      if (user) {
        commit("setLoggedIn", true);
        LocalStorage.set("loggedIn", true);
        this.$router.push("/");
        dispatch("tasks/dbReadData", null, {
          root: true,
        });
      } else {
        commit("setLoggedIn", false);
        LocalStorage.set("loggedIn", false);
        this.$router.replace("/auth");
      }
    });
  },
};
