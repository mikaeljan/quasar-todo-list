import { uid } from "quasar";

export default {
  addTask(context, payload) {
    context.commit("addTask", {
      id: uid(),
      task: payload,
    });
  },

  updateTask(context, payload) {
    context.commit("updateTask", payload);
  },
  deleteTask(context, payload) {
    context.commit("deleteTask", payload);
  },
};
