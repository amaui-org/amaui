import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    // reset
    margin: '0',
    padding: '0'
  },

  inherit: { color: 'inherit' },

  primary: { color: theme.palette.text.default.primary },

  secondary: { color: theme.palette.text.default.secondary },

  tertiary: { color: theme.palette.text.default.tertiary },

  quaternary: { color: theme.palette.text.default.quaternary },

  d1: { ...theme.typography.values.d1 },

  d2: { ...theme.typography.values.d2 },

  d3: { ...theme.typography.values.d3 },

  h1: { ...theme.typography.values.h1 },

  h2: { ...theme.typography.values.h2 },

  h3: { ...theme.typography.values.h3 },

  t1: { ...theme.typography.values.t1 },

  t2: { ...theme.typography.values.t2 },

  t3: { ...theme.typography.values.t3 },

  l1: { ...theme.typography.values.l1 },

  l2: { ...theme.typography.values.l2 },

  l3: { ...theme.typography.values.l3 },

  b1: { ...theme.typography.values.b1 },

  b2: { ...theme.typography.values.b2 },

  b3: { ...theme.typography.values.b3 },

  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'AmauiType' });

const Type = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiType?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    color = 'inherit',
    version = 'b2',
    size,
    Component: Component_,
    disabled,

    className,
    style = {},

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  let Component: any = Component_;

  const map = {
    h1: ['d1', 'd2', 'd3', 'h1'],
    h2: ['h2'],
    h3: ['h3'],
    h4: ['h4', 't1', 't2', 't3'],
    h5: ['h5', 'l1', 'l2', 'l3'],
    p: ['b1', 'b2', 'b3']
  };

  Object.keys(map).forEach(item => {
    if (map[item].includes(version) && !Component) Component = item;
  });

  if (!Component) Component = 'p';

  if (size !== undefined) styles.root.fontSize = size;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Type', theme) && [
          'AmauiType-root',
          `AmauiType-version-${version}`,
          `AmauiType-color-${color}`,
          disabled && `AmauiType-disabled`
        ],

        classes.root,
        className,
        classes[version],
        classes[color],
        disabled && classes.disabled
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children}
    </Component>
  );
});

Type.displayName = 'AmauiType';

export default Type;
