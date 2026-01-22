import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Keep this if you are using React
import tailwindcss from '@tailwindcss/vite' // <--- ADD THIS LINE

export default defineConfig({
  plugins: [
    react(), // Keep this if you are using React
    tailwindcss(), // <--- Now this will work
  ],
})
