import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { styled, CSS } from '../theme/stitches.config';

import { Box } from './Box';

type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root> & {
  trigger: 'onClick' | 'hover';
  children: React.ReactNode;
};

export function Popover({
  trigger = 'onClick',
  children,
  ...props
}: PopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  function open() {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  }

  function close() {
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  }

  function onOpenChange() {
    if (trigger === 'onClick') {
      setIsOpen(!isOpen);
    }
  }
  return (
    <Box onMouseEnter={() => open()} onMouseLeave={() => close()}>
      <PopoverPrimitive.Root
        open={isOpen}
        onOpenChange={() => onOpenChange()}
        {...props}
      >
        {children}
      </PopoverPrimitive.Root>
    </Box>
  );
}

const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: '$1',
  maxWidth: 265,
  '&:focus': {
    outline: 'none'
  }
});

type PopoverContentPrimitiveProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
>;

type PopoverContentProps = PopoverContentPrimitiveProps & {
  css?: CSS;
  hideArrow?: boolean;
};

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  PopoverContentProps
>(({ children, hideArrow, ...props }, fowardedRef) => (
  <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
    {children}
    {!hideArrow && (
      <Box
        css={{
          color: props?.css?.backgroundColor ?? props?.css?.bg ?? '$panel'
        }}
      >
        <PopoverPrimitive.Arrow
          width={11}
          height={5}
          offset={5}
          style={{ fill: 'currentcolor' }}
        />
      </Box>
    )}
  </StyledContent>
));
PopoverContent.displayName = 'PopoverContent';

export const PopoverTrigger = PopoverPrimitive.Trigger;
PopoverTrigger.displayName = 'PopoverTrigger';

export const PopoverClose = PopoverPrimitive.Close;
PopoverClose.displayName = 'PopoverClose';
