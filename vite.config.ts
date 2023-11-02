import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import * as path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['.src/App.tsx', './src/**/*/'],
      eslintrc: {
        enabled: true,
      },
      imports: [
        'react',
        {
          react: [
            'createContext',
          ],
        },
      ]
    }),
  ],

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  }
})
