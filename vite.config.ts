import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve}  from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
   base: './',
  resolve: {
  // 设置文件./src路径为 @
   alias: {
        '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
    }


}

})
