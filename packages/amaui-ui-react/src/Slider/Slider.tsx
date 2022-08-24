import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import IconButton from '../IconButton';
import { clamp, debounce, is } from '@amaui/utils';

const rail = {
  position: 'absolute',
  display: 'inline-flex',
  width: '100%',
  background: 'currentColor',
  top: '50%',
  transform: 'translateY(-50%)',
  borderRadius: 'inherit'
};

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    borderRadius: `${theme.shape.radius.unit * 0.75}px`
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

  // Tonal
  tonal_color_neutral: { color: theme.methods.palette.color.value('default', 70) },

  tonal_color_primary: { color: theme.methods.palette.color.value('primary', 70) },

  tonal_color_secondary: { color: theme.methods.palette.color.value('secondary', 70) },

  tonal_color_tertiary: { color: theme.methods.palette.color.value('tertiary', 70) },

  tonal_color_quaternary: { color: theme.methods.palette.color.value('quaternary', 70) },

  tonal_color_info: { color: theme.methods.palette.color.value('info', 70) },

  tonal_color_success: { color: theme.methods.palette.color.value('success', 70) },

  tonal_color_warning: { color: theme.methods.palette.color.value('warning', 70) },

  tonal_color_error: { color: theme.methods.palette.color.value('error', 70) },

  rail: {
    inset: 0,
    ...rail,
    opacity: 0.24
  },

  rail_size_small: { height: '3px' },

  rail_size_regular: { height: '4px' },

  rail_size_large: { height: '5px' },

  track: {
    ...rail,
    insetInlineStart: 0
  },

  track_size_small: { height: '5px' },

  track_size_regular: { height: '6px' },

  track_size_large: { height: '7px' },

  square: {
    borderRadius: '0px'
  },

  iconButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  },

  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'currentColor',
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
  }
}), { name: 'AmauiSlider' });

const Slider = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSlider?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    size = 'regular',
    square,
    value: value_,
    valueDefault,
    onChange,
    precision = 0.00001,
    readOnly,
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
    props: React.useRef<any>(),
    mouseDown: React.useRef<any>()
  };

  refs.props.current = props;
  refs.mouseDown.current = mouseDown;

  const { classes } = useStyle(props);

  const valuePrecision = (value__: number) => {
    if (value__ <= 0) return 0;

    let mod = value__ % precision;

    if (precision >= value__) return precision;
    else if (mod === 0) return value__;
    else {
      let valueNew = value__;

      while (true) {
        const valueDecimals = String(precision).split('.')[1].length;

        valueNew += Number(`0.${'0'.repeat(valueDecimals - 1)}1`);

        valueNew = +(valueNew).toFixed(valueDecimals);

        mod = +(valueNew % precision).toFixed(valueDecimals);

        if (mod === precision || mod === 0) return valueNew;
        else if (valueNew >= 1) return 0;
      }
    }
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      if (!disabled && !readOnly) setMouseDown(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!refs.props.current.disabled && !refs.props.current.readOnly && refs.mouseDown.current) {
        const { clientX } = event;

        const rect = refs.root.current.getBoundingClientRect();

        const width = rect.width;

        // Value to the precision point value
        const value__ = clamp(valuePrecision((clientX - rect.x) / width), 0, 1);

        if (props.hasOwnProperty('value')) {
          if (is('function', refs.props.current.onChange)) refs.props.current.onChange(value__);
        }
        // Inner controlled value
        else setValue(value__);
      }
    };

    window.document.addEventListener('mouseup', onMouseUp);
    window.document.addEventListener('mousemove', onMouseMove);

    setInit(true);

    return () => {
      window.document.removeEventListener('mouseup', onMouseUp);
      window.document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  React.useEffect(() => {
    if (init && value_ !== value) setValue(value_);
  }, [value_]);

  const move = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) {
      const { clientX } = event;

      const rect = refs.root.current.getBoundingClientRect();

      const width = rect.width;

      // Value to the precision point value
      const value__ = clamp(valuePrecision((clientX - rect.x) / width), 0, 1);

      if (props.hasOwnProperty('value')) {
        if (is('function', onChange)) onChange(value__);
      }
      // Inner controlled value
      else setValue(value__);
    }
  }, [disabled, readOnly, onChange, value]);

  const onFocus = React.useCallback((event) => {
    if (!disabled && !readOnly && !mouseDown) setFocus(true);
  }, [disabled, readOnly, mouseDown]);

  const onBlur = React.useCallback(() => {
    if (!disabled && !readOnly) setFocus(false);
  }, [disabled, readOnly]);

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) {
      setMouseDown(true);

      move(event);
    }
  }, [disabled, readOnly]);

  const styles: any = {
    root: {},
    iconButton: {},
    track: {}
  };

  const palette = !theme.palette.color[color] && theme.methods.color(color);

  if (!classes[color] && color !== 'default') styles.root.color = !tonal ? palette.main : theme.methods.palette.color.value(undefined, 70, true, palette);

  if (size === 'small') {
    styles.iconButton.insetInlineStart = `calc(${value * 100}% - 15px)`;
  }

  if (size === 'regular') {
    styles.iconButton.insetInlineStart = `calc(${value * 100}% - 20px)`;
  }

  if (size === 'large') {
    styles.iconButton.insetInlineStart = `calc(${value * 100}% - 25px)`;
  }

  styles.track.width = `${value * 100}%`;

  console.log(1, value);

  return (
    <Component
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      onMouseDown={onMouseDown}

      className={classNames([
        staticClassName('Slider', theme) && [
          'AmauiSlider-root',
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
          classes[`rail_size_${size}`]
        ])}

        style={styles.rail}
      />

      <span
        className={classNames([
          staticClassName('Slider', theme) && [
            'AmauiSlider-track'
          ],

          classes.track,
          classes[`track_size_${size}`]
        ])}

        style={styles.track}
      />

      <IconButton
        size={size}

        tonal={tonal}

        color={color}

        onBlur={onBlur}

        onFocus={onFocus}

        className={classNames([
          staticClassName('Slider', theme) && [
            'AmauiSlider-iconButton'
          ],

          classes.iconButton
        ])}

        style={styles.iconButton}
      >
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'AmauiSlider-icon'
            ],

            classes.icon,
            classes[`icon_size_${size}`]
          ])}
        />
      </IconButton>
    </Component>
  );
});

Slider.displayName = 'AmauiSlider';

export default Slider;
