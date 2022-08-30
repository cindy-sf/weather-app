import type { ThemeAttributes } from '@src/types/theme'

export const theme: ThemeAttributes = {
  breakpoints: {
    smallScreen: '32rem',
    tinyScreen: '42.5rem',
    mediumScreen: '76.8rem',
  },
  colors: {
    black: '#100F13',
    grey: '#1B1B1D',
    purple: '#384476',
    purpleLight: '#CCBBEC',
    white: '#FFFFFF',
  },
  fonts: ['sans-serif', 'Recoleta', 'Katwijkmono'],
  fontSizes: {
    xSmall: '1.2rem',
    small: '1.6rem',
    medium: '1.8rem',
    large: '2.8rem',
    xLarge: '3.2rem',
  },
  radius: {
    small: '1.6rem',
    medium: '2.6rem',
    large: '3.2rem',
  },
  space: {
    xSmall: '1.2rem',
    small: '1.6rem',
    medium: '2.2rem',
    large: '2.6rem',
    xLarge: '5.2rem',
    none: '0rem',
  },
}
