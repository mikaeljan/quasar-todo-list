const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Todo.vue") },
      {
        path: "/settings",
        component: () => import("pages/Settings.vue"),
      },
      {
        path: "/settings/help",
        component: () => import("pages/Help.vue"),
      },
      {
        path: "/auth",
        component: () => import("pages/Auth.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
