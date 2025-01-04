import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'ChatWidget',
      formats: ['iife'],
      fileName: 'bundle', // Ignore the format parameter
    },
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js', // Add this line
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'bundle.css'
          return assetInfo.name
        },
      },
    },
  },
})
