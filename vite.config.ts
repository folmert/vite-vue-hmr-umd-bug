import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
    ],
    preview: {
      port: 5173,
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'hmrTest',
        // the proper extensions will be added
        fileName: 'hmr-test',
        formats: ['umd'],
      }
    },
  }
})
