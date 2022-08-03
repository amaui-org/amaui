import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';

import { staticClassName } from '../utils';
import { is } from '@amaui/utils';

const overflow = {
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'noWrap',
  textOverflow: 'ellipsis'
};

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    border: '1px solid #000'
  },

  input: {
    // Reset
    margin: 0,
    border: 0,
    background: 'transparent',
    '-webkit-tap-highlight-color': 'transparent',
    opacity: 0,
    transition: theme.methods.transitions.make('opacity'),
    ...theme.typography.values.b2,
    ...overflow
  },

  input_size_regular: {
    minHeight: '56px',
    padding: `${theme.methods.space.value('sm', 'px')} ${theme.methods.space.value('rg', 'px')}`,
    paddingTop: theme.methods.space.value('sm', 'px', 15)
  },

  input_focus: {
    opacity: 1
  },

  input_value: {
    opacity: 1
  },

  label: {
    position: 'absolute',
    top: '8px',
    left: '16px',
    transformOrigin: 'top left',
    transform: 'translate(0px, 10px) scale(1)',
    transition: theme.methods.transitions.make('transform'),
    pointerEvents: 'none',
    userSelect: 'none',
    ...overflow
  },

  label_focus: {
    transform: 'translate(0px, 0px) scale(0.6875)'
  },

  label_value: {
    transform: 'translate(0px, 0px) scale(0.6875)'
  }
}), { name: 'AmauiTextField' });

// To do
// Version: filled, outlined and text
// Color: colors and tonal
// Error
// Character counter value
// Disabled
// Multiline input
// Input type (number etc.)
// Controller value
// Start icon
// End icon
// Sufix
// Prefix
// Placeholder
// Autofill value y

const TextField = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTextField?.props?.default }), [props_]);

  const {
    version = 'filled',
    size = 'regular',
    label,
    valueDefault,
    value: value_,
    onChange,
    Component = 'div',
    disabled,

    className,
    style,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || '');
  const [focus, setFocus] = React.useState(false);
  const { classes } = useStyle(props);

  const styles: any = {
    root: {}
  };

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) {
      setValue(value_);
    }
  }, [value_]);

  const onUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!disabled && inputValue !== value) {
      if (is('function', onChange)) onChange(inputValue, event);

      // Inner controlled value
      if (!props.hasOwnProperty('value')) {
        setValue(inputValue);
      }
    }
  };

  const onFocus = React.useCallback(() => setFocus(true), []);

  const onBlur = React.useCallback(() => setFocus(false), []);

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('TextField', theme) && [
          'AmauiTextField-root',
          `AmauiTextField-version-${version}`,
          `AmauiTextField-size-${size}`
        ],

        classes.root,
        classes[version],
        classes[size],
        className
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {label && (
        <Type
          Component='label'

          className={classNames([
            staticClassName('TextField', theme) && [
              'AmauiTextField-label',
              focus && 'AmauiTextField-focus',
              value && 'AmauiTextField-value'
            ],

            classes.label,
            focus && classes.label_focus,
            value && classes.label_value
          ])}

          version='b2'
        >
          {label}
        </Type>
      )}

      <input
        type='text'

        onFocus={onFocus}
        onBlur={onBlur}

        className={classNames([
          staticClassName('TextField', theme) && [
            'AmauiTextField-input',
            `AmauiTextField-size-${size}`,
            focus && 'AmauiTextField-focus',
            value && 'AmauiTextField-value'
          ],

          classes.input,
          classes[`input_size_${size}`],
          focus && classes.input_focus,
          value && classes.input_value
        ])}

        onChange={onUpdate}

        value={value}
      />
    </Component>
  );
});

export default TextField;
