import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    proxy: {
      "/.netlify/functions": "http://localhost:9999",
    },
  },
  plugins: [react()],
});