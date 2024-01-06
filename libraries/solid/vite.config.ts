/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'src',
      staticImport: true,
    }),
    solid(),
  ],
  build: {
    sourcemap: true,
    minify: true,
    lib: {
      entry: 'src/index.tsx',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {}), 'react/jsx-runtime', '@samhwang/bg3-styled-system'],
      output: [
        {
          format: 'es',
        },
        {
          format: 'cjs',
        },
      ],
    },
  },
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['src/**'],
      exclude: ['**/*.stories.tsx'],
    },
  },
});
