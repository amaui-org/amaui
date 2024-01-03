import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { AmauiDate, format as formatMethod, set, is as isAmauiDate } from '@amaui/date';

import useMediaQuery from '../useMediaQuery';
import AdvancedTextField from '../AdvancedTextField';
import Modal from '../Modal';
import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';
import Slide from '../Slide';
import Surface from '../Surface';
import IconButton from '../IconButton';
import Icon from '../Icon';
import Line from '../Line';
import { SEPARATOR, SEPARATOR_SYMBOL } from '../DatePicker/DatePicker';
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import { IAdvancedTextField } from '../AdvancedTextField/AdvancedTextField';
import { TCalendarMonthValue } from '../CalendarMonth/CalendarMonth';
import { TCalendarUnit } from '../Calendar/Calendar';
import { TClockUnit } from '../Clock/Clock';
import Button from '../Button';
import Type from '../Type';

import { staticClassName, TColor, TElementReference, TPropsAny, TTonal, TValueBreakpoints, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  main: {
    marginInline: '24px',
    borderRadius: '28px'
  },

  heading: {
    width: '100%',
    padding: '24px 24px 0'
  },

  middle: {
    width: '100%',

    '& .amaui-DatePicker-root, & .amaui-TimePicker-root, & .amaui-TimePicker-main': {
      margin: '0px'
    }
  },

  footer: {
    width: '100%',
    padding: '0px 8px 12px 12px',
  }
}), { name: 'amaui-DateTimePicker' });

const IconMaterialDateRangeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DateRangeRoundedFilled'
      short_name='DateRange'

      {...props}
    >
      <path d="M8 14Q7.575 14 7.287 13.712Q7 13.425 7 13Q7 12.575 7.287 12.287Q7.575 12 8 12Q8.425 12 8.713 12.287Q9 12.575 9 13Q9 13.425 8.713 13.712Q8.425 14 8 14ZM12 14Q11.575 14 11.288 13.712Q11 13.425 11 13Q11 12.575 11.288 12.287Q11.575 12 12 12Q12.425 12 12.713 12.287Q13 12.575 13 13Q13 13.425 12.713 13.712Q12.425 14 12 14ZM16 14Q15.575 14 15.288 13.712Q15 13.425 15 13Q15 12.575 15.288 12.287Q15.575 12 16 12Q16.425 12 16.712 12.287Q17 12.575 17 13Q17 13.425 16.712 13.712Q16.425 14 16 14ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2.975Q6 2.55 6.287 2.275Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V2.975Q16 2.55 16.288 2.275Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20Z" />
    </Icon>
  );
});

const IconMaterialCalendarTodayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayRoundedFilled'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2.975Q6 2.55 6.287 2.275Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V2.975Q16 2.55 16.288 2.275Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20Z" />
    </Icon>
  );
});

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

export type TDateTimePicker = AmauiDate;

export interface IDateTimePicker extends Omit<IAdvancedTextField, 'version'> {
  tonal?: TTonal;
  color?: TColor;

  version?: 'auto' | 'mobile' | 'desktop';

  value?: TCalendarMonthValue;
  valueDefault?: TCalendarMonthValue;
  onChange?: (value: TCalendarMonthValue) => any;

  now?: boolean;
  range?: boolean;
  static?: boolean;
  valid?: (value: AmauiDate, version: TCalendarUnit | TClockUnit) => boolean;
  validate?: (value: AmauiDate) => boolean;
  min?: AmauiDate;
  max?: AmauiDate;
  headingText?: string;
  headingTextTime?: string;
  headingTextTimeRange?: string;
  headingTextDate?: string;
  headingTextDateRange?: string;
  useHelperText?: boolean | Partial<Record<TValueBreakpoints, boolean>>;
  format?: '12' | '24';
  hour?: boolean;
  minute?: boolean;
  second?: boolean;
  today?: boolean;
  clear?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;

  onClose?: (event: React.MouseEvent<any>) => any;
  onCancel?: (event: React.MouseEvent<any>) => any;
  onToday?: (event: React.MouseEvent<any>) => any;
  onClear?: (event: React.MouseEvent<any>) => any;
  onOk?: (event: React.MouseEvent<any>) => any;

  Icon?: TElementReference;
  IconDate?: TElementReference;
  IconTime?: TElementReference;

  ModalProps?: TPropsAny;
  TooltipProps?: TPropsAny;
  AdvancedTextFieldProps?: TPropsAny;
  DatePickerProps?: TPropsAny;
  TimePickerProps?: TPropsAny;
  IconButtonProps?: TPropsAny;
  ButtonProps?: TPropsAny;
  PickerProps?: TPropsAny;
  MiddleProps?: TPropsAny;
  MainProps?: TPropsAny;
}

const DateTimePicker: React.FC<IDateTimePicker> = React.forwardRef((props__, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiDateTimePicker?.props?.default, ...props__ }), [props__]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    version: version_ = 'auto',

    value: value_,
    valueDefault,
    onChange,

    label,

    range,
    now,
    static: static_,
    min,
    max,
    validate,
    headingText = 'Select date & time',
    headingTextTime,
    headingTextTimeRange,
    headingTextDate,
    headingTextDateRange,
    useHelperText: useHelperText_,
    format = '12',
    hour = true,
    minute = true,
    second = false,
    today,
    clear = true,
    size,
    placeholder: placeholder_,
    readOnly,
    disabled,

    valid: valid_,

    onClose: onClose_,
    onToday: onToday_,
    onClear: onClear_,
    onCancel: onCancel_,
    onOk: onOk_,

    Icon: Icon_ = IconMaterialDateRangeRoundedFilled,
    IconDate = IconMaterialCalendarTodayRoundedFilled,
    IconTime = IconMaterialScheduleRounded,

    ModalProps,
    TooltipProps,
    AdvancedTextFieldProps,
    DatePickerProps,
    TimePickerProps,
    IconButtonProps,
    ModeDesktopProps,
    ModeMobileProps,
    ButtonProps,
    PickerProps: PickerProps_,
    MiddleProps,
    MainProps,

    className,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<any>()
  };

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const useHelperText = valueBreakpoints(useHelperText_, undefined, breakpoints, theme);

  const touch = useMediaQuery('(pointer: coarse)');

  const [value, setValue] = React.useState(() => {
    const valueResult = (valueDefault !== undefined ? valueDefault : value_) || (now && (range ? [new AmauiDate(), new AmauiDate()] : [new AmauiDate()]));

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<AmauiDate>).filter(Boolean);
  });
  const [calendar, setCalendar] = React.useState<AmauiDate>(value[0]);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [tab, setTab] = React.useState('date');

  refs.value.current = value;

  const valueToInput = React.useCallback((valueNew = refs.value.current) => {
    let result = '';

    const [from, to] = valueNew as [AmauiDate, AmauiDate];

    if (!(from || to)) return '';

    const method = (item: AmauiDate) => {
      let formatValue = `${formatMethod(item, 'DD')}/${formatMethod(item, 'MM')}/${formatMethod(item, 'YYYY')}`;

      formatValue += ' ';

      if (hour) {
        if (format === '12') formatValue += `hh`;
        else formatValue += `HH`;

        if (minute || second) formatValue += `:`;
      }

      if (minute) {
        formatValue += `mm`;

        if (second) formatValue += `:`;
      }

      if (second) formatValue += `ss`;

      if (format === '12') formatValue += ` a`;

      return formatMethod(item, formatValue);
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

    // Update input
    setInput(valueToInput(valueNew));
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

  const onUpdate = React.useCallback((valueNew: AmauiDate) => {
    // Inner update
    if (!props.hasOwnProperty('value')) setValue(valueNew as any);

    if (is('function', onChange)) onChange(!range ? valueNew[0] : valueNew);
  }, [onChange, range]);

  const onPickSwitch = React.useCallback(() => {
    setTab(previous => previous === 'date' ? 'time' : 'date');
  }, []);

  // Update only internally, without using onChange
  // since it might be canceled
  // only use onChange on
  // input change, or ok
  const onPickerChange = React.useCallback((valueNew_: TCalendarMonthValue) => {
    const valueNew = is('array', valueNew_) ? valueNew_ : [valueNew_];

    if (valueNew !== value) setValue(valueNew as any);
  }, [value]);

  const onChangeCalendar = React.useCallback((valueNew: AmauiDate) => {
    if (valueNew !== calendar) setCalendar(valueNew as any);
  }, [calendar]);

  const textToAmauiDate = React.useCallback((valueNew: string) => {
    const [date, ...valueOther] = valueNew.split(' ');

    const time = valueOther.join(' ');

    const [valueDay, valueMonth, valueYear] = (date || '').split('/');
    const [times, dayTime] = (time || '').split(' ');
    const valuesTime = times.split(':');

    let valueTime: any;

    let amauiDate = new AmauiDate();

    amauiDate = new AmauiDate(new Date(`${valueMonth}/${valueDay}/${valueYear}`));

    if (hour) {
      valueTime = valuesTime[0];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      amauiDate = set((format === '12' && dayTime === 'pm') ? valueTime + 12 : valueTime, 'hour', amauiDate);
    }

    if (minute) {
      valueTime = valuesTime[!hour ? 0 : 1];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      amauiDate = set(valueTime, 'minute', amauiDate);
    }

    if (second) {
      valueTime = valuesTime[!(hour && minute) ? 0 : !hour ? 1 : 2];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      amauiDate = set(valueTime, 'second', amauiDate);
    }

    return amauiDate;
  }, [format, hour, minute, second]);

  const inputToValue = React.useCallback((valueNew_: string = input) => {
    let valueNew = valueNew_;

    let [from, to] = valueNew.split(SEPARATOR) as any;

    from = textToAmauiDate(from);

    if (to) to = textToAmauiDate(to);

    valueNew = [from, to].filter(Boolean) as any;

    return valueNew as unknown as TCalendarMonthValue;
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

      // Update calendar
      setCalendar(valueNew[0]);
    }

    if (!valueNew_) {
      onUpdate([null, null] as any);
    }

    // Update input for free typing
    setInput(valueNew_);
  }, []);

  const onReset = React.useCallback(() => {
    let valueNew = inputToValue() as any;

    const isValid = valueNew && (valueNew?.[0] as AmauiDate)?.valid;

    if (isValid) {
      // Update value
      onUpdate(valueNew);
    }
    else {
      valueNew = [];

      // Update value
      onUpdate(valueNew as any);

      // Update input
      setInput(valueToInput(valueNew));
    }
  }, [input]);

  const onToday = React.useCallback((event: React.MouseEvent) => {
    const valueNew = [new AmauiDate()];

    if (range) valueNew.push(new AmauiDate());

    // Update value
    onUpdate(valueNew as any);

    // Update input
    setInput(valueToInput(valueNew));

    onClose(event);

    if (is('function', onToday_)) onToday_(event);
  }, [input, range, onToday_]);

  const onClear = React.useCallback((event: React.MouseEvent) => {
    const valueNew = [];

    // Update value
    onUpdate(valueNew as any);

    // Update input
    setInput(valueToInput(valueNew));

    onClose(event);

    if (is('function', onClear_)) onClear_(event);
  }, [onClear_]);

  const onOk = React.useCallback((event: React.MouseEvent) => {
    // Error
    errorCheck();

    // Update value
    onUpdate(value as any);

    // Update input
    setInput(valueToInput(value));

    onClose(event);

    if (is('function', onOk_)) onOk_(event);
  }, [value, onOk_]);

  const onCancel = React.useCallback((event: React.MouseEvent) => {
    onReset();

    onClose(event);

    if (is('function', onCancel_)) onCancel_(event);
  }, [input, onCancel_]);

  const onOpen = React.useCallback(() => {
    setOpen(previous => !previous);
  }, [open, version]);

  const onClose = React.useCallback((event: React.MouseEvent<any>) => {
    setOpen(false);

    if (is('function', onClose_)) onClose_(event);
  }, [onClose_]);

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

  const mask = [
    { pattern: '[0-3]' },

    (item: string, result: string, valueInput: string) => /^(0[0-9]|1[0-9]|2[0-9]|3[0-1]).*/.test(valueInput),

    '/',

    { pattern: '[0-1]' },

    (item: string, result: string, valueInput: string) => /^(0[0-9]|1[0-9]|2[0-9]|3[0-1])\/(0[0-9]|1[0-2]).*/.test(valueInput),

    '/',

    { pattern: '[1-2]' },

    { pattern: '[0-9]' },

    { pattern: '[0-9]' },

    { pattern: '[0-9]' },

    ' '
  ];

  let placeholder = `DD/MM/YYYY `;

  if (hour) {
    if (format === '12') {
      mask.push(
        { pattern: '[0-1]' },

        (item: string, result: string, valueInput: string) => /^[^ ]+ ([0][0-9]|1[0-2]).*/.test(valueInput)
      );
    }

    if (format === '24') {
      mask.push(
        { pattern: '[0-2]' },

        (item: string, result: string, valueInput: string) => /^[^ ]+ ([01][0-9]|2[0-3]).*/.test(valueInput),
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
      ' '
    );

    // Date
    mask.push(
      { pattern: '[0-3]' },

      (item: string, result: string, valueInput: string) => /^[^–]+– (0[0-9]|1[0-9]|2[0-9]|3[0-1]).*/.test(valueInput),

      '/',

      { pattern: '[0-1]' },

      (item: string, result: string, valueInput: string) => /^[^–]+– (0[0-9]|1[0-9]|2[0-9]|3[0-1])\/(0[0-9]|1[0-2]).*/.test(valueInput),

      '/',

      { pattern: '[1-2]' },

      { pattern: '[0-9]' },

      { pattern: '[0-9]' },

      { pattern: '[0-9]' },

      ' '
    );

    // Time
    if (hour) {
      if (format === '12') {
        mask.push(
          { pattern: '[0-1]' },

          (item: string, result: string, valueInput: string) => /^[^–]+– (0[0-9]|1[0-9]|2[0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[1-2][0-9][0-9][0-9] ([0][0-9]|1[0-2]).*/.test(valueInput)
        );
      }

      if (format === '24') {
        mask.push(
          { pattern: '[0-2]' },

          (item: string, result: string, valueInput: string) => /^[^–]+– (0[0-9]|1[0-9]|2[0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[1-2][0-9][0-9][0-9] ([01][0-9]|2[0-3]).*/.test(valueInput),
        );
      }

      if (minute || second) {
        mask.push(':');
      }
    }

    if (minute) {
      mask.push(
        { pattern: '[0-5]' },

        { pattern: '[0-9]' }
      );

      if (second) {
        mask.push(':');
      }
    }

    if (second) {
      mask.push(
        { pattern: '[0-5]' },

        { pattern: '[0-9]' }
      );
    }

    if (format === '12') {
      mask.push(
        ' ',

        { pattern: '[ap]' },

        'm'
      );
    }

    if (second) {
      mask.push(
        { pattern: '[0-5]' },

        { pattern: '[0-9]' }
      );
    }

    if (format === '12') {
      mask.push(
        ' ',

        { pattern: '[ap]' },

        'm'
      );
    }

    placeholder += `${SEPARATOR}${placeholder}`;
  }

  placeholder = placeholder_ || placeholder;

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

  const actions = (
    <Line
      direction='row'

      wrap='wrap'

      align='center'

      justify='space-between'

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-footer'
        ],

        classes.footer
      ])}
    >
      <Line
        gap={0}

        direction='row'

        align='center'
      >
        <Tooltip
          label={tab === 'date' ? 'Time' : 'Date'}
        >
          <IconButton
            tonal={tonal}

            color='inherit'

            onClick={onPickSwitch}

            aria-label={tab === 'date' ? 'Time' : 'Date'}

            {...iconButtonProps}
          >
            {tab === 'date' ? <IconTime /> : <IconDate />}
          </IconButton>
        </Tooltip>

        {today && (
          <Button
            onClick={onToday}

            {...buttonProps}
          >
            Today
          </Button>
        )}

        {clear && (
          <Button
            onClick={onClear}

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

          onClick={onCancel}

          {...buttonProps}
        >
          Cancel
        </Button>

        <Button
          tonal={tonal}

          color={color}

          version='text'

          onClick={onOk}

          {...buttonProps}
        >
          Ok
        </Button>
      </Line>
    </Line>
  );

  const heading = (range ? (tab === 'date' ? headingTextDateRange : headingTextTimeRange) : (tab === 'date' ? headingTextDate : headingTextTime)) || headingText;

  const PickerProps: any = {
    tonal,
    color,

    value,
    onChange: onPickerChange,

    now,
    static: true,
    range,
    valid,
    min,
    max,
    validate,
    actions: false,
    heading: false,
    readOnly,
    disabled,

    ...PickerProps_,

    ...(tab === 'date' && DatePickerProps),

    ...(tab === 'time' && TimePickerProps),
  };

  const element = (
    <Surface
      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      align='center'

      Component={Line}

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-main'
        ],

        MainProps?.className,
        classes.main
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
        {heading}
      </Type>

      {/* Middle */}
      <Line
        gap={0}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-middle'
          ],

          MiddleProps?.className,
          classes.middle
        ])}
      >
        {tab === 'date' ? (
          <DatePicker
            calendar={calendar}

            onChangeCalendar={onChangeCalendar}

            size={size}

            {...PickerProps}
          />
        ) : (
          <TimePicker
            format={format}

            hour={hour}

            minute={minute}

            second={second}

            size={size}

            {...PickerProps}
          />
        )}
      </Line>

      {/* Actions */}
      {actions}
    </Surface>
  );

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        tonal={tonal}

        color={color}

        version='text'

        onClick={onOpen}

        aria-label='Choose date and time'

        disabled={disabled || readOnly}

        {...iconButtonProps}
      >
        <Icon_ />
      </IconButton>
    );
  }

  if (version === 'mobile') {
    if (!(readOnly || disabled)) moreProps.onClick = onOpen;
  }

  if (static_) return element;

  return (
    <Line
      gap={0}

      direction='column'

      className={classNames([
        staticClassName('DateTimePicker', theme) && [
          'amaui-DateTimePicker-root',
          range && `amaui-DateTimePicker-range`,
          readOnly && `amaui-DateTimePicker-read-only`,
          disabled && `amaui-DateTimePicker-disabled`
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

        value={input}

        onChange={onInputChange}

        helperText={useHelperText ? placeholder : undefined}

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

              includeParentQueries={['.amaui-TimePicker-main', '.amaui-Calendar-list']}
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

DateTimePicker.displayName = 'amaui-DateTimePicker';

export default DateTimePicker;
