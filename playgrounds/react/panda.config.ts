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
  include: ['../../../libraries/react/node_modules/bg3-styled-system/panda.buildinfo.json', './src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  globalCss: globalStyle,
  theme: {
    extend: {},
  },

  // The output directory for your css system
  emitPackage: true,
  outdir: '../../../libraries/react/node_modules/bg3-styled-system/bg3-styled-system',
});
