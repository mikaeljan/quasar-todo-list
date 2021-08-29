import { uid } from "quasar";
import { db, firebaseAuth } from "src/boot/firebase";
import { onValue, ref } from "firebase/database";

export default {
  addTask(context, payload) {
    context.commit("addTask", {
      id: uid(),
      task: payload,
    });
  },
  dbReadData() {
    const userId = firebaseAuth.currentUser.uid;
    const userTasks = ref(db, "tasks/" + userId);
    onValue(userTasks, (snapshot) => {
      console.log(snapshot);
    });
  },
  updateTask(context, payload) {
    context.commit("updateTask", payload);
  },
  deleteTask(context, payload) {
    context.commit("deleteTask", payload);
  },
  setSearch(context, payload) {
    context.commit("setSearch", payload);
  },
  setSort(context, payload) {
    context.commit("setSort", payload);
  },
};
