import React from 'react';

import { classNames, style as styleMethod, TTypographyItem, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod((theme: AmauiTheme) => ({
  root: {
    // reset
    margin: '0',
    padding: '0',
    border: '0',
    outline: 'none',
    fontSize: '100%',
    background: 'transparent',
    boxSizing: 'border-box',
    touchAction: 'manipulation'
  },

  color_inherit: { color: 'inherit' },

  color_themed: { color: theme.palette.light ? theme.palette.text.default.primary : theme.palette.text.default.secondary },

  color_inverted: { color: theme.palette.background.default.primary },

  color_default: { color: theme.palette.text.default.primary },

  color_primary: { color: theme.palette.text.default.primary },

  color_secondary: { color: theme.palette.text.default.secondary },

  color_tertiary: { color: theme.palette.text.default.tertiary },

  color_quaternary: { color: theme.palette.text.default.quaternary },

  version_d1: { ...theme.typography.values.d1 },

  version_d2: { ...theme.typography.values.d2 },

  version_d3: { ...theme.typography.values.d3 },

  version_h1: { ...theme.typography.values.h1 },

  version_h2: { ...theme.typography.values.h2 },

  version_h3: { ...theme.typography.values.h3 },

  version_t1: { ...theme.typography.values.t1 },

  version_t2: { ...theme.typography.values.t2 },

  version_t3: { ...theme.typography.values.t3 },

  version_l1: { ...theme.typography.values.l1 },

  version_l2: { ...theme.typography.values.l2 },

  version_l3: { ...theme.typography.values.l3 },

  version_b1: { ...theme.typography.values.b1 },

  version_b2: { ...theme.typography.values.b2 },

  version_b3: { ...theme.typography.values.b3 },

  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'AmauiType' });

export interface IType extends IBaseElement {
  color?: 'inherit' | 'themed' | 'inverted' | 'default' | 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  version?: TTypographyItem;
  size?: string | number;

  disabled?: boolean;
}

const Type = React.forwardRef((props_: IType, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiType?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    color = 'inherit',
    version = 'b2',
    size,

    disabled,

    Component: Component_,

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {

    }
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

        className,
        classes.root,
        classes[`version_${version}`],
        classes[`color_${color}`],
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
