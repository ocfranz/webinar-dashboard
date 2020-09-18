import dashboardPage from "../pages/Dashboard.vue";
import notFoundPage from "../pages/NotFound.vue";

export const routes = [
  {
    path: "/",
    name: "index",
    component: dashboardPage,
  },
  {
    path: "*",
    name: "notfound",
    component: notFoundPage,
  },
];
