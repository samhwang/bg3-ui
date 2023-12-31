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
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./node_modules/@samhwang/bg3-styled-system/dist/panda.buildinfo.json', './src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  globalCss: globalStyle,
  theme: {
    extend: {},
  },

  // The output directory for your css system
  emitPackage: true,
  outdir: './@samhwang/bg3-ui-react/node_modules/@samhwang/bg3-styled-system',
});
