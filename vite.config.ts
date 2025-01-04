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
    minify: 'terser', // Use terser for better minification
    terserOptions: {
      compress: {
        pure_funcs: ['console.log'], // Remove specific functions
      },
    },
    target: 'es2015', // Optimize for modern browsers
    reportCompressedSize: true, // See compressed sizes in build output
    cssMinify: true, // Ensure CSS is minified
    cssCodeSplit: false, // Keep CSS in one file
  },
})
