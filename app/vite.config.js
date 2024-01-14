import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './', // Publish directory is the current directory
  },
  plugins: [react()],
})
