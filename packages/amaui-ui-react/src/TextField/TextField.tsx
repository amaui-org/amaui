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
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column'
  },

  root: {
    display: 'inline-flex',
    alignItems: 'flex-start',
    position: 'relative',
    borderRadius: `${theme.shape.radius.unit}px ${theme.shape.radius.unit}px 0 0`
  },

  // Color
  color_default: { color: theme.palette.text.default.primary },

  color_neutral: { color: theme.palette.color.neutral.main },

  color_primary: { color: theme.palette.color.primary.main },

  color_secondary: { color: theme.palette.color.secondary.main },

  color_tertiary: { color: theme.palette.color.tertiary.main },

  color_quaternary: { color: theme.palette.color.quaternary.main },

  color_info: { color: theme.palette.color.info.main },

  color_success: { color: theme.palette.color.success.main },

  color_warning: { color: theme.palette.color.warning.main },

  color_error: { color: theme.palette.color.error.main },

  error_color: {
    color: [theme.palette.light ? theme.palette.color.error[40] : theme.palette.color.error[80], '!important']
  },

  error_hover_color: {
    color: [theme.palette.light ? theme.palette.color.error[20] : theme.palette.color.error[90], '!important']
  },

  inputWrapper: {
    // Reset
    margin: 0,
    border: 0,

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    opacity: 0,
    transition: theme.methods.transitions.make('opacity'),
    borderRadius: `${theme.shape.radius.unit}px ${theme.shape.radius.unit}px 0 0`,
    width: '100%',
    cursor: 'text',
    ...theme.typography.values.b2
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
    borderRadius: `${theme.shape.radius.unit}px ${theme.shape.radius.unit}px 0 0`,
    ...theme.typography.values.b2,
    ...overflow,

    width: '100%',
    flex: '1 1 auto'
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
    borderRadius: `${theme.shape.radius.unit}px ${theme.shape.radius.unit}px 0 0`,
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
    borderRadius: `${theme.shape.radius.unit}px ${theme.shape.radius.unit}px 0 0`,
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
    borderRadius: `${theme.shape.radius.unit}px`,
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
    paddingBlock: '12px'
  },

  icon_size_regular: {
    paddingBlock: '16px'
  },

  icon_size_large: {
    paddingBlock: '20px'
  },

  icon_button_size_small: {
    paddingBlock: '4px'
  },

  icon_button_size_regular: {
    paddingBlock: '8px'
  },

  icon_button_size_large: {
    paddingBlock: '12px'
  },

  icon_start: {
    paddingInlineEnd: '16px',
    paddingInlineStart: '12px'
  },

  icon_vertical_align_start: {
    alignSelf: 'flex-start'
  },

  icon_vertical_align_center: {
    alignSelf: 'center',
    paddingBlock: '0px'
  },

  icon_vertical_align_end: {
    alignSelf: 'flex-end'
  },

  icon_end: {
    paddingInlineStart: '16px',
    paddingInlineEnd: '12px'
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
    marginInlineStart: '16px',
    marginInlineEnd: '8px',
    opacity: 0,
    transition: theme.methods.transitions.make('opacity'),
  },

  prefix_noStartMargin: {
    marginInlineStart: '0px'
  },

  prefix_focus: {
    opacity: 1
  },

  noPrefixMargin: {
    marginInlineEnd: 0
  },

  sufix: {
    flex: '0 0 auto',
    marginInlineEnd: '16px',
    marginInlineStart: '8px',
    opacity: 0,
    transition: theme.methods.transitions.make('opacity'),
  },

  sufix_focus: {
    opacity: 1
  },

  sufix_noEndMargin: {
    marginInlineEnd: '0px'
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
    start,
    startVerticalAlign = 'start',
    end,
    endVerticalAlign = 'start',
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
    rootRef,
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
    minRows = 1,
    maxRows,
    focus: focus_,
    footer: footer_,
    disabled,

    inputProps = {},
    InputWrapperProps = {},

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

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_));
  const [focus, setFocus] = React.useState(focus_);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [row, setRow] = React.useState(rowValue);
  const [rows, setRows] = React.useState<any>(1);

  const refs = {
    input: React.useRef<HTMLInputElement>(),
    carret: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  let type = type_;

  const styles: any = {
    root: {},
    input: {},
    inputWrapper: {},
    background: {
      color: theme.palette.text.default.secondary
    }
  };

  React.useEffect(() => {
    const htmlObserver = new MutationObserver(() => setRow(rowValue));

    htmlObserver.observe(window.document.documentElement, { attributes: true, attributeFilter: ['style'] });

    window.addEventListener('mouseup', onInputWrapperMouseUp as any);

    return () => {
      // Clean up
      window.removeEventListener('mouseup', onInputWrapperMouseUp as any);

      htmlObserver.disconnect();
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (refs.carret.current) {
        // Carret restore previous value
        refs.input.current.selectionStart = refs.carret.current.start;
        refs.input.current.selectionEnd = refs.carret.current.end;
      }
    });
  }, [value]);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) {
      setValue(value_);
    }
  }, [value_]);

  React.useEffect(() => {
    if (focus_ !== focus && focus_ !== undefined) setFocus(focus_);
  }, [focus_]);

  const onUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Carret save previous value
    refs.carret.current = { start: refs.input.current.selectionStart, end: refs.input.current.selectionEnd };

    // Only restore if it's not regular carret value
    if (refs.carret.current.start === inputValue.length) refs.carret.current = undefined;

    if (multiline && row !== undefined) {
      const heightValue = refs.input.current.style.height;

      // Get actual height with auto
      refs.input.current.style.height = 'auto';

      const scrollHeight = refs.input.current.scrollHeight;

      // Revert back to previous value
      refs.input.current.style.height = heightValue;

      const newRows = Math.floor(scrollHeight / row.height);

      setRows(newRows);
    }

    if (!disabled && inputValue !== value) {
      // Inner controlled value
      if (!props.hasOwnProperty('value')) setValue(inputValue);

      if (is('function', onChange)) onChange(inputValue, event);
    }
  };

  const onInputWrapperMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) {
      setMouseDown(true);

      if (is('function', InputWrapperProps.onMouseDown)) InputWrapperProps.onMouseDown(event);
    }
  }, []);

  const onInputWrapperMouseUp = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) {
      setMouseDown(false);

      if (is('function', InputWrapperProps.onMouseUp)) InputWrapperProps.onMouseUp(event);
    }
  }, []);

  const onInputWrapperClick = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) {
      if (event.target === event.currentTarget) refs.input.current?.focus();

      if (is('function', InputWrapperProps?.onClick)) InputWrapperProps.onClick(event);
    }
  }, []);

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setFocus(focus_ !== undefined ? focus_ : true);

      if (is('function', onFocus_)) onFocus_(event);
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setFocus(focus_ !== undefined ? focus_ : false);

      if (is('function', onBlur_)) onBlur_(event);
    }
  };

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

  const footer = (footer_ || helperText !== undefined || counter !== undefined || required);

  const Wrapper = footer ? WrapperComponent : React.Fragment;

  let ComponentProps: any = {};

  let WrapperProps: any = {};

  if (footer) {
    WrapperProps = {
      ...other
    };

    WrapperProps['className'] = classNames([
      staticClassName('TextField', theme) && [
        'AmauiTextField-wrapper',
        fullWidth && 'AmauiTextField-fullWidth',
        disabled && 'AmauiTextField-disabled'
      ],

      className,
      classes.wrapper,
      fullWidth && classes.fullWidth,
      disabled && classes.disabled
    ]);

    WrapperProps.style = {
      ...style
    };
  }
  else {
    ComponentProps = {
      ...other
    };

    ComponentProps.className = className;

    ComponentProps.style = {
      ...style
    };
  }

  ComponentProps.style = {
    ...ComponentProps.style,

    ...styles.root
  };

  let InputComponent = 'input';

  if (multiline) {
    InputComponent = 'textarea';
    inputProps.rows = 1;

    type = undefined;

    if (row) {
      if (rows_) {
        styles.input.height = (rows_ * row.height);
        styles.inputWrapper.height = (rows_ * row.height) + row.padding;
      }
      else {
        styles.input.height = (row.height * clamp(rows, minRows, maxRows));
        styles.inputWrapper.height = (row.height * clamp(rows, minRows, maxRows)) + row.padding;
      }
    }
  }

  if (mouseDown) refs.input.current.focus();

  const valueWithData = value !== undefined && String(value);

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Component
        ref={rootRef}

        onMouseEnter={onMouseEnter}

        onMouseLeave={onMouseLeave}

        onTouchStart={onMouseEnter}

        onTouchEnd={onMouseLeave}

        {...ComponentProps}

        className={classNames([
          staticClassName('TextField', theme) && [
            'AmauiTextField-root',
            `AmauiTextField-version-${version}`,
            `AmauiSurface-color-${!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color) ? 'new' : color}`,
            `AmauiTextField-size-${size}`,
            `AmauiTextField-icon-end-vertical-align-${endVerticalAlign}`,
            `AmauiTextField-icon-start-vertical-align-${startVerticalAlign}`,
            error && `AmauiTextField-error`,
            multiline && `AmauiTextField-multiline`,
            placeholder && `AmauiTextField-placeholder`,
            prefix && `AmauiTextField-prefix`,
            sufix && `AmauiTextField-sufix`,
            autoFocus && `AmauiTextField-autoFocus`,
            autoComplete && `AmauiTextField-autoComplete`,
            counter && `AmauiTextField-counter`,
            align && `AmauiTextField-align-${align}`,
            theme.direction === 'rtl' ? 'AmauiTextField-direction-rtl' : 'AmauiTextFied-direction-ltr',
            start && 'AmauiTextField-icon-start',
            startVerticalAlign && `AmauiTextField-icon-start-align-vertical-${startVerticalAlign}`,
            end && 'AmauiTextField-icon-end',
            endVerticalAlign && `AmauiTextField-icon-end-align-vertical-${endVerticalAlign}`,
            fullWidth && !footer && 'AmauiTextField-fullWidth',
            noSufixMargin && 'AmauiTextField-sufix-no-margin',
            noPrefixMargin && 'AmauiTextField-prefix-no-margin',
            type && `AmauiTextField-type-${type}`,
            tonal && 'AmauiTextField-tonal',
            required && 'AmauiTextField-required',
            optional && 'AmauiTextField-optional',
            rows !== undefined && `AmauiTextField-rows-${rows}`,
            minRows !== undefined && `AmauiTextField-minRows-${minRows}`,
            maxRows !== undefined && `AmauiTextField-maxRows-${maxRows}`,
            valueWithData && 'AmauiTextField-value',
            enabled && 'AmauiTextField-enabled',
            hover && `AmauiTextField-hover`,
            mouseDown && `AmauiTextField-mouseDown`,
            focus && `AmauiTextField-focus`,
            readOnly && `AmauiTextField-readOnly`,
            disabled && 'AmauiTextField-disabled'
          ],

          ComponentProps.className,
          classes.root,
          classes[`color_${color}`],
          fullWidth && !footer && classes.fullWidth,
          error && (hover ? classes.error_hover_color : classes.error_color),
          !footer && disabled && classes.disabled
        ])}
      >
        {['filled'].includes(version) && (
          <span
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-background'
              ],

              classes.background,
              (enabled || valueWithData || focus) && classes.background_focus,
              hover && classes.background_hover
            ])}

            style={styles.background}
          />
        )}

        {['text', 'filled'].includes(version) && (
          <span
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-border'
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
                'AmauiTextField-fieldset'
              ],

              classes.fieldset,
              focus && classes.fieldset_focus
            ])}

            style={styles.fieldset}
          >
            <legend
              className={classNames([
                staticClassName('TextField', theme) && [
                  'AmauiTextField-legend'
                ],

                classes.legend,
                (enabled || valueWithData || focus) && label !== undefined && classes.legend_focus
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
                'AmauiTextField-label'
              ],

              classes.label,
              classes[`label_version_${version}`],
              classes[`label_version_${version}_size_${size}`],
              (enabled || valueWithData || focus) && classes[`label_version_${version}_size_${size}_focus`],
              theme.direction === 'rtl' && classes.label_rtl,
              start && [
                classes.label_icon_start,
                classes[`label_version_${version}_icon_start`]
              ]
            ])}

            version='b2'
          >
            {label}{required ? '*' : ''}{optional ? ` (${optionalText})` : ''}
          </Type>
        )}

        {!!React.Children.toArray(start).length && (
          <span
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-icon',
                'AmauiTextField-icon-start'
              ],

              classes.icon,
              classes.icon_start,
              classes[`icon${start?.type?.displayName?.includes('IconButton') ? '_button' : ''}_size_${size}`],
              classes[`icon_version_${version}`],
              classes[`icon_vertical_align_${startVerticalAlign}`]
            ])}
          >
            {React.Children.toArray(start).map((item: any, index: number) => (
              React.cloneElement(item, {
                key: index,

                size: item.props?.size !== undefined ? item.props?.size : 'regular',
                color: item.props?.color !== undefined ? item.props?.color : theme.palette.text.default.secondary,
                style: {
                  ...item.props.style,

                  ...styles.icon
                }
              })
            ))}
          </span>
        )}

        {prefix !== undefined && (
          <Type
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-addition',
                'AmauiTextField-prefix'
              ],

              classes.addition,
              classes.prefix,
              (start || version === 'text') && classes.prefix_noStartMargin,
              classes[`addition_size_${size}`],
              classes[`addition_version_${version}_size_${size}`],
              (enabled || valueWithData || focus) && classes.prefix_focus,
              noPrefixMargin && classes.noPrefixMargin
            ])}

            version='b2'
          >
            {prefix}
          </Type>
        )}

        <div
          {...InputWrapperProps}

          className={classNames([
            staticClassName('TextField', theme) && [
              'AmauiTextField-inputWrapper'
            ],

            classes.inputWrapper,
            InputWrapperProps?.className,
            (enabled || label === undefined || valueWithData || focus) && classes.inputWrapper_focus,
            classes[`input_version_${version}`],
            classes[`input_size_${size}`],
            classes[`input_version_${version}_size_${size}`],
            (prefix || start) && classes.input_start_icon,
            (sufix || end) && classes.input_end_icon
          ])}

          onClick={onInputWrapperClick}

          onMouseUp={onInputWrapperMouseUp}

          onMouseDown={onInputWrapperMouseDown}

          style={styles.inputWrapper}
        >
          {children}

          <InputComponent
            ref={item => {
              if (ref) {
                if (is('function', ref)) ref(item);
                else ref.current = item;
              }

              refs.input.current = item;
            }}

            {...inputProps}

            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-input'
              ],

              classes.input,
              inputProps?.className,
              multiline && classes.multiline,
              align && classes[`input_align_${align}`]
            ])}

            onFocus={onFocus}

            onBlur={onBlur}

            placeholder={placeholder}

            onChange={onUpdate}

            value={value !== undefined ? value : ''}

            type={type}

            name={name}

            autoFocus={autoFocus}

            autoComplete={autoComplete}

            readOnly={readOnly}

            disabled={disabled}

            style={styles.input}
          />
        </div>

        {sufix !== undefined && (
          <Type
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-addition',
                'AmauiTextField-sufix'
              ],

              classes.addition,
              classes.sufix,
              (end || version === 'text') && classes.sufix_noEndMargin,
              classes[`addition_size_${size}`],
              classes[`addition_version_${version}_size_${size}`],
              (enabled || valueWithData || focus) && classes.sufix_focus,
              noSufixMargin && classes.noSufixMargin
            ])}

            version='b2'
          >
            {sufix}
          </Type>
        )}

        {!!React.Children.toArray(end).length && (
          <span
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-icon',
                'AmauiTextField-icon-end'
              ],

              classes.icon,
              classes.icon_end,
              classes[`icon${end?.type?.displayName?.includes('IconButton') ? '_button' : ''}_size_${size}`],
              classes[`icon_version_${version}`],
              classes[`icon_vertical_align_${endVerticalAlign}`]
            ])}
          >
            {React.Children.toArray(end).map((item: any, index: number) => (
              React.cloneElement(item, {
                key: index,

                size: item.props?.size !== undefined ? item.props?.size : 'regular',
                color: item.props?.color !== undefined ? item.props?.color : error ? theme.palette.light ? theme.palette.color.error[hover ? 20 : 40] : theme.palette.color.error[hover ? 90 : 80] : theme.palette.text.default.secondary,
                style: {
                  ...item.props.style,

                  ...styles.icon
                }
              })
            ))}
          </span>
        )}
      </Component>

      {footer && <>
        {footer_}

        {(helperText !== undefined || counter !== undefined || required) && (
          <div
            className={classNames([
              staticClassName('TextField', theme) && [
                'AmauiTextField-footer'
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
                    'AmauiTextField-counter'
                  ],

                  classes.counterText,
                  error && classes.error_color
                ])}
              >
                {value?.length}/{counter}
              </Type>
            )}
          </div>
        )}
      </>}
    </Wrapper>
  );
});

TextField.displayName = 'AmauiTextField';

export default TextField;
