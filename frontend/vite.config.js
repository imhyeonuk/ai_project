import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai_project/',
  server: {
    port: 5173, // 원하는 포트 번호 설정
  },
})
