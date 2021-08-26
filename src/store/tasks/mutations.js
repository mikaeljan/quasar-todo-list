export default {
  addTask(state, payload) {
    state.tasks[payload.id] = { ...payload.task };
  },
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, payload) {
    delete state.tasks[payload];
  },
  setSearch(state, payload) {
    state.search = payload;
  },
  setSort(state, payload) {
    state.sort = payload;
  },
};
