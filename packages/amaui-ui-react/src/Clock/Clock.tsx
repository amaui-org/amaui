import React from 'react';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { clamp, getLeadingZerosNumber, hash, is, TMethod, unique } from '@amaui/utils';

import RoundMeter from '../RoundMeter';
import Path from '../Path';

import { IBaseElement, staticClassName, TColor, TTonal } from '../utils';

const useStyle = style(theme => ({
  root: {
    userSelect: 'none',
    touchAction: 'none',

    '& .amaui-RoundMeter-children, & .amaui-RoundMeter-labels': {
      pointerEvents: 'none'
    },

    '& svg > *': {
      cursor: 'grab'
    }
  },

  mouseDown: {
    '& svg > *': {
      cursor: 'grabbing'
    }
  },
}), { name: 'amaui-Clock' });

export interface IClockValue {
  hour?: number;
  minute?: number;
  second?: number;
}

export type TClockFormat = '12' | '24';

export type TClockSelecting = 'hour' | 'minute' | 'second';

export interface IClock extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;
  format?: TClockFormat;
  selecting?: TClockSelecting;

  value?: IClockValue;
  valueDefault?: IClockValue;
  onChange?: (value: IClockValue) => any;

  hour?: boolean;
  minute?: boolean;
  second?: boolean;

  valid?: (value: number, selecting: TClockSelecting) => any;

  autoNext?: boolean;

  renderValue?: (valueDate: IClockValue, version: 'hour' | 'minute' | 'second', x: number, y: number, value: number, otherProps: any) => React.ReactNode;

  onDoneSelecting?: (value: IClockValue, selecting: TClockSelecting) => any;
}

const Clock = React.forwardRef((props__: IClock, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiClock?.props?.default, ...props__ }), [props__]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    format = '12',

    selecting: selecting_ = 'hour',

    value: value_,
    valueDefault,
    onChange,

    valid: valid_,

    hour = true,

    minute = true,

    second = false,

    autoNext,

    renderValue,

    onDoneSelecting,

    disabled,

    className,

    BackgroundProps,

    ...other
  } = props;

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || { hour: 0, minute: 0, second: 0 });
  const [selecting, setSelecting] = React.useState(selecting_);
  const [mouseDown, setMouseDown] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLElement>(),
    middle: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    value: React.useRef<any>(),
    selecting: React.useRef<any>(),
    autoNext: React.useRef<any>(),
    hour: React.useRef<any>(),
    minute: React.useRef<any>(),
    second: React.useRef<any>(),
    format: React.useRef<any>()
  };

  refs.mouseDown.current = mouseDown;

  refs.value.current = value;

  refs.hour.current = hour;

  refs.minute.current = minute;

  refs.second.current = second;

  refs.selecting.current = selecting;

  refs.autoNext.current = autoNext;

  refs.format.current = format;

  React.useEffect(() => {
    const onMouseUp = () => {
      if (refs.mouseDown.current) {
        setMouseDown(false);

        // Auto next
        if (refs.autoNext.current) {
          if (['hour', 'minute', 'second'].includes(refs.selecting.current)) {
            let valueSelecting: any;

            if (refs.selecting.current === 'second') valueSelecting = 'hour';

            if (refs.selecting.current === 'minute') valueSelecting = refs.second.current ? 'second' : 'hour';

            if (refs.selecting.current === 'hour' && refs.minute.current) valueSelecting = 'minute';

            setSelecting(valueSelecting);
          }
        }

        if (is('function', onDoneSelecting)) onDoneSelecting(refs.value.current, refs.selecting.current);
      }
    };

    const onMove = (x_: number, y_: number) => {
      const rectMiddle = refs.middle.current.getBoundingClientRect();

      const x = x_ - rectMiddle.x;

      const y = y_ - rectMiddle.y;

      const radians = Math.atan2(x, y);

      const degrees = (radians * 180) / Math.PI;

      const angle = 180 - degrees;

      // Make array of values
      // for hours, minutes and seconds
      // with +- 50% around the value

      // Find item in that array that this angle fits within
      let valuesAll = [];

      if (refs.selecting.current === 'hour') {
        const part = 360 / 12;

        valuesAll = Array.from({ length: 12 }).map((item: any, index_: number) => [(part * index_) - (part / 2), (part * index_) + (part / 2)]);

        let index = valuesAll.findIndex((item: [number, number]) => angle >= item[0] && angle <= item[1]);

        if (index === -1 || index === 0) index = refs.format.current === '24' ? 0 : 12;

        if (refs.format.current === '24') {
          let within = false;

          const labelElements = refs.root.current.querySelectorAll('.amaui-RoundMeter-labels');

          const elements = {
            outer: labelElements[0],
            inner: labelElements[1]
          };

          const rects = {
            outer: elements.outer.getBoundingClientRect(),
            inner: elements.inner.getBoundingClientRect()
          };

          const part_ = Math.abs(Math.abs(rects.outer.x) - Math.abs(rects.inner.x));

          const valueMoved = Math.sqrt(x ** 2 + y ** 2);

          const middleInner = Math.abs(Math.abs(rectMiddle.x) - Math.abs(rects.inner.x));

          if (valueMoved <= (middleInner + (part_ / 2))) within = true;

          if (within) index += 12;

          index = clamp(index, 0, 23);
        }

        // Validate
        if (!valid(index, 'hour')) return;

        // Update values
        onUpdate({ ...refs.value.current, hour: index });
      }
      else if (['minute', 'second'].includes(refs.selecting.current)) {
        const part = 360 / 60;

        valuesAll = Array.from({ length: 60 }).map((item: any, index_: number) => [(part * index_) - (part / 2), (part * index_) + (part / 2)]);

        let index = valuesAll.findIndex((item: [number, number]) => angle >= item[0] && angle <= item[1]);

        if (index === -1 || index === 0) index = 0;

        // Validate
        if (!valid(index, refs.selecting.current)) return;

        // Update values
        onUpdate({ ...refs.value.current, [refs.selecting.current]: getLeadingZerosNumber(index) });
      }
    };

    // Mouse move
    const onMouseMove = (event: MouseEvent) => {
      if (refs.mouseDown.current) {
        const { clientY, clientX } = event;

        onMove(clientX, clientY);
      }
    };

    // Touch move
    const onTouchMove = (event: TouchEvent) => {
      if (refs.mouseDown.current) {
        const { clientY, clientX } = event.touches[0];

        onMove(clientX, clientY);
      }
    };

    window.addEventListener('mouseup', onMouseUp);

    window.addEventListener('mousemove', onMouseMove);

    window.addEventListener('touchend', onMouseUp);

    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);

      window.removeEventListener('mouseup', onMouseUp);

      window.removeEventListener('touchmove', onTouchMove);

      window.removeEventListener('touchend', onMouseUp);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== undefined) setValue(value_);
  }, [value_]);

  const updateTransitions = React.useCallback(() => {
    // Add momentary transition to the AmauiRoundMeter-children > *
    // if selecting value updates
    if (refs.root.current) {
      let elementChildren: any = (refs.root.current as HTMLElement).getElementsByClassName('amaui-RoundMeter-children')[0];
      let elementLabels: any = (refs.root.current as HTMLElement).getElementsByClassName('amaui-RoundMeter-labels')[0];

      if (elementChildren && elementLabels) {
        elementChildren = Array.from(elementChildren.children);
        elementLabels = Array.from(elementLabels.children);

        elementChildren.forEach((item: HTMLElement) => item.style.transition = 'transform .3s');
        elementLabels.forEach((item: HTMLElement) => item.style.transition = 'fill .3s');

        setTimeout(() => {
          [...elementChildren, ...elementLabels].forEach((item: HTMLElement) => item.style.removeProperty('transition'));
        }, 300);
      }
    }
  }, []);

  React.useEffect(() => {
    if (selecting_ !== undefined && selecting_ !== selecting) {
      setSelecting(selecting_);

      updateTransitions();
    }
  }, [selecting_]);

  React.useEffect(() => {
    if (selecting !== selecting_) {
      updateTransitions();
    }
  }, [selecting]);

  const onUpdate = (valueNew: IClockValue) => {
    // Only if value updated
    const newValue = { ...valueNew };
    const previousValue = { ...refs.value.current };

    Object.keys(newValue).forEach(key => {
      if (is('string', newValue[key])) {
        newValue[key] = +(newValue[key].startsWith('0') ? newValue[key].slice(1) : newValue[key]);
      }
    });

    Object.keys(previousValue).forEach(key => {
      if (is('string', previousValue[key])) {
        previousValue[key] = +(previousValue[key].startsWith('0') ? previousValue[key].slice(1) : previousValue[key]);
      }
    });

    if (hash(newValue) === hash(previousValue)) return;

    if (!disabled) {
      // Inner controlled value
      if (!props.hasOwnProperty('value')) setValue(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  };

  const valid = React.useCallback((valueNew: number, selectingValue: TClockSelecting) => {
    if (is('function', valid_)) return valid_(valueNew, selectingValue);

    return true;
  }, [valid_]);

  const onMouseDown = React.useCallback(() => {
    setMouseDown(true);
  }, []);

  const palette = React.useMemo(() => {
    return theme.methods.color((theme.palette.color[color] as any)?.main as string || color);
  }, [color]);

  let valueClock: any = '';
  let valueClock24: number = 0;
  let valuePosition: number;
  let labels = [];
  let lowerPointer = false;

  const colors = {
    regular: 'currentColor',
    inverse: theme.methods.palette.color.value(undefined, 90, true, palette)
  };

  if (selecting === 'hour') {
    // Value
    valueClock = value?.hour;

    if (is('string', valueClock) && valueClock.startsWith('0')) valueClock = valueClock.slice(1);

    valueClock = valueClock24 = +valueClock;

    if (format === '24' && valueClock > 11) lowerPointer = true;

    if (valueClock > 12) valueClock -= 12;

    valuePosition = (100 / 12) * valueClock;

    // Labels
    if (format === '12') labels = unique([
      // 12 hours
      ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
        value: index === 0 ? 12 : index,

        padding: 20,

        style: {
          fontSize: 14,
          opacity: valid(index === 0 ? 12 : index, 'hour') ? 1 : 0.27,
          fill: ((valueClock === 12 && index === 0) || (valueClock === index)) ? colors.inverse : colors.regular
        },

        position: index * (100 / 12)
      })))
    ], 'position');
    else {
      labels = [
        unique([
          // 0-11 hours
          ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
            value: index === 0 ? '00' : index,

            padding: 20,

            style: {
              fontSize: 14,
              opacity: valid(index === 0 ? 0 : index, 'hour') ? 1 : 0.27,
              fill: valueClock24 === index ? colors.inverse : colors.regular
            },

            position: index * (100 / 12)
          })))
        ], 'position'),

        unique([
          // 12-23 hours
          ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
            value: 12 + index,

            padding: 49.5,

            style: {
              fontSize: 14,
              opacity: valid(12 + index, 'hour') ? 1 : 0.27,
              fill: valueClock24 === (12 + index) ? colors.inverse : colors.regular
            },

            position: index * (100 / 12)
          })))
        ], 'position')
      ];
    }
  }

  if (selecting === 'minute') {
    // Value
    valueClock = value?.minute;

    if (is('string', valueClock) && valueClock.startsWith('0')) valueClock = valueClock.slice(1);

    valueClock = +valueClock;

    valuePosition = (100 / 60) * valueClock;

    // Labels
    labels = unique([
      // 59 minutes
      ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
        value: index === 0 ? '00' : getLeadingZerosNumber((60 / 12) * index),

        padding: 20,

        style: {
          fontSize: 14,
          opacity: valid(index === 0 ? 0 : (60 / 12) * index, 'minute') ? 1 : 0.27,
          fill: (valueClock === ((60 / 12) * index)) ? colors.inverse : colors.regular
        },

        position: index * (100 / 12)
      })))
    ], 'position');
  }

  if (selecting === 'second') {
    // Value
    valueClock = value?.second;

    if (is('string', valueClock) && valueClock.startsWith('0')) valueClock = valueClock.slice(1);

    valueClock = +valueClock;

    valuePosition = (100 / 60) * valueClock;

    // Labels
    labels = unique([
      // 59 seconds
      ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
        value: index === 0 ? '00' : getLeadingZerosNumber((60 / 12) * index),

        padding: 20,

        style: {
          fontSize: 14,
          opacity: valid(index === 0 ? 0 : (60 / 12) * index, 'second') ? 1 : 0.27,
          fill: (valueClock === ((60 / 12) * index)) ? colors.inverse : colors.regular
        },

        position: index * (100 / 12)
      })))
    ], 'position');
  }

  return (
    <RoundMeter
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      labels={labels}

      arcsVisible={false}

      childrenPosition='pre-marks'

      background

      BackgroundProps={{
        fill: theme.methods.palette.color.value(undefined, 90, true, palette),

        onMouseDown: onMouseDown,

        onTouchStart: onMouseDown
      }}

      renderLabel={is('function', renderValue) ? (x: number, y: number, valueItem: number, otherProps: any) => renderValue(value, selecting, x, y, valueItem, otherProps) : undefined}

      {...other}

      className={classNames([
        staticClassName('Clock', theme) && [
          'amaui-Clock-round-meter'
        ],

        className,
        classes.root,
        mouseDown && classes.mouseDown
      ])}
    >
      {/* Center */}
      <Path
        ref={refs.middle}

        Component='circle'

        r='4'

        cx='120'

        cy='120'

        style={{
          stroke: 'none',
          fill: palette[40]
        }}
      />

      {/* Pointer */}
      <Path
        d='M 120 119 L 195 119 A 1 1 0 0 1 195 121 L 120 121 A 1 1 0 0 1 121 119'

        value={valuePosition}

        style={{
          transformOrigin: '50% 50%',
          fill: palette[40],
          stroke: 'none'
        }}
      />

      {/* Pointer circle */}
      <Path
        Component='circle'

        r='24'

        cx={lowerPointer ? 182 : 212.5}

        cy='120'

        value={valuePosition}

        style={{
          transformOrigin: 'center',
          fill: palette[40],
          stroke: 'none'
        }}
      />
    </RoundMeter>
  );
});

Clock.displayName = 'amaui-Clock';

export default Clock;
