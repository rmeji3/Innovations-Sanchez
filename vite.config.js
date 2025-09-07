import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {                 // or the exact prefixes you call
        target: 'https://localhost:7108',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'https://localhost:7108',
        changeOrigin: true,
        secure: false,
      },
      '/Profile': {
        target: 'https://localhost:7108',
        changeOrigin: true,
        secure: false,
      },
      '/antiforgery': {
        target: 'https://localhost:7108',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
