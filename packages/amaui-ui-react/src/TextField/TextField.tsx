import React from 'react';

import { clamp, is, isEnvironment } from '@amaui/utils';
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
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};

const useStyle = style(theme => ({
  wrapper: {
    display: 'inline-flex',
    flex: '1 1 auto',
    flexDirection: 'column'
  },

  root: {
    display: 'inline-flex',
    flex: '1 1 auto',
    alignItems: 'flex-start',
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

  error_color: {
    color: [theme.palette.light ? theme.palette.color.error[40] : theme.palette.color.error[80], '!important']
  },

  error_hover_color: {
    color: [theme.palette.light ? theme.palette.color.error[20] : theme.palette.color.error[90], '!important']
  },

  inputWrapper: {
    display: 'inline-flex',
    alignItems: 'flex-start',
    opacity: 0,
    transition: theme.methods.transitions.make('opacity'),
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    width: '100%'
  },

  inputWrapper_focus: {
    opacity: 1
  },

  input: {
    // Reset
    margin: 0,
    border: 0,
    color: theme.palette.text.default.primary,
    background: 'transparent',
    '-webkit-tap-highlight-color': 'transparent',
    textAlign: 'start',
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    ...theme.typography.values.b2,
    ...overflow
  },

  multiline: {
    resize: 'none',
    overflow: 'auto',
    whiteSpace: 'normal'
  },

  input_size_small: {
    height: '48px',
    padding: '7px 16px',
    paddingTop: '21px'
  },

  input_size_regular: {
    height: '56px',
    padding: '11px 16px',
    paddingTop: '25px'
  },

  input_size_large: {
    height: '64px',
    padding: '16px 16px',
    paddingTop: '28px'
  },

  input_version_text: {
    '&:not($input_start_icon)': {
      paddingInline: 0
    }
  },

  input_start_icon: {
    paddingInlineStart: 0
  },

  input_end_icon: {
    paddingInlineEnd: 0
  },

  input_version_outlined_size_small: {
    paddingTop: '14px',
    paddingBottom: '14px'
  },

  input_version_outlined_size_regular: {
    paddingTop: '18px',
    paddingBottom: '18px'
  },

  input_version_outlined_size_large: {
    paddingTop: '22px',
    paddingBottom: '22px'
  },

  input_align_start: {
    textAlign: 'start'
  },

  input_align_end: {
    textAlign: 'end'
  },

  label: {
    position: 'absolute',
    top: 0,
    insetInlineStart: '16px',
    transformOrigin: 'top left',
    transform: 'translate(0px, 15px) scale(1)',
    transition: theme.methods.transitions.make(['color', 'inset-inline-start', 'transform']),
    pointerEvents: 'none',
    userSelect: 'none',
    ...overflow,
    width: 'auto'
  },

  label_rtl: {
    transformOrigin: 'top right'
  },

  label_version_text_size_small: {
    insetInlineStart: 0,
    top: '8px',
    transform: 'translate(0px, 73%) scale(1)',
  },

  label_version_text_size_regular: {
    insetInlineStart: 0,
    top: '10px',
    transform: 'translate(0px, 78%) scale(1)',
  },

  label_version_text_size_large: {
    insetInlineStart: 0,
    top: '12px',
    transform: 'translate(0px, 83%) scale(1)',
  },

  label_version_outlined_size_small: {
    transform: 'translate(0px, 14px) scale(1)',
  },

  label_version_outlined_size_regular: {
    transform: 'translate(0px, 18px) scale(1)',
  },

  label_version_outlined_size_large: {
    transform: 'translate(0px, 22px) scale(1)',
  },

  label_version_filled_size_small: {
    transform: 'translate(0px, 14px) scale(1)',
  },

  label_version_filled_size_regular: {
    transform: 'translate(0px, 18px) scale(1)',
  },

  label_version_filled_size_large: {
    transform: 'translate(0px, 22px) scale(1)',
  },

  label_icon_start: {
    insetInlineStart: '52px'
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
    transform: 'translate(0, -5.5px) scale(0.667)',
    insetInlineStart: '17px'
  },

  label_version_outlined_size_regular_focus: {
    transform: 'translate(0, -5.5px) scale(0.667)',
    insetInlineStart: '17px'
  },

  label_version_outlined_size_large_focus: {
    transform: 'translate(0, -6px) scale(0.667)',
    insetInlineStart: '17px'
  },

  label_version_filled_size_small_focus: {
    transform: 'translate(0px, 9px) scale(0.6875)'
  },

  label_version_filled_size_regular_focus: {
    transform: 'translate(0px, 11px) scale(0.6875)'
  },

  label_version_filled_size_large_focus: {
    transform: 'translate(0px, 13px) scale(0.6875)'
  },

  background: {
    ...other,
    background: 'currentColor',
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    opacity: theme.palette.light ? theme.palette.visual_contrast.default.opacity.hover : theme.palette.visual_contrast.default.opacity.selected,

    transition: theme.methods.transitions.make(['opacity'])
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
    top: '-5px',
    height: 'calc(100% + 5px)',
    borderRadius: `${theme.shape.radius.unit / 2}px`,
    border: '1px solid currentColor',
    padding: 0,
    paddingInline: '12px 16px',

    transition: theme.methods.transitions.make(['border', 'padding'])
  },

  fieldset_focus: {
    borderWidth: '2px',
    paddingInline: '11px 16px'
  },

  legend: {
    display: 'inline-flex',
    height: '11px',
    width: 'auto',
    maxWidth: '0.001px',
    whiteSpace: 'nowrap',
    visibility: 'hidden',
    overflow: 'hidden',
    fontSize: '0.6rem',
    transition: theme.methods.transitions.make(['max-width', 'padding'], { duration: 'xxs' })
  },

  legend_focus: {
    maxWidth: '100%',
    padding: '0 4px',
    transition: theme.methods.transitions.make(['max-width', 'padding'], { duration: 'xs' })
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    marginTop: '4px',
    padding: `0 16px`
  },

  footer_version_text: {
    paddingInline: 0
  },

  helperText: {
    display: 'inline-flex',
    color: theme.palette.text.default.secondary,
    userSelect: 'none'
  },

  counterText: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    color: theme.palette.text.default.secondary,
    userSelect: 'none',
    flex: '1 0 auto'
  },

  // Start and end icon
  icon: {
    display: 'inline-flex',
    alignItems: 'center'
  },

  icon_size_small: {
    paddingTop: '12px',
    paddingBottom: '0'
  },

  icon_size_regular: {
    paddingTop: '16px',
    paddingBottom: '0'
  },

  icon_size_large: {
    paddingTop: '20px',
    paddingBottom: '0'
  },

  icon_button_size_small: {
    paddingTop: '5px',
    paddingBottom: '0'
  },

  icon_button_size_regular: {
    paddingTop: '9px',
    paddingBottom: '0'
  },

  icon_button_size_large: {
    paddingTop: '13px',
    paddingBottom: '0'
  },

  icon_start: {
    paddingInlineEnd: '16px',

    '&:not($icon_version_text)': {
      paddingInlineStart: '12px'
    }
  },

  icon_end: {
    paddingInlineStart: '16px',

    '&:not($icon_version_text)': {
      paddingInlineEnd: '12px'
    }
  },

  addition: {
    color: theme.palette.text.default.secondary
  },

  addition_size_small: {
    paddingBottom: '7px',
    paddingTop: '21px'
  },

  addition_size_regular: {
    paddingBottom: '11px',
    paddingTop: '25px'
  },

  addition_size_large: {
    paddingBottom: '16px',
    paddingTop: '28px'
  },

  addition_version_outlined_size_small: {
    paddingTop: '14px',
    paddingBottom: '14px'
  },

  addition_version_outlined_size_regular: {
    paddingTop: '18px',
    paddingBottom: '18px'
  },

  addition_version_outlined_size_large: {
    paddingTop: '22px',
    paddingBottom: '22px'
  },

  prefix: {
    flex: '0 0 auto',
    marginInlineEnd: '8px'
  },

  noPrefixMargin: {
    marginInlineEnd: 0
  },

  sufix: {
    flex: '0 0 auto',
    marginInlineStart: '8px'
  },

  noSufixMargin: {
    marginInlineStart: 0
  },

  fullWidth: {
    width: '100%'
  },

  disabled: {
    opacity: 0.54,
    pointerEvents: 'none',
    cursor: 'default'
  }
}), { name: 'AmauiTextField' });

const TextField = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTextField?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    version = 'filled',
    size = 'regular',
    label,
    align,
    startIcon,
    endIcon,
    placeholder,
    valueDefault,
    value: value_,
    onChange,
    onFocus: onFocus_,
    onBlur: onBlur_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    fullWidth,
    Component = 'div',
    WrapperComponent = 'div',
    helperText,
    counter,
    prefix,
    sufix,
    noPrefixMargin,
    noSufixMargin,
    enabled,
    name,
    autoFocus,
    autoComplete,
    readOnly,
    type: type_ = 'text',
    required,
    optional,
    optionalText = 'optional',
    error,
    multiline,
    rows: rows_,
    minRows,
    maxRows,
    disabled,

    inputProps = {},

    className,
    style,

    children,

    ...other
  } = props;

  const rowValue = () => {
    const htmlFontSize = isEnvironment('browser') ? +window.getComputedStyle(window.document.documentElement).fontSize.slice(0, -2) : 16;
    const padding = size === 'small' ? 28 : size === 'regular' ? 36 : 44;

    const row = Math.round(htmlFontSize * 0.875 * 1.4285714285714286);

    return {
      height: row,
      padding
    };
  };

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || '');
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [row, setRow] = React.useState(rowValue);
  const [rows, setRows] = React.useState<any>(1);
  const refs = {
    input: React.useRef<HTMLInputElement>()
  };

  const { classes } = useStyle(props);

  let type = type_;

  const styles: any = {
    root: {},
    input: {},
    background: {
      color: theme.palette.text.default.secondary
    }
  };

  React.useEffect(() => {
    const htmlObserver = new MutationObserver(() => setRow(rowValue));

    htmlObserver.observe(window.document.documentElement, { attributes: true, attributeFilter: ['style'] });

    return () => {
      // Clean up
      htmlObserver.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) {
      setValue(value_);
    }
  }, [value_]);

  const onUpdate = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (multiline && row !== undefined) {
      const heightValue = refs.input.current.style.height;

      // Get actual height with auto
      refs.input.current.style.height = 'auto';

      const scrollHeight = refs.input.current.scrollHeight;

      // Revert back to previous value
      refs.input.current.style.height = heightValue;

      const rows_ = Math.floor((scrollHeight - row.padding) / row.height);

      if (rows_ !== rows) setRows(rows_);
    }

    if (!disabled && inputValue !== value) {
      if (is('function', onChange)) onChange(inputValue, event);

      // Inner controlled value
      if (!props.hasOwnProperty('value')) {
        setValue(inputValue);
      }
    }
  }, []);

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
    styles.root.color = styles.input.caretColor = tonal ? theme.methods.palette.color.value(color, 30, true, palette) : (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any)?.main || color);
  }

  if (error) {
    styles.input.caretColor = theme.palette.light ? theme.palette.color.error[40] : theme.palette.color.error[80];
  }

  if (tonal) styles.background.color = theme.methods.palette.color.value(color, 20, true, palette);

  const footer = (helperText !== undefined || counter !== undefined || required);

  const Wrapper = footer ? WrapperComponent : React.Fragment;

  const WrapperProps = {};

  if (footer) {
    WrapperProps['className'] = classNames([
      staticClassName('TextField', theme) && [
        'AmauiTextField-wrapper',
        fullWidth && 'AmauiTextField-fullWidth',
        disabled && 'AmauiTextField-disabled'
      ],

      classes.wrapper,
      fullWidth && classes.fullWidth,
      disabled && classes.disabled
    ]);
  }

  let InputComponent = 'input';

  if (multiline) {
    InputComponent = 'textarea';
    inputProps.rows = 1;

    type = undefined;

    if (row) {
      if (rows_) styles.input.height = (rows_ * row.height) + row.padding;
      else styles.input.height = (row.height * clamp(rows, minRows, maxRows)) + row.padding;
    }
  }

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Component
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}

        className={classNames([
          staticClassName('TextField', theme) && [
            'AmauiTextField-root',
            `AmauiTextField-version-${version}`,
            `AmauiTextField-size-${size}`,
            fullWidth && !footer && 'AmauiTextField-fullWidth',
            hover && `AmauiTextField-hover`,
            error && `AmauiTextField-error`,
            !footer && disabled && 'AmauiTextField-disabled'
          ],

          classes.root,
          classes[color],
          classes[version],
          classes[size],
          className,
          fullWidth && !footer && classes.fullWidth,
          error && (hover ? classes.error_hover_color : classes.error_color),
          !footer && disabled && classes.disabled
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
              (enabled || value || focus) && classes.background_focus,
              hover && classes.background_hover
            ])}

            style={styles.background}
          />
        )}

        {['text', 'filled'].includes(version) && (
          <span
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-border',
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
                (enabled || value || focus) && label !== undefined && classes.legend_focus
              ])}
            >
              {label}{required ? '*' : ''}{optional ? ` (${optionalText})` : ''}
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
                value && 'AmauiTextField-value',
                theme.direction === 'rtl' && 'AmauiTextField-rtl',
                startIcon && 'AmauiTextField-icon-start'
              ],

              classes.label,
              classes[`label_version_${version}`],
              classes[`label_version_${version}_size_${size}`],
              (enabled || value || focus) && classes[`label_version_${version}_size_${size}_focus`],
              theme.direction === 'rtl' && classes.label_rtl,
              startIcon && [
                classes.label_icon_start,
                classes[`label_version_${version}_icon_start`]
              ]
            ])}

            version='b2'
          >
            {label}{required ? '*' : ''}{optional ? ` (${optionalText})` : ''}
          </Type>
        )}

        {startIcon && (
          <span
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-icon',
                `AmauiTextField-version-${version}`,
                'AmauiTextField-icon-start',
                `AmauiTextField-size-${size}`
              ],

              classes.icon,
              classes.icon_start,
              classes[`icon${startIcon?.type?.displayName?.includes('IconButton') ? '_button' : ''}_size_${size}`],
              classes[`icon_version_${version}`]
            ])}
          >
            {React.cloneElement(startIcon, {
              size: 'regular',
              color: theme.palette.text.default.secondary,
              style: styles.icon
            })}
          </span>
        )}

        <label
          className={classNames([
            staticClassName('TextField', theme) && [
              'AmauiTextField-inputWrapper',
              focus && 'AmauiTextField-focus',
              value && 'AmauiTextField-value'
            ],

            classes.inputWrapper,
            (enabled || label === undefined || value || focus) && classes.inputWrapper_focus,
          ])}
        >
          {prefix !== undefined && (
            <Type
              className={classNames([
                staticClassName('TextField', theme) && [
                  'AmauiTextField-addition',
                  'AmauiTextField-prefix',
                  `AmauiTextField-version-${version}`,
                  `AmauiTextField-size-${size}`,
                  noPrefixMargin && 'AmauiTextField-prefix-no-margin'
                ],

                classes.addition,
                classes.prefix,
                classes[`addition_size_${size}`],
                classes[`addition_version_${version}_size_${size}`],
                noPrefixMargin && classes.noPrefixMargin
              ])}

              version='b2'
            >
              {prefix}
            </Type>
          )}

          <InputComponent
            ref={item => {
              if (ref) ref.current = item;

              refs.input.current = item;
            }}

            onFocus={onFocus}
            onBlur={onBlur}

            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-input',
                `AmauiTextField-version-${version}`,
                `AmauiTextField-size-${size}`,
                focus && 'AmauiTextField-focus',
                value && 'AmauiTextField-value',
                startIcon && `AmauiTextField-icon-start`,
                endIcon && `AmauiTextField-icon-end`,
                align && `AmauiTextField-align-${align}`
              ],

              classes.input,
              classes[`input_version_${version}`],
              classes[`input_size_${size}`],
              classes[`input_version_${version}_size_${size}`],
              multiline && classes.multiline,
              align && classes[`input_align_${align}`],
              startIcon && classes.input_start_icon,
              endIcon && classes.input_end_icon,
            ])}

            placeholder={placeholder}

            onChange={onUpdate}

            value={value}

            type={type}

            name={name}

            autoFocus={autoFocus}

            autoComplete={autoComplete}

            readOnly={readOnly}

            disabled={disabled}

            style={styles.input}

            {...inputProps}
          />

          {sufix !== undefined && (
            <Type
              className={classNames([
                staticClassName('TextField', theme) && [
                  'AmauiTextField-addition',
                  'AmauiTextField-sufix',
                  `AmauiTextField-version-${version}`,
                  `AmauiTextField-size-${size}`,
                  noPrefixMargin && 'AmauiTextField-sufix-no-margin'
                ],

                classes.addition,
                classes.sufix,
                classes[`addition_size_${size}`],
                classes[`addition_version_${version}_size_${size}`],
                noSufixMargin && classes.noSufixMargin
              ])}

              version='b2'
            >
              {sufix}
            </Type>
          )}
        </label>

        {endIcon && (
          <span
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-icon',
                `AmauiTextField-version-${version}`,
                'AmauiTextField-icon-end',
                `AmauiTextField-size-${size}`
              ],

              classes.icon,
              classes.icon_end,
              classes[`icon${endIcon?.type?.displayName?.includes('IconButton') ? '_button' : ''}_size_${size}`],
              classes[`icon_version_${version}`]
            ])}
          >
            {React.cloneElement(endIcon, {
              size: 'regular',
              color: error ? theme.palette.light ? theme.palette.color.error[hover ? 20 : 40] : theme.palette.color.error[hover ? 90 : 80] : theme.palette.text.default.secondary,
              style: styles.icon
            })}
          </span>
        )}
      </Component>

      {footer && (
        <div
          className={classNames([
            staticClassName('TextField', theme) && [
              'AmauiTextField-footer',
              `AmauiTextField-version-${version}`
            ],

            classes.footer,
            classes[`footer_version_${version}`]
          ])}
        >
          {(helperText || required) && (
            <Type
              version='b3'

              className={classNames([
                staticClassName('TextField', theme) && [
                  'AmauiTextField-helperText',
                  error && 'AmauiTextField-error'
                ],

                classes.helperText,
                error && classes.error_color
              ])}
            >
              {helperText !== undefined ? helperText : required ? '*required' : ''}
            </Type>
          )}

          {counter && (
            <Type
              version='b3'

              className={classNames([
                staticClassName('TextField', theme) && [
                  'AmauiTextField-counter',
                  error && 'AmauiTextField-error'
                ],

                classes.counterText,
                error && classes.error_color
              ])}
            >
              {value.length}/{counter}
            </Type>
          )}
        </div>
      )}
    </Wrapper>
  );
});

TextField.displayName = 'AmauiTextField';

export default TextField;
