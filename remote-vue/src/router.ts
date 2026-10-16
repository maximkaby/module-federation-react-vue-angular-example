import { createRouter, createWebHistory } from "vue-router";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import UserDetails from "./pages/UserDetails.vue";
import UserList from "./pages/UserList.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    // A parent record keeps the "Users" link active on `/users/:id` too.
    path: "/users",
    children: [
      { path: "", component: UserList },
      { path: ":id", component: UserDetails },
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

/**
 * Every route is resolved under `base`: `/` when the remote runs standalone,
 * the prefix the host chose (e.g. `/remote-vue`) when it is mounted there.
 */
export const createAppRouter = (base: string) =>
  createRouter({ history: createWebHistory(base), routes });
