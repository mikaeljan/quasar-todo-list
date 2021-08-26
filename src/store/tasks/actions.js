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
  setSearch(context, payload) {
    context.commit("setSearch", payload);
  },
  setSort(context, payload) {
    context.commit("setSort", payload);
  },
};
