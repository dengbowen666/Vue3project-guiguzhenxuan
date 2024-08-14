//通过vue-router实现路由配置
import { constantRoute } from "./routes";
import { createRouter,createWebHashHistory } from 'vue-router';

let router = createRouter({
  //路由模式
  history: createWebHashHistory(),
  routes: constantRoute,
});

export default router;