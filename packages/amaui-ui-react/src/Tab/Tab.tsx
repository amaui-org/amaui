import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Surface from '../Surface';
import Line from '../Line';
import Interaction from '../Interaction';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    flex: '0 0 auto',
    minWidth: '70px',
    maxWidth: '240px',
    padding: '16px 32px',
    userSelect: 'none',
    cursor: 'pointer',
    opacity: theme.palette.visual_contrast.default.opacity.secondary,
    transition: theme.methods.transitions.make('opacity')
  },

  active: {
    opacity: 1
  },

  disabled: {
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    cursor: 'default'
  }
}), { name: 'AmauiTab' });

const Tab = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTab?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    active,

    label,

    icon,
    iconPosition = 'start',

    Component = 'div',
    LineProps = {},

    disabled,

    className,

    children,

    ...other
  } = props;

  if (icon !== undefined) {
    LineProps.direction = iconPosition === 'start' ? 'row' : iconPosition === 'top' ? 'column' : iconPosition === 'end' ? 'row-reverse' : 'column-reverse';
  }

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      Component={Component}

      className={classNames([
        staticClassName('Tab', theme) && [
          'AmauiTab-root',
          active && `AmauiTab-active`,
          disabled && `AmauiTab-disabled`
        ],

        className,
        classes.root,
        active && classes.active,
        disabled && classes.disabled
      ])}

      {...other}
    >
      <Interaction />

      <Line
        direction='row'

        align='center'

        justify='center'

        {...LineProps}
      >
        {icon}

        {label !== undefined && (
          is('simple', label) ? (
            <Type
              version='b2'
            >
              {label}
            </Type>
          ) : label
        )}

        {children !== undefined && (
          is('simple', children) ? (
            <Type
              version='b2'
            >
              {children}
            </Type>
          ) : children
        )}
      </Line>
    </Surface>
  );
});

Tab.displayName = 'AmauiTab';

export default Tab;
