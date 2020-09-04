import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/primero",
    name: "Primero",
    component: () =>
      import(/* webpackChunkName: "vista1" */ "../views/vista1.vue")
  },
  {
    path: "/segundo",
    name: "Segundo",
    
    component: () =>
      import(/* webpackChunkName: "vista2" */ "../views/vista2.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
