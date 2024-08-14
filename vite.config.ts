import { ConfigEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import path from "path";
//引入svg需要的插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        enable: command === "serve",
      }),
    ],
    base: "/Vue3project-guiguzhenxuan/",

    resolve: {
      // 设置文件./src路径为 @
      alias: {
        "@": resolve(__dirname, "src"),
        "@components": resolve(__dirname, "src/components"),
      },
    },
    // 配置完毕你会发现scss提供这些全局变量可以在组件样式中使用了
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});
