import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  build: {
    lib: {
      name: '@bronen/candy-ui',
      formats: ['es'],
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: "index",
    }
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
    },
  },
})