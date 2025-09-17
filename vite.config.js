import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Konfigurasi Vite PWA
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Tuku',
        short_name: 'Tuku',
        description: 'Aplikasi Penjualan untuk Toko Kecil',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logotuku192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logotuku512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
