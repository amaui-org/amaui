import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';

import { staticClassName } from '../utils';

const other = {
  pointerEvents: 'none',
  borderRadius: 'inherit',
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%'
};

const overflow = {
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'noWrap',
  textOverflow: 'ellipsis'
};

const useStyle = style(theme => ({
  root: {
    display: 'inline-flex',
    width: '100%',
    position: 'relative',
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`
  },

  // Color
  default: { color: theme.palette.text.default.primary },

  neutral: { color: theme.palette.color.neutral.main },

  primary: { color: theme.palette.color.primary.main },

  secondary: { color: theme.palette.color.secondary.main },

  tertiary: { color: theme.palette.color.tertiary.main },

  quaternary: { color: theme.palette.color.quaternary.main },

  info: { color: theme.palette.color.info.main },

  success: { color: theme.palette.color.success.main },

  warning: { color: theme.palette.color.warning.main },

  error: { color: theme.palette.color.error.main },

  input: {
    // Reset
    margin: 0,
    border: 0,
    color: theme.palette.text.default.primary,
    background: 'transparent',
    '-webkit-tap-highlight-color': 'transparent',
    opacity: 0,
    transition: theme.methods.transitions.make('opacity'),
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    ...theme.typography.values.b2,
    ...overflow
  },

  input_size_regular: {
    minHeight: '56px',
    padding: `${theme.methods.space.value('sm', 'px')} ${theme.methods.space.value('rg', 'px')}`,
    paddingTop: theme.methods.space.value('sm', 'px', 15)
  },

  input_version_text: {
    paddingLeft: 0,
    paddingRight: 0
  },

  input_version_outlined_size_regular: {
    paddingTop: theme.methods.space.value('sm', 'px')
  },

  input_focus: {
    opacity: 1
  },

  input_value: {
    opacity: 1
  },

  label: {
    position: 'absolute',
    top: '10px',
    left: '16px',
    transformOrigin: 'top left',
    transform: 'translate(0px, 8px) scale(1)',
    transition: theme.methods.transitions.make(['color', 'transform']),
    pointerEvents: 'none',
    userSelect: 'none',
    ...overflow,
    width: 'auto'
  },

  label_version_text: {
    left: 0,
    transform: 'translate(0px, 15.5px) scale(1)',
  },

  // Focus
  label_focus: {
    transform: 'translate(0px, 0px) scale(0.6875)'
  },

  label_version_outlined_focus: {
    transform: 'translate(-0.5px, -16px) scale(0.667)'
  },

  // Value
  label_value: {
    transform: 'translate(0px, 0px) scale(0.6875)'
  },

  label_version_outlined_value: {
    transform: 'translate(-0.5px, -16px) scale(0.667)'
  },

  background: {
    ...other,
    background: 'currentColor',
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    opacity: theme.palette.visual_contrast.default.opacity.hover,

    transition: theme.methods.transitions.make(['opacity'])
  },

  background_value: {
    opacity: theme.palette.visual_contrast.default.opacity.hover
  },

  background_hover: {
    opacity: theme.palette.visual_contrast.default.opacity.focus
  },

  background_focus: {
    opacity: theme.palette.visual_contrast.default.opacity.hover
  },

  border: {
    ...other,
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    boxShadow: 'inset 0px -1px 0px 0px currentColor',

    transition: theme.methods.transitions.make(['box-shadow'])
  },

  border_focus: {
    boxShadow: 'inset 0px -2px 0px 0px currentColor'
  },

  fieldset: {
    ...other,
    top: '-5px',
    height: 'calc(100% + 5px)',
    borderRadius: `${theme.shape.radius.unit / 2}px`,
    border: '1px solid currentColor',
    padding: `0 ${theme.methods.space.value('rg', 'px')} 0 ${theme.methods.space.value('rg', 'px', -5)}`,

    transition: theme.methods.transitions.make(['border', 'padding'])
  },

  fieldset_focus: {
    borderWidth: '2px',
    padding: `0 ${theme.methods.space.value('rg', 'px')} 0 ${theme.methods.space.value('rg', 'px', -6)}`,
  },

  legend: {
    display: 'inline-flex',
    height: '11px',
    width: 'auto',
    maxWidth: '0.01px',
    whiteSpace: 'nowrap',
    visibility: 'hidden',
    overflow: 'hidden',
    fontSize: '0.6875em',
    transition: theme.methods.transitions.make(['max-width', 'padding'], { duration: 'xxs' })
  },

  legend_focus: {
    maxWidth: '100%',
    padding: '0 3.5px 0 4px',
    transition: theme.methods.transitions.make(['max-width', 'padding'], { duration: 'xs' })
  },

  legend_value: {
    maxWidth: '100%',
    padding: '0 3.5px 0 4px',
    transition: theme.methods.transitions.make(['max-width', 'padding'], { duration: 'xs' })
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
    tonal,
    color = 'primary',
    version = 'filled',
    size = 'regular',
    label,
    valueDefault,
    value: value_,
    onChange,
    onFocus: onFocus_,
    onBlur: onBlur_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    Component = 'div',
    disabled,

    className,
    style,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || '');
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const { classes } = useStyle(props);

  const styles: any = {
    root: {},
    background: {
      color: theme.palette.text.default.secondary
    }
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

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    setHover(true);

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    setHover(false);

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
  }, []);

  if (!focus) {
    styles.root.color = theme.palette.text.default.secondary;
  }
  else {
    styles.root.color = color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any)?.main || color;
  }

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
        classes[color],
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
      {['filled'].includes(version) && (
        <span
          className={classNames([
            staticClassName('TextField', theme) && [
              'AmauiTextField-background',
              value && 'AmauiTextField-value',
              hover && 'AmauiTextField-hover',
              focus && 'AmauiTextField-focus',
              disabled && `AmauiTextField-background-disabled`
            ],

            classes.background,
            value && classes.background_value,
            hover && classes.background_hover,
            focus && classes.background_focus,
            disabled && classes[`background_disabled`]
          ])}

          style={styles.background}
        />
      )}

      {['text', 'filled'].includes(version) && (
        <span
          className={classNames([
            staticClassName('TextField', theme) && [
              'AmauiTextField-border',
              value && 'AmauiTextField-value', ,
              hover && 'AmauiTextField-hover',
              focus && 'AmauiTextField-focus',
              disabled && `AmauiTextField-border-disabled`
            ],

            classes.border,
            focus && classes.border_focus,
            disabled && classes[`border_disabled`]
          ])}

          style={styles.border}
        />
      )}

      {['outlined'].includes(version) && (
        <fieldset
          className={classNames([
            staticClassName('TextField', theme) && [
              'AmauiTextField-fieldset',
              value && 'AmauiTextField-value',
              hover && 'AmauiTextField-hover',
              focus && 'AmauiTextField-focus',
              disabled && `AmauiTextField-fieldset-disabled`
            ],

            classes.fieldset,
            focus && classes.fieldset_focus,
            disabled && classes[`fieldset_disabled`]
          ])}

          style={styles.fieldset}
        >
          <legend
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-legend',
                value && 'AmauiTextField-value',
                focus && 'AmauiTextField-focus',
                disabled && `AmauiTextField-legend-disabled`
              ],

              classes.legend,
              value && classes.legend_value,
              focus && classes.legend_focus,
              disabled && classes[`legend_disabled`]
            ])}
          >
            {label}
          </legend>
        </fieldset>
      )}

      {label && (
        <Type
          Component='label'

          className={classNames([
            staticClassName('TextField', theme) && [
              'AmauiTextField-label',
              `AmauiTextField-version-${version}`,
              focus && 'AmauiTextField-focus',
              value && 'AmauiTextField-value'
            ],

            classes.label,
            classes[`label_version_${version}`],
            focus && [
              classes.label_focus,
              classes[`label_version_${version}_focus`]
            ],
            value && [
              classes.label_value,
              classes[`label_version_${version}_value`]
            ]
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

        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}

        className={classNames([
          staticClassName('TextField', theme) && [
            'AmauiTextField-input',
            `AmauiTextField-version-${version}`,
            `AmauiTextField-size-${size}`,
            focus && 'AmauiTextField-focus',
            value && 'AmauiTextField-value'
          ],

          classes.input,
          classes[`input_version_${version}`],
          classes[`input_size_${size}`],
          classes[`input_version_${version}_size_${size}`],
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
