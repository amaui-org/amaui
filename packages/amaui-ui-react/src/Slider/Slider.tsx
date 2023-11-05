import React from 'react';

import { clamp, equalDeep, is, isEnvironment, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconButton from '../IconButton';
import Tooltip from '../Tooltip';
import Zoom from '../Zoom';

import { IBaseElement, staticClassName, TColor, TElement, TPropsAny, TSize, TTonal } from '../utils';

const rail = {
  position: 'absolute',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'inherit'
};

const horizontal = {
  top: '50%',
  transform: 'translateY(-50%)'
};

const vertical = {
  left: '50%',
  transform: 'translateX(-50%)'
};

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    borderRadius: `${theme.shape.radius.unit * 0.75}px`,
    cursor: 'pointer',
    touchAction: 'none'
  },

  rail: {
    ...rail
  },

  rail_orientation_horizontal: {
    insetInline: '0'
  },

  rail_orientation_vertical: {
    insetBlock: '0'
  },

  rail_orientation_horizontal_size_small: { height: '3px' },

  rail_orientation_horizontal_size_regular: { height: '4px' },

  rail_orientation_horizontal_size_large: { height: '5px' },

  rail_orientation_vertical_size_small: { width: '3px' },

  rail_orientation_vertical_size_regular: { width: '4px' },

  rail_orientation_vertical_size_large: { width: '5px' },

  track: {
    ...rail,
  },

  track_orientation_horizontal: {
    insetInlineStart: '0'
  },

  track_orientation_vertical: {
    insetBlockEnd: '0'
  },

  track_orientation_horizontal_size_small: { height: '5px' },

  track_orientation_horizontal_size_regular: { height: '6px' },

  track_orientation_horizontal_size_large: { height: '7px' },

  track_orientation_vertical_size_small: { width: '5px' },

  track_orientation_vertical_size_regular: { width: '6px' },

  track_orientation_vertical_size_large: { width: '7px' },

  // Color
  // rail
  rail_color_default: { background: theme.methods.palette.color.value('default', 80) },

  rail_color_neutral: { background: theme.methods.palette.color.value('default', 80) },

  rail_color_primary: { background: theme.methods.palette.color.value('primary', 80) },

  rail_color_secondary: { background: theme.methods.palette.color.value('secondary', 80) },

  rail_color_tertiary: { background: theme.methods.palette.color.value('tertiary', 80) },

  rail_color_quaternary: { background: theme.methods.palette.color.value('quaternary', 80) },

  rail_color_info: { background: theme.methods.palette.color.value('info', 80) },

  rail_color_success: { background: theme.methods.palette.color.value('success', 80) },

  rail_color_warning: { background: theme.methods.palette.color.value('warning', 80) },

  rail_color_error: { background: theme.methods.palette.color.value('error', 80) },

  // track
  track_color_default: { background: theme.methods.palette.color.value('neutral', 0) },

  track_color_neutral: { background: theme.palette.color.neutral.main },

  track_color_primary: { background: theme.palette.color.primary.main },

  track_color_secondary: { background: theme.palette.color.secondary.main },

  track_color_tertiary: { background: theme.palette.color.tertiary.main },

  track_color_quaternary: { background: theme.palette.color.quaternary.main },

  track_color_info: { background: theme.palette.color.info.main },

  track_color_success: { background: theme.palette.color.success.main },

  track_color_warning: { background: theme.palette.color.warning.main },

  track_color_error: { background: theme.palette.color.error.main },

  // Tonal
  track_tonal_color_neutral: { background: theme.methods.palette.color.value('default', 70) },

  track_tonal_color_primary: { background: theme.methods.palette.color.value('primary', 70) },

  track_tonal_color_secondary: { background: theme.methods.palette.color.value('secondary', 70) },

  track_tonal_color_tertiary: { background: theme.methods.palette.color.value('tertiary', 70) },

  track_tonal_color_quaternary: { background: theme.methods.palette.color.value('quaternary', 70) },

  track_tonal_color_info: { background: theme.methods.palette.color.value('info', 70) },

  track_tonal_color_success: { background: theme.methods.palette.color.value('success', 70) },

  track_tonal_color_warning: { background: theme.methods.palette.color.value('warning', 70) },

  track_tonal_color_error: { background: theme.methods.palette.color.value('error', 70) },

  // iconButton
  iconButton_color_default: {
    '&.amaui-IconButton-root': {
      color: theme.palette.text.default.primary
    }
  },

  iconButton_color_neutral: {
    '&.amaui-IconButton-root': {
      color: theme.palette.color.neutral.main
    }
  },

  iconButton_color_primary: {
    '&.amaui-IconButton-root': {
      color: theme.palette.color.primary.main
    }
  },

  iconButton_color_secondary: {
    '&.amaui-IconButton-root': {
      color: theme.palette.color.secondary.main
    }
  },

  iconButton_color_tertiary: {
    '&.amaui-IconButton-root': {
      color: theme.palette.color.tertiary.main
    }
  },

  iconButton_color_quaternary: {
    '&.amaui-IconButton-root': {
      color: theme.palette.color.quaternary.main
    }
  },

  iconButton_color_info: {
    '&.amaui-IconButton-root': {
      color: theme.palette.color.info.main
    }
  },

  iconButton_color_success: {
    '&.amaui-IconButton-root': {
      color: theme.palette.color.success.main
    }
  },

  iconButton_color_warning: {
    '&.amaui-IconButton-root': {
      color: theme.palette.color.warning.main
    }
  },

  iconButton_color_error: {
    '&.amaui-IconButton-root': {
      color: theme.palette.color.error.main
    }
  },

  // Tonal
  iconButton_tonal_color_neutral: {
    '&.amaui-IconButton-root': {
      color: theme.methods.palette.color.value('default', 70)
    }
  },

  iconButton_tonal_color_primary: {
    '&.amaui-IconButton-root': {
      color: theme.methods.palette.color.value('primary', 70)
    }
  },

  iconButton_tonal_color_secondary: {
    '&.amaui-IconButton-root': {
      color: theme.methods.palette.color.value('secondary', 70)
    }
  },

  iconButton_tonal_color_tertiary: {
    '&.amaui-IconButton-root': {
      color: theme.methods.palette.color.value('tertiary', 70)
    }
  },

  iconButton_tonal_color_quaternary: {
    '&.amaui-IconButton-root': {
      color: theme.methods.palette.color.value('quaternary', 70)
    }
  },

  iconButton_tonal_color_info: {
    '&.amaui-IconButton-root': {
      color: theme.methods.palette.color.value('info', 70)
    }
  },

  iconButton_tonal_color_success: {
    '&.amaui-IconButton-root': {
      color: theme.methods.palette.color.value('success', 70)
    }
  },

  iconButton_tonal_color_warning: {
    '&.amaui-IconButton-root': {
      color: theme.methods.palette.color.value('warning', 70)
    }
  },

  iconButton_tonal_color_error: {
    '&.amaui-IconButton-root': {
      color: theme.methods.palette.color.value('error', 70)
    }
  },

  square: {
    borderRadius: '0px'
  },

  iconButton: {
    position: 'absolute'
  },

  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.5em)`,
    transform: 'scale(0.7)',
    transition: theme.methods.transitions.make('transform', { duration: 'xs' })
  },

  iconActive: {
    transform: 'scale(1)'
  },

  icon_size_small: {
    width: '16px',
    height: '16px',
  },

  icon_size_regular: {
    width: '20px',
    height: '20px',
  },

  icon_size_large: {
    width: '24px',
    height: '24px',
  },

  marks: {
    inset: '0',
    ...rail
  },

  mark: {
    position: 'absolute',
    width: '2px',
    height: '2px',
    borderRadius: '50%'
  },

  orientation_horizontal: {
    ...horizontal
  },

  orientation_vertical: {
    ...vertical
  },

  labels: {
    position: 'absolute',
    userSelect: 'none'
  },

  labels_orientation_horizontal: {
    width: '100%',
    left: '0',
    top: '15px'
  },

  labels_orientation_vertical: {
    height: '100%',
    top: '0',
    insetInlineStart: '21px'
  },

  label: {
    position: 'absolute',
    ...theme.typography.values.b2,
    transition: theme.methods.transitions.make('color', { duration: 'xs' }),
    color: theme.palette.text.default.secondary
  },

  label_orientation_horizontal: {
    transform: 'translateX(-50%)'
  },

  label_orientation_horizontal_rtl: {
    transform: 'translateX(50%)'
  },

  label_orientation_vertical: {
    transform: 'translateY(50%)'
  },

  label_active: {
    color: theme.palette.text.default.primary
  },

  focus_outline: {
    outline: `1px solid ${theme.palette.text.default.secondary}`,
    outlineOffset: '8px'
  },

  readOnly: {
    cursor: 'default'
  },

  tooltip: {
    '& .amaui-Tooltip-label': {
      padding: '0',
      lineHeight: '0',
      minWidth: '30px',
      paddingTop: '100%',
      overflow: 'hidden',
      borderRadius: '50% 50% 50% 0px',
      transform: 'rotate(-45deg)',

      '& .amaui-Tooltip-label-text': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)'
      }
    },

    '&.amaui-Tooltip-position-left': {
      '& .amaui-Tooltip-label': {
        borderRadius: '50% 50% 0px 50%'
      }
    },

    '&.amaui-Tooltip-position-right': {
      '& .amaui-Tooltip-label': {
        borderRadius: '0px 50% 50% 50%'
      }
    }
  },

  tooltip_switch_orientation_horizontal_ltr: {
    '& .amaui-Tooltip-label': {
      transform: 'rotate(135deg)',

      '& .amaui-Tooltip-label-text': {
        transform: 'translate(-50%, -50%) rotate(-135deg)'
      }
    }
  },

  tooltip_switch_orientation_horizontal_rtl: {
    '& .amaui-Tooltip-label': {
      transform: 'rotate(135deg)',

      '& .amaui-Tooltip-label-text': {
        transform: 'translate(-50%, -50%) rotate(-135deg)'
      }
    }
  },

  disabled: {
    cursor: 'default',
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'amaui-Slider' });

export type TSliderValue = number | Array<number>;

export interface ISlider extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;
  size?: TSize;

  value?: TSliderValue;
  valueDefault?: TSliderValue;
  onChange?: (value: TSliderValue) => any;

  orientation?: 'vertical' | 'horizontal';

  marks?: Array<{
    value?: number;

    label?: TElement;
  }>;
  precision?: number;
  min?: number;
  max?: number;
  tooltip?: 'always' | boolean;
  labels?: boolean;
  onlyMarks?: boolean;
  labelTooltipResolve?: (value: number) => TElement;
  iconButtonPositionResolve?: (value: number, normalized: number, size: TSize) => string;
  noTrack?: boolean;
  noButtons?: boolean;
  square?: boolean;
  inverted?: boolean;
  readOnly?: boolean;
  disabled?: boolean;

  IconButtonProps?: TPropsAny;
  TooltipProps?: TPropsAny;
}

const Slider = React.forwardRef((props_: ISlider, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSlider?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color: color_ = 'primary',
    size = 'regular',

    value: value_,
    valueDefault,
    onChange,

    orientation = 'horizontal',

    marks,
    precision = 0.001,
    min = 0,
    max = 100,
    tooltip,
    labels,
    onlyMarks,
    labelTooltipResolve,
    iconButtonPositionResolve,
    noTrack,
    noButtons,
    square,
    inverted,
    readOnly,
    disabled,

    onMouseDown: onMouseDown_,
    onTouchStart: onTouchStart_,

    IconButtonProps,
    TooltipProps,

    Component = 'span',

    style,
    className,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(() => {
    const valueNew = (valueDefault !== undefined ? valueDefault : value_) || 0;

    return is('array', valueNew) ? (valueNew as any).sort((a, b) => a - b) : valueNew;
  });
  const [mouseDown, setMouseDown] = React.useState<any>(false);
  const [mouseDownButton, setMouseDownButton] = React.useState<any>(false);
  const [focus, setFocus] = React.useState(false);
  const [focusButton, setFocusButton] = React.useState<any>(false);

  const refs = {
    root: React.useRef<HTMLSpanElement>(),
    value: React.useRef<any>(),
    props: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    mouseDownButton: React.useRef<any>(),
    focusButton: React.useRef<any>(),
    direction: React.useRef<any>(),
    iconButtons: React.useRef<Array<any>>([]),
  };

  refs.value.current = value;

  refs.props.current = props;

  refs.mouseDown.current = mouseDown;

  refs.mouseDownButton.current = mouseDownButton;

  refs.focusButton.current = focusButton;

  refs.direction.current = theme.direction;

  const { classes } = useStyle(props);

  let color = color_;

  if (disabled) color = 'default';

  const valueDecimals = (String(precision).includes('e-') ? +String(precision).split('e-')[1] : String(precision).split('.')[1]?.length) || 0;

  const valuePrecision = (valueMouse: number, mouseDownButtonUpdate = false) => {
    let value__ = valueFromPercentageWithinRange(valueMouse * 100, min, max);

    if (refs.direction.current === 'rtl' && orientation === 'horizontal') value__ = (max + min) - value__;

    if (value__ <= min) return min;

    if (value__ >= max) return max;

    // previous value
    let previous = clamp(+(value__ - (value__ % precision)).toFixed(valueDecimals), min, max);

    if (value__ < 0) previous -= precision;

    if (onlyMarks && is('array', marks)) {
      const previousMark = marks.map(item => item.value).sort((a, b) => b - a).find(item => item <= value__);

      previous = previousMark !== undefined ? previousMark : min;
    }

    // next value
    let next = clamp(+(previous + precision).toFixed(valueDecimals), min, max);

    if (onlyMarks && is('array', marks)) {
      const nextMark = marks.map(item => item.value).sort((a, b) => a - b).find(item => item >= value__);

      next = nextMark !== undefined ? nextMark : max;
    }

    const valueNew = value__ < previous + ((next - previous) / 2) ? previous : next;

    if (mouseDownButtonUpdate && is('array', refs.value.current)) {
      const items = refs.value.current.map(item => Math.abs(valueNew - item));
      const minItem = Math.min(...items);

      const index = items.findIndex(item => item === minItem);

      setMouseDownButton(index);

      refs.mouseDownButton.current = index;
    }

    return valueNew;
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      if (!disabled && !readOnly) {
        setMouseDown(false);
        setMouseDownButton(false);
      }
    };

    const onMouseMove = (event: TouchEvent | MouseEvent) => {
      if (!refs.props.current.disabled && !refs.props.current.readOnly && refs.mouseDown.current) {
        let x: number;
        let y: number;

        if ((event as MouseEvent).clientX !== undefined) {
          x = (event as MouseEvent).clientX;
          y = (event as MouseEvent).clientY;
        }
        else {
          x = (event as TouchEvent).touches[0].clientX;
          y = (event as TouchEvent).touches[0].clientY;
        }

        const rect = refs.root.current.getBoundingClientRect();

        const { width, height } = rect;

        // Value to the precision point value
        const value__ = valuePrecision(orientation === 'horizontal' ? (x - rect.x) / width : (1 - (y - rect.y) / height));

        const valueNew = is('array', refs.value.current) ? [...refs.value.current] : value__;

        if (is('array', refs.value.current)) {
          let index = is('number', refs.mouseDownButton.current) ? refs.mouseDownButton.current : 0;

          if (index > 0 && value__ < refs.value.current[index - 1]) {
            index -= 1;

            setMouseDownButton(index);
          }

          if (index < refs.value.current.length - 1 && value__ > refs.value.current[index + 1]) {
            index += 1;

            setMouseDownButton(index);
          }

          valueNew[index] = value__;
        }

        if (!equalDeep(valueNew, refs.value.current)) {
          // Inner controlled value
          if (!props.hasOwnProperty('value')) setValue(valueNew);

          if (is('function', onChange)) onChange(valueNew);
        }
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('mouseup', onMouseUp);
    rootDocument.addEventListener('mousemove', onMouseMove);
    rootDocument.addEventListener('touchend', onMouseUp, { passive: true });
    rootDocument.addEventListener('touchmove', onMouseMove, { passive: true });

    setInit(true);

    return () => {
      rootDocument.removeEventListener('mouseup', onMouseUp);
      rootDocument.removeEventListener('touchend', onMouseUp);
      rootDocument.removeEventListener('mousemove', onMouseMove);
      rootDocument.removeEventListener('touchmove', onMouseMove);
    };
  }, []);

  React.useEffect(() => {
    if (init && value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  const move = React.useCallback((x: number, y: number) => {
    if (!disabled && !readOnly) {
      const rect = refs.root.current.getBoundingClientRect();

      const { width, height } = rect;

      // Value to the precision point value
      const value__ = valuePrecision(orientation === 'horizontal' ? (x - rect.x) / width : (1 - (y - rect.y) / height), true);

      const valueNew = is('array', refs.value.current) ? [...refs.value.current] : value__;

      if (is('array', refs.value.current)) {
        let index = is('number', refs.mouseDownButton.current) ? refs.mouseDownButton.current : 0;

        if (index > 0 && value__ <= refs.value.current[index - 1]) {
          index -= 1;

          setMouseDownButton(index);
        }

        if (index < refs.value.current.length - 1 && value__ >= refs.value.current[index + 1]) {
          index += 1;

          setMouseDownButton(index);
        }

        valueNew[index] = value__;
      }

      if (!equalDeep(valueNew, refs.value.current)) {
        // Inner controlled value
        if (!props.hasOwnProperty('value')) setValue(valueNew);

        if (is('function', onChange)) onChange(valueNew);
      }
    }
  }, [disabled, readOnly, onChange, value, mouseDownButton]);

  const moveItem = (forward_ = true) => {
    const forward = (orientation === 'vertical' || (theme.direction === 'ltr' && orientation === 'horizontal')) ? forward_ : !forward_;

    let valueNew = is('array', refs.value.current) ? [...refs.value.current] : refs.value.current;
    let index = refs.focusButton.current || 0;

    let value__ = is('array', valueNew) ? valueNew[index] : valueNew;

    // previous value
    let previous = clamp(+(value__ - precision).toFixed(valueDecimals), min, max);

    if (onlyMarks && is('array', marks)) {
      const previousMark = marks.map(item => item.value).sort((a, b) => b - a).find(item => item < value__);

      previous = previousMark !== undefined ? previousMark : min;
    }

    // next value
    let next = clamp(+(value__ + precision).toFixed(valueDecimals), min, max);

    if (onlyMarks && is('array', marks)) {
      const nextMark = marks.map(item => item.value).sort((a, b) => a - b).find(item => item > value__);

      next = nextMark !== undefined ? nextMark : max;
    }

    value__ = forward ? next : previous;

    if (is('array', refs.value.current)) {
      if (index > 0 && value__ < refs.value.current[index - 1]) {
        index -= 1;

        refs.focusButton.current = index;

        setFocusButton(index);

        refs.iconButtons.current[index].focus();
      }

      if (index < refs.value.current.length - 1 && value__ > refs.value.current[index + 1]) {
        index += 1;

        refs.focusButton.current = index;

        setFocusButton(index);

        refs.iconButtons.current[index].focus();
      }

      valueNew[index] = value__;
    }
    else valueNew = value__;

    if (!equalDeep(valueNew, refs.value.current)) {
      if (!props.hasOwnProperty('value')) setValue(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  };

  const onKeyDown = React.useCallback((event: React.KeyboardEvent<any>) => {
    if (!disabled && !readOnly) {
      if (['Enter', 'Escape', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
        // Prevent default
        event.preventDefault();

        let valueNew = refs.value.current;

        switch (event.key) {
          case 'End':
            if (is('array', refs.value.current)) {
              valueNew = [...refs.value.current];

              valueNew[0] = min;
            } else valueNew = min;

            if (!props.hasOwnProperty('value')) setValue(valueNew);

            if (is('function', onChange)) return onChange(valueNew);

            return;

          case 'Home':
            if (is('array', refs.value.current)) {
              valueNew = [...refs.value.current];

              valueNew[valueNew.length - 1] = max;
            } else valueNew = max;

            if (!props.hasOwnProperty('value')) setValue(valueNew);

            if (is('function', onChange)) return onChange(valueNew);

            return;

          case 'ArrowUp':
          case 'ArrowRight':
            return moveItem();

          case 'ArrowDown':
          case 'ArrowLeft':
            return moveItem(false);

          default:
            break;
        }
      }
    }
  }, [disabled, readOnly, value, precision, focusButton]);

  const onFocus = React.useCallback(() => {
    if (!disabled && !readOnly && !mouseDown) setFocus(true);
  }, [disabled, readOnly, mouseDown]);

  const onBlur = React.useCallback(() => {
    if (!disabled && !readOnly) setFocus(false);
  }, [disabled, readOnly]);

  const onFocusButton = React.useCallback((index: number) => {
    if (!disabled && !readOnly) setFocusButton(index);
  }, [disabled, readOnly]);

  const onMouseDownButton = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>, index: number) => {
    if (!disabled && !readOnly) setMouseDownButton(index);
  }, [disabled, readOnly]);

  const onMouseDown = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>) => {
    if (!disabled && !readOnly) {
      setMouseDown(true);

      const x = (event as React.MouseEvent<any>).clientX ? (event as React.MouseEvent<any>).clientX : (event as React.TouchEvent<any>).touches?.[0]?.clientX;

      const y = (event as React.MouseEvent<any>).clientY ? (event as React.MouseEvent<any>).clientY : (event as React.TouchEvent<any>).touches?.[0]?.clientY;

      move(x, y);
    }

    if (is('function', onMouseDown_)) onMouseDown_(event);
  }, [disabled, readOnly, onMouseDown_]);

  const onTouchStart = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>) => {
    if (!disabled && !readOnly) {
      setMouseDown(true);

      const x = (event as React.MouseEvent<any>).clientX ? (event as React.MouseEvent<any>).clientX : (event as React.TouchEvent<any>).touches?.[0]?.clientX;

      const y = (event as React.MouseEvent<any>).clientY ? (event as React.MouseEvent<any>).clientY : (event as React.TouchEvent<any>).touches?.[0]?.clientY;

      move(x, y);
    }

    if (is('function', onMouseDown_)) onMouseDown_(event);
  }, [disabled, readOnly, onTouchStart_]);

  const styles: any = {
    root: {

    },
    icon: {},
    iconButton: {},
    rail: {},
    track: {},
    markRail: {},
    markTrack: {},
    label: {},
  };

  const palette = !theme.palette.color[color] && theme.methods.color(color);

  if (!theme.palette.color[color] && color !== 'default') {
    styles.markRail.background = styles.rail.background = theme.methods.palette.color.value(undefined, 90, true, palette);

    styles.label.background = styles.markTrack.background = styles.icon.background = styles.track.background = styles.iconButton.color = !tonal ? palette.main : theme.methods.palette.color.value(undefined, 70, true, palette);

    styles.label.color = theme.methods.palette.color.text(styles.label.background, true, 'light');
  }

  styles.label.background = !tonal ? (palette?.main || (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any).main)) : theme.methods.palette.color.value(color as any, 70, true, palette);

  styles.label.color = theme.methods.palette.color.text(styles.label.background, true, 'light');

  const values = (is('array', value) ? value : [value]);

  const valueValue = (value__: any = values[0]) => {
    let valueNew = value__;

    if (value__ === min) valueNew = 0;

    else if (value__ === max) valueNew = 100;

    else valueNew = percentageFromValueWithinRange(value__, min, max);

    return valueNew;
  };

  const valueMark = (value__: any) => {
    if (value__ === min) return 0;

    if (value__ === max) return `calc(100% - 2px)`;

    return `calc(${valueValue(value__)}% - 1px)`;
  };

  const propInset = orientation === 'horizontal' ? 'insetInlineStart' : 'insetBlockEnd';

  const iconButtonStyles = (value__: number) => {
    const style_ = {};

    if (is('function', iconButtonPositionResolve)) style_[propInset] = iconButtonPositionResolve(value__, valueValue(value__), size);
    else {
      if (size === 'small') {
        style_[propInset] = `calc(${valueValue(value__)}% - 15px)`;
      }

      if (size === 'regular') {
        style_[propInset] = `calc(${valueValue(value__)}% - 20px)`;
      }

      if (size === 'large') {
        style_[propInset] = `calc(${valueValue(value__)}% - 25px)`;
      }
    }

    return style_;
  };

  const propTrac = orientation === 'horizontal' ? 'width' : 'height';

  if (values.length === 1) styles.track[propTrac] = `${valueValue()}%`;
  else {
    const start = Math.min(...values);
    const end = Math.max(...values);

    if (orientation === 'horizontal') {
      styles.track.insetInlineStart = `${valueValue(start)}%`;
      styles.track.insetInlineEnd = `${100 - valueValue(end)}%`;
    }

    if (orientation === 'vertical') {
      styles.track.insetBlockStart = `${100 - valueValue(end)}%`;
      styles.track.insetBlockEnd = `${valueValue(start)}%`;
    }
  }

  const marksValue = Math.ceil((max - min) / precision);

  let marks_ = [];

  if (marks) {
    if (is('array', marks)) marks_ = marks;
    else if (marksValue <= 1e3) {
      let markSum = min;
      let index = 1;

      marks_.push({ value: min, label: min });

      while (markSum <= max) {
        markSum = min + (precision * index++);

        if (markSum < max) marks_.push({ value: markSum, label: markSum });
      }

      marks_.push({ value: max, label: max });
    }
  }

  const markTrack = (value__: number) => {
    if (values.length === 1) return !inverted ? value__ <= values[0] : value__ > values[0];
    else return !inverted ? value__ >= values[0] && value__ <= values[values.length - 1] : value__ < values[0] || value__ > values[values.length - 1];
  };

  const labelMethod = is('function', labelTooltipResolve) ? labelTooltipResolve : (value__: number) => +(value__).toFixed();

  return (
    <Component
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tabIndex={noButtons ? 0 : -1}

      onFocus={onFocus}

      onBlur={onBlur}

      onTouchStart={onTouchStart}

      onMouseDown={onMouseDown}

      onKeyDown={onKeyDown}

      role='slider'

      aria-orientation={orientation}

      aria-valuenow={valueValue()}

      aria-valuetext={`${valueValue()}%`}

      aria-valuemin={min}

      aria-valuemax={max}

      className={classNames([
        staticClassName('Slider', theme) && [
          'amaui-Slider-root',
          mouseDown && `amaui-Slider-mouse-down`,
          focus && `amaui-Slider-focus`,
          readOnly && `amaui-Slider-read-only`,
          disabled && `amaui-Slider-disabled`
        ],

        className,
        classes.root,
        classes[`color_${color}`],
        tonal && classes[`tonal_color_${color}`],
        noButtons && focus && classes.focus_outline,
        square && classes.square,
        readOnly && classes.readOnly,
        disabled && classes.disabled
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      <span
        className={classNames([
          staticClassName('Slider', theme) && [
            'amaui-Slider-rail'
          ],

          classes.rail,
          classes[`orientation_${orientation}`],
          classes[`rail_orientation_${orientation}`],
          classes[`rail_orientation_${orientation}_size_${size}`],
          !inverted ? [
            classes[`rail_color_${color}`]
          ] : [
            classes[`track_color_${color}`],
            tonal && classes[`track_tonal_color_${color}`]
          ]
        ])}

        style={styles.rail}
      />

      {!noTrack && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'amaui-Slider-track'
            ],

            classes.track,
            classes[`orientation_${orientation}`],
            classes[`track_orientation_${orientation}`],
            classes[`track_orientation_${orientation}_size_${size}`],
            !inverted ? [
              classes[`track_color_${color}`],
              tonal && classes[`track_tonal_color_${color}`]
            ] : [
              classes[`rail_color_${color}`]
            ]
          ])}

          style={styles.track}
        />
      )}

      {!!marks_.length && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'amaui-Slider-marks'
            ],

            classes.marks,
            classes[`orientation_${orientation}`],
            classes[`track_size_${size}`]
          ])}
        >
          {marks_.map((item: any, index: number) => (
            <span
              key={index}

              className={classNames([
                staticClassName('Slider', theme) && [
                  'amaui-Slider-mark'
                ],

                classes.mark,
                markTrack(item.value) ? classes[`rail_color_${color}`] : [
                  classes[`track_color_${color}`],
                  tonal && classes[`track_tonal_color_${color}`]
                ]
              ])}

              style={{
                ...(markTrack(item.value) ? styles.markRail : styles.markTrack),

                [propInset]: valueMark(item.value)
              }}
            />
          ))}
        </span>
      )}

      {labels && !!marks_.length && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'amaui-Slider-labels'
            ],

            classes.labels,
            classes[`labels_orientation_${orientation}`]
          ])}
        >
          {marks_.map((item: any, index: number) => (
            <span
              key={index}

              className={classNames([
                staticClassName('Slider', theme) && [
                  'amaui-Slider-label'
                ],

                classes.label,
                classes[`label_orientation_${orientation}`],
                theme.direction === 'rtl' && classes[`label_orientation_${orientation}_rtl`],
                item.value <= value && classes.label_active
              ])}

              style={{
                [propInset]: valueMark(item.value)
              }}
            >
              {item.label}
            </span>
          ))}
        </span>
      )}

      {!noButtons && values.map((value__: number, index: number) => (
        <Tooltip
          key={index}

          className={classNames([
            classes.tooltip,
            classes[`tooltip_orientation_${orientation}`]
          ])}

          classNameSwitch={classes[`tooltip_switch_orientation_${orientation}_${theme.direction}`]}

          {...((tooltip === 'always') || (tooltip !== undefined && mouseDownButton === index) ? { open: true } : tooltip === undefined ? { open: false } : {})}

          label={labelMethod(value__)}

          position={orientation === 'horizontal' ? 'top' : theme.direction === 'ltr' ? 'left' : 'right'}

          alignment='center'

          TransitionComponent={Zoom}

          transformOrigin={orientation === 'horizontal' ? 'center bottom' : 'center right'}

          transformOriginSwitch={orientation === 'horizontal' ? 'center top' : 'center left'}

          transformOriginRtl={orientation === 'horizontal' ? 'center bottom' : 'center left'}

          transformOriginRtlSwitch={orientation === 'horizontal' ? 'center top' : 'center right'}

          noMargin

          LabelProps={{
            style: styles.label
          }}

          {...TooltipProps}
        >
          <IconButton
            ref={item => refs.iconButtons.current.push(item)}

            size={size}

            tonal={tonal}

            color={color}

            onBlur={onBlur}

            onFocus={() => {
              onFocus();

              onFocusButton(index);
            }}

            onMouseDown={(event: any) => onMouseDownButton(event, index)}

            aria-valuenow={valueValue(value__)}

            aria-valuetext={`${valueValue(value__)}%`}

            aria-valuemin={min}

            aria-valuemax={max}

            className={classNames([
              staticClassName('Slider', theme) && [
                'amaui-Slider-icon-button'
              ],

              classes.iconButton,
              classes[`orientation_${orientation}`],
              !tonal && classes[`iconButton_color_${color}`],
              tonal && classes[`iconButton_tonal_color_${color}`],
            ])}

            style={iconButtonStyles(value__)}

            {...IconButtonProps}
          >
            <span
              className={classNames([
                staticClassName('Slider', theme) && [
                  'amaui-Slider-icon'
                ],

                classes.icon,
                classes[`track_color_${color}`],
                tonal && classes[`track_tonal_color_${color}`],
                classes[`icon_size_${size}`],
                (mouseDownButton === index) && classes.iconActive
              ])}

              style={styles.icon}
            />
          </IconButton>
        </Tooltip>
      ))}
    </Component>
  );
});

Slider.displayName = 'amaui-Slider';

export default Slider;
