import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  importMap: '@samhwang/bg3-styled-system',
  emitPackage: true,
  outdir: '@samhwang/bg3-styled-system',
});
