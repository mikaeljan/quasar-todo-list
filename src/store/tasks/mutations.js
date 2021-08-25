import Vue from "vue";
export default {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, payload) {
    delete state.tasks[payload];
  },
};
