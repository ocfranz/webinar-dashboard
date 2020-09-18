import dashboardPage from "../pages/Dashboard.vue";
import qaPage from "../pages/Q&A.vue";
import statsPage from "../pages/Stats.vue";
import filesPage from "../pages/Files.vue";
import calendarPage from "../pages/Calendar.vue";
import notFoundPage from "../pages/NotFound.vue";

export const routes = [
  {
    path: "/",
    name: "index",
    component: dashboardPage,
  },
  {
    path: "/q&a",
    name: "q&a",
    component: qaPage,
  },
  {
    path: "/stats",
    name: "stats",
    component: statsPage,
  },
  {
    path: "/files",
    name: "files",
    component: filesPage,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: calendarPage,
  },
  {
    path: "*",
    name: "notfound",
    component: notFoundPage,
  },
];
