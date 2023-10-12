import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../page/HomePage/HomePage.vue";
import NoteDetailsPage from "../page/NoteDetailsPage/NoteDetailsPage.vue";
import HelloWorld from "../components/HelloWorld.vue";

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
