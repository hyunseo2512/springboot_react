// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // /api로 시작하는 요청은 스프링 부트로 전달
      '/api': {
        target: 'http://localhost:8088',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../src/main/resources/static', // Spring Boot의 static 폴더로 빌드 결과물 전송
    emptyOutDir: true, // 빌드 시 기존 파일 삭제
  }
})

