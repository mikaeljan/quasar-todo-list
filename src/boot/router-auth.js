import { boot } from "quasar/wrappers";
import { LocalStorage } from "quasar";
export default boot(({ router }) => {
  const loggedIn = LocalStorage.getItem("loggedIn");
  router.beforeEach((to, _, next) => {
    if (!loggedIn && to.path !== "/auth") {
      next("/auth");
    } else {
      next();
    }
  });
});
