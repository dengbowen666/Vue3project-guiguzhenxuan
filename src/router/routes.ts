//对外暴露配置路由
export const constantRoute = [
  {
    //登录
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
  },
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: "home",
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
    name: "404",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];