import { LocalStorage } from "quasar";

export default {
  setShow12HourTimeFormat(context, payload) {
    context.commit("setShow12HourTimeFormat", payload);
    context.dispatch("saveSettings");
  },
  setShowTasksInOneList(context, payload) {
    context.commit("setShowTasksInOneList", payload);
    context.dispatch("saveSettings");
  },
  saveSettings({ state }) {
    LocalStorage.set("settings", state.settings);
  },

  getSettings({ commit }) {
    const settings = LocalStorage.getItem("settings");
    if (settings) {
      commit("setSettings", settings);
    }
    return settings;
  },
};
