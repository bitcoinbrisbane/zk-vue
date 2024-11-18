import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FirstView from "../views/First.vue";
import Page from "../views/Page/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Test",
      name: "Page",
      component: Page,
    },
    {
      path: "/First",
      name: "First",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: FirstView,
    },
  ],
});

export default router;
