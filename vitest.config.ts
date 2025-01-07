import { defineConfig } from 'vitest/config'
import preact from '@preact/preset-vite'
import type { ViteUserConfig } from 'vitest/config'

export default defineConfig({
  plugins: [preact()] as unknown as ViteUserConfig['plugins'],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    server: {
      deps: {
        inline: [
          'zustand', // Add Zustand to be processed by Vite
        ],
      },
    },
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
})
