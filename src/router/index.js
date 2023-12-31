import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage/HomePage.vue";
import NoteDetailsPage from "../pages/NoteDetailsPage/NoteDetailsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/note/:id",
    name: "note details",
    component: NoteDetailsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
