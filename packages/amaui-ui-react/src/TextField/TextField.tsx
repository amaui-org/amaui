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
    flex: '1 1 auto',
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

  input_size_small: {
    minHeight: '48px',
    padding: `${theme.methods.space.value('sm', 'px', -4)} ${theme.methods.space.value('rg', 'px')}`,
    paddingTop: theme.methods.space.value('sm', 'px', 13)
  },

  input_size_regular: {
    minHeight: '56px',
    padding: `${theme.methods.space.value('sm', 'px')} ${theme.methods.space.value('rg', 'px')}`,
    paddingTop: theme.methods.space.value('sm', 'px', 15)
  },

  input_size_large: {
    minHeight: '64px',
    padding: `${theme.methods.space.value('sm', 'px', 4)} ${theme.methods.space.value('rg', 'px')}`,
    paddingTop: theme.methods.space.value('sm', 'px', 17)
  },

  input_version_text: {
    paddingLeft: 0,
    paddingRight: 0
  },

  input_version_outlined_size_small: {
    paddingTop: theme.methods.space.value('sm', 'px', -4)
  },

  input_version_outlined_size_regular: {
    paddingTop: theme.methods.space.value('sm', 'px')
  },

  input_version_outlined_size_large: {
    paddingTop: theme.methods.space.value('sm', 'px', 4)
  },

  input_focus: {
    opacity: 1
  },

  input_value: {
    opacity: 1
  },

  label: {
    position: 'absolute',
    top: '50%',
    left: '16px',
    transformOrigin: 'top left',
    transform: 'translate(0px, -50%) scale(1)',
    transition: theme.methods.transitions.make(['color', 'transform']),
    pointerEvents: 'none',
    userSelect: 'none',
    ...overflow,
    width: 'auto'
  },

  label_version_text_size_small: {
    left: 0,
    top: '8px',
    transform: 'translate(0px, 73%) scale(1)',
  },

  label_version_text_size_regular: {
    left: 0,
    top: '10px',
    transform: 'translate(0px, 78%) scale(1)',
  },

  label_version_text_size_large: {
    left: 0,
    top: '12px',
    transform: 'translate(0px, 83%) scale(1)',
  },

  // Focus
  label_version_text_size_small_focus: {
    transform: 'translate(0px, 2px) scale(0.667)'
  },
  label_version_text_size_regular_focus: {
    transform: 'translate(0px, 2px) scale(0.667)'
  },

  label_version_text_size_large_focus: {
    transform: 'translate(0px, 2px) scale(0.667)'
  },

  label_version_outlined_size_small_focus: {
    transform: 'translate(-0.5px, -29.5px) scale(0.667)'
  },

  label_version_outlined_size_regular_focus: {
    transform: 'translate(-0.5px, -34px) scale(0.667)'
  },

  label_version_outlined_size_large_focus: {
    transform: 'translate(-0.5px, -38.5px) scale(0.667)'
  },

  label_version_filled_size_small_focus: {
    transform: 'translate(0px, -74%) scale(0.6875)'
  },

  label_version_filled_size_regular_focus: {
    transform: 'translate(0px, -84%) scale(0.6875)'
  },

  label_version_filled_size_large_focus: {
    transform: 'translate(0px, -94%) scale(0.6875)'
  },

  background: {
    ...other,
    background: 'currentColor',
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    opacity: theme.palette.light ? theme.palette.visual_contrast.default.opacity.hover : theme.palette.visual_contrast.default.opacity.selected,

    transition: theme.methods.transitions.make(['opacity'])
  },

  background_value: {
    opacity: theme.palette.light ? theme.palette.visual_contrast.default.opacity.hover : theme.palette.visual_contrast.default.opacity.selected
  },

  background_hover: {
    opacity: theme.palette.visual_contrast.default.opacity.focus
  },

  background_focus: {
    opacity: theme.palette.light ? theme.palette.visual_contrast.default.opacity.hover : theme.palette.visual_contrast.default.opacity.selected
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
    top: '-8%',
    height: '109%',
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
  },

  // Other
  disabled: {
    opacity: 0.7,
    cursor: 'pointer'
  }
}), { name: 'AmauiTextField' });

// To do
// Helper text
// Character counter value
// Start adornment
// End adornment
// Sufix
// Prefix
// Error
// Disabled
// Multiline input
// Input type (number etc.)
// Controller value
// Placeholder
// Autofill value y
// Other space, ltr etc.

const TextField = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTextField?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    version = 'filled',
    size = 'regular',
    label,
    placeholder,
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
    if (!disabled) {
      setFocus(true);

      if (is('function', onFocus_)) onFocus_(event);
    }
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setFocus(false);

      if (is('function', onBlur_)) onBlur_(event);
    }
  }, []);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    if (!disabled) {
      setHover(true);

      if (is('function', onMouseEnter_)) onMouseEnter_(event);
    }
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    if (!disabled) {
      setHover(false);

      if (is('function', onMouseLeave_)) onMouseLeave_(event);
    }
  }, []);

  const palette: any = color === 'default' ? theme.palette.color.neutral : !theme.palette.color[color] ? theme.methods.color(color) : theme.palette.color[color];

  if (!focus) {
    styles.root.color = theme.palette.text.default.secondary;
  }
  else {
    styles.root.color = tonal ? theme.methods.palette.color.value(color, 30, true, palette) : (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any)?.main || color);
  }

  if (tonal) styles.background.color = theme.methods.palette.color.value(color, 20, true, palette);

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
        className,
        disabled && classes.disabled
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
              focus && 'AmauiTextField-focus'
            ],

            classes.background,
            value && classes.background_value,
            hover && classes.background_hover,
            focus && classes.background_focus
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
              focus && 'AmauiTextField-focus'
            ],

            classes.border,
            focus && classes.border_focus
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
              focus && 'AmauiTextField-focus'
            ],

            classes.fieldset,
            focus && classes.fieldset_focus
          ])}

          style={styles.fieldset}
        >
          <legend
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-legend',
                value && 'AmauiTextField-value',
                focus && 'AmauiTextField-focus'
              ],

              classes.legend,
              value && classes.legend_value,
              focus && classes.legend_focus
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
              `AmauiTextField-size-${size}`,
              focus && 'AmauiTextField-focus',
              value && 'AmauiTextField-value'
            ],

            classes.label,
            classes[`label_version_${version}`],
            classes[`label_version_${version}_size_${size}`],
            (value || focus) && classes[`label_version_${version}_size_${size}_focus`]
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

        placeholder={placeholder}

        onChange={onUpdate}

        value={value}

        disabled={disabled}
      />
    </Component>
  );
});

export default TextField;
