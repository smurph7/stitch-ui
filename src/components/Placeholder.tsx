/* eslint-disable react/require-default-props */
import { keyframes } from '@stitches/react';

import { Box } from './Box';

interface PlaceholderProps {
  width: number;
  height: number;
  background?: string;
  props?: any;
}

const load = keyframes({
  from: {
    left: '-100%'
  },
  to: {
    left: '100%'
  }
});

export function Placeholder({
  width,
  height,
  background = 'linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05))',
  ...props
}: PlaceholderProps) {
  return (
    <Box
      css={{
        width,
        height,
        boxShadow: '0 4px 10px 0 rgba(33, 33, 33, 0.15)',
        borderRadius: '$1',
        position: 'relative',
        overflow: 'hidden',
        bg: '$gray7',
        '&::before': {
          content: '',
          display: 'block',
          position: 'absolute',
          left: '-150px',
          top: 0,
          height: '100%',
          width: '100%',
          background,
          animation: `${load} 1s infinite`
        },
        ...props
      }}
    />
  );
}
