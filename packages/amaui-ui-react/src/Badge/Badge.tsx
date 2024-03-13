import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import { staticClassName } from '../utils';
import { IBaseElement, IColor, ITonal } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'inline-flex',
    position: 'relative'
  },

  badge: {
    position: 'absolute',
    padding: '2px 6px',
    lineHeight: '1px',
    borderRadius: '140px',
    transition: theme.methods.transitions.make('transform'),
    pointerEvents: 'none',
    userSelect: 'none',

    ...theme.typography.values.l3,

    fontSize: `${10 / 16}rem`
  },

  // Vertical & horizontal
  horizontal_left: {
    insetInlineStart: '0px'
  },

  horizontal_right: {
    insetInlineEnd: '0px'
  },

  vertical_top: {
    top: '0px'
  },

  vertical_horizontal_top_right: {
    transform: `translate(${theme.direction === 'rtl' ? '-' : ''}50%, -50%)`
  },

  vertical_horizontal_top_left: {
    transform: `translate(${theme.direction === 'rtl' ? '' : '-'}50%, -50%)`
  },

  vertical_bottom: {
    bottom: '0px'
  },

  vertical_horizontal_bottom_right: {
    transform: `translate(${theme.direction === 'rtl' ? '-' : ''}50%, 50%)`
  },

  vertical_horizontal_bottom_left: {
    transform: `translate(${theme.direction === 'rtl' ? '' : '-'}50%, 50%)`
  },

  indicator: {
    height: '8px',
    width: '8px',
    padding: '0',
    borderRadius: `${theme.shape.radius.unit * 0.5}px`,
  }
}), { name: 'amaui-Badge' });

export interface IBadge extends IBaseElement {
  tonal?: ITonal;
  color?: IColor;

  value?: number;

  max?: number;
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right';
  indicator?: boolean;

  element?: any;
}

const Badge: React.FC<IBadge> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiBadge?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = false,
    color = 'primary',

    value: value_,

    max,
    vertical = 'top',
    horizontal = 'right',
    indicator,

    element,

    Component = 'span',

    className,

    children,

    ...other
  } = props;

  const styles: any = {
    badge: {}
  };

  let value: any = value_;

  if (max !== undefined && value > max) value = `${max}+`;

  const useValue = value !== undefined || indicator || element;

  const classesBadge = classNames([
    staticClassName('Badge', theme) && [
      'amaui-Badge-badge'
    ],

    classes.badge,
    classes[`vertical_${vertical}`],
    classes[`horizontal_${horizontal}`],
    classes[`vertical_horizontal_${vertical}_${horizontal}`],
    indicator && classes.indicator
  ]);

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Badge', theme) && [
          'amaui-Badge-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}

      {useValue && (element ? React.cloneElement(element, {
        className: classNames([
          classesBadge,
          element.props?.className
        ])
      }) : (
        <Surface
          tonal={tonal}

          color={color}

          Component='span'

          className={classesBadge}

          style={styles.badge}
        >
          {value}
        </Surface>
      ))}
    </Component>
  );
});

Badge.displayName = 'amaui-Badge';

export default Badge;
