import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListsView from "../views/ListsView.vue";
import NewListView from "../views/NewListView.vue";
import EditListView from "../views/EditListView.vue";
import ListView from "../views/ListView.vue";
import DetailsView from "../views/DetailsView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/lists",
    name: "Lists",
    component: ListsView,
  },
  {
    path: "/lists/new",
    name: "NewList",
    component: NewListView,
  },
  {
    path: "/lists/edit/:id",
    name: "EditListView",
    component: EditListView,
  },
  {
    path: "/list/:id",
    name: "List",
    component: ListView,
  },
  {
    path: "/book/:id",
    name: "Details",
    component: DetailsView,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const protectedRoutes = ["Lists"];

router.beforeEach((to, from, next) => {
  const isProtected = protectedRoutes.includes(to.name as string);
  if (isProtected && localStorage.getItem("token") === null) {
    next({
      path: "/",
      query: { redirect: to.fullPath },
    });
  } else if (
    !isProtected &&
    localStorage.getItem("token") !== null &&
    (to.name == "Login" || to.name == "Register")
  ) {
    next({
      path: "/",
    });
  } else {
    next();
  }
});

export default router;
