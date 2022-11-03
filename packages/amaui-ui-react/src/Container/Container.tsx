import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import useMediaQuery from '../useMediaQuery';

import { IBaseElement, staticClassName, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
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

  maxWidth_sm: { maxWidth: '600px' },

  maxWidth_rg: { maxWidth: '960px' },

  maxWidth_lg: { maxWidth: '1240px' },

  maxWidth_xl: { maxWidth: '1920px' },

  maxWidth_unset: { maxWidth: 'unset' },

  // full width
  fullWidth: {
    width: '100%',
    maxWidth: 'unset'
  },
}), { name: 'AmauiContainer' });

export interface IContainer extends IBaseElement {
  alignment?: 'start' | 'center' | 'end';

  paddingVertical?: 'both' | 'start' | 'end' | 'none';

  paddingHorizontal?: 'both' | 'start' | 'end' | 'none';

  fullWidth?: boolean;

  maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset';
}

const Container = React.forwardRef((props_: IContainer, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiContainer?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key]);
  });

  const { classes } = useStyle(props);

  const {
    alignment: alignment_,

    paddingVertical: paddingVertical_,

    paddingHorizontal: paddingHorizontal_,

    fullWidth: fullWidth_,

    maxWidth: maxWidth_,

    Component = 'div',

    style,
    className,

    children,

    ...other
  } = props;

  const alignment = valueBreakpoints(alignment_, 'center', breakpoints, theme);
  const paddingVertical = valueBreakpoints(paddingVertical_, 'none', breakpoints, theme);
  const paddingHorizontal = valueBreakpoints(paddingHorizontal_, 'both', breakpoints, theme);
  const fullWidth = valueBreakpoints(fullWidth_, undefined, breakpoints, theme);
  const maxWidth = valueBreakpoints(maxWidth_, undefined, breakpoints, theme);

  const styles: any = {
    root: {

    }
  };

  if (!classes[maxWidth]) styles.root.maxWidth = maxWidth;

  if (!['both', 'start', 'end', 'none'].includes(paddingHorizontal)) styles.root.paddingInline = paddingHorizontal;

  if (!['both', 'start', 'end', 'none'].includes(paddingVertical)) styles.root.paddingBlock = paddingVertical;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Container', theme) && [
          'AmauiContainer-root',
          `AmauiContainer-alignment-${alignment}`,
          `AmauiContainer-max-width-${maxWidth}`,
          `AmauiContainer-padding-vertical-${paddingVertical}`,
          `AmauiContainer-padding-horizontal-${paddingHorizontal}`,
          `AmauiContainer-full-width-${fullWidth}`
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
