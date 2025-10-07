// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Troque '/bodas-invest/' pelo nome do seu repositório
export default defineConfig({
  plugins: [react()],
  base: '/bodas_pais/',
})
