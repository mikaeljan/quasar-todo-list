export default {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
};
