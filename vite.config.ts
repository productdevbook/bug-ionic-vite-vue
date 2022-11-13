import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'


import {
  IonicResolver,
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: 'src/components.d.ts', resolvers: [IonicResolver()] }),
    Pages(),
    Layouts(),
    AutoImport({
      imports: ['vue-router', 'vue'], dts: './src/auto-imports.d.ts',
  }),

  ]
})
