import React from 'react';

import { is } from '@amaui/utils';
import { AmauiDate, format as formatDate, set, is as isAmauiDate } from '@amaui/date';
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
import Slide from '../Slide';
import Clock from '../Clock';
import { SEPARATOR, SEPARATOR_SYMBOL } from '../DatePicker/DatePicker';
import { TClockUnit } from '../Clock/Clock';
import { IAdvancedTextField } from '../AdvancedTextField/AdvancedTextField';
import Tabs from '../Tabs';
import Tab from '../Tab';
import { valueBreakpoints, staticClassName } from '../utils';
import { ISize, IValueBreakpoints, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  main: {},

  main_size_small: {
    borderRadius: theme.methods.shape.radius.value(2.5, 'px'),
  },

  main_size_regular: {
    borderRadius: theme.methods.shape.radius.value(3.5, 'px')
  },

  main_size_large: {
    borderRadius: theme.methods.shape.radius.value(4.5, 'px')
  },

  heading: {
    width: '100%'
  },

  heading_size_small: {
    padding: '16px 16px 0'
  },

  heading_size_regular: {
    padding: '24px 24px 0'
  },

  heading_size_large: {
    padding: '32px 32px 0'
  },

  inputs: {
    width: '100%'
  },

  middle: {
    width: '100%'
  },

  middle_size_small: {
    padding: '0 16px',
    marginTop: '16px'
  },

  middle_size_regular: {
    padding: '0 24px',
    marginTop: '24px'
  },

  middle_size_large: {
    padding: '0 32px',
    marginTop: '32px'
  },

  input: {
    flex: '1 1 auto',

    '& .amaui-TextField-helper-text': {
      color: theme.palette.text.default.primary
    }
  },

  input_size_small: {
    maxWidth: '72px',

    '& .amaui-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: '8px 4px',
      height: '64px'
    },

    '& .amaui-TextField-input': {
      ...theme.typography.values.d3,

      lineHeight: '1',

      textAlign: 'center'
    },

    '& .amaui-TextField-footer': {
      marginTop: '4px',
      padding: '0px'
    }
  },

  input_size_regular: {
    maxWidth: '96px',

    '& .amaui-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: '12px 8px',
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
    }
  },

  input_size_large: {
    maxWidth: '120px',

    '& .amaui-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: '16px 12px',
      height: '80px'
    },

    '& .amaui-TextField-input': {
      ...theme.typography.values.d1,

      lineHeight: '1',

      textAlign: 'center'
    },

    '& .amaui-TextField-footer': {
      marginTop: '12px',
      padding: '0px'
    }
  },

  button: {
    padding: '0',
    paddingTop: '3px',
    borderRadius: theme.methods.shape.radius.value('sm', 'px'),
    cursor: 'pointer',
    userSelect: 'none',
    flex: '1 1'
  },

  button_size_small: {
    height: '64px',
    width: '82px',

    '& .amaui-Button-label': {
      ...theme.typography.values.d3,

      lineHeight: '1',
    }
  },

  button_size_regular: {
    height: '72px',
    width: '96px',

    '& .amaui-Button-label': {
      ...theme.typography.values.d2,

      lineHeight: '1',
    }
  },

  button_size_large: {
    height: '96px',
    width: '110px',

    '& .amaui-Button-label': {
      ...theme.typography.values.d1,

      lineHeight: '1',
    }
  },

  inputSeparator: {
    paddingInline: '6px',
    userSelect: 'none'
  },

  toggleButtons: {
    '& > *': {
      flex: '1 1 auto'
    }
  },

  toggleButtons_orientation_vertical_size_small: {
    minWidth: '48px',
    height: '64px'
  },

  toggleButtons_orientation_vertical_size_regular: {
    minWidth: '56px',
    height: '72px'
  },

  toggleButtons_orientation_vertical_size_large: {
    minWidth: '68px',
    height: '80px'
  },

  toggleButtons_orientation_horizontal_size_small: {
    height: '30px'
  },

  toggleButtons_orientation_horizontal_size_regular: {
    height: '38px'
  },

  toggleButtons_orientation_horizontal_size_large: {
    height: '46px'
  },

  toggleButton: {

  },

  tabs: {

  },

  tabs_padding: {
    marginTop: 12
  },

  footer: {},

  footer_size_small: {
    padding: '0px 8px 8px',
    marginTop: '16px'
  },

  footer_size_regular: {
    padding: '0px 16px 16px',
    marginTop: '24px'
  },

  footer_size_large: {
    padding: '0px 24px 24px',
    marginTop: '32px'
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

export type TTimePickerValue = AmauiDate | [AmauiDate, AmauiDate];

export type TTimePickerSelecting = TClockUnit | [TClockUnit, TClockUnit];

export interface ITimePicker extends Omit<IAdvancedTextField, 'version'> {
  version?: 'auto' | 'mobile' | 'desktop';

  value?: TTimePickerValue;
  valueDefault?: TTimePickerValue;
  onChange?: (value: TTimePickerValue) => any;

  selecting?: TTimePickerSelecting;
  selectingDefault?: TTimePickerSelecting;
  onChangeSelecting?: (value: TTimePickerSelecting) => any;

  size?: ISize;

  now?: boolean;
  range?: boolean;
  static?: boolean;
  valid?: (value: AmauiDate, version: TClockUnit) => boolean;
  validate?: (value: AmauiDate) => boolean;
  min?: AmauiDate;
  max?: AmauiDate;
  autoNext?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  autoCloseOnLast?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  openMobile?: 'input' | 'select';
  openDesktop?: 'input' | 'select';
  selectModalSubHeadingText?: string;
  selectModalSubHeadingTextRange?: string;
  inputModalSubHeadingText?: string;
  inputModalSubHeadingTextRange?: string;
  orientation?: 'vertical' | 'horizontal' | Partial<Record<IValueBreakpoints, 'vertical' | 'horizontal'>>;
  format?: '12' | '24';
  hour?: boolean;
  minute?: boolean;
  second?: boolean;
  switch?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  today?: boolean;
  clear?: boolean;
  placeholder?: string;
  heading?: boolean;
  actions?: boolean;
  readOnly?: boolean;
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<any>) => any;
  onClose?: (event: React.MouseEvent<any>) => any;
  onCancel?: (event: React.MouseEvent<any>) => any;
  onNow?: (event: React.MouseEvent<any>) => any;
  onOk?: (event: React.MouseEvent<any>) => any;

  renderValue?: (value: AmauiDate, version: TClockUnit, x: number, y: number, valueNumber: number, otherProps: any) => React.ReactNode;

  Icon?: IElementReference;
  IconEnter?: IElementReference;

  MainProps?: IPropsAny;
  ModalProps?: IPropsAny;
  MiddleProps?: IPropsAny;
  ButtonProps?: IPropsAny;
  TooltipProps?: IPropsAny;
  ToggleButtonsProps?: IPropsAny;
  ToggleButtonProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  InputProps?: IPropsAny;
  ClockProps?: IPropsAny;
  TabsProps?: IPropsAny;
  TabFromProps?: IPropsAny;
  TabToProps?: IPropsAny;
  AdvancedTextFieldProps?: IPropsAny;
}

const TimePicker: React.FC<ITimePicker> = React.forwardRef((props__, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTimePicker?.props?.default, ...props__ }), [props__]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    version: version_ = 'auto',

    value: value_,
    valueDefault,
    onChange,

    selecting: selecting_,
    selectingDefault,
    onChangeSelecting,

    size = 'regular',

    range,
    now,
    label,
    min,
    max,
    validate,
    autoNext: autoNext_,
    autoCloseOnLast: autoCloseOnLast_,
    openMobile = 'select',
    openDesktop = 'select',
    selectModalSubHeadingText = 'Select time',
    selectModalSubHeadingTextRange = `Select from${SEPARATOR}to time`,
    inputModalSubHeadingText = 'Enter time',
    inputModalSubHeadingTextRange = `Enter from${SEPARATOR}to time`,
    orientation: orientation_,
    format = '12',
    hour = true,
    minute = true,
    second = false,
    switch: switch__,
    static: static_,
    today,
    clear = true,
    placeholder: placeholder_,
    heading: heading_ = true,
    actions: actions_ = true,
    readOnly,
    disabled,

    valid: valid_,

    onClick: onClick_,
    onClose: onClose_,
    onCancel: onCancel_,
    onNow: onNow_,
    onToday: onToday_,
    onClear: onClear_,
    onOk: onOk_,

    renderValue,

    Icon: Icon_ = IconMaterialScheduleRounded,
    IconEnter = IconMaterialKeyboardAltRounded,

    MainProps,
    ModalProps,
    MiddleProps,
    ButtonProps,
    TooltipProps,
    ToggleButtonsProps,
    ToggleButtonProps,
    IconButtonProps,
    InputProps,
    ClockProps,
    TabsProps,
    TabFromProps,
    TabToProps,
    AdvancedTextFieldProps,

    className,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(),
    mode: React.useRef<any>(),
    value: React.useRef<any>(),
    dayTime: React.useRef<any>()
  };

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const orientation = valueBreakpoints(orientation_, 'vertical', breakpoints, theme);
  const autoNext = valueBreakpoints(autoNext_, undefined, breakpoints, theme);
  const autoCloseOnLast = valueBreakpoints(autoCloseOnLast_, undefined, breakpoints, theme);

  const touch = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  const [value, setValue] = React.useState(() => {
    const valueResult = (valueDefault !== undefined ? valueDefault : value_) || (now && (range ? [new AmauiDate(), new AmauiDate()] : [new AmauiDate()]));

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<AmauiDate>).filter(Boolean);
  });
  const [selecting, setSelecting] = React.useState(() => {
    const valueResult = (selectingDefault !== undefined ? selectingDefault : selecting_) || ['hour', 'hour'];

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<TClockUnit>).filter(Boolean);
  });
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState((touch ? openMobile : openDesktop) || 'select');
  const [error, setError] = React.useState(false);
  const [dayTime, setDayTime] = React.useState<Array<'am' | 'pm'>>(Array.from({ length: 2 }).map(item => formatDate(new AmauiDate(), 'a') as any));
  const [tab, setTab] = React.useState(0);

  refs.value.current = value;

  refs.mode.current = mode;

  refs.dayTime.current = dayTime;

  const valueToInput = React.useCallback((valueNew: any = refs.value.current) => {
    let result = '';

    const [from, to] = valueNew as [AmauiDate, AmauiDate];

    if (!(from || to)) return '';

    const method = (item: AmauiDate) => {
      let formatValue = '';

      if (format === '12') formatValue += `hh`;
      else formatValue += `HH`;

      if (minute) formatValue += `:mm`;

      if (second) formatValue += `:ss`;

      if (format === '12') formatValue += ` a`;

      return formatDate(item, formatValue);
    };

    result += `${method(from)}`;

    if (range && to) result += `${SEPARATOR}${method(to)}`;

    return result;
  }, [value, format, hour, minute, second, range]);

  const [input, setInput] = React.useState(valueToInput());

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  const onUpdateValue = (valueNew: any) => {
    setValue(valueNew);

    setDayTime(valueNew.map(item => formatDate(item, 'a')));
  };

  const errorCheck = React.useCallback((valueNew: any = value) => {
    // Error
    setError((valueNew || []).some((item: any, index: number) => !valid(item)));
  }, [value]);

  // Init
  React.useEffect(() => {
    // Error
    errorCheck();
  }, []);

  // Value
  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) onUpdateValue(((is('array', value_) ? value_ : [value_] as any).filter(Boolean)));
  }, [value_]);

  const onUpdate = React.useCallback((valueNew_: AmauiDate) => {
    const valueNew = resolve(valueNew_);

    // Inner update
    if (!props.hasOwnProperty('value')) setValue(valueNew as any);

    if (is('function', onChange)) onChange(!range ? valueNew[0] : valueNew);
  }, [value, range, onChange]);

  const onUpdateSelecting = React.useCallback((valueNew_: TClockUnit, index: number) => {
    const valueNew = [...selecting];

    valueNew[index] = valueNew_;

    // Inner update
    if (!props.hasOwnProperty('selecting')) setSelecting(valueNew);

    if (is('function', onChangeSelecting)) onChangeSelecting(valueNew as any);
  }, [onChangeSelecting]);

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

  const textToAmauiDate = React.useCallback((valueNew: string) => {
    const [times, dayTime_] = (valueNew || '').split(' ');
    const values = times.split(':');

    let valueTime: any;

    let amauiDate = new AmauiDate();

    if (hour) {
      valueTime = values[0];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      amauiDate = set((format === '12' && dayTime_ === 'pm') ? valueTime + 12 : valueTime, 'hour', amauiDate);
    }

    if (minute) {
      valueTime = values[!hour ? 0 : 1];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      amauiDate = set(valueTime, 'minute', amauiDate);
    }

    if (second) {
      valueTime = values[!(hour && minute) ? 0 : !hour ? 1 : 2];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      amauiDate = set(valueTime, 'second', amauiDate);
    }

    return amauiDate;
  }, [format, hour, minute, second]);

  const onInputModalChange = React.useCallback((valueNew: string, unit: TClockUnit, index: number) => {
    let valueTime: any = valueNew;

    if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

    valueTime = +valueTime;

    value[index] = set(valueTime, unit || selecting[index], value[index]);

    (!actions_ ? onUpdate : setValue)(resolve(value) as any);
  }, [value, actions_, selecting]);

  const resolve = React.useCallback((valueNew = refs.value.current, dayTimeNew = refs.dayTime.current) => {
    const values = valueNew.filter(Boolean).map((item: AmauiDate, index: number) => {
      // Resolve the range value
      const valueHour = item.hour;

      if (format === '12') {
        if (dayTimeNew[index] === 'am' && valueHour > 12) return set(valueHour - 12, 'hour', item);

        if (dayTimeNew[index] === 'pm' && valueHour < 12) return set(valueHour + 12, 'hour', item);
      }

      return item;
    });

    return values;
  }, [value, dayTime, format]);

  const updateDayTime = React.useCallback((valueNew_: string[], index: number) => {
    const valueNew = valueNew_[0];

    // Update dayTime
    const dayTimeNew = [...dayTime];

    dayTimeNew[index] = valueNew as any;

    refs.dayTime.current = dayTimeNew;

    setDayTime(dayTimeNew);

    (!actions_ ? onUpdate : setValue)(resolve(refs.value.current) as any);
  }, [value, actions_, dayTime, format]);

  const inputToValue = React.useCallback((valueNew_: string = input) => {
    let valueNew = valueNew_;

    let [from, to] = valueNew.split(SEPARATOR) as any;

    from = textToAmauiDate(from);

    if (to) to = textToAmauiDate(to);

    valueNew = [from, to].filter(Boolean).filter((item: AmauiDate) => item?.valid) as any;

    return valueNew as unknown as TTimePickerValue;
  }, [input]);

  const onInputChange = React.useCallback((valueNew_: any) => {
    const valueNew = inputToValue(valueNew_);

    const validValues = (valueNew as [AmauiDate, AmauiDate]).every(item => item.valid);

    // Only update values if input is valid
    // format used to make the value
    if (validValues) {
      // Error
      errorCheck(valueNew);

      // Update value
      onUpdate(valueNew as any);
    }

    if (!valueNew_) {
      onUpdate([null, null] as any);
    }

    // Update input for free typing
    setInput(valueNew_);
  }, []);

  const onChangeClock = React.useCallback((valueNew_: any, index: number = 0) => {
    const valueNew = [...value];

    if (valueNew_ !== value[index]) {
      valueNew[index] = valueNew_;

      (!actions_ ? onUpdate : setValue)(resolve(valueNew) as any);

      // Error
      errorCheck(valueNew);
    }
  }, [value, actions_]);

  const onChangeSelectingClock = React.useCallback((valueNew: TClockUnit, index = 0) => {
    const selectingValue = selecting;

    selectingValue[index] = valueNew;

    if (valueNew !== selecting[0]) setSelecting([...selectingValue]);
  }, [selecting]);

  const onDoneSelecting = React.useCallback((valueNew: any, selectingNew: any) => {
    // AutoCloseOnLast
    if (autoCloseOnLast && refs.mode.current === 'select') {
      if (['hour', 'minute', 'second'].includes(selectingNew)) {
        if (
          (selectingNew === 'second') ||
          (selectingNew === 'minute' && !second) ||
          (selectingNew === 'hour' && !minute)
        ) return onOk();
      }
    }
  }, [mode, autoCloseOnLast, hour, minute, second]);

  const onMode = React.useCallback(() => {
    setMode((version === 'mobile' ? openMobile : openDesktop) || 'select');
  }, [version, openMobile, openDesktop]);

  const onModeSwitch = React.useCallback(() => {
    setMode(refs.mode.current === 'select' ? 'input' : 'select');
  }, []);

  const onOpen = React.useCallback(() => {
    onMode();

    setOpen(previous => !previous);
  }, [open, openMobile, version]);

  const onClose = React.useCallback((event: React.MouseEvent<any>) => {
    setOpen(false);

    if (is('function', onClose_)) onClose_(event);
  }, [onClose_]);

  const onReset = React.useCallback(() => {
    const valueNew = inputToValue() as any;

    // Update value
    onUpdate(valueNew);

    // Update dayTime
    setDayTime(valueNew.map(item => formatDate(item, 'a')));
  }, [input]);

  const onToday = React.useCallback((event: React.MouseEvent) => {
    const valueNew: any = [new AmauiDate()];

    if (range) valueNew.push(new AmauiDate());

    // Update value
    onUpdate(valueNew as any);

    // Update input
    setInput(valueToInput(valueNew));

    // Update dayTime
    setDayTime(valueNew.map(item => formatDate(item, 'a')));

    onClose(event);

    if (is('function', onToday_)) onToday_(event);
  }, [input, range, onToday_]);

  const onClear = React.useCallback((event: React.MouseEvent) => {
    const valueNew: any = [];

    // Update value
    onUpdate(valueNew as any);

    // Update input
    setInput(valueToInput(valueNew));

    // Update dayTime
    setDayTime(valueNew.map(item => formatDate(item, 'a')));

    onClose(event);

    if (is('function', onClear_)) onClear_(event);
  }, [onClear_]);

  const onOk = React.useCallback((event?: React.MouseEvent) => {
    // Error
    errorCheck();

    // Update value
    onUpdate(refs.value.current as any);

    // Update input
    setInput(valueToInput(refs.value.current));

    // Update dayTime
    setDayTime(refs.value.current.map(item => formatDate(item, 'a')));

    onClose(event);

    if (is('function', onOk_)) onOk_(event);
  }, [value, onOk_]);

  const onCancel = React.useCallback((event: React.MouseEvent) => {
    onReset();

    onClose(event);

    if (is('function', onCancel_)) onCancel_(event);
  }, [input, onCancel_]);

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

  // range
  if (range) {
    mask.push(
      ' ',
      SEPARATOR_SYMBOL,
      ' ',

      ...mask
    );

    placeholder += `${SEPARATOR}${placeholder}`;
  }

  placeholder = placeholder_ || placeholder;

  const iconProps = {
    size
  };

  const buttonProps = {
    tonal,
    color,
    version: 'text',
    size,

    ...ButtonProps
  };

  const iconButtonProps = {
    size,

    ...IconButtonProps
  };

  const clock = (index = 0) => (
    <Clock
      tonal={tonal}

      color={color}

      size={size}

      format={format}

      value={value[index] || new AmauiDate()}

      dayTime={dayTime[index] || formatDate(new AmauiDate(), 'a') as any}

      selecting={selecting[index]}

      onChange={valueNew => onChangeClock(valueNew, index)}

      onChangeSelecting={valueNew => onChangeSelectingClock(valueNew, index)}

      onDoneSelecting={onDoneSelecting}

      renderValue={renderValue}

      valid={valid}

      hour={hour}

      minute={minute}

      second={second}

      autoNext={autoNext}

      disabled={disabled}

      {...ClockProps}
    />
  );

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        tonal={tonal}

        color={color}

        size={size}

        version='text'

        onClick={onOpen}

        aria-label='Choose time'

        disabled={disabled || readOnly}

        {...iconButtonProps}
      >
        <Icon_
          {...iconProps}
        />
      </IconButton>
    );
  }

  const makeInputs = (index = 0) => {
    const inputProps: any = {
      tonal,
      color,
      version: 'outlined',
      size,

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-input'
        ],

        classes.input,
        classes[`input_version_${version}`],
        classes[`input_size_${size}`]
      ]),

      HelperTextProps: {
        version: size === 'large' ? 'b2' : size === 'regular' ? 'b3' : 'b3'
      },

      ...InputProps
    };

    const buttonProps_ = {
      tonal: 'secondary',
      color: ['themed', 'inverted', 'default', 'inherit'].includes(color) ? 'default' : color,
      version: 'filled',
      backgroundOpacity: 0.44,
      elevation: false,
      size,

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-button'
        ],

        classes.button,
        classes[`button_size_${size}`]
      ]),

      style: {
        color: theme.palette.text.default.primary
      }
    };

    const separator = (
      <Type
        version={size === 'large' ? 'd1' : size === 'regular' ? 'd2' : 'd3'}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-input-separator'
          ],

          classes.inputSeparator
        ])}

        style={{
          ...(mode !== 'select' && {
            marginTop: -24
          })
        }}
      >
        :
      </Type>
    );

    const buttons = [];

    const inputs = [];

    if (hour) {
      buttons.push(
        <Button
          {...buttonProps_}

          selected={selecting[index] === 'hour'}

          onClick={() => onUpdateSelecting('hour', index)}
        >
          {formatDate(value[index], format === '12' ? 'hh' : 'HH')}
        </Button>
      );

      inputs.push(
        <AdvancedTextField
          helperText='Hour'

          value={formatDate(value[index], format === '12' ? 'hh' : 'HH')}

          onChange={(valueNew: any) => onInputModalChange(valueNew, 'hour', index)}

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
      );
    }

    if (minute) {
      if (hour) {
        buttons.push(separator);
        inputs.push(separator);
      }

      buttons.push(
        <Button
          {...buttonProps_}

          selected={selecting[index] === 'minute'}

          onClick={() => onUpdateSelecting('minute', index)}
        >
          {formatDate(value[index], 'mm')}
        </Button>
      );

      inputs.push(
        <AdvancedTextField
          helperText='Minute'

          value={formatDate(value[index], 'mm')}

          onChange={(valueNew: any) => onInputModalChange(valueNew, 'minute', index)}

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
      if (hour || minute) {
        buttons.push(separator);
        inputs.push(separator);
      }

      buttons.push(
        <Button
          {...buttonProps_}

          selected={selecting[index] === 'second'}

          onClick={() => onUpdateSelecting('second', index)}
        >
          {formatDate(value[index], 'ss')}
        </Button>
      );

      inputs.push(
        <AdvancedTextField
          helperText='Second'

          value={formatDate(value[index], 'ss')}

          onChange={(valueNew: any) => onInputModalChange(valueNew, 'second', index)}

          placeholder='00'

          mask={[
            { pattern: '[0-5]' },

            { pattern: '[0-9]' }
          ]}

          {...inputProps}
        />
      );
    }

    return mode === 'select' ? buttons : inputs;
  };

  const toggleButtonProps = {
    size,
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

  const orientationValue = mode === 'select' ? orientation : 'vertical';

  const timeValue = range ? [0, 1] : [0];

  const elementValues = (
    timeValue.map((item, index: number) => (
      <Line
        key={index}

        gap={4.5}

        direction={orientationValue === 'vertical' ? 'column' : 'row'}

        align='center'

        justify='unset'

        style={{
          width: '100%'
        }}
      >
        {/* Inputs, am, pm */}
        <Line
          gap={orientationValue === 'vertical' ? 1.5 : 2}

          direction={orientationValue === 'vertical' ? 'row' : 'column'}

          justify='center'

          align='unset'

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

            align='center'

            justify='center'
          >
            {makeInputs(index)}
          </Line>

          {format === '12' && (
            <ToggleButtons
              version='outlined'

              size={size}

              orientation={orientationValue}

              value={dayTime[index] || formatDate(new AmauiDate(), 'a') as any}

              onChange={valueNew => updateDayTime(valueNew, index)}

              select='single'

              unselect={false}

              {...ToggleButtonsProps}

              className={classNames([
                staticClassName('TimePicker', theme) && [
                  'amaui-TimePicker-toggle-buttons'
                ],

                ToggleButtonsProps?.className,
                classes.toggleButtons,
                classes[`toggleButtons_orientation_${orientationValue}_size_${size}`]
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
        {mode === 'select' && clock(index)}
      </Line>
    ))
  );

  const heading = mode === 'select' ? !range ? selectModalSubHeadingText : selectModalSubHeadingTextRange : !range ? inputModalSubHeadingText : inputModalSubHeadingTextRange;

  const actions = (
    <Line
      direction='row'

      align='center'

      justify='space-between'

      fullWidth

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-footer'
        ],

        classes.footer,
        classes[`footer_size_${size}`]
      ])}
    >
      <Line
        gap={0}

        direction='row'

        align='center'
      >
        {switch_ && (
          <Tooltip
            label={mode === 'select' ? 'Enter time' : 'Select time'}
          >
            <IconButton
              tonal={tonal}

              color='inherit'

              size={size}

              onClick={onModeSwitch}

              aria-label={mode === 'select' ? 'Enter time' : 'Select time'}

              {...iconButtonProps}
            >
              {mode === 'select' ? <IconEnter {...iconProps} /> : <Icon_  {...iconProps} />}
            </IconButton>
          </Tooltip>
        )}

        {today && (
          <Button
            onClick={onToday}

            version='text'

            size={size}

            {...buttonProps}
          >
            Now
          </Button>
        )}

        {clear && (
          <Button
            onClick={onClear}

            version='text'

            size={size}

            {...buttonProps}
          >
            Clear
          </Button>
        )}
      </Line>

      <Line
        gap={0}

        direction='row'

        align='center'
      >
        <Button
          tonal={tonal}

          color={color}

          version='text'

          size={size}

          onClick={onCancel}

          {...buttonProps}
        >
          Cancel
        </Button>

        <Button
          tonal={tonal}

          color={color}

          version='text'

          size={size}

          onClick={onOk}

          {...buttonProps}
        >
          Ok
        </Button>
      </Line>
    </Line>
  );

  const element = (
    <Surface
      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      align='center'

      Component={Line as any}

      {...MainProps}

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-main'
        ],

        MainProps?.className,
        classes.main,
        classes[`main_size_${size}`]
      ])}
    >
      {/* Heading */}
      {heading_ && (
        <Type
          version={size === 'large' ? 'l1' : size === 'regular' ? 'l2' : 'l3'}

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'amaui-TimePicker-heading'
            ],

            classes.heading,
            classes[`heading_size_${size}`]
          ])}
        >
          {heading}
        </Type>
      )}

      {/* Tabs */}
      {range && (
        <Tabs
          tonal={tonal}

          color={color}

          justify='center'

          initialLineUpdateTimeout={340}

          value={tab}

          valueDefault={tab}

          onChange={setTab}

          {...TabsProps}

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'amaui-TimePicker-tabs'
            ],

            TabsProps?.className,
            classes.tabs,
            heading_ && classes.tabs_padding
          ])}
        >
          <Tab
            value={0}

            label='From'

            {...TabFromProps}
          />

          <Tab
            value={1}

            label='To'

            {...TabToProps}
          />
        </Tabs>
      )}

      {/* Middle */}
      <Line
        gap={0}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-middle'
          ],

          MiddleProps?.className,
          classes.middle,
          classes[`middle_size_${size}`]
        ])}
      >
        {elementValues[tab]}
      </Line>

      {/* Actions */}
      {actions_ && actions}
    </Surface>
  );

  if (version === 'mobile') {
    if (!(readOnly || disabled)) moreProps.onClick = onOpen;
  }

  if (static_) return element;

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

        size={size}

        label={label}

        mask={mask}

        placeholder={placeholder}

        value={input}

        onChange={onInputChange}

        endVerticalAlign='center'

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
          {element}
        </Modal>
      )}

      {/* Desktop */}
      {version === 'desktop' && (
        <Tooltip
          open={open}

          portal

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
              onClickOutside={onCancel as any}

              includeParentQueries={['.amaui-TimePicker-main']}
            >
              {element}
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
