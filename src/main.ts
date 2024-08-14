import { createApp } from "vue";
import "./style.css";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
import zhCn from "element-plus/es/locale/lang/zh-cn";
//svg插件配置代码
import "virtual:svg-icons-register";
app.use(ElementPlus, {
  locale: zhCn,
});
// 在入口文件引入src/index.ts文件,通过app.use方法安装自定义插件
import gloablComponent from "./components/index";
app.use(gloablComponent);

//引入模板的全局样式
import "@/styles/index.scss";

app.mount("#app");
