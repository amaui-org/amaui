import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Surface from '../Surface';
import Line from '../Line';
import Interaction from '../Interaction';

import { staticClassName, TElement, TPropsAny } from '../utils';
import { ISurface } from '../Surface/Surface';

const useStyle = styleMethod(theme => ({
  root: {
    // Reset
    fontFamily: 'inherit',
    '-webkit-appearance': 'none',
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0',
    overflow: 'visible',
    textTransform: 'none',

    position: 'relative',
    flex: '0 0 auto',
    alignSelf: 'stretch',
    userSelect: 'none',
    cursor: 'pointer',
    opacity: theme.palette.visual_contrast.default.opacity.secondary,
    transition: theme.methods.transitions.make('opacity')
  },

  size_small: {
    padding: '12px 24px',
    minWidth: '40px',
    maxWidth: '200px'
  },

  size_regular: {
    padding: '16px 32px',
    minWidth: '70px',
    maxWidth: '240px'
  },

  size_large: {
    padding: '20px 40px',
    minWidth: '100px',
    maxWidth: '280px'
  },

  type_small: {
    maxHeight: '2rem'
  },

  type_regular: {
    maxHeight: '2.15rem'
  },

  type_large: {
    maxHeight: '2.6rem'
  },

  line: {
    overflow: 'hidden'
  },

  active: {
    opacity: '1'
  },

  disabled: {
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    cursor: 'default'
  }
}), { name: 'amaui-Tab' });

export interface ITab extends Omit<ISurface, 'version'> {
  version?: 'primary' | 'secondary';

  size?: 'small' | 'regular' | 'large';

  value?: number;
  onChange?: (value: number, index: number) => any;

  active?: boolean;
  index?: number;

  name?: TElement;
  label?: TElement;

  icon?: TElement;
  iconPosition?: 'start' | 'top' | 'bottom' | 'end';

  activateOnFocus?: boolean;

  disabled?: boolean;

  onBlur?: (event: React.FocusEvent<any>) => any;
  onFocus?: (event: React.FocusEvent<any>) => any;

  LineProps?: TPropsAny;
}

const Tab: React.FC<ITab> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTab?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    version = 'primary',

    size = 'regular',

    value,
    onChange,

    active,
    index,

    name,
    label: label_,

    icon,
    iconPosition = 'start',

    activateOnFocus,

    disabled,

    onBlur: onBlur_,
    onFocus: onFocus_,

    LineProps = {},

    Component = 'button',

    className,

    children,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(false);

  const label = name !== undefined ? name : label_;

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

  let typeVersion = 'l2';

  if (size === 'large') typeVersion = 'l1';
  else if (size === 'small') typeVersion = 'l3';

  return (
    <Surface
      ref={ref}

      tabIndex={!disabled ? 0 : -1}

      tonal={tonal}

      color={color}

      onBlur={onBlur}

      onFocus={onFocus}

      role='tab'

      aria-selected={active}

      data-amaui-tab-value={value}

      Component={Component}

      className={classNames([
        staticClassName('Tab', theme) && [
          'amaui-Tab-root',
          active && `amaui-Tab-active`,
          disabled && `amaui-Tab-disabled`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
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

        {...LineProps}

        className={classNames([
          staticClassName('Tab', theme) && [
            'amaui-Tab-line'
          ],

          LineProps?.className,
          classes.line
        ])}
      >
        {icon}

        {label !== undefined && (
          is('simple', label) ? (
            <Type
              version={typeVersion as any}

              className={classNames([
                staticClassName('Tab', theme) && [
                  'amaui-Tab-type'
                ],

                classes[`type_${size}`]
              ])}
            >
              {label}
            </Type>
          ) : label
        )}

        {children !== undefined && (
          is('simple', children) ? (
            <Type
              version={typeVersion as any}

              className={classNames([
                staticClassName('Tab', theme) && [
                  'amaui-Tab-type'
                ],

                classes[`type_${size}`]
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

Tab.displayName = 'amaui-Tab';

export default Tab;
