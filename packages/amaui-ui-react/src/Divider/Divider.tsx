import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';

import { staticClassName } from '../utils';
import Surface from '../Surface';

const useStyle = style(theme => ({
  root: {
    // Reset
    margin: 0,
    border: 'none',

    display: 'flex',
    flexShrink: 0,
    background: 'currentColor',
    opacity: theme.palette.visual_contrast.default.opacity.divider,
    transition: theme.methods.transitions.make('background')
  },

  inset: {
    marginLeft: `72px`,
    width: `calc(100% - 72px)`
  },

  orientation_vertical: {
    margin: '0 8px',
    height: '100%',
    width: '1px'
  },

  orientation_vertical_middle: {
    margin: `16px 8px`,
    height: `calc(100% - 32px)`
  },

  // flex
  flex: {
    alignSelf: 'stretch',
    height: 'auto'
  },

  // Orientation
  orientation_horizontal: {
    margin: '8px 0',
    height: '1px',
    width: '100%'
  },

  orientation_horizontal_middle: {
    margin: `8px 16px`,
    width: `calc(100% - 32px)`
  },

  rootWithChildren: {
    display: 'flex',
    opacity: 1,

    // Reset
    height: 'unset',
    width: 'unset',
    margin: 0,
    border: 'none'
  },

  // Orientation
  rootWithChildren_orientationn_horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },

  rootWithChildren_orientationn_horizontal_middle: {
    margin: `0 16px`,
    width: `calc(100% - 32px)`
  },

  rootWithChildren_orientationn_vertical: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
  },

  rootWithChildren_orientationn_vertical_middle: {
    margin: `16px 0`,
    height: `calc(100% - 32px)`
  },

  text: {
    flex: '0 0 auto'
  },

  // Orientation
  text_horizontal: {
    margin: `0 16px`,
  },

  text_vertical: {
    margin: `16px 0`,
  },

  divider: {
    flex: '0 1 100%',
    background: 'currentColor',
    opacity: theme.palette.visual_contrast.default.opacity.divider
  },

  // Orientation
  divider_orientation_horizontal: {
    height: '1px'
  },

  divider_orientation_vertical: {
    width: '1px'
  },

  orientation_horizontal_padding: {
    marginInline: '16px',
    width: 'calc(100% - 32px)'
  },

  orientation_vertical_padding: {
    marginBlock: '16px',
    height: 'calc(100% - 32px)'
  },

  color_inherit: {
    color: 'inherit'
  }
}), { name: 'AmauiDivider' });

const Divider = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDivider?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color = 'default',
    inset,
    middle,
    padding,
    opacity = theme.palette.visual_contrast.default.opacity.divider,
    alignment = 'center',
    orientation = 'horizontal',
    Component: Component_ = 'hr',
    flex,

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {},
    divider: {},
    start: {},
    end: {}
  };

  let Component = Component_;

  if (children && Component === 'hr') Component = 'div';

  if (alignment === 'start') styles.start.flexBasis = '15%';

  if (alignment === 'end') styles.end.flexBasis = '15%';

  return (
    <Surface
      ref={ref}

      version='text'

      tonal={tonal}

      color={color}

      Component={Component}

      className={classNames([
        staticClassName('Divider', theme) && [
          'AmauiDivider-root',
          `AmauiDivider-alignment-${alignment}`,
          `AmauiDivider-orientation-${orientation}`,
          flex && `AmauiDivider-flex`,
          inset && `AmauiDivider-inset`,
          middle && `AmauiDivider-middle`,
          padding && `AmauiDivider-padding`,
          children && `AmauiDivider-children`,
          color === 'inherit' && `AmauiDivider-color-inherit`
        ],

        className,
        classes[children ? 'rootWithChildren' : 'root'],
        classes[`${children ? 'rootWithChildren_' : ''}orientation_${orientation}`],
        flex && classes.flex,
        inset && classes.inset,
        middle && classes[`${children ? `rootWithChildren_` : ''}orientation_${orientation}_middle`],
        padding && classes[`orientation_${orientation}_padding`],
        color === 'inherit' && classes.color_inherit
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children && <>
        <Surface
          version='text'

          tonal={tonal}

          color={color}

          className={classNames([
            staticClassName('Divider', theme) && [
              'AmauiDivider-divider'
            ],

            classes.divider,
            classes[`divider_orientation_${orientation}`]
          ])}

          style={{
            ...styles.divider,

            ...styles.start
          }}
        />

        <Type
          version='b2'

          className={classNames([
            staticClassName('Divider', theme) && [
              'AmauiDivider-text'
            ],

            classes.text,
            classes[`text_${orientation}`]
          ])}
        >
          {children}
        </Type>

        <Surface
          version='text'

          tonal={tonal}

          color={color}

          className={classNames([
            staticClassName('Divider', theme) && [
              'AmauiDivider-divider'
            ],

            classes.divider,
            classes[`divider_orientation_${orientation}`]
          ])}


          style={{
            ...styles.divider,

            ...styles.end
          }}
        />
      </>}
    </Surface>
  );
});

Divider.displayName = 'AmauiDivider';

export default Divider;
