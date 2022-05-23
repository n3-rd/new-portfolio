const routes = [
  {
    path: "/",
    component: () => import("pages/Index.vue"),
  },
  {
    path: "/PeachPage",
    component: () => import("pages/projects/PeachPage.vue"),
  },
  {
    path: "/MojoMusic",
    component: () => import("pages/projects/MojoMusic.vue"),
  },
  {
    path: "/RoqquAppClone",
    component: () => import("pages/projects/RoqquAppClone.vue"),
  },
  {
    path: "/Sonicology",
    component: () => import("pages/projects/Sonicology.vue"),
  },
  {
    path: "/Iotanote",
    component: () => import("pages/projects/Iotanotes.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
