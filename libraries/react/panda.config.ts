import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  outdir: 'styled-system',
  importMap: '@samhwang/bg3-ui-react',
});
