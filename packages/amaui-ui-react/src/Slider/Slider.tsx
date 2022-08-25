import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import IconButton from '../IconButton';

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

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    borderRadius: `${theme.shape.radius.unit * 0.75}px`,
    cursor: 'pointer'
  },

  rail: {
    inset: 0,
    ...rail
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
    insetInlineStart: 0
  },

  track_orientation_vertical: {
    insetBlockEnd: 0
  },

  track_orientation_horizontal_size_small: { height: '5px' },

  track_orientation_horizontal_size_regular: { height: '6px' },

  track_orientation_horizontal_size_large: { height: '7px' },

  track_orientation_vertical_size_small: { width: '5px' },

  track_orientation_vertical_size_regular: { width: '6px' },

  track_orientation_vertical_size_large: { width: '7px' },

  // Color
  // rail
  rail_color_default: { background: theme.methods.palette.color.value('default', 90) },

  rail_color_neutral: { background: theme.methods.palette.color.value('default', 90) },

  rail_color_primary: { background: theme.methods.palette.color.value('primary', 90) },

  rail_color_secondary: { background: theme.methods.palette.color.value('secondary', 90) },

  rail_color_tertiary: { background: theme.methods.palette.color.value('tertiary', 90) },

  rail_color_quaternary: { background: theme.methods.palette.color.value('quaternary', 90) },

  rail_color_info: { background: theme.methods.palette.color.value('info', 90) },

  rail_color_success: { background: theme.methods.palette.color.value('success', 90) },

  rail_color_warning: { background: theme.methods.palette.color.value('warning', 90) },

  rail_color_error: { background: theme.methods.palette.color.value('error', 90) },

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
  iconButton_color_default: { color: [theme.palette.text.default.primary, '!important'] },

  iconButton_color_neutral: { color: [theme.palette.color.neutral.main, '!important'] },

  iconButton_color_primary: { color: [theme.palette.color.primary.main, '!important'] },

  iconButton_color_secondary: { color: [theme.palette.color.secondary.main, '!important'] },

  iconButton_color_tertiary: { color: [theme.palette.color.tertiary.main, '!important'] },

  iconButton_color_quaternary: { color: [theme.palette.color.quaternary.main, '!important'] },

  iconButton_color_info: { color: [theme.palette.color.info.main, '!important'] },

  iconButton_color_success: { color: [theme.palette.color.success.main, '!important'] },

  iconButton_color_warning: { color: [theme.palette.color.warning.main, '!important'] },

  iconButton_color_error: { color: [theme.palette.color.error.main, '!important'] },

  // Tonal
  iconButton_tonal_color_neutral: { color: [theme.methods.palette.color.value('default', 70), '!important'] },

  iconButton_tonal_color_primary: { color: [theme.methods.palette.color.value('primary', 70), '!important'] },

  iconButton_tonal_color_secondary: { color: [theme.methods.palette.color.value('secondary', 70), '!important'] },

  iconButton_tonal_color_tertiary: { color: [theme.methods.palette.color.value('tertiary', 70), '!important'] },

  iconButton_tonal_color_quaternary: { color: [theme.methods.palette.color.value('quaternary', 70), '!important'] },

  iconButton_tonal_color_info: { color: [theme.methods.palette.color.value('info', 70), '!important'] },

  iconButton_tonal_color_success: { color: [theme.methods.palette.color.value('success', 70), '!important'] },

  iconButton_tonal_color_warning: { color: [theme.methods.palette.color.value('warning', 70), '!important'] },

  iconButton_tonal_color_error: { color: [theme.methods.palette.color.value('error', 70), '!important'] },

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
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.5em)`
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
    inset: 0,
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
  }
}), { name: 'AmauiSlider' });

// To do

// smallest values
// move bugging
// marks only with no precision
// tooltip
// tooltip always open
// multiple value y
// inverted
// readOnly
// disabled

// controlled value y
// focus and keyboard

const Slider = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSlider?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    size = 'regular',
    orientation = 'horizontal',
    square,
    value: value_,
    valueDefault,
    onChange,
    readOnly,
    marks,
    precision = 0.001,
    min = 0,
    max = 100,
    noButton,
    disabled,

    Component = 'span',

    style,
    className,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || 0);
  const [focus, setFocus] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLSpanElement>(),
    value: React.useRef<any>(),
    props: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    direction: React.useRef<any>()
  };

  refs.value.current = value;
  refs.props.current = props;
  refs.mouseDown.current = mouseDown;
  refs.direction.current = theme.direction;

  const { classes } = useStyle(props);

  const valueDecimals = (String(precision).includes('e-') ? +String(precision).split('e-')[1] : String(precision).split('.')[1]?.length) || 0;

  const valuePrecision = (valueMouse_: number) => {
    const valueMouse = +(valueMouse_ * (max + min)).toFixed(valueDecimals);
    const valuePrevious = refs.value.current;
    const offset = refs.direction.current === 'rtl' ? max : 0;

    console.log(11, valueMouse);
    let value__ = +(Math.abs(valueMouse - offset)).toFixed(valueDecimals);

    if (valueMouse <= min) return refs.direction.current === 'ltr' ? min : max;

    if (valueMouse >= max) return refs.direction.current === 'ltr' ? max : min;

    if (
      valuePrevious < max &&
      (
        (value__ === valuePrevious) ||
        (value__ > valuePrevious && value__ < valuePrevious + (precision / 2)) ||
        (value__ < valuePrevious && value__ >= valuePrevious - (precision / 2))
      )
    ) return valuePrevious;

    if (
      (value__ < valuePrevious && value__ < valuePrevious - (precision / 2)) ||
      (value__ < valuePrevious && valuePrevious === max && precision > ((max + min) / 2) && precision < max)
    ) value__ -= precision;

    let mod = value__ % precision;

    let valueNew = value__;

    const repeat = !String(precision).includes('e-') ? +String(precision).split('.')[0].length - 1 : 0;

    const valuePrecisionInteger = +(`1${'0'.repeat(repeat)}`) / (precision === max ? 100 : 10);
    const valuePrecisionDecimal = valueDecimals && `${'0'.repeat(valueDecimals)}1`;

    const valuePrecision = !valuePrecisionDecimal ? valuePrecisionInteger : +`${String(valuePrecisionInteger).split('.')[0]}${valuePrecisionDecimal ? `.${valuePrecisionDecimal}` : ''}`;

    console.log(15, valuePrecision);
    while (true) {
      valueNew += valuePrecision;

      valueNew = +(valueNew).toFixed(valueDecimals);

      mod = +(valueNew % precision).toFixed(valueDecimals);

      if (valueNew >= max) return max;

      if (mod === precision || mod === 0) return valueNew;
    }
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      if (!disabled && !readOnly) setMouseDown(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!refs.props.current.disabled && !refs.props.current.readOnly && refs.mouseDown.current) {
        const { clientX, clientY } = event;

        const rect = refs.root.current.getBoundingClientRect();

        const { width, height } = rect;

        // Value to the precision point value
        const value__ = valuePrecision(orientation === 'horizontal' ? (clientX - rect.x) / width : (1 - (clientY - rect.y) / height));

        if (value__ !== refs.value.current) {
          if (props.hasOwnProperty('value')) {
            if (is('function', refs.props.current.onChange)) refs.props.current.onChange(value__);
          }
          // Inner controlled value
          else setValue(value__);
        }
      }
    };

    window.document.addEventListener('mouseup', onMouseUp);
    window.document.addEventListener('touchend', onMouseUp, { passive: true });
    window.document.addEventListener('mousemove', onMouseMove);

    setInit(true);

    return () => {
      window.document.removeEventListener('mouseup', onMouseUp);
      window.document.removeEventListener('touchend', onMouseUp);
      window.document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  React.useEffect(() => {
    if (init && value_ !== value) setValue(value_);
  }, [value_]);

  const move = React.useCallback((x: number, y: number) => {
    if (!disabled && !readOnly) {
      const rect = refs.root.current.getBoundingClientRect();

      const { width, height } = rect;

      // Value to the precision point value
      const value__ = valuePrecision(orientation === 'horizontal' ? (x - rect.x) / width : (1 - (y - rect.y) / height));

      if (value__ !== value) {
        if (props.hasOwnProperty('value')) {
          if (is('function', onChange)) onChange(value__);
        }
        // Inner controlled value
        else setValue(value__);
      }
    }
  }, [disabled, readOnly, onChange, value]);

  const onFocus = React.useCallback((event) => {
    if (!disabled && !readOnly && !mouseDown) setFocus(true);
  }, [disabled, readOnly, mouseDown]);

  const onBlur = React.useCallback(() => {
    if (!disabled && !readOnly) setFocus(false);
  }, [disabled, readOnly]);

  const onMouseDown = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>) => {
    if (!disabled && !readOnly) {
      setMouseDown(true);

      const x = (event as React.MouseEvent<any>).clientX ? (event as React.MouseEvent<any>).clientX : (event as React.TouchEvent<any>).touches?.[0]?.clientX;

      const y = (event as React.MouseEvent<any>).clientY ? (event as React.MouseEvent<any>).clientY : (event as React.TouchEvent<any>).touches?.[0]?.clientY;

      move(x, y);
    }
  }, [disabled, readOnly]);

  const styles: any = {
    root: {},
    icon: {},
    iconButton: {},
    rail: {},
    track: {},
    markRail: {},
    markTrack: {}
  };

  const palette = !theme.palette.color[color] && theme.methods.color(color);

  if (!theme.palette.color[color] && color !== 'default') {
    styles.markRail.background = styles.rail.background = theme.methods.palette.color.value(undefined, 90, true, palette);

    styles.markTrack.background = styles.icon.background = styles.track.background = styles.iconButton.color = !tonal ? palette.main : theme.methods.palette.color.value(undefined, 70, true, palette);
  }

  const valueValue = (value__: any = value, pure = false) => {
    let valueNew = value__;

    if (value__ === min) valueNew = 0;

    else if (value__ === max) valueNew = 100;

    else valueNew = (value__ / (max + min)) * 100;

    return pure ? valueNew : orientation === 'horizontal' ? valueNew : 100 - valueNew;
  };

  const valueMark = (value__: any) => {
    if (value__ === min) return orientation === 'horizontal' ? 0 : `calc(100% - 2px)`;

    if (value__ === max) return orientation === 'horizontal' ? `calc(100% - 2px)` : 0;

    return `calc(${valueValue(value__)}% - 1px)`;
  };

  const propInset = orientation === 'horizontal' ? 'insetInlineStart' : 'insetBlockStart';

  const valuePercent = valueValue();

  if (size === 'small') {
    styles.iconButton[propInset] = `calc(${valuePercent}% - 15px)`;
  }

  if (size === 'regular') {
    styles.iconButton[propInset] = `calc(${valuePercent}% - 20px)`;
  }

  if (size === 'large') {
    styles.iconButton[propInset] = `calc(${valuePercent}% - 25px)`;
  }

  const propTrac = orientation === 'horizontal' ? 'width' : 'height';

  styles.track[propTrac] = `${valueValue(value, true)}%`;

  const marksValue = Math.ceil((max - min) / precision);

  let marks_ = [];

  if (!!marks && marksValue <= 1e3) {
    if (is('object', marks)) marks_ = marks;
    else {
      let markSum = min;
      let index = 1;

      marks_.push({ value: min });

      while (markSum <= max) {
        markSum = min + (precision * index++);

        if (markSum < max) marks_.push({ value: markSum });
      }

      marks_.push({ value: max });
    }
  }
  console.log(1, marksValue, marks_, valueDecimals);
  return (
    <Component
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      onTouchStart={onMouseDown}

      onMouseDown={onMouseDown}

      className={classNames([
        staticClassName('Slider', theme) && [
          'AmauiSlider-root',
          `AmauiSlider-orientation-${orientation}`,
          `AmauiSlider-color-${!classes[color] ? 'new' : color}`,
          tonal && `AmauiSlider-tonal`,
          square && `AmauiSlider-square`
        ],

        className,
        classes.root,
        classes[`color_${color}`],
        tonal && classes[`tonal_color_${color}`],
        square && classes.square
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
            'AmauiSlider-rail'
          ],

          classes.rail,
          classes[`orientation_${orientation}`],
          classes[`rail_color_${color}`],
          classes[`rail_orientation_${orientation}_size_${size}`]
        ])}

        style={styles.rail}
      />

      <span
        className={classNames([
          staticClassName('Slider', theme) && [
            'AmauiSlider-track'
          ],

          classes.track,
          classes[`orientation_${orientation}`],
          classes[`track_orientation_${orientation}`],
          classes[`track_color_${color}`],
          tonal && classes[`track_tonal_color_${color}`],
          classes[`track_orientation_${orientation}_size_${size}`]
        ])}

        style={styles.track}
      />

      {!!marks_.length && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'AmauiSlider-marks'
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
                  'AmauiSlider-mark'
                ],

                classes.mark,
                item.value <= value ? classes[`rail_color_${color}`] : [
                  classes[`track_color_${color}`],
                  tonal && classes[`track_tonal_color_${color}`]
                ]
              ])}

              style={{
                ...(item.value <= value ? styles.markRail : styles.markTrack),

                [propInset]: valueMark(item.value)
              }}
            />
          ))}
        </span>
      )}

      {!noButton && (
        <IconButton
          size={size}

          color='inherit'

          onBlur={onBlur}

          onFocus={onFocus}

          className={classNames([
            staticClassName('Slider', theme) && [
              'AmauiSlider-iconButton'
            ],

            classes.iconButton,
            classes[`orientation_${orientation}`],
            !tonal && classes[`iconButton_color_${color}`],
            tonal && classes[`iconButton_tonal_color_${color}`],
          ])}

          style={styles.iconButton}
        >
          <span
            className={classNames([
              staticClassName('Slider', theme) && [
                'AmauiSlider-icon'
              ],

              classes.icon,
              classes[`track_color_${color}`],
              tonal && classes[`track_tonal_color_${color}`],
              classes[`icon_size_${size}`]
            ])}

            style={styles.icon}
          />
        </IconButton>
      )}
    </Component>
  );
});

Slider.displayName = 'AmauiSlider';

export default Slider;
