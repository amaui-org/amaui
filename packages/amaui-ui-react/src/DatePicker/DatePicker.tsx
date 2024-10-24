import React from 'react';

import { is } from '@amaui/utils';
import { AmauiDate, endOf, format, is as isAmauiDate, startOf } from '@amaui/date';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconElement from '../Icon';
import IconButtonElement from '../IconButton';
import ButtonElement from '../Button';
import AdvancedTextFieldElement from '../AdvancedTextField';
import ModalElement from '../Modal';
import TooltipElement from '../Tooltip';
import SurfaceElement from '../Surface';
import LineElement from '../Line';
import TypeElement from '../Type';
import CalendarElement from '../Calendar';
import DividerElement from '../Divider';
import SlideElement from '../Slide';
import ClickListenerElement from '../ClickListener';
import useMediaQuery from '../useMediaQuery';
import { ILine } from '../Line/Line';
import { TCalendarUnit } from '../Calendar/Calendar';
import { TCalendarMonthCalendar, TCalendarMonthValue } from '../CalendarMonth/CalendarMonth';
import { valueBreakpoints, staticClassName } from '../utils';
import { ITonal, IColor, ISize, IValueBreakpoints, IElement, IElementReference, IPropsAny } from '../types';

const IconMaterialCalendarTodayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='CalendarTodayRoundedFilled'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2.975Q6 2.55 6.287 2.275Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V2.975Q16 2.55 16.288 2.275Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20Z" />
    </IconElement>
  );
});

const IconMaterialEditRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='EditRounded'
      short_name='Edit'

      {...props}
    >
      <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6ZM19.3 8.925 15.05 4.725 16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.725Q21.25 5.3 21.275 6.113Q21.3 6.925 20.725 7.5ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V17.175Q3 16.975 3.075 16.788Q3.15 16.6 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7Q7.4 20.85 7.213 20.925Q7.025 21 6.825 21ZM14.325 9.675 13.625 8.975 15.025 10.375Z" />
    </IconElement>
  );
});

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

const useStyle = styleMethod(theme => ({
  root: {

  },

  header: {
    width: '100%',
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(3, 'px')} 0px`,
    flex: '0 0 auto'
  },

  header_fullScreen: {
    padding: `${theme.methods.space.value(2, 'px')} 0px 0px`
  },

  actions: {
    width: '100%',
    padding: `0px ${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1.5, 'px')}`,
    flex: '0 0 auto',
    overflowX: 'auto'
  },

  mode: {
    overflow: 'hidden'
  },

  calendar_mobile: {
    '&.amaui-Calendar-root': {
      width: '100%'
    },

    '& .amaui-Calendar-header + .amaui-Divider-root': {
      display: 'none'
    }
  },

  input_mobile: {
    '&.amaui-TextField-root': {
      width: '100%'
    }
  },

  mobile: {
    width: 'calc(100vw - 48px)',
    maxWidth: '330px',
    margin: '0 auto',
    borderRadius: theme.methods.shape.radius.value(3.5, 'px'),
    overflow: 'hidden',

    '& .amaui-Calendar-root': {
      borderRadius: '0'
    }
  },

  mobile_fullScreen: {
    height: '100vh',
    width: '100vw',
    margin: '0',
    maxWidth: 'unset',
    borderRadius: '0'
  },

  modal_input: {
    width: '100%',
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(2, 'px')}`,
    marginBottom: '12px',
    flex: '1 1 auto'
  },

  dayNames: {
    width: '100%',
    padding: `0 ${theme.methods.space.value(1, 'px')}`
  },

  dayName: {
    width: '40px',
    height: '40px',
    flex: '1 1 auto',
    userSelect: 'none'
  },

  heading: {
    width: '100%',
    marginBottom: '12px'
  },

  heading_fullScreen: {
    paddingInline: `${theme.methods.space.value(7.5, 'px')} ${theme.methods.space.value(1.5, 'px')}`
  },

  subheading: {
    width: '100%',
    marginBottom: '36px'
  },

  subheading_fullScreen: {
    margin: '8px 0',
    marginInlineStart: '60px'
  },

  divider: {
    '&.amaui-Divider-root': {
      margin: '0'
    }
  }
}), { name: 'amaui-DatePicker' });

export const SEPARATOR_SYMBOL = `–`;

export const SEPARATOR = ` ${SEPARATOR_SYMBOL} `;

export interface IDatePicker extends ILine {
  tonal?: ITonal;
  color?: IColor;

  version?: 'auto' | 'mobile' | 'desktop';

  size?: ISize;

  value?: TCalendarMonthValue;
  valueDefault?: TCalendarMonthValue;
  onChange?: (value: TCalendarMonthValue) => any;

  calendar?: TCalendarMonthCalendar;
  calendarDefault?: TCalendarMonthCalendar;
  onChangeCalendar?: (value: TCalendarMonthCalendar) => any;

  now?: boolean;
  range?: boolean;
  static?: boolean;
  valid?: (value: AmauiDate, version: TCalendarUnit) => boolean;
  validate?: (value: AmauiDate) => boolean;
  min?: AmauiDate;
  max?: AmauiDate;
  calendars?: number;
  placeholder?: string;
  openMobile?: 'input' | 'select';
  modeModalSubHeadingText?: string;
  modeModalSubHeadingTextRange?: string;
  selectModeHeadingText?: string;
  inputModeHeadingText?: string;
  switch?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  useHelperText?: boolean | Partial<Record<IValueBreakpoints, boolean>>;
  name?: IElement;
  nameFrom?: string;
  nameTo?: string;
  label?: IElement;
  labelFrom?: string;
  labelTo?: string;
  today?: boolean;
  clear?: boolean;
  fullScreen?: boolean;
  heading?: boolean;
  actions?: boolean;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<any>) => any;
  onClose?: (event: React.MouseEvent<any>) => any;
  onCancel?: (event: React.MouseEvent<any>) => any;
  onToday?: (event: React.MouseEvent<any>) => any;
  onClear?: (event: React.MouseEvent<any>) => any;
  onOk?: (event: React.MouseEvent<any>) => any;

  Icon?: IElementReference;
  IconCheck?: IElementReference;
  IconEnter?: IElementReference;
  IconClose?: IElementReference;

  WrapperProps?: IPropsAny;
  CalendarProps?: IPropsAny;
  CalendarPropsDesktop?: IPropsAny;
  CalendarPropsMobile?: IPropsAny;
  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  AdvancedTextFieldProps?: IPropsAny;
  ButtonProps?: IPropsAny;
  ModalProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const DatePicker: React.FC<IDatePicker> = React.forwardRef((props__, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiDatePicker?.props?.default, ...props__ }), [props__]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const AdvancedTextField = React.useMemo(() => theme?.elements?.AdvancedTextField || AdvancedTextFieldElement, [theme]);

  const Modal = React.useMemo(() => theme?.elements?.Modal || ModalElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Calendar = React.useMemo(() => theme?.elements?.Calendar || CalendarElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const Slide = React.useMemo(() => theme?.elements?.Slide || SlideElement, [theme]);

  const ClickListener = React.useMemo(() => theme?.elements?.ClickListener || ClickListenerElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    version: version_ = 'auto',

    size = 'regular',

    value: value_,
    valueDefault,
    onChange,

    calendar: calendar_,
    calendarDefault,
    onChangeCalendar,

    range,
    now,
    static: static_,
    openMobile = 'select',
    placeholder: placeholder_,
    calendars = props.range ? 2 : 1,
    min,
    max,
    validate,
    name,
    nameFrom,
    nameTo,
    label: label_,
    labelFrom: labelFrom_ = `Date from`,
    labelTo: labelTo_ = `Date to`,
    modeModalSubHeadingText = 'Select date',
    modeModalSubHeadingTextRange = `Date from${SEPARATOR}Date to`,
    selectModeHeadingText = 'Select date',
    inputModeHeadingText = 'Enter date',
    useHelperText: useHelperText_,
    weekStartDay = 'Monday',
    switch: switch__,
    fullScreen,
    today,
    clear = true,
    heading: heading_ = true,
    actions: actions_ = true,
    fullWidth,
    readOnly,
    disabled,

    valid: valid_,

    onClick: onClick_,
    onClose: onClose_,
    onToday: onToday_,
    onClear: onClear_,
    onCancel: onCancel_,
    onOk: onOk_,

    Icon: Icon_ = IconMaterialCalendarTodayRoundedFilled,
    IconEnter = IconMaterialEditRounded,
    IconClose = IconMaterialCloseRounded,

    WrapperProps,
    CalendarProps,
    CalendarPropsDesktop,
    CalendarPropsMobile,
    IconButtonProps,
    AdvancedTextFieldProps,
    TooltipProps,
    ButtonProps,
    ModalProps,
    IconProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>()
  };

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const label = name !== undefined ? name : label_;

  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const useHelperText = valueBreakpoints(useHelperText_, undefined, breakpoints, theme);

  const touch = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  const [value, setValue] = React.useState<[AmauiDate, AmauiDate]>((): [AmauiDate, AmauiDate] => {
    const valueResult = (valueDefault !== undefined ? valueDefault : value_) || (now && (range ? [new AmauiDate(), new AmauiDate()] : [new AmauiDate()]));

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<AmauiDate>).filter(Boolean) as any;
  });
  const [calendar, setCalendar] = React.useState((calendarDefault !== undefined ? calendarDefault : calendar_) || new AmauiDate());
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState((touch ? openMobile : 'select') || 'select');
  const [error, setError] = React.useState(false);

  const valueToInput = React.useCallback((valueNew: any = value) => {
    let result = '';

    const [from, to] = is('array', valueNew) ? valueNew : [valueNew];

    if (!(from || to)) return '';

    const method = (item: AmauiDate) => `${format(item, 'DD')}/${format(item, 'MM')}/${format(item, 'YYYY')}`;

    result += `${method(from)}`;

    if (range && to) result += `${SEPARATOR}${method(to)}`;

    return result;
  }, [value, range]);

  const [input, setInput] = React.useState(valueToInput());
  const [inputModal, setInputModal] = React.useState(valueToInput());

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  const onUpdateValue = (valueNew_: any) => {
    const valueNew = is('array', valueNew_) ? valueNew_ : [valueNew_];

    const dateNow = new AmauiDate();

    // Update value
    setValue(valueNew as any);

    // Update calendar
    onUpdateCalendar(valueNew[0] || dateNow);

    // Update input
    setInput(valueToInput(valueNew));

    // Update input modal
    setInputModal(valueToInput(valueNew));
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

  // Calendar
  React.useEffect(() => {
    if (calendar_ !== undefined && calendar_ !== calendar) setCalendar(calendar_);
  }, [calendar_]);

  const onUpdate = React.useCallback((valueNew: AmauiDate) => {
    // Inner update
    if (!props.hasOwnProperty('value')) setValue(valueNew as any);

    if (is('function', onChange)) onChange(!range ? valueNew[0] : valueNew);
  }, [onChange, range]);

  const onUpdateCalendar = React.useCallback((valueNew: AmauiDate) => {
    // Inner update
    if (!props.hasOwnProperty('calendar')) setCalendar(valueNew);

    if (is('function', onChangeCalendar)) onChangeCalendar(valueNew);
  }, [onChangeCalendar]);

  // Update only internally, without using onChange
  // since it might be canceled
  // only use onChange on
  // input change, or ok
  const onCalendarChange = React.useCallback((valueNew_: TCalendarMonthValue) => {
    const valueNew = is('array', valueNew_) ? valueNew_ : [valueNew_];

    if (valueNew !== value) {
      (!actions_ ? onUpdate : setValue)(valueNew as any);

      // Update input modal
      setInputModal(valueToInput(valueNew));
    }
  }, [value, actions_]);

  const onCalendarChangeCalendar = React.useCallback((valueNew: TCalendarMonthCalendar) => {
    if (valueNew !== calendar) onUpdateCalendar(valueNew as any);
  }, [calendar]);

  const inputToValue = React.useCallback((valueNew_: string = input) => {
    let valueNew = valueNew_;

    let [from, to] = valueNew.split(SEPARATOR) as any;

    from = textToAmauiDate(from);

    if (to) to = textToAmauiDate(to, false);

    valueNew = [from, to].filter(Boolean) as any;

    return valueNew as unknown as TCalendarMonthValue;
  }, [input]);

  const onOpen = React.useCallback(() => {
    onMode();

    setOpen(!open);
  }, [open, openMobile, version]);

  const onClose = React.useCallback((event: React.MouseEvent<any>) => {
    setOpen(false);

    if (is('function', onClose_)) onClose_(event);
  }, [onClose_]);

  const onReset = React.useCallback(() => {
    let valueNew: any = inputToValue();

    const isValid = valueNew && (valueNew?.[0] as AmauiDate)?.valid;

    if (isValid) {
      // Update value
      onUpdate(valueNew);

      // Update calendar
      onUpdateCalendar(valueNew[0]);

      // Update input modal
      setInputModal(input);
    }
    else {
      const dateNow = new AmauiDate();

      valueNew = [];

      // Update value
      onUpdate(valueNew as any);

      // Update calendar
      onUpdateCalendar(dateNow);

      // Update input
      setInput(valueToInput(valueNew));

      // Update input modal
      setInputModal(valueToInput(valueNew));
    }
  }, [input]);

  const onToday = React.useCallback((event: React.MouseEvent) => {
    const valueNew = [startOf(new AmauiDate(), 'day')];

    if (range) valueNew.push(endOf(new AmauiDate(), 'day'));

    // Update value
    onUpdate(valueNew as any);

    // Update calendar
    onUpdateCalendar(valueNew[0]);

    // Update input
    setInput(valueToInput(valueNew));

    // Update input modal
    setInputModal(valueToInput(valueNew));

    onClose(event);

    if (is('function', onToday_)) onToday_(event);
  }, [input, range, onToday_]);

  const onClear = React.useCallback((event: React.MouseEvent) => {
    const dateNow = new AmauiDate();

    const valueNew = [];

    // Update value
    onUpdate(valueNew as any);

    // Update calendar
    onUpdateCalendar(dateNow);

    // Update input
    setInput(valueToInput(valueNew));

    // Update input modal
    setInputModal(valueToInput(valueNew));

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

    // Update input modal
    setInputModal(valueToInput(value));

    onClose(event);

    if (is('function', onOk_)) onOk_(event);
  }, [value, onOk_]);

  const onCancel = React.useCallback((event: React.MouseEvent) => {
    onReset();

    onClose(event);

    if (is('function', onCancel_)) onCancel_(event);
  }, [input, onCancel_]);

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

  const textToAmauiDate = React.useCallback((valueNew: string, start = true) => {
    const [valueDay, valueMonth, valueYear] = (valueNew || '').split('/');

    const amauiDate = new AmauiDate(new Date(`${valueMonth}/${valueDay}/${valueYear}`));

    return start ? startOf(amauiDate, 'day') : endOf(amauiDate, 'day');
  }, []);

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
      onUpdateCalendar(valueNew[0]);
    }

    if (!valueNew_) {
      onUpdate([null, null] as any);
    }

    // Update input for free typing
    setInput(valueNew_);
  }, []);

  const onInputChangeModal = React.useCallback((valueNew_: any) => {
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
      onUpdateCalendar(valueNew[0]);
    }

    // Update input for free typing
    setInputModal(valueNew_);
  }, []);

  const onMode = React.useCallback((mode_: 'input' | 'select' = openMobile) => {
    setMode(() => mode_);
  }, []);

  const mask = [
    { pattern: '[0-3]' },

    (item: string, result: string, valueInput: string) => /^(0[0-9]|1[0-9]|2[0-9]|3[0-1]).*/.test(valueInput),

    '/',

    { pattern: '[0-1]' },

    (item: string, result: string, valueInput: string) => /^(0[0-9]|1[0-9]|2[0-9]|3[0-1])\/(0[0-9]|1[0-2])/.test(valueInput),

    '/',

    { pattern: '[1-2]' },

    { pattern: '[0-9]' },

    { pattern: '[0-9]' },

    { pattern: '[0-9]' }
  ];

  let placeholder = `DD/MM/YYYY`;

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

      align='center'

      justify='space-between'

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'amaui-DatePicker-actions'
        ],

        classes.actions
      ])}
    >
      {(today || clear) && (
        <Line
          gap={0}

          direction='row'

          align='center'
        >
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
      )}

      <Line
        gap={0}

        direction='row'

        align='center'
      >
        <Button
          onClick={onCancel}

          {...buttonProps}
        >
          Cancel
        </Button>

        <Button
          onClick={onOk}

          {...buttonProps}
        >
          Ok
        </Button>
      </Line>
    </Line>
  );

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        tonal={tonal}

        color={color}

        version='text'

        onClick={onOpen}

        aria-label={`Choose date${range ? ' range' : ''}`}

        disabled={disabled || readOnly}

        {...iconButtonProps}
      >
        <Icon_
          {...IconProps}
        />
      </IconButton>
    );
  }

  if (version === 'mobile') {
    if (!(readOnly || disabled)) moreProps.onClick = onOpen;
  }

  let textHeading = `${format(value[0], 'd')}, ${format(value[0], 'MMM')} ${format(value[0], 'DD')}`;

  if (range) {
    textHeading = `${format(value[0], 'MMM')} ${format(value[0], 'DD')}${SEPARATOR}${format(value[1], 'MMM')} ${format(value[1], 'DD')}`;
  }

  const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const mobile = (
    <Surface
      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      Component={Line}

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'amaui-DatePicker-mobile'
        ],

        classes.mobile,
        fullScreen && classes.mobile_fullScreen
      ])}
    >
      {/* Header */}
      <Line
        gap={0}

        direction='column'

        className={classNames([
          staticClassName('DatePicker', theme) && [
            'amaui-DatePicker-header'
          ],

          classes.header,
          fullScreen && classes.header_fullScreen
        ])}
      >
        {/* Upper actions */}
        {actions_ && fullScreen && (
          <Line
            gap={0}

            direction='row'

            align='center'

            justify='space-between'

            style={{
              width: '100%',
              marginBottom: 8,
              padding: `0px ${theme.methods.space.value(1, 'px')} 0px ${theme.methods.space.value(1.5, 'px')}`
            }}
          >
            <IconButton
              color='inherit'

              version='text'

              onClick={onClose}

              aria-label='Close'

              {...iconButtonProps}
            >
              <IconClose
                {...IconProps}
              />
            </IconButton>

            <Button
              onClick={onOk}

              {...buttonProps}
            >
              Save
            </Button>
          </Line>
        )}

        {/* Heading */}
        {heading_ && (
          <Type
            version='l2'

            className={classNames([
              staticClassName('DatePicker', theme) && [
                'amaui-DatePicker-subheading'
              ],

              classes.subheading,
              fullScreen && classes.subheading_fullScreen
            ])}
          >
            {!range ? modeModalSubHeadingText : modeModalSubHeadingTextRange}
          </Type>
        )}

        {/* Select */}
        {mode === 'select' && (
          <Line
            direction='row'

            align='center'

            justify='space-between'

            className={classNames([
              staticClassName('DatePicker', theme) && [
                'amaui-DatePicker-heading'
              ],

              classes.heading,
              fullScreen && classes.heading_fullScreen
            ])}
          >
            <Type
              version='h1'
            >
              {textHeading}
            </Type>

            {switch_ && (
              <Tooltip
                label='Enter date'
              >
                <IconButton
                  tonal={tonal}

                  color='inherit'

                  onClick={() => onMode('input')}

                  aria-label='Enter date'

                  {...iconButtonProps}
                >
                  <IconEnter
                    {...IconProps}
                  />
                </IconButton>
              </Tooltip>
            )}
          </Line>
        )}

        {/* Input */}
        {mode === 'input' && (
          <Line
            direction='row'

            align='flex-start'

            justify='space-between'

            className={classNames([
              staticClassName('DatePicker', theme) && [
                'amaui-DatePicker-heading'
              ],

              classes.heading,
              fullScreen && classes.heading_fullScreen
            ])}
          >
            <Type
              version='h1'
            >
              {inputModeHeadingText}
            </Type>

            {switch_ && (
              <Tooltip
                label='Select date'
              >
                <IconButton
                  tonal={tonal}

                  color='inherit'

                  onClick={() => onMode('select')}

                  aria-label='Choose date'

                  {...iconButtonProps}
                >
                  <Icon_
                    {...IconProps}
                  />
                </IconButton>
              </Tooltip>
            )}
          </Line>
        )}
      </Line>

      {/* Day names */}
      {mode === 'select' && fullScreen && (
        <Line
          gap={0}

          direction='row'

          align='center'

          justify='space-between'

          className={classNames([
            staticClassName('DatePicker', theme) && [
              'amaui-DatePicker-day-names'
            ],

            classes.dayNames
          ])}
        >
          {dayNames.map((day: string, index: number) => (
            <Line
              key={index}

              version='b3'

              direction='row'

              align='center'

              justify='center'

              Component={Type}

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'amaui-DatePicker-day-name'
                ],

                classes.dayName
              ])}
            >
              {day}
            </Line>
          ))}
        </Line>
      )}

      {/* Divider */}
      <Divider
        tonal={false}

        className={classNames([
          staticClassName('DatePicker', theme) && [
            'amaui-DatePicker-divider'
          ],

          classes.divider
        ])}
      />

      {/* Calendar */}
      {mode === 'select' && (
        <Calendar
          version={!fullScreen ? 'regular' : 'year'}

          tonal={tonal}

          color={color}

          value={value}

          menu='month'

          menu_month_previous_unit={fullScreen ? 'year' : 'month'}

          menu_month_next_unit={fullScreen ? 'year' : 'month'}

          calendar={calendar}

          onChange={onCalendarChange}

          onChangeCalendar={onCalendarChangeCalendar}

          now={now}

          size={size}

          range={range}

          calendars={1}

          valid={valid}

          min={min}

          max={max}

          validate={validate}

          CalendarMonthProps={{
            outside: false,
            labels: !fullScreen
          }}

          {...CalendarProps}

          {...CalendarPropsMobile}

          className={classNames([
            staticClassName('DatePicker', theme) && [
              'amaui-DatePicker-calendar',
              'amaui-DatePicker-version-mobile'
            ],

            CalendarProps?.className,
            CalendarPropsMobile?.className,
            classes.calendar,
            classes.calendar_mobile
          ])}
        />
      )}

      {/* Input */}
      {mode === 'input' && (
        <Line
          gap={1.5}

          direction='row'

          align='flex-start'

          className={classNames([
            classes.modal_input
          ])}
        >
          <AdvancedTextField
            tonal={tonal}

            color={color}

            version='outlined'

            size={size}

            label={label}

            mask={mask}

            placeholder={placeholder}

            value={inputModal}

            onChange={onInputChangeModal}

            helperText={useHelperText ? placeholder : undefined}

            error={error}

            readOnly={readOnly}

            disabled={disabled}

            {...AdvancedTextFieldProps}

            className={classNames([
              AdvancedTextFieldProps?.className,
              classes.input_mobile
            ])}
          />
        </Line>
      )}

      {fullScreen && (
        <Divider
          tonal={false}

          className={classNames([
            staticClassName('DatePicker', theme) && [
              'amaui-DatePicker-divider'
            ],

            classes.divider
          ])}
        />
      )}

      {actions_ && React.cloneElement(actions, {
        style: {
          paddingTop: theme.methods.space.value(1, 'px')
        }
      })}
    </Surface>
  );

  const desktop = (
    <Calendar
      tonal={tonal}

      color={color}

      value={value}

      calendar={calendar}

      onChange={onCalendarChange}

      onChangeCalendar={onCalendarChangeCalendar}

      now={now}

      size={size}

      range={range}

      calendars={calendars}

      valid={valid}

      min={min}

      max={max}

      validate={validate}

      belowCalendars={actions_ ? actions : undefined}

      {...CalendarProps}

      {...CalendarPropsDesktop}

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'amaui-DatePicker-calendar',
          'amaui-DatePicker-version-desktop'
        ],

        CalendarProps?.className,
        CalendarPropsDesktop?.className,
        classes.calendar,
        classes.calendar_desktop
      ])}
    />
  );

  if (static_) {
    if (version === 'mobile') return mobile;

    if (version === 'desktop') return desktop;
  }

  return (
    <Line
      gap={0}

      direction='column'

      fullWidth={fullWidth}

      {...WrapperProps}

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'amaui-DatePicker-root',
          `amaui-DatePicker-version-${version}`,
          `amaui-DatePicker-size-${size}`,
          WrapperProps?.className,
          range && `amaui-DatePicker-range`,
          readOnly && `amaui-DatePicker-read-only`,
          disabled && `amaui-DatePicker-disabled`,
          fullWidth && 'amaui-full-width'
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

        helperText={useHelperText ? placeholder : undefined}

        endVerticalAlign='center'

        error={error}

        fullWidth={fullWidth}

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

          fullScreen={fullScreen}

          onClose={onClose}

          {...ModalProps}
        >
          {mobile}
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

              includeParentQueries={['.amaui-Calendar-list']}
            >
              {desktop}
            </ClickListener>
          )}

          {...TooltipProps}
        />
      )}
    </Line>
  );
});

DatePicker.displayName = 'amaui-DatePicker';

export default DatePicker;
