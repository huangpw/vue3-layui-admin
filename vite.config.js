import {
  fileURLToPath,
  URL,
} from 'node:url';

import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from '@layui/unplugin-vue-components/vite'
import { LayuiVueResolver } from '@layui/unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      resolvers: [LayuiVueResolver()]
    }),
    Components({
      resolvers: [LayuiVueResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: '9001'
  }
})
