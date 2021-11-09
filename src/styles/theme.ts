import { createTheme } from '@shopify/restyle';

import colors from './colors';
import typography from './typography';
import buttons from './buttons';
import spacing from './spacing';

const theme = createTheme({
  colors,
  spacing,
  breakpoints: {},
  textVariants: typography,
  buttonVariants: {
    ...buttons,
  },
});

export type Theme = typeof theme;
export default theme;
