import { darken, lighten } from 'polished'

const primary = '#3CB371'

export const theme = {
  colors: {
    primary,
    primaryDark: darken(0.1, primary),
    primaryLight: lighten(0.1, primary),
    buttonText: '#121212',
  },
}
