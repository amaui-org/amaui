import React from 'react';

import { is, getLeadingZerosNumber, arrayToParts } from '@amaui/utils'
import { AmauiDate, format as formatMethod, set, is as isMethod, startOf, endOf, remove, add, TTimeUnits } from '@amaui/date';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import Button from '../Button';
import AdvancedTextField from '../AdvancedTextField';
import useMediaQuery from '../useMediaQuery';
import Modal from '../Modal';
import ClickListener from '../ClickListener';
import Tooltip from '../Tooltip';
import Surface from '../Surface';
import Transition, { TTransitionStatus } from '../Transition';
import Transitions from '../Transitions';
import Fade from '../Fade';
import Line from '../Line';
import Type from '../Type';
import PaginationItem from '../PaginationItem';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  mode_docked: {
    borderRadius: '28px',
    minWidth: '320px'
  },

  mode_docked_header: {
    width: '100%',
    padding: '12px 8px 4px'
  },

  mode_docked_header_button: {
    '&.AmauiButton-root': {
      paddingInline: '8px 0px'
    },

    '& .AmauiButton-end': {
      paddingInline: '8px 0px'
    }
  },

  mode_docked_footer: {
    width: '100%',
    padding: '8px 12px 12px'
  },

  calendar_wrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '280px',
    height: '280px',
    flex: '1 1 auto'
  },

  calendar_transition: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },

  calendar: {

  },

  dayNames: {
    width: '100%'
  },

  dayName: {
    width: '40px',
    height: '40px',
    userSelect: 'none'
  },

  day: {
    width: '40px',
    height: '40px'
  },

  day_out: {
    opacity: '0.4'
  },

  weeks: {
    position: 'absolute',
    top: '40px',
    left: '0px',
    width: '100%',
    transition: theme.methods.transitions.make(['opacity', 'transform'])
  },

  move_previous: {
    '& .weeks_enter': {
      opacity: '0',
      transform: 'translateX(-100%)',
    },

    '& .weeks_entering': {
      opacity: '1',
      transform: 'translateX(0%)'
    },

    '& .weeks_exit': {
      opacity: '1',
      transform: 'translateX(0%)',
    },

    '& .weeks_exiting': {
      opacity: '0',
      transform: 'translateX(100%)'
    }
  },

  move_next: {
    '& .weeks_enter': {
      opacity: '0',
      transform: 'translateX(100%)',
    },

    '& .weeks_entering': {
      opacity: '1',
      transform: 'translateX(0%)'
    },

    '& .weeks_exit': {
      opacity: '1',
      transform: 'translateX(0%)',
    },

    '& .weeks_exiting': {
      opacity: '0',
      transform: 'translateX(-100%)'
    }
  },

  arrow: {
    transition: theme.methods.transitions.make('transform')
  },

  arrow_open: {
    transform: 'rotate(-180deg)'
  }
}), { name: 'AmauiDatePicker' });

const IconMaterialCalendarTodayRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayRounded'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2.975Q6 2.55 6.287 2.275Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V2.975Q16 2.55 16.288 2.275Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20ZM5 8H19V6Q19 6 19 6Q19 6 19 6H5Q5 6 5 6Q5 6 5 6ZM5 8V6Q5 6 5 6Q5 6 5 6Q5 6 5 6Q5 6 5 6V8Z" />
    </Icon>
  );
});

const IconMaterialNavigateBeforeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeRounded'
      short_name='NavigateBefore'

      {...props}
    >
      <path d="M13.3 17.3 8.7 12.7Q8.55 12.55 8.488 12.375Q8.425 12.2 8.425 12Q8.425 11.8 8.488 11.625Q8.55 11.45 8.7 11.3L13.3 6.7Q13.575 6.425 14 6.425Q14.425 6.425 14.7 6.7Q14.975 6.975 14.975 7.4Q14.975 7.825 14.7 8.1L10.8 12L14.7 15.9Q14.975 16.175 14.975 16.6Q14.975 17.025 14.7 17.3Q14.425 17.575 14 17.575Q13.575 17.575 13.3 17.3Z" />
    </Icon>
  );
});

const IconMaterialNavigateNextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextRounded'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
    </Icon>
  );
});

const IconMaterialArrowDropDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownRounded'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M11.3 14.3 8.7 11.7Q8.225 11.225 8.488 10.613Q8.75 10 9.425 10H14.575Q15.25 10 15.512 10.613Q15.775 11.225 15.3 11.7L12.7 14.3Q12.55 14.45 12.375 14.525Q12.2 14.6 12 14.6Q11.8 14.6 11.625 14.525Q11.45 14.45 11.3 14.3Z" />
    </Icon>
  );
});

// to do

// menus for month

// menu for year

// method for returning array of years

// method for returning array of months

// day atm with filled version for pagination item

// min, max, validate
// arrows disable for docked, modal

const CalendarDays = React.forwardRef((props: any, ref: any) => {
  const theme = useAmauiTheme();

  const { classes } = useStyle(props);

  const {
    color,

    tonal,

    outside = true,

    value,

    values,

    weekStartDay,

    className,

    ...other
  } = props;

  const dayNames = ['M', 'T', 'W', 'T', 'F', 'S'];

  if (weekStartDay === 'Monday') dayNames.push('S');
  else dayNames.unshift('S');

  const days = [];

  const monthNow = new AmauiDate();

  const month: AmauiDate = values?.date || value;

  const id = month.year + month.month + month.day;

  const monthStart = startOf(month, 'month');

  const previousMonth = remove(1, 'month', month);

  const previousMonthEnd = endOf(previousMonth, 'month');

  const nextMonth = add(1, 'month', month);

  // Add all month days
  for (let i = 0; i < month.daysInMonth; i++) {
    const day = set(i + 1, 'day', month);

    days.push({
      value: i + 1,

      in: true,

      dayWeek: day.dayWeek,

      weekend: [0, 6].includes(day.dayWeek),

      today: day.year === monthNow.year && day.dayYear === monthNow.dayYear
    });
  }

  // Add to start
  if (monthStart.dayWeek > 1) {
    for (let i = 0; i < monthStart.dayWeek - 1; i++) {
      const day = set(previousMonthEnd.day - i, 'day', previousMonth);

      days.unshift({
        value: day.day,

        in: false,

        dayWeek: day.dayWeek,

        weekend: [0, 6].includes(day.dayWeek),

        today: day.year === monthNow.year && day.dayYear === monthNow.dayYear
      });
    }
  }

  // Add to end
  const dayLast = days[days.length - 1];

  if (dayLast.dayWeek < 7) {
    let toAdd = 7 - dayLast.dayWeek;

    if (days.length + toAdd - 1 < 42) toAdd += 41 - (days.length + toAdd - 1);

    for (let i = 0; i < toAdd; i++) {
      const day = set(i + 1, 'day', nextMonth);

      days.push({
        value: i + 1,

        in: false,

        dayWeek: day.dayWeek,

        weekend: [0, 6].includes(day.dayWeek),

        today: day.year === monthNow.year && day.dayYear === monthNow.dayYear
      });
    }
  }

  const weeks = arrayToParts(days, 7);

  return (
    <Line
      ref={ref}

      gap={0}

      direction='column'

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'AmauiDatePicker-calendar'
        ],

        className,
        classes.calendar,
        classes[`move_${values?.move}`]
      ])}

      {...other}
    >
      {/* Day names */}
      <Line
        gap={0}

        direction='row'

        align='center'

        justify='space-between'

        className={classNames([
          staticClassName('DatePicker', theme) && [
            'AmauiDatePicker-day-names'
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
                'AmauiDatePicker-day-name'
              ],

              classes.dayName
            ])}
          >
            {day}
          </Line>
        ))}
      </Line>

      {/* Weeks */}
      <Transitions switch mode='in-out-follow'>
        <Transition
          key={id}
        >
          {(status: TTransitionStatus) => {

            return (
              <Surface
                tonal={tonal}

                color={color}
              >
                {({ palette }) => (
                  <Line
                    gap={0}

                    direction='column'

                    align='unset'

                    justify='unset'

                    className={classNames([
                      staticClassName('DatePicker', theme) && [
                        'AmauiDatePicker-weeks'
                      ],

                      classes.weeks,
                      [`weeks_${status}`]
                    ])}
                  >
                    {weeks.map((week: any, index: number) => (
                      // Week
                      <Line
                        key={index}

                        gap={0}

                        direction='row'

                        align='unset'

                        justify='unset'

                        className={classNames([
                          staticClassName('DatePicker', theme) && [
                            'AmauiDatePicker-week'
                          ],

                          classes.week
                        ])}
                      >
                        {week.map((day: any, index_: number) => (
                          <div
                            key={index_}

                            className={classNames([
                              staticClassName('DatePicker', theme) && [
                                'AmauiDatePicker-day',
                                `AmauiDatePicker - day - ${day.in ? 'in' : 'out'}`
                              ],

                              classes.day,
                              classes[`day_${day.in ? 'in' : 'out'}`]
                            ])}
                          >
                            <PaginationItem
                              tonal={tonal}

                              color='inherit'

                              TypeProps={{
                                version: 'b3',

                                color: !day.weekend ? 'primary' : 'secondary'
                              }}

                              className={classNames([
                                staticClassName('DatePicker', theme) && [
                                  'AmauiDatePicker-day-value'
                                ],

                                classes.dayValue
                              ])}

                              style={{
                                ...(day.today ? {
                                  outline: `1px solid ${palette[40]}`,
                                  outlineOffset: '-1px'
                                } : undefined)
                              }}
                            >
                              {day.value}
                            </PaginationItem>
                          </div>
                        ))}
                      </Line>
                    ))}
                  </Line>
                )}
              </Surface>
            );
          }}
        </Transition>
      </Transitions>
    </Line>
  );
});

const DatePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDatePicker?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min - width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    // mobile, desktop, static & auto
    version: version_ = 'auto',

    value: value_,
    valueDefault,

    onChange,

    now = true,

    today = true,

    label,

    min,
    max,

    validate,

    autoCloseOnPick: autoCloseOnPick_,

    openMobile = 'select',

    selectModeHeadingText = 'Select date',

    inputModeHeadingText = 'Enter date',

    useHelperText: useHelperText_,

    weekStartDay = 'Monday',

    day = true,

    month = true,

    year = true,

    switch: switch__,

    readOnly,

    disabled,

    onClick: onClick_,

    Icon = IconMaterialCalendarTodayRounded,
    IconPrevious = IconMaterialNavigateBeforeRounded,
    IconNext = IconMaterialNavigateNextRounded,
    IconDropDown = IconMaterialArrowDropDownRounded,

    ModalProps,
    TooltipProps,
    IconButtonProps,
    AdvancedTextFieldProps,
    ModeDockedProps,
    ModeModalProps,
    ModeFullScreenProps,
    ModeInputProps,
    CalendarProps,

    className,

    ...other
  } = props;

  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const useHelperText = valueBreakpoints(useHelperText_, undefined, breakpoints, theme);
  const autoCloseOnPick = valueBreakpoints(autoCloseOnPick_, undefined, breakpoints, theme);

  const refs = {
    root: React.useRef<any>(),
    iconButton: React.useRef<any>(),
    version: React.useRef<any>(),
    open: React.useRef<any>(),
    openMenu: React.useRef<any>(),
    mode: React.useRef<any>(),
    value: React.useRef<any>(),
    values: React.useRef<any>(),
    autoCloseOnPick: React.useRef<any>(),
    min: React.useRef<any>(),
    max: React.useRef<any>(),
    validate: React.useRef<any>(),
    weekStartDay: React.useRef<any>(),
    today: React.useRef<any>()
  };

  const valueToValues = (valueNew: AmauiDate) => {
    const values_: any = {};

    if (valueNew) {
      // day
      values_.day = formatMethod(valueNew, 'DD');

      // month
      values_.month = formatMethod(valueNew, 'MM');

      // year
      values_.year = formatMethod(valueNew, 'YYYY');

      // input
      const format_ = [];

      if (day) format_.push('DD');

      if (month) format_.push('MM');

      if (year) format_.push('YYYY');

      values_.input = formatMethod(valueNew, format_.join('/'));
    }

    return values_;
  };

  const touch = useMediaQuery('(pointer: coarse)');

  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [mode, setMode] = React.useState(touch ? openMobile : 'select');
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || (now && new AmauiDate()));
  const [values, setValues] = React.useState<any>(() => valueToValues(value));
  const [error, setError] = React.useState(false);

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  refs.version.current = version;

  refs.open.current = open;

  refs.openMenu.current = openMenu;

  refs.mode.current = mode;

  refs.values.current = values;

  refs.value.current = value;

  refs.autoCloseOnPick.current = autoCloseOnPick;

  refs.min.current = min;

  refs.max.current = max;

  refs.validate.current = validate;

  refs.weekStartDay.current = weekStartDay;

  refs.today.current = today;

  const valuesToValue = (values_: any) => {
    let amauiDate = refs.value.current;

    if (values_.date) {
      amauiDate = new AmauiDate(values_.date);
    }
    else {
      // day
      let day = values_.day || '01';

      if (day.startsWith('0')) day = +day.slice(1);

      amauiDate = set(+day, 'day', amauiDate);

      // month
      let month = values_.month || '01';

      if (month.startsWith('0')) month = +month.slice(1);

      // months start from 0
      amauiDate = set(+month - 1, 'month', amauiDate);

      // year
      let year = values_.year || new AmauiDate().year;

      amauiDate = set(+year, 'year', amauiDate);
    }

    return amauiDate;
  };

  const updateValues = (property: string, value_: any) => {
    const values_ = {
      ...refs.values.current,

      [property]: value_
    };

    setValues(values_);

    // Error
    setError(!validItem('', '', property === 'input' ? inputToValues(value_) : values_));
  };

  const updateInputToValues = (toAdd?: any) => {
    const values_ = {
      ...refs.values.current,

      ...toAdd,

      ...inputToValues(refs.values.current?.input)
    };

    const amauiDate = valuesToValue(values_);

    values_.date = new AmauiDate(amauiDate);

    setValues(values_);

    updateValue(amauiDate);

    return values_;
  };

  const updateValuesToInput = () => {
    const amauiDate = valuesToValue(refs.values.current);

    setValues(valueToValues(amauiDate));

    updateValue(amauiDate);
  };

  const validItem = (item: number | string = '', version: string = '', values__ = refs.values.current) => {
    const values_ = {
      ...values__
    };

    if (version) values_[version] = is('number', item) ? getLeadingZerosNumber(item as number) : item;

    const amauiDate = valuesToValue(values_);

    Object.keys(values_).forEach((item_: any) => {
      if (is('string', values_[item_])) {
        if (values_[item_].startsWith('0')) values_[item_] = values_[item_].slice(1);
      }
    });

    if (values_.day !== undefined) values_.day = +values_.day;

    if (values_.month !== undefined) values_.month = +values_.month;

    if (values_.year !== undefined) values_.year = +values_.year;

    let valid = true;

    if (is('function', refs.validate.current)) valid = refs.validate.current(item, values_, values_.selecting);

    if (refs.min.current !== undefined) valid = valid && isMethod(amauiDate, 'after or same', refs.min.current);

    if (refs.max.current !== undefined) valid = valid && isMethod(amauiDate, 'before or same', refs.max.current);

    return valid;
  };

  const inputToValues = (valueNew: any) => {
    const values_: any = {
      ...refs.values.current
    };

    values_.date = new AmauiDate();

    // input
    const [day, month, year] = (valueNew || '').split('/');

    if (day) {
      values_.day = day.startsWith('0') ? day.slice(1) : day;

      values_.day = +day;

      values_.date = set(values_.day, 'day', values_.date);
    }

    if (month) {
      values_.month = month.startsWith('0') ? month.slice(1) : month;

      values_.month = +month;

      values_.date = set(values_.month - 1, 'month', values_.date);
    }

    if (year) {
      values_.year = +year;

      values_.date = set(values_.year, 'year', values_.date);
    }

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

    // Error
    setError(!validItem('', '', inputToValues(refs.values.current?.input)));

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) updateFromValue(value_);
  }, [value_]);

  const onMode = React.useCallback(() => {
    setMode(refs.version.current === 'mobile' ? openMobile : 'select');

    if (!refs.open.current) updateInputToValues({ date: new AmauiDate(refs.value.current) });

    setOpen(!refs.open.current);
  }, [openMobile]);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const onModal = React.useCallback((event: React.MouseEvent<any>) => {
    setMode(refs.version.current === 'mobile' ? openMobile : 'select');

    updateInputToValues();

    setOpen(true);

    if (is('function', onClick_)) onClick_(event);
  }, [openMobile, onClick_]);

  const onModeSwitch = React.useCallback(() => {
    setMode(refs.mode.current === 'select' ? 'input' : 'select');
  }, []);

  const onClear = React.useCallback(() => {
    const valueNew = new AmauiDate();

    setValues(values_ => ({
      ...values_,

      move: valueNew.milliseconds > values_?.date?.milliseconds ? 'next' : 'previous',

      date: valueNew
    }));
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
  }, []);

  const move = (next = true, unit: TTimeUnits = 'month') => {
    setValues(values_ => ({
      ...values_,

      move: next ? 'next' : 'previous',

      date: (next ? add : remove)(1, unit, values_.date)
    }));
  };

  const ModeDocked = React.useCallback(React.forwardRef((props__: any, ref: any) => {
    const valueMonth = refs.values.current.date || refs.value.current;

    const month = formatMethod(valueMonth, 'MMM');
    const year = formatMethod(valueMonth, 'YYYY');

    const buttonsProps = {
      color: 'inherit',

      version: 'text'
    };

    const actionsButtonsProps = {
      tonal,

      color,

      version: 'text'
    };

    return (
      <Surface
        ref={ref}

        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('DatePicker', theme) && [
            'AmauiDatePicker-mode',
            'AmauiDatePicker-mode-docked'
          ],

          ModeDockedProps?.className,
          classes.mode,
          classes.mode_docked
        ])}
      >
        {/* Header */}
        <Line
          gap={0.5}

          direction='row'

          align='center'

          justify='space-between'

          className={classNames([
            staticClassName('DatePicker', theme) && [
              'AmauiDatePicker-mode-docked-header'
            ],

            classes.mode_docked_header
          ])}
        >
          {/* Month */}
          <Line
            gap={0}

            direction='row'

            align='center'
          >
            <IconButton
              onClick={() => move(false)}

              {...buttonsProps}
            >
              <IconPrevious />
            </IconButton>

            <Button
              version='text'

              {...buttonsProps}

              fontSize={24}

              end={(
                <IconDropDown
                  className={classNames([
                    staticClassName('DatePicker', theme) && [
                      'AmauiDatePicker-arrow'
                    ],

                    classes.arrow,
                    refs.openMenu.current === 'month' && classes.arrow_open
                  ])}
                />
              )}

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'AmauiDatePicker-mode-docked-header-button'
                ],

                classes.mode_docked_header_button
              ])}
            >
              {month}
            </Button>

            <IconButton
              onClick={() => move()}

              {...buttonsProps}
            >
              <IconNext />
            </IconButton>
          </Line>

          {/* Year */}
          <Line
            gap={0}

            direction='row'

            align='center'
          >
            <IconButton
              onClick={() => move(false, 'year')}

              {...buttonsProps}
            >
              <IconPrevious />
            </IconButton>

            <Button
              version='text'

              {...buttonsProps}

              fontSize={24}

              end={(
                <IconDropDown
                  className={classNames([
                    staticClassName('DatePicker', theme) && [
                      'AmauiDatePicker-arrow'
                    ],

                    classes.arrow,
                    refs.openMenu.current === 'year' && classes.arrow_open
                  ])}
                />
              )}

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'AmauiDatePicker-mode-docked-header-button'
                ],

                classes.mode_docked_header_button
              ])}
            >
              {year}
            </Button>

            <IconButton
              onClick={() => move(true, 'year')}

              {...buttonsProps}
            >
              <IconNext />
            </IconButton>
          </Line>
        </Line>

        {/* Main */}
        {/* Calendar */}

        {/* Add transitions, fade for menus */}

        <Fade
          in={!openMenu}
        >
          <Line
            gap={0}

            direction='column'

            align='center'

            style={{
              width: '100%'
            }}
          >
            {/* Calendar */}
            <div
              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'AmauiDatePicker-calendar-wrapper'
                ],

                classes.calendar_wrapper
              ])}
            >
              <CalendarDays
                tonal={tonal}

                color={color}

                weekStartDay={weekStartDay}

                value={refs.value.current}

                values={refs.values.current}

                outside

                className={classNames([
                  staticClassName('DatePicker', theme) && [
                    'AmauiDatePicker-calendar-transition'
                  ],

                  classes.calendar_transition
                ])}
              />
            </div>

            {/* Actions */}
            <Line
              direction='row'

              align='center'

              justify='space-between'

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'AmauiDatePicker-mode-docked-footer'
                ],

                classes.mode_docked_footer
              ])}
            >
              <Button
                onClick={onClear}

                {...actionsButtonsProps}
              >
                Clear
              </Button>

              <Line
                gap={0}

                direction='row'

                align='center'
              >
                <Button
                  onClick={onCancel}

                  {...actionsButtonsProps}
                >
                  Cancel
                </Button>

                <Button
                  onClick={onOk}

                  {...actionsButtonsProps}
                >
                  Ok
                </Button>
              </Line>
            </Line>
          </Line>
        </Fade>

        {/* Menu month */}

        {/* Menu year */}
      </Surface>
    );
  }), [tonal, color, weekStartDay]);

  const ModeModal = React.useCallback(React.forwardRef((props_: any, ref: any) => {

    return (
      <div />
    );
  }), []);

  const ModeFullScreen = React.useCallback(React.forwardRef((props_: any, ref: any) => {

    return (
      <div />
    );
  }), []);

  const ModeInput = React.useCallback(React.forwardRef((props_: any, ref: any) => {

    return (
      <div />
    );
  }), []);

  let mask: any = [];

  let placeholder: any = [];

  if (day) {
    mask.push(
      { pattern: '[0-3]' },

      (item: string, result: string, valueInput: string) => /^(0[0-9]|1[0-9]|2[0-9]|3[0-1]).*/.test(valueInput)
    );

    placeholder.push('DD');
  }

  if (month) {
    if (!!mask.length) mask.push('/');

    mask.push(
      { pattern: '[0-1]' },

      (item: string, result: string, valueInput: string) => day ? /^(0[0-9]|1[0-9]|2[0-9]|3[0-1])\/(0[0-9]|1[0-2])/.test(valueInput) : /^(0[0-9]|1[0-2]).*/.test(valueInput)
    );

    placeholder.push('MM');
  }

  if (year) {
    if (!!mask.length) mask.push('/');

    mask.push(
      { pattern: '[1-2]' },

      { pattern: '[0-9]' },

      { pattern: '[0-9]' },

      { pattern: '[0-9]' }
    );

    placeholder.push('YYYY');
  }

  placeholder = placeholder.join('/');

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        ref={refs.iconButton}

        tonal={tonal}

        color={color}

        version='text'

        onClick={onMode}

        disabled={disabled || readOnly}

        {...IconButtonProps}
      >
        <Icon />
      </IconButton>
    );
  }

  if (version === 'mobile') {
    if (!readOnly) moreProps.onClick = onModal;
  }

  return <>
    <AdvancedTextField
      rootRef={item => {
        if (ref) ref.current = item;

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

      helperText={useHelperText ? placeholder : undefined}

      error={error}

      readOnly={readOnly}

      disabled={disabled}

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'AmauiDatePicker-root'
        ],

        className,
        classes.root
      ])}

      {...moreProps}

      {...other}

      {...AdvancedTextFieldProps}
    />

    {/* Mobile */}
    {version === 'mobile' && (
      <Modal
        open={open}

        modalWrapperSurface={false}

        onClose={onClose}

        {...ModalProps}
      >
        {mode === 'select' ? <ModeModal /> : <ModeInput />}
      </Modal>
    )}

    {/* Desktop */}
    {version === 'desktop' && (
      <Tooltip
        open={open}

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
            onClickOutside={onClose}

            includeParentQueries={['.AmauiDatePicker-mode']}

            include={[refs.iconButton, refs.iconButton.current]}
          >
            <ModeDocked />
          </ClickListener>
        )}

        {...TooltipProps}
      />
    )}
  </>;
});

DatePicker.displayName = 'AmauiDatePicker';

export default DatePicker;
