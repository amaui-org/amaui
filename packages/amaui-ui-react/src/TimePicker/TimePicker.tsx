import React from 'react';

import { is, unique, getLeadingZerosNumber, clamp } from '@amaui/utils';
import { AmauiDate, format as formatMethod, set, is as isMethod } from '@amaui/date';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import AdvancedTextField from '../AdvancedTextField';
import useMediaQuery from '../useMediaQuery';
import Modal from '../Modal';
import ClickListener from '../ClickListener';
import Tooltip from '../Tooltip';
import Surface from '../Surface';
import Line from '../Line';
import Type from '../Type';
import ToggleButtons from '../ToggleButtons';
import ToggleButton from '../ToggleButton';
import Button from '../Button';
import RoundMeter from '../RoundMeter';
import Path from '../Path';
import Slide from '../Slide';
import { IAdvancedTextField } from '../AdvancedTextField/AdvancedTextField';

import { staticClassName, TElementReference, TPropsAny, TValueBreakpoints, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  mode: {
    padding: '24px',
    marginInline: '24px',
    borderRadius: '28px'
  },

  heading: {
    width: '100%'
  },

  roundMeter: {
    userSelect: 'none',
    touchAction: 'none',

    '& .amaui-RoundMeter-children, & .amaui-RoundMeter-labels': {
      pointerEvents: 'none'
    },

    '& svg > *': {
      cursor: 'grab'
    }
  },

  roundMeter_mouseDown: {
    '& svg > *': {
      cursor: 'grabbing'
    }
  },

  modeWrapper: {
    width: '100%'
  },

  inputs: {
    width: '100%'
  },

  middle: {
    width: '100%',
    marginTop: '24px'
  },

  input: {
    maxWidth: '96px',
    flex: '1 1 auto',

    '& .amaui-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: '11px 8px',
      height: '72px'
    },

    '& .amaui-TextField-input': {
      ...theme.typography.values.d2,

      lineHeight: '1',

      textAlign: 'center'
    },

    '& .amaui-TextField-footer': {
      marginTop: '8px',
      padding: '0px'
    },

    '& .amaui-TextField-helper-text': {
      color: theme.palette.text.default.primary
    }
  },

  button: {
    height: '72px',
    width: '96px',
    padding: '0',
    paddingTop: '3px',
    borderRadius: theme.methods.shape.radius.value('sm', 'px'),
    cursor: 'pointer',
    userSelect: 'none',
    flex: '1 1',

    '& .amaui-Button-label': {
      ...theme.typography.values.d2,

      lineHeight: '1',
    }
  },

  inputSeparator: {
    marginTop: '7px',
    paddingInline: '6px',
    userSelect: 'none'
  },

  toggleButtons: {
    '& > *': {
      flex: '1 1 auto'
    }
  },

  toggleButtons_input: {
    width: '52px',
    height: '72px'
  },

  toggleButtons_orientation_vertical: {
    width: '52px',
    height: '72px'
  },

  toggleButtons_orientation_horizontal: {
    height: '38px'
  },

  toggleButton: {

  },

  footer: {
    width: '100%',
    marginTop: '24px'
  }
}), { name: 'amaui-TimePicker' });

const IconMaterialScheduleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleRounded'
      short_name='Schedule'

      {...props}
    >
      <path d="M14.625 16.025Q14.9 16.3 15.3 16.3Q15.7 16.3 16 16Q16.275 15.725 16.275 15.3Q16.275 14.875 16 14.6L13 11.6V7.975Q13 7.55 12.713 7.275Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8V11.975Q11 12.175 11.075 12.362Q11.15 12.55 11.3 12.7ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z" />
    </Icon>
  );
});

const IconMaterialKeyboardAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltRounded'
      short_name='KeyboardAlt'

      {...props}
    >
      <path d="M3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V6Q1 5.175 1.588 4.588Q2.175 4 3 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V19Q23 19.825 22.413 20.413Q21.825 21 21 21ZM3 19H21Q21 19 21 19Q21 19 21 19V6Q21 6 21 6Q21 6 21 6H3Q3 6 3 6Q3 6 3 6V19Q3 19 3 19Q3 19 3 19ZM9 10H11V8H9ZM5 10H7V8H5ZM8.5 17H15.5Q15.7 17 15.85 16.85Q16 16.7 16 16.5Q16 16.3 15.85 16.15Q15.7 16 15.5 16H8.5Q8.3 16 8.15 16.15Q8 16.3 8 16.5Q8 16.7 8.15 16.85Q8.3 17 8.5 17ZM13 10H15V8H13ZM9 14H11V12H9ZM5 14H7V12H5ZM13 14H15V12H13ZM17 10H19V8H17ZM17 14H19V12H17ZM3 19Q3 19 3 19Q3 19 3 19V6Q3 6 3 6Q3 6 3 6Q3 6 3 6Q3 6 3 6V19Q3 19 3 19Q3 19 3 19Z" />
    </Icon>
  );
});

export interface ITimePicker extends Omit<IAdvancedTextField, 'version'> {
  version?: 'auto' | 'mobile' | 'desktop' | 'static';

  versionStatic?: 'select' | 'input';

  now?: boolean;

  min?: number;

  max?: number;

  validate?: (value: number | string, values: any, selecting: 'hour' | 'minute' | 'second') => boolean;

  autoNext?: boolean | Record<TValueBreakpoints, boolean>;

  autoCloseOnLast?: boolean | Record<TValueBreakpoints, boolean>;

  openMobile?: 'input' | 'select';

  openDesktop?: 'input' | 'select';

  selectModeHeadingText?: string;

  inputModeHeadingText?: string;

  orientation?: 'vertical' | 'horizontal' | Record<TValueBreakpoints, 'vertical' | 'horizontal'>;

  format?: '12' | '24';

  hour?: boolean;

  minute?: boolean;

  second?: boolean;

  switch?: boolean | Record<TValueBreakpoints, boolean>;

  readOnly?: boolean;

  disabled?: boolean;

  onClick?: (event: React.MouseEvent<any>) => any;

  onCancel?: () => any;

  renderValue?: (valueDate: AmauiDate, version: 'hour' | 'minute' | 'second', x: number, y: number, value: number, otherProps: any) => React.ReactNode;

  Icon?: TElementReference;
  IconEnter?: TElementReference;

  ButtonProps?: TPropsAny;
  ModalProps?: TPropsAny;
  TooltipProps?: TPropsAny;
  ToggleButtonsProps?: TPropsAny;
  ToggleButtonProps?: TPropsAny;
  IconButtonProps?: TPropsAny;
  InputProps?: TPropsAny;
  RoundMeterProps?: TPropsAny;
  ModeSelectProps?: TPropsAny;
  ModeInputProps?: TPropsAny;
  AdvancedTextFieldProps?: TPropsAny;
}

const TimePicker = React.forwardRef((props__: ITimePicker, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTimePicker?.props?.default, ...props__ }), [props__]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',
    // mobile, desktop, static & auto
    version: version_ = 'auto',

    versionStatic,

    value: value_,
    valueDefault,
    onChange,

    now = true,

    label,

    min,

    max,

    validate,

    autoNext: autoNext_,

    autoCloseOnLast: autoCloseOnLast_,

    openMobile = 'select',

    openDesktop = 'select',

    selectModeHeadingText = 'Select time',

    inputModeHeadingText = 'Enter time',

    orientation: orientation_,

    format = '12',

    hour = true,

    minute = true,

    second = false,

    switch: switch__,

    readOnly,

    disabled,

    onClick: onClick_,

    onCancel: onCancel_,

    renderValue,

    Icon: Icon_ = IconMaterialScheduleRounded,
    IconEnter = IconMaterialKeyboardAltRounded,

    ButtonProps,
    ModalProps,
    TooltipProps,
    ToggleButtonsProps,
    ToggleButtonProps,
    IconButtonProps,
    InputProps,
    RoundMeterProps,
    ModeSelectProps,
    ModeInputProps,
    AdvancedTextFieldProps,

    className,

    ...other
  } = props;

  const orientation = valueBreakpoints(orientation_, 'vertical', breakpoints, theme);
  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const autoNext = valueBreakpoints(autoNext_, undefined, breakpoints, theme);
  const autoCloseOnLast = valueBreakpoints(autoCloseOnLast_, undefined, breakpoints, theme);

  const refs = {
    root: React.useRef<any>(),
    iconButton: React.useRef<any>(),
    roundMeter: React.useRef<any>(),
    middle: React.useRef<any>(),
    version: React.useRef<any>(),
    open: React.useRef<any>(),
    mode: React.useRef<any>(),
    value: React.useRef<any>(),
    values: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    format: React.useRef<any>(),
    orientation: React.useRef<any>(),
    autoNext: React.useRef<any>(),
    autoCloseOnLast: React.useRef<any>(),
    min: React.useRef<any>(),
    max: React.useRef<any>(),
    validate: React.useRef<any>()
  };

  const valueToValues = (valueNew: AmauiDate) => {
    const values_: any = {
      selecting: refs.values.current?.selecting || 'hour'
    };

    if (valueNew) {
      // hour
      if (format === '12') values_.hour = formatMethod(valueNew, 'hh');
      else values_.hour = formatMethod(valueNew, 'HH');

      // minute
      values_.minute = formatMethod(valueNew, 'mm');

      // second
      values_.second = formatMethod(valueNew, 'ss');

      // am, pm
      values_.dayTime = formatMethod(valueNew, 'a');

      // input
      let format_ = '';

      if (format === '12') format_ += `hh`;
      else format_ += `HH`;

      if (minute) format_ += `:mm`;

      if (second) format_ += `:ss`;

      if (format === '12') format_ += ` a`;

      values_.input = formatMethod(valueNew, format_);
    }

    return values_;
  };

  const touch = useMediaQuery('(pointer: coarse)');

  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState((touch ? openMobile : openDesktop) || 'select');
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || (now && new AmauiDate()));
  const [values, setValues] = React.useState<any>(() => valueToValues(value));
  const [mouseDown, setMouseDown] = React.useState<any>(false);
  const [error, setError] = React.useState(false);

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  refs.version.current = version;

  refs.open.current = open;

  refs.mode.current = mode;

  refs.values.current = values;

  refs.value.current = value;

  refs.mouseDown.current = mouseDown;

  refs.format.current = format;

  refs.orientation.current = orientation;

  refs.autoNext.current = autoNext;

  refs.autoCloseOnLast.current = autoCloseOnLast;

  refs.autoCloseOnLast.current = autoCloseOnLast;

  refs.min.current = min;

  refs.max.current = max;

  refs.validate.current = validate;

  const valuesToValue = (values_: any) => {
    let amauiDate = refs.value.current;

    // hour
    // and am, pm
    let hour_ = values_.hour || '00';

    if (hour_.startsWith('0')) hour_ = +hour_.slice(1);

    if (format === '12') {
      if (+hour_ === 0 || +hour_ === 12) {
        if (values_.dayTime === 'am') amauiDate = set(0, 'hour', amauiDate);
        else if (values_.dayTime === 'pm') amauiDate = set(12, 'hour', amauiDate);
      }
      else amauiDate = set(+hour_ + (values_.dayTime === 'pm' ? 12 : 0), 'hour', amauiDate);
    }
    else amauiDate = set(+hour_, 'hour', amauiDate);

    // minute
    let minute_ = values_.minute || '00';

    if (minute_.startsWith('0')) minute_ = +minute_.slice(1);

    amauiDate = set(+minute_, 'minute', amauiDate);

    // second
    let second_ = values_.second || '00';

    if (second_.startsWith('0')) second_ = +second_.slice(1);

    amauiDate = set(+second_, 'second', amauiDate);

    return amauiDate;
  };

  const inputToValues = (valueNew: any) => {
    const values_: any = {
      selecting: refs.values.current?.selecting || 'hour'
    };

    // input
    const [valuesTime, dayTime_] = valueNew.split(' ');

    const [hour_, minute_, second_] = (valuesTime || '').split(':');

    if (hour_) values_.hour = hour_;

    if (minute_) values_.minute = minute_;

    if (second_) values_.second = second_;

    if (dayTime_) values_.dayTime = dayTime_;

    return values_;
  };

  const updateValue = (valueNew: any) => {
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  };

  const updateFromValue = (valueNew: number) => {
    const amauiDate = new AmauiDate(valueNew);

    // Error
    setError(!validItem('', '', valueToValues(amauiDate)));

    // Update values
    setValues(valueToValues(amauiDate));

    // Update value
    setValue(amauiDate);
  };

  const updateValues = (property: string, value__: any) => {
    const values_ = {
      ...refs.values.current,

      [property]: value__
    };

    setValues(values_);

    // Add momentary transition to the AmauiRoundMeter-children > *
    // if selecting value updates
    if (refs.roundMeter.current && property === 'selecting' && refs.values.current.selecting !== value__) {
      let elementChildren: any = (refs.roundMeter.current as HTMLElement).getElementsByClassName('amaui-RoundMeter-children')[0];
      let elementLabels: any = (refs.roundMeter.current as HTMLElement).getElementsByClassName('amaui-RoundMeter-labels')[0];

      if (elementChildren) {
        elementChildren = Array.from(elementChildren.children);
        elementLabels = Array.from(elementLabels.children);

        elementChildren.forEach((item: HTMLElement) => item.style.transition = 'transform .3s');
        elementLabels.forEach((item: HTMLElement) => item.style.transition = 'fill .3s');

        setTimeout(() => {
          [...elementChildren, ...elementLabels].forEach((item: HTMLElement) => item.style.removeProperty('transition'));
        }, 300);
      }
    }

    // Error
    setError(!validItem('', '', property === 'input' ? inputToValues(value__) : values_));
  };

  const updateInputToValues = () => {
    const values_ = {
      ...refs.values.current,

      ...inputToValues(refs.values.current.input)
    };

    const amauiDate = valuesToValue(values_);

    setValues(values_);

    setValue(amauiDate);

    return values_;
  };

  const updateValuesToInput = () => {
    const amauiDate = valuesToValue(refs.values.current);

    setValues(valueToValues(amauiDate));

    updateValue(amauiDate);
  };

  const validItem = (item: number | string = '', version__ = '', values__ = refs.values.current) => {
    const values_ = {
      ...values__
    };

    if (version__) values_[version__] = is('number', item) ? getLeadingZerosNumber(item as number) : item;

    const amauiDate = valuesToValue(values_);

    Object.keys(values_).forEach((item_: any) => {
      if (is('string', values_[item_])) {
        if (values_[item_].startsWith('0')) values_[item_] = values_[item_].slice(1);
      }
    });

    if (values_.hour !== undefined) values_.hour = +values_.hour;

    if (values_.minute !== undefined) values_.minute = +values_.minute;

    if (values_.second !== undefined) values_.second = +values_.second;

    let valid = true;

    if (is('function', refs.validate.current)) valid = refs.validate.current(item, values_, values_.selecting);

    if (refs.min.current !== undefined) valid = valid && isMethod(amauiDate, 'after or same', refs.min.current);

    if (refs.max.current !== undefined) valid = valid && isMethod(amauiDate, 'before or same', refs.max.current);

    return valid;
  };

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (refs.open.current) {
        switch (event.key) {
          case 'Escape':
            return onCancel();

          default:
            break;
        }
      }
    };

    const onMouseUp = () => {
      if (refs.mouseDown.current) {
        setMouseDown(false);

        const property = refs.values.current.selecting;

        // Auto close on last
        if (refs.autoCloseOnLast.current && refs.mode.current === 'select') {
          if (['hour', 'minute', 'second'].includes(property)) {
            if (
              (property === 'second') ||
              (property === 'minute' && !second) ||
              (property === 'hour' && !minute)
            ) return onOk();
          }
        }

        // Auto next
        if (refs.autoNext.current && refs.mode.current === 'select') {
          if (['hour', 'minute', 'second'].includes(property)) {
            const values_: any = {};

            if (property === 'second') values_.selecting = 'hour';

            if (property === 'minute') values_.selecting = second ? 'second' : 'hour';

            if (property === 'hour' && minute) values_.selecting = 'minute';

            setValues({ ...refs.values.current, ...values_ });
          }
        }
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

      if (refs.values.current.selecting === 'hour') {
        const part = 360 / 12;

        valuesAll = Array.from({ length: 12 }).map((item: any, index_: number) => [(part * index_) - (part / 2), (part * index_) + (part / 2)]);

        let index = valuesAll.findIndex((item: [number, number]) => angle >= item[0] && angle <= item[1]);

        if (index === -1 || index === 0) index = refs.format.current === '24' ? 0 : 12;

        if (refs.format.current === '24') {
          let within = false;

          const labels = refs.roundMeter.current.querySelectorAll('.amaui-RoundMeter-labels');

          const elements = {
            outer: labels[0],
            inner: labels[1]
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
        if (!validItem(index, 'hour')) return;

        // Update values
        updateValues('hour', getLeadingZerosNumber(index));
      }
      else if (['minute', 'second'].includes(refs.values.current.selecting)) {
        const part = 360 / 60;

        valuesAll = Array.from({ length: 60 }).map((item: any, index_: number) => [(part * index_) - (part / 2), (part * index_) + (part / 2)]);

        let index = valuesAll.findIndex((item: [number, number]) => angle >= item[0] && angle <= item[1]);

        if (index === -1 || index === 0) index = 0;

        // Validate
        if (!validItem(index, refs.values.current.selecting)) return;

        // Update values
        updateValues(refs.values.current.selecting, getLeadingZerosNumber(index));
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

    // Error
    setError(!validItem('', '', inputToValues(refs.values.current.input)));

    window.addEventListener('keydown', onKeyDown);

    window.addEventListener('mouseup', onMouseUp);

    window.addEventListener('mousemove', onMouseMove);

    window.addEventListener('touchend', onMouseUp);

    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('keydown', onKeyDown);

      window.removeEventListener('mousemove', onMouseMove);

      window.removeEventListener('mouseup', onMouseUp);

      window.removeEventListener('touchmove', onTouchMove);

      window.removeEventListener('touchend', onMouseUp);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) updateFromValue(value_);
  }, [value_]);

  const onMode = React.useCallback(() => {
    setMode((refs.version.current === 'mobile' ? openMobile : openDesktop) || 'select');

    if (!refs.open.current) updateInputToValues();

    setOpen(!refs.open.current);
  }, [openMobile, openDesktop]);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const onModal = React.useCallback((event: React.MouseEvent<any>) => {
    setMode((refs.version.current === 'mobile' ? openMobile : openDesktop) || 'select');

    updateInputToValues();

    setOpen(true);

    if (is('function', onClick_)) onClick_(event);
  }, [openMobile, openDesktop, onClick_]);

  const onModeSwitch = React.useCallback(() => {
    setMode(refs.mode.current === 'select' ? 'input' : 'select');
  }, []);

  const onOk = React.useCallback(() => {
    updateValuesToInput();

    // Error
    setError(!validItem());

    onClose();
  }, []);

  const onCancel = React.useCallback(() => {
    const values_ = updateInputToValues();

    // Error
    setError(!validItem('', '', values_));

    onClose();

    if (is('function', onCancel_)) onCancel_();
  }, [onCancel_]);

  const onMouseDown = React.useCallback(() => {
    setMouseDown(true);
  }, []);

  const ModeSelect = React.useCallback(React.forwardRef((props_: any, ref_: any) => {
    const buttonProps = {
      tonal: 'secondary',
      color,
      version: 'filled',
      backgroundOpacity: theme.palette.light ? 0.24 : 0.14,
      elevation: false,

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-button'
        ],

        classes.button
      ])
    };

    const separator = (
      <Type
        version='d2'

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-input-separator'
          ],

          classes.inputSeparator
        ])}
      >
        :
      </Type>
    );

    const buttons = [
      <Button
        key={0}

        {...buttonProps}

        selected={refs.values.current.selecting === 'hour'}

        onClick={() => updateValues('selecting', 'hour')}
      >
        {refs.values.current.hour}
      </Button>
    ];

    if (minute) {
      buttons.push(
        separator,

        <Button
          {...buttonProps}

          selected={refs.values.current.selecting === 'minute'}

          onClick={() => updateValues('selecting', 'minute')}
        >
          {refs.values.current.minute}
        </Button>
      );
    }

    if (second) {
      buttons.push(
        separator,

        <Button
          {...buttonProps}

          selected={refs.values.current.selecting === 'second'}

          onClick={() => updateValues('selecting', 'second')}
        >
          {refs.values.current.second}
        </Button>
      );
    }

    const toggleButtonProps = {
      icon: false,

      ...ToggleButtonProps,

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-toggle-button'
        ],

        ToggleButtonProps?.className,
        classes.toggleButton
      ])
    };

    const Watch = (
      <Surface
        tonal={tonal}

        color={color}
      >
        {({ palette }) => {
          let labels = [];

          const colors = {
            regular: 'currentColor',
            inverse: theme.methods.palette.color.value(undefined, 90, true, palette)
          };

          let valueTime: any = '';

          let valueValue: any = '';

          let lowerPointer = false;

          if (refs.values.current.selecting === 'hour') {
            valueTime = refs.values.current.hour;

            if (valueTime.startsWith('0')) valueTime = valueTime.slice(1);

            valueValue = valueTime = +valueTime;

            if (refs.format.current === '24' && valueTime > 11) lowerPointer = true;

            if (valueTime > 12) valueTime -= 12;

            valueTime = (100 / 12) * valueTime;
          }

          if (refs.values.current.selecting === 'minute') {
            valueTime = refs.values.current.minute;

            if (valueTime.startsWith('0')) valueTime = valueTime.slice(1);

            valueValue = valueTime = +valueTime;

            valueTime = (100 / 60) * valueTime;
          }

          if (refs.values.current.selecting === 'second') {
            valueTime = refs.values.current.second;

            if (valueTime.startsWith('0')) valueTime = valueTime.slice(1);

            valueValue = valueTime = +valueTime;

            valueTime = (100 / 60) * valueTime;
          }

          if (refs.values.current.selecting === 'hour') {
            if (format === '12') labels = unique([
              // 12 hours
              ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
                value: index === 0 ? 12 : index,

                padding: 20,

                style: {
                  fontSize: 14,
                  opacity: validItem(index === 0 ? 12 : index, 'hour') ? 1 : 0.27,
                  fill: ((valueValue === 12 && index === 0) || (valueValue === index)) ? colors.inverse : colors.regular
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
                      opacity: validItem(index === 0 ? 0 : index, 'hour') ? 1 : 0.27,
                      fill: valueValue === index ? colors.inverse : colors.regular
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
                      opacity: validItem(12 + index, 'hour') ? 1 : 0.27,
                      fill: valueValue === (12 + index) ? colors.inverse : colors.regular
                    },

                    position: index * (100 / 12)
                  })))
                ], 'position')
              ];
            }
          }
          else if (refs.values.current.selecting === 'minute') {
            labels = unique([
              // 59 minutes
              ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
                value: index === 0 ? '00' : getLeadingZerosNumber((60 / 12) * index),

                padding: 20,

                style: {
                  fontSize: 14,
                  opacity: validItem(index === 0 ? 0 : (60 / 12) * index, 'minute') ? 1 : 0.27,
                  fill: (valueValue === ((60 / 12) * index)) ? colors.inverse : colors.regular
                },

                position: index * (100 / 12)
              })))
            ], 'position');
          }
          else if (refs.values.current.selecting === 'second') {
            labels = unique([
              // 59 seconds
              ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
                value: index === 0 ? '00' : getLeadingZerosNumber((60 / 12) * index),

                padding: 20,

                style: {
                  fontSize: 14,
                  opacity: validItem(index === 0 ? 0 : (60 / 12) * index, 'second') ? 1 : 0.27,
                  fill: (valueValue === ((60 / 12) * index)) ? colors.inverse : colors.regular
                },

                position: index * (100 / 12)
              })))
            ], 'position');
          }

          return (
            <RoundMeter
              ref={refs.roundMeter}

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

              renderLabel={is('function', renderValue) ? (x: number, y: number, valueItem: number, otherProps: any) => renderValue(refs.value.current, refs.values.current.selecting, x, y, valueItem, otherProps) : undefined}

              {...RoundMeterProps}

              className={classNames([
                staticClassName('TimePicker', theme) && [
                  'amaui-TimePicker-round-meter'
                ],

                RoundMeterProps?.className,
                classes.roundMeter,
                refs.mouseDown.current && classes.roundMeter_mouseDown
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

                value={valueTime}

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

                value={valueTime}

                style={{
                  transformOrigin: 'center',
                  fill: palette[40],
                  stroke: 'none'
                }}
              />
            </RoundMeter>
          );
        }}
      </Surface>
    );

    if (refs.version.current === 'static-watch') return Watch;

    return (
      <Surface
        ref={ref_}

        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-mode'
          ],

          ModeSelectProps?.className,
          classes.mode,
          classes.model_input
        ])}
      >
        <Line
          gap={0}

          direction='column'

          align='center'

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'amaui-TimePicker-mode-wrapper'
            ],

            classes.mode_wrapper
          ])}
        >
          {/* Heading */}
          <Type
            version='l2'

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'amaui-TimePicker-heading'
              ],

              classes.heading
            ])}
          >
            {selectModeHeadingText}
          </Type>

          {/* Middle */}
          <Line
            gap={4.5}

            direction={refs.orientation.current === 'vertical' ? 'column' : 'row'}

            align='center'

            justify='unset'

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'amaui-TimePicker-middle'
              ],

              classes.middle
            ])}
          >
            {/* Inputs, am, pm */}
            <Line
              gap={refs.orientation.current === 'vertical' ? 1.5 : 2}

              direction={refs.orientation.current === 'vertical' ? 'row' : 'column'}

              align='unset'

              justify='center'

              className={classNames([
                staticClassName('TimePicker', theme) && [
                  'amaui-TimePicker-inputs'
                ],

                classes.inputs
              ])}
            >
              <Line
                gap={0}

                direction='row'

                wrap='wrap'

                align='flex-start'

                justify='center'
              >
                {buttons.map((item: any, index: number) => (
                  React.cloneElement(item, {
                    key: index
                  })
                ))}
              </Line>

              {format === '12' && (
                <ToggleButtons
                  tonal={tonal}

                  color='inherit'

                  version='outlined'

                  orientation={refs.orientation.current}

                  value={refs.values.current.dayTime}

                  onChange={(valueNew: any) => {
                    if (!valueNew.length) return;

                    updateValues('dayTime', is('array', valueNew) ? valueNew[0] : valueNew);
                  }}

                  select='single'

                  {...ToggleButtonsProps}

                  className={classNames([
                    staticClassName('TimePicker', theme) && [
                      'amaui-TimePicker-toggle-buttons'
                    ],

                    ToggleButtonsProps?.className,
                    classes.toggleButtons,
                    classes[`toggleButtons_orientation_${refs.orientation.current}`]
                  ])}
                >
                  <ToggleButton
                    value='am'

                    {...toggleButtonProps}
                  >
                    AM
                  </ToggleButton>

                  <ToggleButton
                    value='pm'

                    {...toggleButtonProps}
                  >
                    PM
                  </ToggleButton>
                </ToggleButtons>
              )}
            </Line>

            {/* Watch */}
            {Watch}
          </Line>

          {/* Footer */}
          <Line
            direction='row'

            wrap='wrap'

            align='center'

            justify={switch_ ? 'space-between' : 'flex-end'}

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'amaui-TimePicker-footer'
              ],

              classes.footer
            ])}
          >
            {switch_ && (
              <Tooltip
                label={mode === 'select' ? 'Enter time' : 'Select time'}
              >
                <IconButton
                  tonal={tonal}

                  color='inherit'

                  onClick={onModeSwitch}

                  aria-label={mode === 'select' ? 'Enter time' : 'Select time'}
                >
                  {mode === 'select' ? <IconEnter /> : <Icon_ />}
                </IconButton>
              </Tooltip>
            )}

            <Line
              gap={0}

              direction='row'

              align='center'
            >
              <Button
                tonal={tonal}

                color={color}

                version='text'

                onClick={onCancel}

                {...ButtonProps}
              >
                Cancel
              </Button>

              <Button
                tonal={tonal}

                color={color}

                version='text'

                onClick={onOk}

                {...ButtonProps}
              >
                Ok
              </Button>
            </Line>
          </Line>
        </Line>
      </Surface>
    );
  }), [version, format, hour, minute, second, selectModeHeadingText, mode, tonal, color, switch_, InputProps, renderValue, theme]);

  const ModeInput = React.useCallback(React.forwardRef((props_: any, ref_: any) => {
    const inputProps = {
      tonal,
      color,
      version: 'outlined',
      size: 'large',

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-input'
        ],

        classes.input,
        classes[`input_version_${version}`]
      ]),

      ...InputProps
    };

    const separator = (
      <Type
        version='d2'

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-input-separator'
          ],

          classes.inputSeparator
        ])}
      >
        :
      </Type>
    );

    const inputs = [
      <AdvancedTextField
        key={0}

        helperText='Hour'

        value={refs.values.current.hour}

        onChange={(valueNew: any) => updateValues('hour', valueNew)}

        placeholder='00'

        mask={[
          ...(format === '12' ? [
            { pattern: '[0-1]' },

            (item: string, result: string, valueInput: string) => /^([0][0-9]|1[0-2]).*/.test(valueInput)
          ] : [
            { pattern: '[0-2]' },

            (item: string, result: string, valueInput: string) => /^([01][0-9]|2[0-3]).*/.test(valueInput)
          ])
        ]}

        {...inputProps}
      />
    ];

    if (minute) {
      inputs.push(
        separator,

        <AdvancedTextField
          helperText='Minute'

          value={refs.values.current.minute}

          onChange={(valueNew: any) => updateValues('minute', valueNew)}

          placeholder='00'

          mask={[
            { pattern: '[0-5]' },

            { pattern: '[0-9]' }
          ]}

          {...inputProps}
        />
      );
    }

    if (second) {
      inputs.push(
        separator,

        <AdvancedTextField
          helperText='Second'

          value={refs.values.current.second}

          onChange={(valueNew: any) => updateValues('second', valueNew)}

          placeholder='00'

          mask={[
            { pattern: '[0-5]' },

            { pattern: '[0-9]' }
          ]}

          {...inputProps}
        />
      );
    }

    const toggleButtonProps = {
      icon: false,

      ...ToggleButtonProps,

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-toggle-button'
        ],

        ToggleButtonProps?.className,
        classes.toggleButton
      ])
    };

    return (
      <Surface
        ref={ref_}

        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-mode'
          ],

          ModeInputProps?.className,
          classes.mode
        ])}
      >
        <Line
          gap={0}

          direction='column'

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'amaui-TimePicker-mode-wrapper'
            ],

            classes.mode_wrapper
          ])}
        >
          {/* Heading */}
          <Type
            version='l2'

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'amaui-TimePicker-heading'
              ],

              classes.heading
            ])}
          >
            {inputModeHeadingText}
          </Type>

          {/* Middle */}
          <Line
            gap={4.5}

            direction={refs.orientation.current === 'vertical' ? 'column' : 'row'}

            align='center'

            justify='unset'

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'amaui-TimePicker-middle'
              ],

              classes.middle
            ])}
          >
            {/* Inputs, am, pm */}
            <Line
              gap={1.5}

              direction='row'

              align='unset'

              justify='center'

              className={classNames([
                staticClassName('TimePicker', theme) && [
                  'amaui-TimePicker-inputs'
                ],

                classes.inputs
              ])}
            >
              <Line
                gap={0}

                direction='row'

                align='flex-start'

                justify='unset'
              >
                {inputs.map((item: any, index: number) => (
                  React.cloneElement(item, {
                    key: index
                  })
                ))}
              </Line>

              {format === '12' && (
                <ToggleButtons
                  tonal={tonal}

                  color='inherit'

                  version='outlined'

                  orientation='vertical'

                  value={refs.values.current.dayTime}

                  onChange={(valueNew: any) => {
                    if (!valueNew.length) return;

                    updateValues('dayTime', is('array', valueNew) ? valueNew[0] : valueNew);
                  }}

                  select='single'

                  {...ToggleButtonsProps}

                  className={classNames([
                    staticClassName('TimePicker', theme) && [
                      'amaui-TimePicker-toggle-buttons'
                    ],

                    ToggleButtonsProps?.className,
                    classes.toggleButtons,
                    classes.toggleButtons_input
                  ])}
                >
                  <ToggleButton
                    value='am'

                    {...toggleButtonProps}
                  >
                    AM
                  </ToggleButton>

                  <ToggleButton
                    value='pm'

                    {...toggleButtonProps}
                  >
                    PM
                  </ToggleButton>
                </ToggleButtons>
              )}
            </Line>
          </Line>

          {/* Footer */}
          <Line
            direction='row'

            wrap='wrap'

            align='center'

            justify={switch_ ? 'space-between' : 'flex-end'}

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'amaui-TimePicker-footer'
              ],

              classes.footer
            ])}
          >
            {switch_ && (
              <Tooltip
                label={mode === 'select' ? 'Enter' : 'Select'}
              >
                <IconButton
                  tonal={tonal}

                  color='inherit'

                  onClick={onModeSwitch}

                  aria-label={mode === 'select' ? 'Enter time' : 'Select time'}
                >
                  {mode === 'select' ? <IconEnter /> : <Icon_ />}
                </IconButton>
              </Tooltip>
            )}

            <Line
              gap={0}

              direction='row'

              align='center'
            >
              <Button
                tonal={tonal}

                color={color}

                version='text'

                onClick={onCancel}

                {...ButtonProps}
              >
                Cancel
              </Button>

              <Button
                tonal={tonal}

                color={color}

                version='text'

                onClick={onOk}

                {...ButtonProps}
              >
                Ok
              </Button>
            </Line>
          </Line>
        </Line>
      </Surface>
    );
  }), [version, format, hour, minute, second, inputModeHeadingText, mode, tonal, color, switch_, InputProps, theme]);

  const mask: any = [];

  let placeholder = '';

  if (hour) {
    if (format === '12') {
      mask.push(
        { pattern: '[0-1]' },

        (item: string, result: string, valueInput: string) => /^([0][0-9]|1[0-2]).*/.test(valueInput)
      );
    }

    if (format === '24') {
      mask.push(
        { pattern: '[0-2]' },

        (item: string, result: string, valueInput: string) => /^([01][0-9]|2[0-3]).*/.test(valueInput),
      );
    }

    placeholder += 'hh';

    if (minute || second) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (minute) {
    mask.push(
      { pattern: '[0-5]' },

      { pattern: '[0-9]' }
    );

    placeholder += 'mm';

    if (second) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (second) {
    mask.push(
      { pattern: '[0-5]' },

      { pattern: '[0-9]' }
    );

    placeholder += 'ss';
  }

  if (format === '12') {
    mask.push(
      ' ',

      { pattern: '[ap]' },

      'm'
    );

    placeholder += ' (a|p)m';
  }

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        ref={refs.iconButton}

        tonal={tonal}

        color={color}

        version='text'

        onClick={onMode}

        aria-label='Choose time'

        disabled={disabled || readOnly}

        {...IconButtonProps}
      >
        <Icon_ />
      </IconButton>
    );
  }

  if (version === 'mobile') {
    if (!readOnly) moreProps.onClick = onModal;
  }

  if (version === 'static') {
    if (versionStatic !== undefined) return versionStatic === 'select' ? <ModeSelect /> : <ModeInput />;

    return mode === 'select' ? <ModeSelect /> : <ModeInput />;
  }

  return (
    <Line
      gap={0}

      direction='column'

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-root',
          readOnly && `amaui-TimePicker-read-only`,
          disabled && `amaui-TimePicker-disabled`
        ],

        className,
        classes.root
      ])}
    >
      <AdvancedTextField
        rootRef={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        tonal={tonal}

        color={color}

        version='outlined'

        label={label}

        mask={mask}

        placeholder={placeholder}

        value={values.input}

        onChange={(valueNew: any) => updateValues('input', valueNew)}

        error={error}

        readOnly={readOnly}

        disabled={disabled}

        {...moreProps}

        {...other}

        {...AdvancedTextFieldProps}
      />

      {/* Mobile */}
      {version === 'mobile' && (
        <Modal
          open={open}

          modalWrapperSurface={false}

          TransitionComponent={Slide}

          onClose={onClose}

          {...ModalProps}
        >
          {mode === 'select' ? <ModeSelect /> : <ModeInput />}
        </Modal>
      )}

      {/* Desktop */}
      {version === 'desktop' && (
        <Tooltip
          open={open}

          portal={false}

          anchorElement={refs.root.current}

          alignment='center'

          position='bottom'

          hover={false}

          focus={false}

          longPress={false}

          maxWidth='unset'

          noMargin

          label={(
            <ClickListener
              onClickOutside={onCancel}

              includeParentQueries={['.amaui-TimePicker-mode']}

              include={[refs.iconButton, refs.iconButton.current]}
            >
              {mode === 'select' ? <ModeSelect /> : <ModeInput />}
            </ClickListener>
          )}

          {...TooltipProps}
        />
      )}
    </Line>
  );
});

TimePicker.displayName = 'amaui-TimePicker';

export default TimePicker;
