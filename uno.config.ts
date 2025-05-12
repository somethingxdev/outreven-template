import { defineConfig, presetWind4, presetWebFonts, presetTypography } from 'unocss';

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true
      }
    }),
    presetTypography({
      cssExtend: {
        '.prose h2:first-of-type': {
          'margin-top': '0px'
        },
        'ul': {
          'list-style-position': 'inside'
        },
        'ol': {
          'list-style-position': 'inside'
        }
      }
    }),
    presetWebFonts({
      themeKey: 'font',
      provider: 'google',
      fonts: {
        sans: 'Fira Code:400,500,600,700'
      }
    })
  ],
  theme: {
    colors: {
      primary: 'oklch(0.21 0.0318 264.66)',
      accent: 'oklch(0.64 0.2078 25.33)',
      placeholder: 'oklch(0.25 0.0362 265.52)',
      body: 'oklch(0.18 0.0283 267.42)'
    },
    containers: {
      center: true,
      padding: '1rem'
    },
    breakpoint: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  }
});
