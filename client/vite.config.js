import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Agar dapat diakses dari perangkat lain di jaringan yang sama
    port: 3001, // Anda bisa mengganti port sesuai kebutuhan
  },
})

