import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalStyle = defineGlobalStyles({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#070606',
    fontFamily: "'PT Serif', serif",
    color: '#fff',
  },
});

export default defineConfig({
  preflight: true,
  include: ['../../libraries/react/node_modules/@samhwang/bg3-styled-system/panda.buildinfo.json', './src/**/*.{js,jsx,ts,tsx}'],
  globalCss: globalStyle,
  importMap: '@samhwang/bg3-styled-system',
  emitPackage: true,
  outdir: '@samhwang/bg3-styled-system',
});
