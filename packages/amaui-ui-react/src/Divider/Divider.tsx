import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    // Reset
    margin: '0',
    border: 'none',

    display: 'flex',
    flexShrink: '0',
    opacity: theme.palette.visual_contrast.default.opacity.divider,
    transition: theme.methods.transitions.make('background')
  },

  divider_tonal: {
    opacity: '1'
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
    opacity: '1',
    color: theme.palette.text.default.primary,
    background: 'transparent',

    // Reset
    height: 'unset',
    width: 'unset',
    margin: '0',
    border: 'none'
  },

  // Orientation
  rootWithChildren_orientation_horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },

  rootWithChildren_orientation_horizontal_middle: {
    margin: `0 16px`,
    width: `calc(100% - 32px)`
  },

  rootWithChildren_orientation_vertical: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
  },

  rootWithChildren_orientation_vertical_middle: {
    margin: `16px 0`,
    height: `calc(100% - 32px)`
  },

  // flex
  flex_orientation_horizontal: {
    flex: '1 1 auto',
    width: 'auto'
  },

  flex_orientation_vertical: {
    flex: '1 1 auto'
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
    opacity: theme.palette.visual_contrast.default.opacity.divider,
    color: 'inherit',
    background: 'currentColor'
  },

  inset: {
    marginLeft: `72px`,
    width: `calc(100% - 72px)`
  }
}), { name: 'amaui-Divider' });

export interface IDivider extends ISurface {
  inset?: boolean;
  middle?: boolean;
  padding?: number;
  opacity?: number;
  alignment?: 'start' | 'center' | 'end';
  orientation?: 'vertical' | 'horizontal';
  flex?: boolean;
}

const Divider: React.FC<IDivider> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiDivider?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    tonal = true,
    color = 'inverted',

    inset,
    middle,
    padding,
    opacity = theme.palette.visual_contrast.default.opacity.divider,
    alignment = 'center',
    orientation = 'horizontal',
    flex,

    Component: Component_ = 'hr',

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {

    },
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

      version='filled'

      tonal={tonal}

      color={color}

      Component={Component}

      className={classNames([
        staticClassName('Divider', theme) && [
          'amaui-Divider-root'
        ],

        className,
        classes[children ? 'rootWithChildren' : 'root'],
        classes[`${children ? 'rootWithChildren_' : ''}orientation_${orientation}`],
        flex && classes[`flex_orientation_${orientation}`],
        inset && classes.inset,
        middle && classes[`${children ? `rootWithChildren_` : ''}orientation_${orientation}_middle`],
        padding && classes[`orientation_${orientation}_padding`],
        color === 'inherit' && classes.color_inherit,
        tonal && classes.divider_tonal
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children && <>
        <Surface
          version='filled'

          tonal={tonal}

          color={color}

          className={classNames([
            staticClassName('Divider', theme) && [
              'amaui-Divider-divider'
            ],

            classes.divider,
            classes[`divider_orientation_${orientation}`],
            tonal && classes.divider_tonal
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
              'amaui-Divider-text'
            ],

            classes.text,
            classes[`text_${orientation}`]
          ])}
        >
          {children}
        </Type>

        <Surface
          version='filled'

          tonal={tonal}

          color={color}

          className={classNames([
            staticClassName('Divider', theme) && [
              'amaui-Divider-divider'
            ],

            classes.divider,
            classes[`divider_orientation_${orientation}`],
            tonal && classes.divider_tonal
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

Divider.displayName = 'amaui-Divider';

export default Divider;
