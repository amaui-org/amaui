import React from 'react';

import { clamp, is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import AmauiSubscription from '@amaui/subscription';

import IconElement from '../Icon';
import TypeElement from '../Type';
import LineElement from '../Line';
import useMediaQuery from '../useMediaQuery';
import { valueBreakpoints, staticClassName } from '../utils';
import { IBaseElement, ITonal, IColor, IVersion, ISize, IRef, IElement, IValueBreakpoints, IPropsAny, IElementReference } from '../types';

const IconMaterialCloseRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='CloseRounded'
      short_name='Close'

      {...props}
    >
      <path d="M12 13.4 7.1 18.3Q6.825 18.575 6.4 18.575Q5.975 18.575 5.7 18.3Q5.425 18.025 5.425 17.6Q5.425 17.175 5.7 16.9L10.6 12L5.7 7.1Q5.425 6.825 5.425 6.4Q5.425 5.975 5.7 5.7Q5.975 5.425 6.4 5.425Q6.825 5.425 7.1 5.7L12 10.6L16.9 5.7Q17.175 5.425 17.6 5.425Q18.025 5.425 18.3 5.7Q18.575 5.975 18.575 6.4Q18.575 6.825 18.3 7.1L13.4 12L18.3 16.9Q18.575 17.175 18.575 17.6Q18.575 18.025 18.3 18.3Q18.025 18.575 17.6 18.575Q17.175 18.575 16.9 18.3Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => {
  const other = {
    pointerEvents: 'none',
    borderRadius: 'inherit',
    boxSizing: 'border-box',
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%'
  };

  const overflow = {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };

  return {
    wrapper: {
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'column'
    },

    root: {
      display: 'inline-flex',
      alignItems: 'stretch',
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
      margin: '0',
      border: '0',
      fontFamily: 'inherit',
      fontSize: '100%',
      lineHeight: '1.15',
      overflow: 'visible',
      boxSizing: 'border-box',

      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      opacity: '0',
      transition: theme.methods.transitions.make('opacity'),
      borderRadius: `${theme.shape.radius.unit}px ${theme.shape.radius.unit}px 0 0`,
      width: '100%',
      cursor: 'text',

      ...theme.typography.values.b2
    },

    inputWrapper_focus: {
      opacity: '1'
    },

    input: {
      // Reset
      margin: '0',
      border: '0',
      outline: 'none',

      color: theme.palette.text.default.primary,
      background: 'transparent',
      '-webkit-tap-highlight-color': 'transparent',
      textAlign: 'start',

      ...theme.typography.values.b2,

      ...overflow
    },

    multiline: {
      resize: 'none',
      overflow: 'auto',
      whiteSpace: 'normal'
    },

    input_size_small: {
      // height: '48px',
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(2, 'px')}`,
      paddingTop: theme.methods.space.value(2.5, 'px')
    },

    input_size_regular: {
      // height: '56px',
      padding: `11px ${theme.methods.space.value(2, 'px')}`,
      paddingTop: theme.methods.space.value(3, 'px')
    },

    input_size_large: {
      // height: '64px',
      padding: theme.methods.space.value(2, 'px'),
      paddingTop: theme.methods.space.value(3.5, 'px')
    },

    input_version_text: {
      '&:not($input_start_icon)': {
        paddingInline: '0'
      }
    },

    input_start_icon: {
      paddingInlineStart: '0'
    },

    input_end_icon: {
      paddingInlineEnd: '0'
    },

    input_version_outlined_size_small: {
      paddingTop: theme.methods.space.value(1.75, 'px'),
      paddingBottom: theme.methods.space.value(1.75, 'px')
    },

    input_version_outlined_size_regular: {
      paddingTop: theme.methods.space.value(2.25, 'px'),
      paddingBottom: theme.methods.space.value(2.25, 'px')
    },

    input_version_outlined_size_large: {
      paddingTop: theme.methods.space.value(2.75, 'px'),
      paddingBottom: theme.methods.space.value(2.75, 'px')
    },

    input_align_start: {
      textAlign: 'start'
    },

    input_align_end: {
      textAlign: 'end'
    },

    label: {
      position: 'absolute',
      insetInlineStart: '16px',
      transformOrigin: 'top left',
      transition: theme.methods.transitions.make(['color', 'inset', 'margin', 'transform']),
      pointerEvents: 'none',
      userSelect: 'none',

      ...overflow,

      width: 'auto'
    },

    label_regular: {
      top: '50%',
      transform: 'translate(0px, -50%) scale(1)'
    },

    label_multiline: {
      top: '0px'
    },

    label_rtl: {
      transformOrigin: 'top right'
    },

    label_version_text: {
      insetInlineStart: '0px'
    },

    label_icon_start: {
      insetInlineStart: theme.methods.space.value(6.5, 'px')
    },

    label_size_small_multiline: {
      transform: 'translate(4px, 14px) scale(1)'
    },

    label_size_regular_multiline: {
      transform: 'translate(4px, 18px) scale(1)'
    },

    label_size_large_multiline: {
      transform: 'translate(4px, 22px) scale(1)'
    },

    // Focus
    label_version_text_focus: {
      top: '0px',
      insetInlineStart: '0px',
      transform: 'translate(0, 6px) scale(0.667)'
    },

    label_version_outlined_focus: {
      top: '0px',
      insetInlineStart: '15px',
      marginInlineStart: '4px',
      transform: 'translate(0, -6px) scale(0.667)'
    },

    label_version_filled_focus: {
      top: '0px',
      insetInlineStart: '15px',
      transform: 'translate(0, 6px) scale(0.667)'
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
      padding: '0',
      paddingInline: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(2, 'px')}`,

      transition: theme.methods.transitions.make(['border', 'padding'])
    },

    fieldset_focus: {
      borderWidth: '2px',
      paddingInline: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(2, 'px')}`
    },

    legend: {
      display: 'inline-flex',
      height: '11px',
      width: 'auto',
      padding: '0px',
      maxWidth: '0.001px',
      whiteSpace: 'nowrap',
      visibility: 'hidden',
      overflow: 'hidden',
      transition: theme.methods.transitions.make(['max-width', 'padding'], { duration: 'xxs' }),

      ...theme.typography.values.b2,

      fontSize: '0.64rem',
      letterSpacing: 'normal'
    },

    legend_focus: {
      maxWidth: '100%',
      padding: `0 ${theme.methods.space.value(0.5, 'px')}`,
      transition: theme.methods.transitions.make(['max-width', 'padding'], { duration: 'xs' })
    },

    footer: {
      marginTop: '4px',
      paddingInline: theme.methods.space.value(2, 'px')
    },

    footer_version_text: {
      paddingInline: '0'
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
      alignItems: 'center',
      flex: '0 0 auto'
    },

    icon_size_small: {
      paddingBlock: '12px'
    },

    icon_size_regular: {
      paddingBlock: '16px'
    },

    icon_size_large: {
      paddingBlock: '24px'
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
      paddingBlock: '0px !important'
    },

    icon_vertical_align_end: {
      alignSelf: 'flex-end'
    },

    icon_end: {
      paddingInlineStart: theme.methods.space.value(2, 'px'),
      paddingInlineEnd: theme.methods.space.value(1.5, 'px')
    },

    addition: {
      color: theme.palette.text.default.secondary
    },

    addition_size_small: {
      paddingBottom: theme.methods.space.value(1, 'px'),
      paddingTop: theme.methods.space.value(2.5, 'px')
    },

    addition_size_regular: {
      paddingBottom: theme.methods.space.value(1.5, 'px'),
      paddingTop: theme.methods.space.value(3, 'px')
    },

    addition_size_large: {
      paddingBottom: theme.methods.space.value(2, 'px'),
      paddingTop: theme.methods.space.value(3.5, 'px')
    },

    addition_version_outlined_size_small: {
      paddingTop: theme.methods.space.value(1.75, 'px'),
      paddingBottom: theme.methods.space.value(1.75, 'px')
    },

    addition_version_outlined_size_regular: {
      paddingTop: theme.methods.space.value(2.25, 'px'),
      paddingBottom: theme.methods.space.value(2.25, 'px')
    },

    addition_version_outlined_size_large: {
      paddingTop: theme.methods.space.value(2.75, 'px'),
      paddingBottom: theme.methods.space.value(2.75, 'px')
    },

    prefix: {
      flex: '0 0 auto',
      marginInlineStart: '16px',
      marginInlineEnd: '8px',
      opacity: '0',
      transition: theme.methods.transitions.make('opacity'),
    },

    prefix_noStartMargin: {
      marginInlineStart: '0px'
    },

    prefix_focus: {
      opacity: '1'
    },

    noPrefixMargin: {
      marginInlineEnd: '0'
    },

    sufix: {
      flex: '0 0 auto',
      marginInlineEnd: '16px',
      marginInlineStart: '8px',
      opacity: '0',
      transition: theme.methods.transitions.make('opacity'),
    },

    sufix_focus: {
      opacity: '1'
    },

    sufix_noEndMargin: {
      marginInlineEnd: '0px'
    },

    noSufixMargin: {
      marginInlineStart: '0'
    },

    fullWidth: {
      width: '100%'
    },

    clear: {
      cursor: 'pointer',
      pointerEvents: 'all !important',
      userSelect: 'none',
      transition: theme.methods.transitions.make('transform', { duration: 'xs' }),

      '&:active': {
        transform: 'scale(0.87)'
      }
    },

    disabled: {
      opacity: '0.54',
      pointerEvents: 'none',
      cursor: 'default'
    }
  };
}, { name: 'amaui-TextField' });

export interface ITextField extends IBaseElement {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;
  size?: ISize;

  rootRef?: IRef;

  valueDefault?: string | number;
  value?: string | number;
  onChange?: (value: any, event?: React.ChangeEvent<HTMLInputElement>) => any;

  name?: any;
  label?: any;
  align?: 'start' | 'end';
  start?: IElement;
  startVerticalAlign?: 'start' | 'center' | 'end';
  end?: IElement;
  endVerticalAlign?: 'start' | 'center' | 'end';
  placeholder?: string;
  fullWidth?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  helperText?: string;
  counter?: number;
  prefix?: string;
  sufix?: string;
  noPrefixMargin?: boolean;
  noSufixMargin?: boolean;
  enabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: boolean;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  optional?: boolean;
  optionalText?: string;
  error?: boolean;
  multiline?: boolean;
  clear?: boolean;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  focus?: boolean;
  footer?: IElement;
  controlled?: boolean;
  restoreSelection?: boolean;
  minWidth?: number;
  readOnly?: boolean;
  disabled?: boolean;
  subscription?: AmauiSubscription;

  onInput?: (event: InputEvent) => any;
  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;
  onMouseEnter?: (event: React.MouseEvent<any>) => any;
  onMouseLeave?: (event: React.MouseEvent<any>) => any;

  inputProps?: IPropsAny;
  InputWrapperProps?: IPropsAny;
  HelperTextProps?: IPropsAny;

  IconClear?: IElementReference;
  InputComponent?: IElementReference;
  WrapperComponent?: IElementReference;
  IconProps?: IPropsAny;
}

const TextField: React.FC<ITextField> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTextField?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    version = 'filled',
    size = 'regular',

    rootRef,

    valueDefault,
    value: value_,
    onChange,

    name,
    label: label_,
    align,
    start,
    startVerticalAlign = 'start',
    end: end_,
    endVerticalAlign: endVerticalAlign_ = 'start',
    placeholder,
    fullWidth: fullWidth_,
    helperText,
    counter,
    prefix,
    sufix,
    noPrefixMargin,
    noSufixMargin,
    enabled,
    autoFocus,
    autoComplete,
    type: type_ = 'text',
    required,
    optional,
    optionalText = 'optional',
    error,
    multiline,
    rows: rows_,
    minRows = 1,
    maxRows,
    clear,
    focus: focus_,
    footer: footer_,
    subscription,
    controlled,
    restoreSelection = false,
    minWidth,
    readOnly,
    disabled,

    onInput: onInput_,
    onFocus: onFocus_,
    onBlur: onBlur_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,

    inputProps = {},
    InputWrapperProps = {},
    HelperTextProps,
    IconProps,

    IconClear = IconMaterialCloseRounded,
    InputComponent: InputComponent_,
    WrapperComponent = 'div',

    Component = 'div',

    className,
    style,

    children,

    // Other
    colorUnchecked,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(),
    input: React.useRef<HTMLInputElement>(),
    carret: React.useRef<any>(),
    restoreSelection: React.useRef(restoreSelection),
    controlled: React.useRef(controlled),
    ids: {
      label: React.useId(),
      clear: React.useId()
    }
  };

  refs.controlled.current = controlled;

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const label = name !== undefined ? name : label_;

  let endVerticalAlign = endVerticalAlign_;

  const fullWidth = valueBreakpoints(fullWidth_, undefined, breakpoints, theme);

  const rowValue = () => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const htmlFontSize = isEnvironment('browser') ? +window.getComputedStyle(rootDocument.documentElement).fontSize.slice(0, -2) : 16;
    const padding = size === 'small' ? 28 : size === 'regular' ? 36 : 44;

    const row_ = Math.round(htmlFontSize * 0.875 * 1.4285714285714286);

    return {
      height: row_,
      padding
    };
  };

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_));
  const [focus, setFocus] = React.useState(focus_);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [row, setRow] = React.useState(rowValue);
  const [rows, setRows] = React.useState<any>(1);

  let end = end_;

  let type = type_;

  const styles: any = {
    root: {

    },
    input: {},
    inputWrapper: {},
    background: {
      color: theme.palette.text.default.secondary
    }
  };

  refs.restoreSelection.current = restoreSelection;

  React.useEffect(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const htmlObserver = new MutationObserver(() => setRow(rowValue));

    htmlObserver.observe(rootDocument.documentElement, { attributes: true, attributeFilter: ['style'] });

    rootDocument.addEventListener('mouseup', onInputWrapperMouseUp as any);

    return () => {
      // Clean up
      rootDocument.removeEventListener('mouseup', onInputWrapperMouseUp as any);

      htmlObserver.disconnect();
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (refs.restoreSelection.current && refs.carret.current) {
        // Carret restore previous value
        try {
          refs.input.current.selectionStart = refs.carret.current.start;
          refs.input.current.selectionEnd = refs.carret.current.end;
        }
        catch (error) { }
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

  React.useEffect(() => {
    const method = (event: string) => {
      if (event === 'clear') onClear();
    };

    if (subscription) subscription.subscribe(method);

    return () => {
      if (subscription) subscription.unsubscribe(method);
    };
  }, [subscription]);

  const onUpdateRows = () => {
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
  };

  const onUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Carret save previous value
    refs.carret.current = { start: refs.input.current.selectionStart, end: refs.input.current.selectionEnd };

    // Only restore if it's not regular carret value
    if (refs.carret.current.start === inputValue.length) refs.carret.current = undefined;

    onUpdateRows();

    // Inner controlled value
    if (!refs.controlled.current) setValue(inputValue);

    if (is('function', onChange)) onChange(inputValue, event);
  };

  const onInput = (event: InputEvent) => {
    onUpdateRows();

    if (is('function', onInput_)) onInput_(event);
  };

  const onClear = React.useCallback(() => {
    if (!disabled) {
      const valueNew = '';

      // Inner controlled value
      if (!refs.controlled.current) setValue(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  }, [disabled, onChange]);

  const onInputWrapperMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) {
      setMouseDown(true);

      refs.input.current.focus();

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
    styles.root.color = styles.input.caretColor = tonal ? theme.methods.palette.color.value(color as any, 30, true, palette) : (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any)?.main || color);
  }

  if (error) {
    styles.input.caretColor = theme.palette.light ? theme.palette.color.error[40] : theme.palette.color.error[80];
  }

  if (tonal) styles.background.color = theme.methods.palette.color.value(color as any, 20, true, palette);

  const footer = (footer_ || !!helperText || counter !== undefined || required);

  const Wrapper = footer ? WrapperComponent : React.Fragment;

  let ComponentProps: any = {};

  let WrapperProps: any = {};

  if (value && clear) {
    if (!Array.isArray(end)) end = [end].filter(Boolean);

    const exists = (end as any[])?.find(item => item.key === refs.ids.clear);

    if (!exists) {
      if (props.endVerticalAlign === undefined) endVerticalAlign = 'center';

      (end as any).push(
        <IconClear
          key={refs.ids.clear}

          color='inherit'

          onClick={onClear}

          {...IconProps}

          className={classNames([
            IconProps?.className,

            classes.clear
          ])}
        />
      );
    }
  }

  if (footer) {
    WrapperProps = {
      ...other
    };

    WrapperProps.ref = item => {
      if (rootRef) {
        if (is('function', rootRef)) (rootRef as any)(item);
        else rootRef.current = item;
      }

      refs.root.current = item;
    };

    WrapperProps['className'] = classNames([
      staticClassName('TextField', theme) && [
        'amaui-TextField-wrapper',
        fullWidth && 'amaui-TextField-full-width',
        disabled && 'amaui-TextField-disabled',
        fullWidth && 'amaui-full-width'
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

    ComponentProps.ref = item => {
      if (rootRef) {
        if (is('function', rootRef)) (rootRef as any)(item);
        else rootRef.current = item;
      }

      refs.root.current = item;
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

  let InputComponent: any = 'input';

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

  // override the input element
  // with a custom value
  if (InputComponent_) InputComponent = InputComponent_;

  // onInput
  if (!['input', 'textarea'].includes(InputComponent)) {
    inputProps.onInput = onInput;
  }

  const valueWithData = value !== undefined && String(value);

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Component
        onMouseEnter={onMouseEnter}

        onMouseLeave={onMouseLeave}

        onTouchStart={onMouseEnter}

        onTouchEnd={onMouseLeave}

        role='textbox'

        aria-multiline={multiline}

        aria-labelledby={refs.ids.label}

        {...ComponentProps}

        className={classNames([
          staticClassName('TextField', theme) && [
            'amaui-TextField-root', ,
            `amaui-TextField-version-${version}`,
            `amaui-TextField-size-${size}`,
            multiline && `amaui-TextField-multiline`,
            valueWithData && 'amaui-TextField-value',
            error && `amaui-TextField-error`,
            required && 'amaui-TextField-required',
            enabled && 'amaui-TextField-enabled',
            hover && `amaui-TextField-hover`,
            mouseDown && `amaui-TextField-mouse-down`,
            focus && `amaui-TextField-focus`,
            readOnly && `amaui-TextField-read-only`,
            disabled && 'amaui-TextField-disabled',
            fullWidth && 'amaui-full-width'
          ],

          ComponentProps.className,
          classes.root,
          classes[`color_${color}`],
          fullWidth && classes.fullWidth,
          error && (hover ? classes.error_hover_color : classes.error_color),
          !footer && disabled && classes.disabled
        ])}

        style={{
          minWidth,

          ...ComponentProps?.style
        }}
      >
        {['filled'].includes(version) && (
          <span
            className={classNames([
              staticClassName('TextField', theme) && [
                'amaui-TextField-background'
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
                'amaui-TextField-border'
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
                'amaui-TextField-fieldset'
              ],

              classes.fieldset,
              focus && classes.fieldset_focus
            ])}

            style={styles.fieldset}
          >
            <legend
              className={classNames([
                staticClassName('TextField', theme) && [
                  'amaui-TextField-legend'
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
            version='b2'

            id={refs.ids.label}

            Component='label'

            className={classNames([
              staticClassName('TextField', theme) && [
                'amaui-TextField-label'
              ],

              classes.label,
              classes[`label_${multiline ? 'multiline' : 'regular'}`],
              classes[`label_version_${version}`],
              classes[`label_size_${size}`],
              multiline && classes[`label_size_${size}_multiline`],
              classes[`label_version_${version}_size_${size}`],
              (enabled || valueWithData || focus) && [
                classes[`label_focus`],
                classes[`label_version_${version}_focus`],
                classes[`label_version_${version}_size_${size}${multiline ? '_multiline' : ''}_focus`],
                multiline && classes.label_multiline_focus
              ],
              theme.direction === 'rtl' && classes.label_rtl,
              start && [
                classes.label_icon_start,
                classes[`label_version_${version}_icon_start`]
              ]
            ])}
          >
            {label}{required ? '*' : ''}{optional ? ` (${optionalText})` : ''}
          </Type>
        )}

        {!!React.Children.toArray(start).length && (
          <span
            className={classNames([
              staticClassName('TextField', theme) && [
                'amaui-TextField-icon',
                'amaui-TextField-icon-start'
              ],

              classes.icon,
              classes.icon_start,
              classes[`icon${(start as any)?.type?.displayName?.includes('IconButton') ? '_button' : ''}_size_${size}`],
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
                'amaui-TextField-addition',
                'amaui-TextField-prefix'
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
              'amaui-TextField-input-wrapper'
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

          style={{
            ...styles.inputWrapper,

            ...InputWrapperProps.style
          }}
        >
          {children}

          <InputComponent
            {...inputProps}

            ref={item => {
              if (ref) {
                if (is('function', ref)) ref(item);
                else ref.current = item;
              }

              refs.input.current = item;

              if (inputProps.ref) {
                if (is('function', inputProps.ref)) inputProps.ref(item);
                else inputProps.ref.current = item;
              }
            }}

            className={classNames([
              staticClassName('TextField', theme) && [
                'amaui-TextField-input'
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

            autoFocus={autoFocus}

            autoComplete={autoComplete}

            readOnly={readOnly}

            disabled={disabled}

            style={{
              ...styles.input,

              ...inputProps.style
            }}
          />
        </div>

        {sufix !== undefined && (
          <Type
            className={classNames([
              staticClassName('TextField', theme) && [
                'amaui-TextField-addition',
                'amaui-TextField-sufix'
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
                'amaui-TextField-icon',
                'amaui-TextField-icon-end'
              ],

              classes.icon,
              classes.icon_end,
              classes[`icon${(end as any)?.type?.displayName?.includes('IconButton') ? '_button' : ''}_size_${size}`],
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
        {(!!helperText || counter !== undefined || required) && (
          <Line
            gap={2}

            direction='row'

            justify='space-between'

            className={classNames([
              staticClassName('TextField', theme) && [
                'amaui-TextField-footer'
              ],

              classes.footer,
              classes[`footer_version_${version}`]
            ])}
          >
            {(helperText || required) && (
              <Type
                version='b3'

                {...HelperTextProps}

                className={classNames([
                  staticClassName('TextField', theme) && [
                    'amaui-TextField-helper-text',
                    error && 'amaui-TextField-error'
                  ],

                  HelperTextProps?.className,
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
                    'amaui-TextField-counter'
                  ],

                  classes.counterText,
                  error && classes.error_color
                ])}
              >
                {String(value)?.length || 0}/{counter}
              </Type>
            )}
          </Line>
        )}

        {footer_}
      </>}
    </Wrapper>
  );
});

TextField.displayName = 'amaui-TextField';

export default TextField;
