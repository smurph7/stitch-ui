// using functions + css for colour theming until stitches gets dynamic variants: https://github.com/modulz/stitches/pull/721
import * as React from 'react';

import { styled } from '../theme/stitches.config';
import { ColorScheme } from '../theme/types';

type Size = 'small' | 'medium' | 'large';
type VariantType = 'unstyled' | 'solid' | 'outline' | 'ghost' | 'link';

type ButtonProps = {
  variant?: VariantType;
  colorScheme?: ColorScheme;
  size?: Size;
  children?: any;
  disabled?: boolean;
  props?: any;
};

function solid(colorScheme: ColorScheme) {
  return {
    backgroundColor:
      colorScheme === 'sage' ? '$loContrast' : `$${colorScheme}2`,
    boxShadow: `inset 0 0 0 1px $colors$${colorScheme}7`,
    color: `$${colorScheme}11`,
    '&:hover': {
      boxShadow: `inset 0 0 0 1px $colors$${colorScheme}8`
    },
    '&:active': {
      backgroundColor: `$${colorScheme}2`,
      boxShadow: `inset 0 0 0 1px $colors$${colorScheme}8`
    },
    '&:focus': {
      boxShadow: `inset 0 0 0 1px $colors$${colorScheme}8, 0 0 0 1px $colors$${colorScheme}8`
    },
    '&:disabled': {
      boxShadow: 'inset 0 0 0 1px $colors$sage7'
    }
  };
}

function outline(colorScheme: ColorScheme) {
  return {
    ...solid(colorScheme),
    backgroundColor: 'transparent',
    '&:hover': {
      boxShadow: `inset 0 0 0 1px $colors$${colorScheme}8`,
      backgroundColor: `$${colorScheme}3`
    },
    '&:disabled': {
      backgroundColor: '$transparent',
      boxShadow: 'inset 0 0 0 1px $colors$sage7'
    }
  };
}

function ghost(colorScheme: ColorScheme) {
  return {
    backgroundColor: 'transparent',
    color: `$${colorScheme}11`,
    '&:hover': {
      backgroundColor: `$${colorScheme}3`,
      boxShadow: 'none'
    },
    '&:active': {
      backgroundColor: `$${colorScheme}4`
    },
    '&:focus': {
      boxShadow: `inset 0 0 0 1px $colors$${colorScheme}8, 0 0 0 1px $colors$${colorScheme}8`
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    }
  };
}

function link(colorScheme: ColorScheme) {
  return {
    padding: 0,
    height: 'auto',
    lineHeight: 'normal',
    verticalAlign: 'baseline',
    color: `$${colorScheme}11`,
    '&:hover': {
      textDecoration: 'underline',
      '&:disabled': {
        textDecoration: 'none'
      }
    },
    '&:active': {
      color: `$${colorScheme}9`
    },
    '&:disabled': {
      boxShadow: 'none'
    }
  };
}

function unstyled() {
  return {
    p: 0,
    '&:hover': {},
    '&:active': {},
    '&:focus': {},
    '&:disabled': {
      p: 0,
      boxShadow: 'none',
      backgroundColor: 'transparent'
    }
  };
}

const StyledButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: '1',
  height: '$5',
  px: '$2',
  fontFamily: '$body',
  fontVariantNumeric: 'tabular-nums',
  fontSize: '$2',
  '&:hover': {
    cursor: 'pointer'
  },
  '&:disabled': {
    backgroundColor: '$sage2',
    boxShadow: 'inset 0 0 0 1px $colors$sage7',
    color: '$sage8',
    cursor: 'not-allowed'
  },
  variants: {
    size: {
      small: {
        borderRadius: '$1',
        height: '$5',
        px: '$2',
        fontSize: '$1'
      },
      medium: {
        borderRadius: '$2',
        height: '$6',
        px: '$3',
        fontSize: '$3'
      },
      large: {
        borderRadius: '$2',
        height: '$7',
        px: '$4',
        fontSize: '$4'
      }
    }
  }
});

const variants = { solid, unstyled, outline, ghost, link };

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      colorScheme = 'sage',
      size = 'small',
      children,
      disabled = false,
      ...props
    },
    forwardedRef
  ) => (
    <StyledButton
      ref={forwardedRef}
      css={{ ...variants[variant](colorScheme) }}
      size={size}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  )
);
Button.displayName = 'Button';
