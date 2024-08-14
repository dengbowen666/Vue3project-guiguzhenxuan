/// <reference types="vite/client" />
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component

}
// 我在vue组件中引入vue-router的useRouter函数时，报的错在vite-env.d.ts中，把找不到的模块名称声明一下就行。
declare module "vue-router"