import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const basePath = process.env.BASE_URL || '/'

export default defineConfig({
  plugins: [vue()],
  base: basePath,
})
