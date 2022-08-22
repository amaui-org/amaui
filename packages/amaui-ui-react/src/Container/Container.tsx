import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    width: '100%'
  },

  // alignment
  alignment_start: {
    marginInlineEnd: 'auto'
  },

  alignment_center: {
    marginInline: 'auto'
  },

  alignment_end: {
    marginInlineStart: 'auto'
  },

  // padding
  // vertical
  padding_vertical_both: {
    paddingBlock: '16px'
  },

  padding_vertical_start: {
    paddingBlockStart: '16px'
  },

  padding_vertical_end: {
    paddingBlockEnd: '16px'
  },

  padding_vertical_none: {
    paddingBlock: '0px'
  },

  // horizontal
  padding_horizontal_both: {
    paddingInline: '16px'
  },

  padding_horizontal_start: {
    paddingInlineStart: '16px'
  },

  padding_horizontal_end: {
    paddingInlineEnd: '16px'
  },

  padding_horizontal_none: {
    paddingInline: '0px'
  },

  // maxWidth
  maxWidth_xxs: { maxWidth: '320px' },

  maxWidth_xs: { maxWidth: '400px' },

  maxWidth_sm: { maxWidth: '480px' },

  maxWidth_rg: { maxWidth: '560px' },

  maxWidth_lg: { maxWidth: '800px' },

  maxWidth_xl: { maxWidth: '1120px' },

  maxWidth_xxl: { maxWidth: '1360px' },

  maxWidth_unset: { maxWidth: 'unset' },

  // full width
  fullWidth: {
    width: '100%',
    maxWidth: 'unset'
  },
}), { name: 'AmauiContainer' });

const Container = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiContainer?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    Component = 'div',

    alignment = 'center',
    paddingVertical = 'none',
    paddingHorizontal = 'both',
    fullWidth,
    maxWidth = 'rg',

    style,
    className,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  if (!classes[maxWidth]) styles.root.maxWidth = maxWidth;

  if (!['both', 'start', 'end', 'none'].includes(paddingHorizontal)) styles.root.paddingInline = paddingHorizontal;

  if (!['both', 'start', 'end', 'none'].includes(paddingVertical)) styles.root.paddingBlock = paddingVertical;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Container', theme) && [
          'AmauiContainer-root'
        ],

        className,
        classes.root,
        classes[`alignment_${alignment}`],
        classes[`maxWidth_${maxWidth}`],
        classes[`padding_vertical_${paddingVertical}`],
        classes[`padding_horizontal_${paddingHorizontal}`],
        fullWidth && classes.fullWidth
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {children}
    </Component>
  );
});

Container.displayName = 'AmauiContainer';

export default Container;
