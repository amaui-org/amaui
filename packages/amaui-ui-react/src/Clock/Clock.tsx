import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { clamp, getLeadingZerosNumber, is, unique } from '@amaui/utils';
import { AmauiDate, format as formatMethod, is as isAmauiDate, set } from '@amaui/date';

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

export type TClockValue = AmauiDate;

export type TClockFormat = '12' | '24';

export type TClockUnit = 'hour' | 'minute' | 'second';

export type TClockDayTime = 'am' | 'pm';

export interface IClock extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;

  value?: TClockValue;
  valueDefault?: TClockValue;
  onChange?: (value: TClockValue) => any;

  selecting?: TClockUnit;
  selectingDefault?: TClockUnit;
  onChangeSelecting?: (value: TClockUnit) => any;

  format?: TClockFormat;
  dayTime?: TClockDayTime;
  hour?: boolean;
  minute?: boolean;
  second?: boolean;
  autoNext?: boolean;
  min?: AmauiDate;
  max?: AmauiDate;
  validate?: (value: AmauiDate) => boolean;
  readOnly?: boolean;
  disabled?: boolean;

  valid?: (value: AmauiDate, selecting: TClockUnit) => any;
  renderValue?: (value: TClockValue, version: TClockUnit, x: number, y: number, valueNumber: number, otherProps: any) => React.ReactNode;
  onDoneSelecting?: (value: TClockValue, selecting: TClockUnit) => any;
}

const Clock = React.forwardRef((props__: IClock, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiClock?.props?.default, ...props__ }), [props__]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    value: value_,
    valueDefault,
    onChange,

    selecting: selecting_,
    selectingDefault,
    onChangeSelecting,

    format = '12',
    dayTime = 'am',
    hour = true,
    minute = true,
    second = false,
    autoNext,
    min,
    max,
    validate,
    readOnly,
    disabled,

    valid: valid_,
    renderValue,
    onDoneSelecting,

    onClick: onClick_,

    className,

    BackgroundProps,

    ...other
  } = props;

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || new AmauiDate());
  const [selecting, setSelecting] = React.useState((selectingDefault !== undefined ? selectingDefault : selecting_) || 'hour');
  const [mouseDown, setMouseDown] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLElement>(),
    middle: React.useRef<HTMLElement>(),
    mouseDown: React.useRef<any>(),
    value: React.useRef<TClockValue>(),
    selecting: React.useRef<TClockUnit>(),
    autoNext: React.useRef<boolean>(),
    hour: React.useRef<boolean>(),
    minute: React.useRef<boolean>(),
    second: React.useRef<boolean>(),
    format: React.useRef<TClockFormat>(),
    dayTime: React.useRef<any>(),
    previous: React.useRef<TClockUnit>(selecting)
  };

  refs.mouseDown.current = mouseDown;

  refs.value.current = value;

  refs.hour.current = hour;

  refs.minute.current = minute;

  refs.second.current = second;

  refs.selecting.current = selecting;

  refs.autoNext.current = autoNext;

  refs.format.current = format;

  refs.dayTime.current = dayTime;

  const resolve = React.useCallback((valueNew = refs.value.current, dayTimeValue = refs.dayTime.current) => {
    // Resolve the range value
    const valueHour = valueNew.hour;

    if (format === '12') {
      if (dayTimeValue === 'am' && valueHour > 12) return set(valueHour - 12, 'hour', valueNew);

      if (dayTimeValue === 'pm' && valueHour < 12) return set(valueHour + 12, 'hour', valueNew);
    }

    return valueNew;
  }, [value, dayTime, format]);

  const inputToValue = React.useCallback((valueNew: string | number, unit: TClockUnit = refs.selecting.current) => {
    let amauiDate = new AmauiDate(refs.value.current);

    let valueTime: any = valueNew;

    if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

    valueTime = +valueTime;

    if (unit === 'hour') amauiDate = set((format === '12' && dayTime === 'pm') ? valueTime + 12 : valueTime, 'hour', amauiDate);
    else amauiDate = set(valueTime, unit, amauiDate);

    return resolve(amauiDate);
  }, [value, format, dayTime, hour, minute, second]);

  const onMove = React.useCallback((x_: number, y_: number) => {
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
      if (!valid(inputToValue(index, 'hour'), 'hour')) return;

      // Update values
      onUpdate(inputToValue(index, 'hour'));
    }
    else if (['minute', 'second'].includes(refs.selecting.current)) {
      const part = 360 / 60;

      valuesAll = Array.from({ length: 60 }).map((item: any, index_: number) => [(part * index_) - (part / 2), (part * index_) + (part / 2)]);

      let index = valuesAll.findIndex((item: [number, number]) => angle >= item[0] && angle <= item[1]);

      if (index === -1 || index === 0) index = 0;

      // Validate
      if (!valid(inputToValue(index), refs.selecting.current)) return;

      // Update values
      onUpdate(inputToValue(index));
    }
  }, []);

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

            onUpdateSelecting(valueSelecting);
          }
        }

        if (is('function', onDoneSelecting)) onDoneSelecting(refs.value.current, refs.selecting.current);
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
    if (value_ !== undefined && value_ !== value) setValue(value_);
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

      refs.previous.current = selecting_;

      updateTransitions();
    }
  }, [selecting_]);

  React.useEffect(() => {
    if (selecting !== refs.previous.current) {
      refs.previous.current = selecting;

      updateTransitions();
    }
  }, [selecting]);

  const onUpdate = React.useCallback((valueNew: TClockValue) => {
    const newValue = valueNew.milliseconds;
    const previousValue = refs.value.current.milliseconds;

    if (newValue === previousValue) return;

    if (!(readOnly || disabled)) {
      // Inner controlled value
      if (!props.hasOwnProperty('value')) setValue(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  }, [readOnly, disabled]);

  const onUpdateSelecting = React.useCallback((valueNew: TClockUnit) => {
    if (!(readOnly || disabled)) {
      // Inner controlled selecting
      if (!props.hasOwnProperty('selecting')) setSelecting(valueNew);

      if (is('function', onChangeSelecting)) onChangeSelecting(valueNew);
    }
  }, [readOnly, disabled]);

  const valid = React.useCallback((...args: [AmauiDate, any?]) => {
    if (is('function', valid_)) return valid_(...args);

    const amauiDate = args[0];

    if (min || max || validate) {
      let response = true;

      if (is('function', validate)) response = validate(amauiDate);

      if (min !== undefined) response = response && isAmauiDate(amauiDate, 'after or same', min);

      if (max !== undefined) response = response && isAmauiDate(amauiDate, 'before or same', max);

      return response;
    }

    return true;
  }, [valid_, min, max, validate]);

  const onMouseDown = React.useCallback(() => {
    setMouseDown(true);
  }, []);

  const onClick = React.useCallback((event: React.MouseEvent) => {
    const { clientX: x, clientY: y } = event;

    onMove(x, y);

    if (is('function', onClick_)) onClick_(event);
  }, [onClick_]);

  const palette = React.useMemo(() => {
    return theme.methods.color((theme.palette.color[color] as any)?.main as string || color);
  }, [color, theme]);

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
    valueClock = valueClock24 = value?.hour;

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
          opacity: valid(inputToValue(index === 0 ? 12 : index, 'hour'), 'hour') ? 1 : 0.27,
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
              opacity: valid(inputToValue(index === 0 ? 0 : index, 'hour'), 'hour') ? 1 : 0.27,
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
              opacity: valid(inputToValue(12 + index, 'hour'), 'hour') ? 1 : 0.27,
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

    valuePosition = (100 / 60) * valueClock;

    // Labels
    labels = unique([
      // 59 minutes
      ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
        value: index === 0 ? '00' : getLeadingZerosNumber((60 / 12) * index),

        padding: 20,

        style: {
          fontSize: 14,
          opacity: valid(inputToValue(index === 0 ? 0 : (60 / 12) * index), 'minute') ? 1 : 0.27,
          fill: (valueClock === ((60 / 12) * index)) ? colors.inverse : colors.regular
        },

        position: index * (100 / 12)
      })))
    ], 'position');
  }

  if (selecting === 'second') {
    // Value
    valueClock = value?.second;

    valuePosition = (100 / 60) * valueClock;

    // Labels
    labels = unique([
      // 59 seconds
      ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
        value: index === 0 ? '00' : getLeadingZerosNumber((60 / 12) * index),

        padding: 20,

        style: {
          fontSize: 14,
          opacity: valid(inputToValue(index === 0 ? 0 : (60 / 12) * index, 'second'), 'second') ? 1 : 0.27,
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

      onClick={onClick}

      background

      BackgroundProps={{
        fill: theme.methods.palette.color.value(undefined, 80, true, palette),

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
