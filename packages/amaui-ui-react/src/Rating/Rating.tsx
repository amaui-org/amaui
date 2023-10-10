import React from 'react';

import { clamp, is, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName, TColor, TElement, TSize, TTonal } from '../utils';

import Icon from '../Icon';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    touchAction: 'none'
  },

  iconWrapper: {
    display: 'inline-flex',
    position: 'relative',
    transition: theme.methods.transitions.make('transform', { duration: 'xs' }),

    '&:hover': {
      transform: 'scale(1.14)'
    }
  },

  iconWrapper_readOnly: {
    '&:hover': {
      transform: 'none'
    }
  },

  icon: {
    display: 'inline-flex'
  },

  active: {
    display: 'inline-flex',
    position: 'absolute',
    inset: '0',
    overflow: 'hidden',
    height: '100%',
    width: '0px'
  },

  inactive: {
    opacity: theme.palette.light ? '0.24' : '0.4'
  },

  focus_outline: {
    outline: `1px solid ${theme.palette.text.default.secondary}`
  },

  readOnly: {
    cursor: 'default'
  },

  disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    cursor: 'default'
  }
}), { name: 'amaui-Rating' });

const IconMaterialGradeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeRounded'

      short_name='Grade'

      {...props}
    >
      <path d="M12 12.775ZM7.05 21.05Q6.775 21.275 6.463 21.075Q6.15 20.875 6.275 20.525L8.15 14.4L3.275 10.9Q2.975 10.7 3.088 10.35Q3.2 10 3.55 10H9.6L11.525 3.6Q11.575 3.4 11.713 3.325Q11.85 3.25 12 3.25Q12.15 3.25 12.288 3.325Q12.425 3.4 12.475 3.6L14.4 10H20.45Q20.8 10 20.913 10.35Q21.025 10.7 20.725 10.9L15.85 14.4L17.725 20.525Q17.85 20.875 17.538 21.075Q17.225 21.275 16.95 21.05L12 17.3ZM9.6 16.65 12 14.8 14.4 16.65 13.5 13.6 15.75 12H12.95L12 8.9L11.05 12H8.25L10.5 13.6Z" />
    </Icon>
  );
});

const IconMaterialGradeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeRoundedFilled'
      short_name='Grade'

      {...props}
    >
      <path d="M7.05 21.05Q6.775 21.275 6.463 21.075Q6.15 20.875 6.275 20.525L8.15 14.4L3.275 10.9Q2.975 10.7 3.088 10.35Q3.2 10 3.55 10H9.6L11.525 3.6Q11.575 3.4 11.713 3.325Q11.85 3.25 12 3.25Q12.15 3.25 12.288 3.325Q12.425 3.4 12.475 3.6L14.4 10H20.45Q20.8 10 20.913 10.35Q21.025 10.7 20.725 10.9L15.85 14.4L17.725 20.525Q17.85 20.875 17.538 21.075Q17.225 21.275 16.95 21.05L12 17.3Z" />
    </Icon>
  );
});

export interface IRating extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;
  colorInactive?: TColor;
  size?: TSize;

  value?: number;
  valueDefault?: number;
  valueActive?: number;
  valueActiveDefault?: number;

  onChange?: (value: number) => any;
  onChangeActive?: (value: number) => any;

  values?: number;
  precision?: number;
  onlyValue?: boolean;
  readOnly?: boolean;
  disabled?: boolean;

  icon?: TElement;
  icons?: {
    default?: TElement;

    [property: number | string]: TElement;
  };
  iconInactive?: TElement;
  iconActive?: TElement;
}

const Rating = React.forwardRef((props_: IRating, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiRating?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'primary',
    colorInactive = 'default',
    size = 'regular',

    value: value_,
    valueDefault,
    valueActive: valueActive_,
    valueActiveDefault,

    onChange,
    onChangeActive,

    values = 5,
    precision = 1,
    onlyValue,
    readOnly,
    disabled,

    icon,
    icons,
    iconInactive = <IconMaterialGradeRounded />,
    iconActive = <IconMaterialGradeRoundedFilled />,

    Component = 'span',

    className,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);
  const [valueActive, setValueActive] = React.useState<number>(valueActiveDefault !== undefined ? valueActiveDefault : valueActive_);
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);

  const refs = {
    root: React.useRef<any>(),
    props: React.useRef<any>(),
    value: React.useRef<any>(),
    valueActive: React.useRef<any>(),
    values: React.useRef<Array<HTMLSpanElement>>([]),
    mouseDown: React.useRef<any>(),
    hover: React.useRef<any>(),
    direction: React.useRef<any>()
  };

  refs.props.current = props;
  refs.value.current = value;
  refs.valueActive.current = valueActive;
  refs.mouseDown.current = mouseDown;
  refs.hover.current = hover;
  refs.direction.current = theme.direction;

  const { classes } = useStyle(props);

  const min = 0;
  const max = values;
  const valueDecimals = (String(precision).includes('e-') ? +String(precision).split('e-')[1] : String(precision).split('.')[1]?.length) || 0;

  const valuePrecision = (valueMouse: number) => {
    let value__ = valueFromPercentageWithinRange(valueMouse * 100, min, max);

    if (refs.direction.current === 'rtl') value__ = (max + min) - value__;

    if (value__ <= min) return min;

    if (value__ >= max) return max;

    // previous value
    let previous = clamp(+(value__ - (value__ % precision)).toFixed(valueDecimals), min, max);

    if (value__ < 0) previous -= precision;

    // next value
    const next = clamp(+(previous + precision).toFixed(valueDecimals), min, max);

    const valueNew = value__ > next ? previous : next;

    return valueNew;
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      if (!disabled && !readOnly) setMouseDown(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!refs.props.current.disabled && !refs.props.current.readOnly && (refs.mouseDown.current || refs.hover.current)) {
        const valuePrevious = refs.hover.current ? refs.valueActive.current : refs.value.current;
        const x: number = event.clientX;

        const rect = refs.root.current.getBoundingClientRect();

        const { width: width_ } = rect;

        // Value to the precision point value
        const value__ = valuePrecision((x - rect.x) / width_);

        const valueNew = value__;

        if (valueNew !== valuePrevious) {
          if (!props.hasOwnProperty('value')) {
            // Inner controlled value
            if (refs.hover.current) setValueActive(valueNew);
            else setValue(valueNew);
          }

          if (refs.hover.current) {
            if (is('function', onChangeActive)) onChangeActive(valueNew);
          }
          else {
            if (is('function', onChange)) onChange(valueNew);
          }
        }
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!refs.props.current.disabled && !refs.props.current.readOnly && refs.mouseDown.current) {
        const valuePrevious = refs.hover.current ? refs.valueActive.current : refs.value.current;
        const x: number = event.touches[0].clientX;

        const rect = refs.root.current.getBoundingClientRect();

        const { width: width_ } = rect;

        // Value to the precision point value
        const value__ = valuePrecision((x - rect.x) / width_);

        const valueNew = value__;

        if (valueNew !== valuePrevious) {
          // Inner controlled value
          if (!props.hasOwnProperty('value')) setValue(valueNew);

          if (is('function', onChange)) onChange(valueNew);
        }
      }
    };

    const rootDocument = refs.root.current?.ownerDocument || window.document;

    rootDocument.addEventListener('mouseup', onMouseUp);
    rootDocument.addEventListener('mousemove', onMouseMove);
    rootDocument.addEventListener('touchend', onMouseUp, { passive: true });
    rootDocument.addEventListener('touchmove', onTouchMove, { passive: true });

    setInit(true);

    return () => {
      rootDocument.removeEventListener('mouseup', onMouseUp);
      rootDocument.removeEventListener('touchend', onMouseUp);
      rootDocument.removeEventListener('mousemove', onMouseMove);
      rootDocument.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  React.useEffect(() => {
    if (init && value_ !== value) setValue(value_);
  }, [value_]);

  React.useEffect(() => {
    if (init && valueActive_ !== valueActive) setValueActive(valueActive_);
  }, [valueActive_]);

  const onMouseDown = React.useCallback(() => {
    if (!disabled && !readOnly) setMouseDown(true);
  }, [disabled, readOnly]);

  const onClick = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) {
      // Make precision value
      // if value is same as previous value clear
      // otherwise update the value y
      const x: number = event.clientX;

      const rect = refs.root.current.getBoundingClientRect();

      const { width: width_ } = rect;

      const valueNew = valuePrecision((x - rect.x) / width_);

      if (value === valueNew) onClear();
      else {
        if (!props.hasOwnProperty('value')) setValue(valueNew);

        if (is('function', onChange)) onChange(valueNew);
      }
    }
  }, [disabled, readOnly, value, valueActive]);

  const move = (forward_ = true) => {
    const forward = theme.direction === 'ltr' ? forward_ : !forward_;

    let value__ = refs.value.current || 0;

    // previous value
    const previous = clamp(+(value__ - precision).toFixed(valueDecimals), min, max);

    // next value
    const next = clamp(+(value__ + precision).toFixed(valueDecimals), min, max);

    value__ = forward ? next : previous;

    const valueNew = value__;

    if (valueNew !== refs.value.current) {
      if (!props.hasOwnProperty('value')) setValue(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  };

  const onClear = () => {
    if (!props.hasOwnProperty('value')) setValue('' as any);

    if (is('function', onChange)) onChange('' as any);

    setHover(false);
  };

  const onKeyDown = React.useCallback((event: React.KeyboardEvent<any>) => {
    if (!disabled && !readOnly) {
      if (['Enter', 'Escape', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
        // Prevent default
        event.preventDefault();

        switch (event.key) {
          case 'End':
            if (!props.hasOwnProperty('value')) setValue(0);

            if (is('function', onChange)) return onChange(0);

            return;

          case 'Home':
            if (!props.hasOwnProperty('value')) setValue(values);

            if (is('function', onChange)) return onChange(values);

            return;

          case 'ArrowUp':
          case 'ArrowRight':
            return move();

          case 'ArrowDown':
          case 'ArrowLeft':
            return move(false);

          case 'Enter':
            if (value === valueActive) {
              if (!props.hasOwnProperty('value')) setValue('' as any);

              if (is('function', onChange)) onChange('' as any);
            }

            return;

          case 'Escape':
            if (!props.hasOwnProperty('value')) setValue('' as any);

            if (is('function', onChange)) onChange('' as any);

            return;

          default:
            break;
        }
      }
    }
  }, [disabled, readOnly, value, valueActive, precision]);

  const onFocus = React.useCallback((event) => {
    if (!disabled && !readOnly && !mouseDown) setFocus(true);
  }, [disabled, readOnly, mouseDown]);

  const onBlur = React.useCallback(() => {
    if (!disabled && !readOnly) setFocus(false);
  }, [disabled, readOnly]);

  const onMouseEnter = React.useCallback(() => {
    if (!disabled && !readOnly) setHover(true);
  }, [disabled, readOnly]);

  const onMouseLeave = React.useCallback(() => {
    if (!disabled && !readOnly) setHover(false);
  }, [disabled, readOnly]);

  const width = (index: number) => {
    const value__ = !hover ? value : valueActive;

    if (value__ > index - 1 && value__ <= index) {
      if (value__ === index) return '100%';

      return `${(value__ % 1) * 100}%`;
    }

    if (is('number', value__) && index < +(value__).toFixed(1) && !onlyValue) return '100%';
  };

  const getIcon = (index: number, inactive = true) => {
    if (inactive) return (icons?.[index] as any)?.iconInactive || (icons?.[index] as any)?.icon || icon || iconInactive;

    return (icons?.[index] as any)?.iconActive || (icons?.[index] as any)?.icon || icon || iconActive;
  };

  const selected = (index: number) => value > index - 1 && value <= index;

  return (
    <Component
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = ref;
        }

        refs.root.current = item;
      }}

      tabIndex={(!disabled && !readOnly) ? 0 : undefined}

      onBlur={onBlur}

      onFocus={onFocus}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      onMouseDown={onMouseDown}

      onTouchStart={onMouseDown}

      onKeyDown={onKeyDown}

      className={classNames([
        staticClassName('Rating', theme) && [
          'amaui-Rating-root',
          hover && `amaui-Button-hover`,
          mouseDown && `amaui-Button-mouse-down`,
          focus && [
            `amaui-Button-focus`,
            [undefined, 0].includes(value) && `amaui-Button-focus-noValue`
          ],
          readOnly && `amaui-Rating-read-only`,
          disabled && `amaui-Rating-disabled`
        ],

        className,
        classes.root,
        focus && [
          classes.focus,
          [undefined, 0].includes(value) && classes.focus_outline
        ],
        readOnly && classes.readOnly,
        disabled && classes.disabled
      ])}

      {...other}
    >
      {new Array(values).fill(undefined).map((item: any, index: number) => {
        const IconInactive = getIcon(index + 1);
        const IconActive = getIcon(index + 1, false);

        return (
          <span
            ref={item_ => refs.values.current.push(item_)}

            key={index}

            onClick={onClick}

            className={classNames([
              staticClassName('Rating', theme) && [
                'amaui-Rating-icon-wrapper',
                focus && selected(index + 1) && 'amaui-Rating-focus'
              ],

              classes.iconWrapper,
              focus && selected(index + 1) && classes.focus_outline,
              (readOnly || disabled) && classes.iconWrapper_readOnly
            ])}
          >
            <span
              className={classNames([
                staticClassName('Rating', theme) && [
                  'amaui-Rating-icon',
                  'amaui-Rating-icon-inactive'
                ],

                classes.icon,
                classes.inactive
              ])}
            >
              {React.cloneElement(IconInactive, {
                color: colorInactive,
                size: IconInactive.props?.size !== undefined ? IconInactive.props?.size : size
              })}
            </span>

            <span
              className={classNames([
                staticClassName('Rating', theme) && [
                  'amaui-Rating-icon',
                  'amaui-Rating-icon-active'
                ],

                classes.icon,
                classes.active
              ])}

              style={{ width: width(index + 1) }}
            >
              {React.cloneElement(IconActive, {
                tonal: IconActive.props?.tonal !== undefined ? IconActive.props?.tonal : tonal,
                color: IconActive.props?.color !== undefined ? IconActive.props?.color : color,
                size: IconActive.props?.size !== undefined ? IconActive.props?.size : size
              })}
            </span>
          </span>
        );
      })}
    </Component>
  );
});

Rating.displayName = 'amaui-Rating';

export default Rating;
