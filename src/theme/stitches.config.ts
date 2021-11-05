import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  mint,
  cyan,
  teal,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
  brown,
  bronze,
  gold,
  whiteA,
  blackA,
  grayDark,
  mauveDark,
  slateDark,
  sageDark,
  oliveDark,
  sandDark,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  skyDark,
  mintDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  limeDark,
  yellowDark,
  amberDark,
  orangeDark,
  brownDark,
  bronzeDark,
  goldDark
} from '@radix-ui/colors';

const defaultTheme = {
  colors: {
    ...gray,
    ...mauve,
    ...slate,
    ...sage,
    ...olive,
    ...sand,
    ...tomato,
    ...red,
    ...crimson,
    ...pink,
    ...plum,
    ...purple,
    ...violet,
    ...indigo,
    ...blue,
    ...sky,
    ...mint,
    ...cyan,
    ...teal,
    ...green,
    ...grass,
    ...lime,
    ...yellow,
    ...amber,
    ...orange,
    ...brown,
    ...bronze,
    ...gold,
    ...whiteA,
    ...blackA,

    // Semantic colors
    hiContrast: '$sage12',
    loContrast: '$sage1',
    canvas: 'hsl(0 0% 93%)',
    panel: '$sage1',
    transparentPanel: 'hsl(0 0% 0% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)'
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  fontSizes: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '20px',
    5: '24px',
    6: '32px',
    7: '40px',
    8: '64px',
    9: '80px',
    10: '96px',
    11: '128px'
  },
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '64px',
    9: '96px',
    10: '128px',
    11: '160px'
  },
  sizes: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '64px',
    9: '96px',
    10: '128px',
    11: '160px'
  },
  radii: {
    1: '4px',
    2: '6px',
    3: '8px',
    4: '12px',
    round: '50%',
    pill: '9999px'
  },
  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},
  borderWidths: {},
  borderStyles: {},
  shadows: {},
  zIndices: {},
  transitions: {}
};

export const { styled, getCssText, createTheme, css } = createStitches({
  theme: defaultTheme,
  media: {
    bp1: '(min-width: 0px)',
    bp2: '(min-width: 568px)',
    bp3: '(min-width: 768px)',
    bp4: '(min-width: 1024px)',
    bp5: '(min-width: 1280px)',
    bp6: '(min-width: 1536px)'
  },
  utils: {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...skyDark,
    ...mintDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...orangeDark,
    ...brownDark,
    ...bronzeDark,
    ...goldDark,

    // Semantic colors
    hiContrast: '$sage12',
    loContrast: '$sage1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$sage3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)'
  }
});
