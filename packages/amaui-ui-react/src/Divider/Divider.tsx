import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';

const useStyle = style(theme => ({
  root: {
    // Reset
    margin: 0,
    border: 'none',

    display: 'flex',
    flexShrink: 0,
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.visual_contrast.default.opacity.divider),
    transition: theme.methods.transitions.make('background'),

    // Orientation
    '&$horizontal': {
      height: '1px',
      width: '100%',

      '&$inset': {
        marginLeft: `${theme.space.unit * 9}px`,
        width: `calc(100% - ${theme.space.unit * 9}px)`
      },

      '&$middle': {
        margin: `0 ${theme.methods.space.value('rg', 'px')}`,
        width: `calc(100% - ${theme.methods.space.value('rg') * 2}px)`
      }
    },

    '&$vertical': {
      height: '100%',
      width: '1px',

      '&$middle': {
        margin: `${theme.methods.space.value('rg', 'px')} 0`,
        height: `calc(100% - ${theme.methods.space.value('rg') * 2}px)`
      }
    }
  },

  rootWithChildren: {
    display: 'flex',

    // Reset
    height: 'unset',
    width: 'unset',
    margin: 0,
    border: 'none',

    // Orientation
    '&$horizontal': {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',

      '&$middle': {
        margin: `0 ${theme.methods.space.value('rg', 'px')}`,
        width: `calc(100% - ${theme.methods.space.value('rg') * 2}px)`
      }
    },

    '&$vertical': {
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',

      '&$middle': {
        margin: `${theme.methods.space.value('rg', 'px')} 0`,
        height: `calc(100% - ${theme.methods.space.value('rg') * 2}px)`
      }
    }
  },

  text: {
    flex: '0 0 auto',

    // Orientation
    '&$horizontal': {
      margin: `0 ${theme.methods.space.value('rg', 'px')}`,
    },

    '&$vertical': {
      margin: `${theme.methods.space.value('rg', 'px')} 0`,
    }
  },

  divider: {
    flex: '0 1 100%',

    // Orientation
    '&$horizontal': {
      height: '1px'
    },

    '&$vertical': {
      width: '1px'
    }
  }
}), { name: 'AmauiDivider' });

const Divider = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle(props);

  const theme = useAmauiTheme();

  const {
    className,
    inset,
    middle,
    color = props.tonal ? 'neutral' : 'default',
    tonal,
    opacity = theme.palette.visual_contrast.default.opacity.divider,
    alignment = 'center',
    orientation = 'horizontal',
    Component: Component_ = 'hr',
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

  if (tonal) {
    const palette = !theme.palette.color[color] && theme.methods.color(color);

    if (!children) styles.root.background = theme.methods.palette.color.colorToRgb(theme.methods.palette.color.value(color, 30, true, palette), opacity);
    else styles.divider.background = theme.methods.palette.color.colorToRgb(theme.methods.palette.color.value(color, 30, true, palette), opacity);
  }
  else {
    if (color === 'default') {
      if (!children) styles.root.background = theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, opacity);
      else styles.divider.background = theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, opacity);
    }
    else {
      const palette: any = theme.palette.color[color] || theme.methods.color(color);

      if (!children) styles.root.background = theme.methods.palette.color.colorToRgb(palette.main, opacity);
      else styles.divider.background = theme.methods.palette.color.colorToRgb(palette.main, opacity);
    }
  }

  if (alignment === 'start') styles.start.flexBasis = '15%';

  if (alignment === 'end') styles.end.flexBasis = '15%';

  return (
    <Component
      ref={ref}

      className={classNames([
        className,
        classes[children ? 'rootWithChildren' : 'root'],
        classes[color],
        classes[orientation],
        inset && classes.inset,
        middle && classes.middle
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children && <>
        <div
          className={classNames([
            classes.divider,
            classes[orientation]
          ])}

          style={{
            ...styles.divider,

            ...styles.start
          }}
        />

        <Type
          version='b2'

          className={classNames([
            classes.text,
            classes[orientation]
          ])}
        >
          {children}
        </Type>

        <div
          className={classNames([
            classes.divider,
            classes[orientation]
          ])}


          style={{
            ...styles.divider,

            ...styles.end
          }}
        />
      </>}
    </Component>
  );
});

export default Divider;
