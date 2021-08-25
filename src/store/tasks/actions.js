export default {
  updateTask(context, payload) {
    context.commit("updateTask", payload);
  },
  deleteTask(context, payload) {
    context.commit("deleteTask", payload);
  },
};
