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
    position: 'relative',
    flex: '0 0 auto',
    alignSelf: 'stretch',
    minWidth: '70px',
    maxWidth: '240px',
    padding: '16px 32px',
    userSelect: 'none',
    cursor: 'pointer',
    opacity: theme.palette.visual_contrast.default.opacity.secondary,
    transition: theme.methods.transitions.make('opacity')
  },

  type: {
    maxHeight: '2.15rem'
  },

  line: {
    overflow: 'hidden'
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

    version = 'primary',

    value,
    active,
    index,

    label,

    icon,
    iconPosition = 'start',

    onBlur: onBlur_,
    onFocus: onFocus_,

    activateOnFocus,

    onChange,

    Component = 'button',
    LineProps = {},

    disabled,

    className,

    children,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(false);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    if (!disabled) setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, [disabled, onBlur_]);

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    if (!disabled) {
      setFocus(true);

      if (activateOnFocus) onChange(value, index);
    }

    if (is('function', onFocus_)) onFocus_(event);
  }, [activateOnFocus, value, disabled, onFocus_]);

  if (icon !== undefined) {
    LineProps.direction = iconPosition === 'start' ? 'row' : iconPosition === 'top' ? 'column' : iconPosition === 'end' ? 'row-reverse' : 'column-reverse';
  }

  return (
    <Surface
      ref={ref}

      tabIndex={!disabled ? 0 : -1}

      tonal={tonal}

      color={color}

      Component={Component}

      onBlur={onBlur}

      onFocus={onFocus}

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
      <Interaction
        pulse={focus}
      />

      <Line
        gap={1}

        direction='row'

        align='center'

        justify='center'

        className={classNames([
          staticClassName('Tab', theme) && [
            'AmauiTab-line'
          ],

          classes.line
        ])}

        {...LineProps}
      >
        {icon}

        {label !== undefined && (
          is('simple', label) ? (
            <Type
              version='l2'

              className={classNames([
                staticClassName('Tab', theme) && [
                  'AmauiTab-type'
                ],

                classes.type
              ])}
            >
              {label}
            </Type>
          ) : label
        )}

        {children !== undefined && (
          is('simple', children) ? (
            <Type
              version='l2'

              className={classNames([
                staticClassName('Tab', theme) && [
                  'AmauiTab-type'
                ],

                classes.type
              ])}
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
