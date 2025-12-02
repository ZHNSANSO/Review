import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all network interfaces (required for reverse proxies/Docker)
    host: '0.0.0.0',
    // Whitelist the specific deployment domain to bypass the security check
    allowedHosts: [
      'fx.00oo.nyc.mn',
      'localhost',
      '127.0.0.1'
    ]
  },
})