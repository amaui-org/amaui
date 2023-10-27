import React from 'react';

import { classNames, style as styleMethod, TTypographyItem, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName, TColor } from '../utils';

const useStyle = styleMethod(theme => ({
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

  // Color
  color_inherit: { color: 'inherit' },

  color_themed: { color: theme.palette.light ? theme.palette.text.default.primary : theme.palette.text.default.secondary },

  color_inverted: { color: theme.palette.background.default.primary },

  color_default: { color: theme.palette.text.default.primary },

  color_primary: { color: theme.palette.text.primary.primary },

  color_secondary: { color: theme.palette.text.secondary.primary },

  color_tertiary: { color: theme.palette.text.tertiary.primary },

  color_quaternary: { color: theme.palette.text.quaternary.primary },

  color_success: { color: theme.palette.text.success.primary },

  color_info: { color: theme.palette.text.info.primary },

  color_warning: { color: theme.palette.text.warning.primary },

  color_error: { color: theme.palette.text.error.primary },

  color_neutral: { color: theme.palette.text.neutral.primary },

  // Priority
  priority_primary: { opacity: theme.palette.visual_contrast.default.opacity.primary },

  priority_secondary: { opacity: theme.palette.visual_contrast.default.opacity.secondary },

  priority_tertiary: { opacity: theme.palette.visual_contrast.default.opacity.tertiary },

  priority_quaternary: { opacity: theme.palette.visual_contrast.default.opacity.quaternary },

  // Version
  version_d1: { ...theme.typography.values.d1 },

  version_d1_responsive: { fontSize: `clamp(2.5rem, 2.8274vw, ${theme.typography.values.d1.fontSize})` },

  version_d2: { ...theme.typography.values.d2 },

  version_d2_responsive: { fontSize: `clamp(2.25rem, 2.232vw, ${theme.typography.values.d2.fontSize})` },

  version_d3: { ...theme.typography.values.d3 },

  version_d3_responsive: { fontSize: `clamp(2rem, 1.736vw, ${theme.typography.values.d3.fontSize})` },

  version_h1: { ...theme.typography.values.h1 },

  version_h1_responsive: { fontSize: `clamp(1.75rem, 1.5874vw, ${theme.typography.values.h1.fontSize})` },

  version_h2: { ...theme.typography.values.h2 },

  version_h2_responsive: { fontSize: `clamp(1.5rem, 1.3394vw, ${theme.typography.values.h2.fontSize})` },

  version_h3: { ...theme.typography.values.h3 },

  version_h3_responsive: { fontSize: `clamp(1.25rem, 1.1904vw, ${theme.typography.values.h3.fontSize})` },

  version_t1: { ...theme.typography.values.t1 },

  version_t1_responsive: { fontSize: `clamp(1.125rem, 1.0415vw, ${theme.typography.values.t1.fontSize})` },

  version_t2: { ...theme.typography.values.t2 },

  version_t2_responsive: { fontSize: `clamp(1rem, 0.7935vw, ${theme.typography.values.t2.fontSize})` },

  version_t3: { ...theme.typography.values.t3 },

  version_t3_responsive: { fontSize: `clamp(0.875rem, 0.6944vw, ${theme.typography.values.t3.fontSize})` },

  version_l1: { ...theme.typography.values.l1 },

  version_l1_responsive: { fontSize: `clamp(1rem, 0.7935vw, ${theme.typography.values.l1.fontSize})` },

  version_l2: { ...theme.typography.values.l2 },

  version_l2_responsive: { fontSize: `clamp(0.875rem, 0.6944vw, ${theme.typography.values.l2.fontSize})` },

  version_l3: { ...theme.typography.values.l3 },

  version_l3_responsive: { fontSize: `clamp(0.75rem, 0.5954vw, ${theme.typography.values.l3.fontSize})` },

  version_b1: { ...theme.typography.values.b1 },

  version_b1_responsive: { fontSize: `clamp(1rem, 0.7935vw, ${theme.typography.values.b1.fontSize})` },

  version_b2: { ...theme.typography.values.b2 },

  version_b2_responsive: { fontSize: `clamp(0.875rem, 0.6944vw, ${theme.typography.values.b2.fontSize})` },

  version_b3: { ...theme.typography.values.b3 },

  version_b3_responsive: { fontSize: `clamp(0.75rem, 0.5954vw, ${theme.typography.values.b3.fontSize})` },

  version_m1: { ...theme.typography.values.m1 },

  version_m1_responsive: { fontSize: `clamp(1rem, 0.7935vw, ${theme.typography.values.m1.fontSize})` },

  version_m2: { ...theme.typography.values.m2 },

  version_m2_responsive: { fontSize: `clamp(0.875rem, 0.6944vw, ${theme.typography.values.m2.fontSize})` },

  version_m3: { ...theme.typography.values.m3 },

  version_m3_responsive: { fontSize: `clamp(0.75rem, 0.5954vw, ${theme.typography.values.m3.fontSize})` },

  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'amaui-Type' });

export interface IType extends IBaseElement {
  color?: TColor;

  responsive?: boolean;

  priority?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';

  version?: TTypographyItem;

  size?: string | number;

  disabled?: boolean;
}

const Type = React.forwardRef((props_: IType, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiType?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    color = 'inherit',

    responsive = true,

    priority,

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
    p: ['b1', 'b2', 'b3', 'm1', 'm2', 'm3']
  };

  Object.keys(map).forEach(item => {
    if (map[item].includes(version) && !Component) Component = item;
  });

  if (!Component) Component = 'p';

  if (!classes[`color_${color}`]) {
    styles.root.color = color;
  }

  if (size !== undefined) styles.root.fontSize = size;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Type', theme) && [
          'amaui-Type-root',
          disabled && `amaui-Type-disabled`
        ],

        className,
        classes.root,
        classes[`version_${version}`],
        responsive && classes[`version_${version}_responsive`],
        classes[`color_${color}`],
        priority && classes[`priority_${priority}`],
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

Type.displayName = 'amaui-Type';

export default Type;
