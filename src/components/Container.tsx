import { styled } from '../theme/stitches.config';

export const Container = styled('div', {
  mx: 'auto',
  px: '$4',

  variants: {
    size: {
      1: {
        maxWidth: '300px'
      },
      2: {
        maxWidth: '500px'
      },
      3: {
        maxWidth: '725px'
      },
      4: {
        maxWidth: '865px'
      },
      5: {
        maxWidth: '1000px'
      },
      6: {
        maxWidth: '1200px'
      },
      7: {
        maxWidth: '1400px'
      }
    }
  }
});
