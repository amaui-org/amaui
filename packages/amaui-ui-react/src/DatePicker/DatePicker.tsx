import React from 'react';

import { is, getLeadingZerosNumber, arrayToParts, clamp } from '@amaui/utils'
import { AmauiDate, format as formatMethod, set, is as isMethod, startOf, endOf, remove, add, TTimeUnits, months as monthsValue } from '@amaui/date';
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
import List from '../List';
import ListItem from '../ListItem';
import { IconDoneAnimated } from '../Buttons/Buttons';
import Divider from '../Divider';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  mode: {
    overflow: 'hidden'
  },

  modal: {
    width: 'calc(100% - 48px)',
    maxWidth: '330px',
    margin: '0 auto',
    borderRadius: '28px',
    overflow: 'hidden'
  },

  mode_modal: {
    width: '100%'
  },

  mode_modal_middle: {
    position: 'relative',
    width: '100%',
    padding: '8px 12px 8px'
  },

  mode_modal_header_select: {
    width: '100%'
  },

  mode_modal_header: {
    width: '100%',
    padding: '16px 24px 0px'
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
    transition: theme.methods.transitions.make('opacity'),

    '&.AmauiButton-root': {
      paddingInline: '8px 0px'
    },

    '& .AmauiButton-end': {
      paddingInline: '8px 0px'
    }
  },

  input: {
    width: '100%'
  },

  heading: {
    width: '100%',
    marginBottom: '36px'
  },

  open_secondary: {
    opacity: '0.4'
  },

  mode_docked_footer: {
    width: '100%',
    padding: '8px 12px 12px'
  },

  calendar_wrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '305px',
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

  divider: {
    '&.AmauiDivider-root': {
      margin: '0px'
    }
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

  week: {
    width: '100%'
  },

  weeks: {
    width: '100%',
    transition: theme.methods.transitions.make(['opacity', 'transform'])
  },

  weeks_absolute: {
    position: 'absolute',
    top: '40px',
    left: '0px'
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

  list: {
    width: '100%',
    maxHeight: '340px',
    overflowY: 'auto',

    '&.AmauiList-root': {
      boxShadow: 'none'
    }
  },

  list_modal: {
    width: '100%',
    maxHeight: '280px',
    overflowY: 'auto'
  },

  listItem: {
    '& .AmauiListItem-root': {
      minHeight: '50px'
    }
  },

  dayValue_modal: {
    flex: '0 1 72px'
  },

  arrow: {
    transition: theme.methods.transitions.make('transform')
  },

  arrow_open: {
    transform: 'rotate(-180deg)'
  }
}), { name: 'AmauiDatePicker' });

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

const IconMaterialDoneRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneRounded'
      short_name='Done'

      {...props}
    >
      <path d="M9.55 17.575Q9.35 17.575 9.175 17.512Q9 17.45 8.85 17.3L4.55 13Q4.275 12.725 4.287 12.287Q4.3 11.85 4.575 11.575Q4.85 11.3 5.275 11.3Q5.7 11.3 5.975 11.575L9.55 15.15L18.025 6.675Q18.3 6.4 18.738 6.4Q19.175 6.4 19.45 6.675Q19.725 6.95 19.725 7.387Q19.725 7.825 19.45 8.1L10.25 17.3Q10.1 17.45 9.925 17.512Q9.75 17.575 9.55 17.575Z" />
    </Icon>
  );
});

const IconMaterialEditRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRounded'
      short_name='Edit'

      {...props}
    >
      <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6ZM19.3 8.925 15.05 4.725 16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.725Q21.25 5.3 21.275 6.113Q21.3 6.925 20.725 7.5ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V17.175Q3 16.975 3.075 16.788Q3.15 16.6 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7Q7.4 20.85 7.213 20.925Q7.025 21 6.825 21ZM14.325 9.675 13.625 8.975 15.025 10.375Z" />
    </Icon>
  );
});

// to do

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

    onDayClick,

    relative = true,

    className,

    ...other
  } = props;

  const dayNames = ['M', 'T', 'W', 'T', 'F', 'S'];

  if (weekStartDay === 'Monday') dayNames.push('S');
  else dayNames.unshift('S');

  const days = [];

  const monthNow = new AmauiDate();

  const month: AmauiDate = values?.date || value;

  const selected: AmauiDate = values?.selected || value;

  const id = (month.year + month.month + month.day) + (selected.year + selected.month + selected.day);

  const monthStart = startOf(month, 'month');

  const previousMonth = remove(1, 'month', month);

  const previousMonthEnd = endOf(previousMonth, 'month');

  const nextMonth = add(1, 'month', month);

  const monthSame = month.year === values?.previous?.year && month.month === values?.previous?.month;

  // Add all month days
  for (let i = 0; i < month.daysInMonth; i++) {
    const day = set(i + 1, 'day', month);

    days.push({
      value: i + 1,

      in: true,

      dayWeek: day.dayWeek,

      weekend: [0, 6].includes(day.dayWeek),

      today: day.year === monthNow.year && day.dayYear === monthNow.dayYear,

      selected: selected.year === day.year && selected.month === day.month && selected.day === day.day,

      amauiDate: day
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

        today: day.year === monthNow.year && day.dayYear === monthNow.dayYear,

        selected: selected.year === day.year && selected.month === day.month && selected.day === day.day,

        amauiDate: day
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

        today: day.year === monthNow.year && day.dayYear === monthNow.dayYear,

        selected: selected.year === day.year && selected.month === day.month && selected.day === day.day,

        amauiDate: day
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
      <Transitions
        noTransition={monthSame}

        mode='in-out-follow'

        switch
      >
        <Transition
          key={id}

          in
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
                      !relative && classes.weeks_absolute,
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

                        justify='space-between'

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
                                `AmauiDatePicker-day-${day.in ? 'in' : 'out'}`
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

                                color: !day.selected ? !day.weekend ? 'primary' : 'secondary' : undefined
                              }}

                              onClick={() => onDayClick(day.amauiDate)}

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
                                } : undefined),

                                ...(day.selected ? {
                                  color: theme.methods.palette.color.value(undefined, 90, true, palette),
                                  backgroundColor: theme.methods.palette.color.value(undefined, 40, true, palette)
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

    versionStatic = 'docked',

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

    modeModalHeadingText = 'Select date',

    selectModeHeadingText = 'Select date',

    inputModeHeadingText = 'Enter date',

    useHelperText: useHelperText_,

    weekStartDay = 'Monday',

    menuCloseOnSelect = true,

    day = true,

    month = true,

    year = true,

    switch: switch__,

    readOnly,

    disabled,

    geMonths: getMonths_,

    geYears: getYears_,

    onClick: onClick_,

    Icon = IconMaterialCalendarTodayRoundedFilled,
    IconPrevious = IconMaterialNavigateBeforeRounded,
    IconNext = IconMaterialNavigateNextRounded,
    IconDropDown = IconMaterialArrowDropDownRounded,
    IconCheck = IconMaterialDoneRounded,
    IconEnter = IconMaterialEditRounded,

    ModalProps,
    TooltipProps,
    IconButtonProps,
    AdvancedTextFieldProps,
    ModeDockedProps,
    ModeModalProps,
    ModeFullScreenProps,
    ModeInputProps,
    CalendarProps,
    ButtonProps,
    InputProps,

    className,

    ...other
  } = props;

  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const useHelperText = valueBreakpoints(useHelperText_, undefined, breakpoints, theme);
  const autoCloseOnPick = valueBreakpoints(autoCloseOnPick_, undefined, breakpoints, theme);

  const refs = {
    root: React.useRef<any>(),
    iconButton: React.useRef<any>(),
    month: React.useRef<any>(),
    year: React.useRef<any>(),
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
    today: React.useRef<any>(),
    menuCloseOnSelect: React.useRef<any>(),
    mask: React.useRef<any>(),
    placeholder: React.useRef<any>()
  };

  const valueToValues = (valueNew: AmauiDate) => {
    const values_: any = {
      ...refs.values.current
    };

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

  const valueToInputModal = (value_ = refs.values.current.date) => {
    let inputModal = '';

    const format_: any = [];

    // day
    if (day) format_.push('DD');

    if (month) format_.push('MM');

    if (year) format_.push('YYYY');

    inputModal = formatMethod(value_, format_.join('/'));

    return inputModal;
  };

  const touch = useMediaQuery('(pointer: coarse)');

  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<any>(false);
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

  refs.menuCloseOnSelect.current = menuCloseOnSelect;

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

  refs.mask.current = mask;

  refs.placeholder.current = placeholder;

  const moreProps: any = {};

  const getMonths = is('function', getMonths_) ? getMonths_ : React.useCallback(() => {
    return monthsValue.map((item: any) => ({ value: item }));
  }, []);

  const getYears = is('function', getYears_) ? getYears_ : React.useCallback(() => {
    const years_ = [];

    for (let i = 0; i < 129; i++) years_.push({ value: 1971 + i });

    return years_;
  }, []);

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

  const updateValuesInputModal = (value_: any) => {
    const values_ = {
      ...refs.values.current,

      ...inputToValues(value_),

      inputModal: value_
    };

    // Selected
    values_.selected = values_.date;

    setValues(values_);
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

  const updateInputToValues = () => {
    const values_ = {
      ...refs.values.current,

      ...inputToValues(refs.values.current?.input)
    };

    const amauiDate = valuesToValue(values_);

    values_.selected = values_.date = new AmauiDate(amauiDate);

    values_.inputModal = values_.input;

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

  const onDayClick = React.useCallback((amauiDate: AmauiDate) => {
    const valueNew = new AmauiDate(amauiDate);

    setValues(values_ => ({
      ...values_,

      previous: values_.date,

      move: valueNew.milliseconds > values_?.date?.milliseconds ? 'next' : 'previous',

      selected: new AmauiDate(valueNew),

      inputModal: valueToInputModal(valueNew),

      date: valueNew
    }));
  }, []);

  const onMonthClick = React.useCallback((index: number) => {
    let valueNew = new AmauiDate(refs.values.current.date);

    valueNew = set(index, 'month', valueNew);

    setValues(values_ => ({
      ...values_,

      previous: values_.date,

      move: valueNew.milliseconds > values_?.date?.milliseconds ? 'next' : 'previous',

      inputModal: valueToInputModal(valueNew),

      date: valueNew
    }));

    if (refs.menuCloseOnSelect.current) onCloseMenu();
  }, []);

  const onYearClick = React.useCallback((year: number) => {
    let valueNew = new AmauiDate(refs.values.current.date);

    valueNew = set(year, 'year', valueNew);

    setValues(values_ => ({
      ...values_,

      previous: values_.date,

      move: valueNew.milliseconds > values_?.date?.milliseconds ? 'next' : 'previous',

      inputModal: valueToInputModal(valueNew),

      date: valueNew
    }));

    if (refs.menuCloseOnSelect.current) onCloseMenu();
  }, []);

  const onOpenMenu = React.useCallback((menu_ = 'month') => {
    const valueNew = refs.openMenu.current === menu_ ? false : menu_;

    setOpenMenu(valueNew);

    // scroll to the value
    setTimeout(() => {
      if (valueNew) {
        const date = refs.values.current.date;

        let valueItem: any = '';

        if (valueNew === 'month') valueItem = date.month - 1;
        else if (valueNew === 'year') valueItem = date.year;

        const list = refs[valueNew].current;

        if (list) {
          try {
            const item = list.querySelector(`[data-value="${valueItem}"]`);

            if (item) list.scrollTo(0, clamp(item.offsetTop - (refs.mode.current !== 'docked' ? 124 : 194), 0), { behavior: 'smooth' });
          } catch (error) { }
        }
      }
    });
  }, []);

  const onCloseMenu = React.useCallback(() => {
    setOpenMenu(false);
  }, []);

  const onMode = React.useCallback(() => {
    setMode(refs.version.current === 'mobile' ? openMobile : 'select');

    if (!refs.open.current) updateInputToValues();

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

    setOpenMenu(false);

    setValues(values_ => ({
      ...values_,

      previous: values_.date,

      move: valueNew.milliseconds > values_?.date?.milliseconds ? 'next' : 'previous',

      selected: new AmauiDate(valueNew),

      inputModal: valueToInputModal(valueNew),

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

  const move = (next = true, unit: TTimeUnits = 'month', selected = false) => {
    const values_ = ({
      ...refs.values.current,

      previous: refs.values.current.date,

      move: next ? 'next' : 'previous',

      date: (next ? add : remove)(1, unit, refs.values.current.date)
    });

    values_.inputModal = valueToInputModal(values_.date);

    if (selected) values_.selected = values_.date;

    setValues(values_);
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
            <Fade
              in={!refs.openMenu.current}
            >
              <IconButton
                onClick={() => move(false)}

                disabled={refs.openMenu.current}

                {...buttonsProps}
              >
                <IconPrevious />
              </IconButton>
            </Fade>

            <Button
              version='text'

              {...buttonsProps}

              onClick={() => onOpenMenu()}

              fontSize={24}

              end={(
                <Fade
                  in={refs.openMenu.current !== 'year'}
                >
                  <IconDropDown
                    className={classNames([
                      staticClassName('DatePicker', theme) && [
                        'AmauiDatePicker-arrow'
                      ],

                      classes.arrow,
                      refs.openMenu.current === 'month' && classes.arrow_open
                    ])}
                  />
                </Fade>
              )}

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'AmauiDatePicker-mode-docked-header-button'
                ],

                classes.mode_docked_header_button,
                refs.openMenu.current === 'year' && classes.open_secondary
              ])}
            >
              {month}
            </Button>

            <Fade
              in={!refs.openMenu.current}
            >
              <IconButton
                onClick={() => move()}

                disabled={refs.openMenu.current}

                {...buttonsProps}
              >
                <IconNext />
              </IconButton>
            </Fade>
          </Line>

          {/* Year */}
          <Line
            gap={0}

            direction='row'

            align='center'
          >
            <Fade
              in={!refs.openMenu.current}
            >
              <IconButton
                onClick={() => move(false, 'year')}

                disabled={refs.openMenu.current}

                {...buttonsProps}
              >
                <IconPrevious />
              </IconButton>
            </Fade>

            <Button
              version='text'

              {...buttonsProps}

              onClick={() => onOpenMenu('year')}

              fontSize={24}

              end={(
                <Fade
                  in={refs.openMenu.current !== 'month'}
                >
                  <IconDropDown
                    className={classNames([
                      staticClassName('DatePicker', theme) && [
                        'AmauiDatePicker-arrow'
                      ],

                      classes.arrow,
                      refs.openMenu.current === 'year' && classes.arrow_open
                    ])}
                  />
                </Fade>
              )}

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'AmauiDatePicker-mode-docked-header-button'
                ],

                classes.mode_docked_header_button,
                refs.openMenu.current === 'month' && classes.open_secondary
              ])}
            >
              {year}
            </Button>

            <Fade
              in={!refs.openMenu.current}
            >
              <IconButton
                onClick={() => move(true, 'year')}

                disabled={refs.openMenu.current}

                {...buttonsProps}
              >
                <IconNext />
              </IconButton>
            </Fade>
          </Line>
        </Line>

        {/* Main */}
        {/* Calendar */}
        {!refs.openMenu.current && (
          <Fade
            in
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

                  onDayClick={onDayClick}

                  relative={false}

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
        )}

        {/* Divider */}
        {!!refs.openMenu.current && (
          <Divider
            className={classNames([
              staticClassName('DatePicker', theme) && [
                'AmauiDatePicker-divider'
              ],

              classes.divider
            ])}
          />
        )}

        {/* Menu month */}
        {refs.openMenu.current === 'month' && (
          <Fade
            in
          >
            <List
              ref={refs.month}

              tonal={tonal}

              color={color}

              size='large'

              menu

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'AmauiDatePicker-list'
                ],

                classes.list
              ])}
            >
              {getMonths(refs.value.current, refs.values.current).map((item: any, index: number) => {
                const monthValue = refs.values.current.date;
                const month = formatMethod(monthValue, 'MMMM');

                const selected = month === item.value;

                return (
                  <ListItem
                    key={index}

                    onClick={() => onMonthClick(index)}

                    primary={item.value}

                    inset={!selected}

                    startAlign='center'

                    start={selected ? (
                      <IconDoneAnimated
                        in

                        add

                        simple
                      />
                    ) : undefined}

                    selected={selected}

                    button

                    data-value={index}

                    className={classNames([
                      staticClassName('DatePicker', theme) && [
                        'AmauiDatePicker-list-item'
                      ],

                      classes.listItem
                    ])}
                  />
                );
              })}
            </List>
          </Fade>
        )}

        {/* Menu year */}
        {refs.openMenu.current === 'year' && (
          <Fade
            in
          >
            <List
              ref={refs.year}

              tonal={tonal}

              color={color}

              size='large'

              menu

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'AmauiDatePicker-list'
                ],

                classes.list
              ])}
            >
              {getYears(refs.value.current, refs.values.current).map((item: any, index: number) => {
                const monthValue = refs.values.current.date;
                const year = +formatMethod(monthValue, 'YYYY');

                const selected = year === item.value;

                return (
                  <ListItem
                    key={index}

                    onClick={() => onYearClick(item.value)}

                    primary={item.value}

                    inset={!selected}

                    startAlign='center'

                    start={selected ? (
                      <IconDoneAnimated
                        in

                        add

                        simple
                      />
                    ) : undefined}

                    selected={selected}

                    button

                    data-value={item.value}

                    className={classNames([
                      staticClassName('DatePicker', theme) && [
                        'AmauiDatePicker-list-item'
                      ],

                      classes.listItem
                    ])}
                  />
                );
              })}
            </List>
          </Fade>
        )}
      </Surface>
    );
  }), [tonal, color, weekStartDay]);

  const ModeModal = React.useCallback(React.forwardRef((props_: any, ref: any) => {
    const month = refs.values.current.date || refs.value.current;

    const year = formatMethod(month, 'YYYY');
    const monthName = formatMethod(month, 'MMMM');
    const monthNameAbr = formatMethod(month, 'MMM');
    const dayName = formatMethod(month, 'd');
    const day = getLeadingZerosNumber(month.day);

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
            'AmauiDatePicker-mode'
          ],

          ModeInputProps?.className,
          classes.mode,
          classes.mode_modal
        ])}
      >
        <Line
          gap={0}

          direction='column'

          className={classNames([
            staticClassName('DatePicker', theme) && [
              'AmauiDatePicker-mode-modal-header'
            ],

            classes.mode_modal_header
          ])}
        >
          {/* Heading */}
          <Type
            version='l2'

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'AmauiTimePicker-heading'
              ],

              classes.heading
            ])}
          >
            {modeModalHeadingText}
          </Type>

          {/* Select */}
          {refs.mode.current === 'select' && (
            <Line
              direction='row'

              align='center'

              justify='space-between'

              style={{
                width: '100%',
                marginBottom: '12px'
              }}
            >
              <Type
                version='h1'
              >
                {dayName}, {monthNameAbr} {day}
              </Type>

              {switch_ && (
                <Tooltip
                  label='Enter date'
                >
                  <IconButton
                    tonal={tonal}

                    color='inherit'

                    onClick={onModeSwitch}
                  >
                    <IconEnter />
                  </IconButton>
                </Tooltip>
              )}
            </Line>
          )}

          {/* Input */}
          {refs.mode.current === 'input' && (
            <Line
              direction='row'

              align='center'

              justify='space-between'

              style={{
                width: '100%',
                marginBottom: '12px'
              }}
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

                    onClick={onModeSwitch}
                  >
                    <Icon />
                  </IconButton>
                </Tooltip>
              )}
            </Line>
          )}
        </Line>

        {/* Divider */}
        <Divider
          className={classNames([
            staticClassName('DatePicker', theme) && [
              'AmauiDatePicker-divider'
            ],

            classes.divider
          ])}
        />

        {/* Select */}
        {refs.mode.current === 'select' && (
          <Surface
            tonal={tonal}

            color={color}
          >
            {({ palette }) => (
              <Line
                gap={0}

                direction='column'
              >
                <Line
                  gap={0}

                  direction='column'

                  align='center'

                  className={classNames([
                    staticClassName('DatePicker', theme) && [
                      'AmauiDatePicker-mode-modal-middle'
                    ],

                    classes.mode_modal_middle
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
                        'AmauiDatePicker-mode-modal-header-select'
                      ],

                      classes.mode_modal_header_select
                    ])}
                  >
                    {/* Month year */}
                    <Button
                      tonal={tonal}

                      color='inherit'

                      version='text'

                      onClick={() => onOpenMenu('year')}

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
                      {monthName} {year}
                    </Button>

                    {/* Arrows */}
                    <Line
                      gap={0}

                      direction='row'

                      align='center'
                    >
                      <Fade
                        in={!refs.openMenu.current}
                      >
                        <IconButton
                          tonal={tonal}

                          color='inherit'

                          onClick={() => move(false, 'month', true)}

                          disabled={refs.openMenu.current}
                        >
                          <IconPrevious />
                        </IconButton>
                      </Fade>

                      <Fade
                        in={!refs.openMenu.current}
                      >
                        <IconButton
                          tonal={tonal}

                          color='inherit'

                          onClick={() => move(true, 'month', true)}

                          disabled={refs.openMenu.current}
                        >
                          <IconNext />
                        </IconButton>
                      </Fade>
                    </Line>
                  </Line>

                  {/* Calendar */}
                  {!refs.openMenu.current && (
                    <Fade
                      in
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

                          onDayClick={onDayClick}

                          relative={false}

                          outside={false}

                          className={classNames([
                            staticClassName('DatePicker', theme) && [
                              'AmauiDatePicker-calendar-transition'
                            ],

                            classes.calendar_transition
                          ])}
                        />
                      </div>
                    </Fade>
                  )}

                  {/* Menu */}
                  {refs.openMenu.current === 'year' && (
                    <Fade
                      in
                    >
                      <Line
                        ref={refs.year}

                        tonal={tonal}

                        color={color}

                        direction='row'

                        wrap='wrap'

                        justify='space-evenly'

                        className={classNames([
                          staticClassName('DatePicker', theme) && [
                            'AmauiDatePicker-list-modal'
                          ],

                          classes.list_modal
                        ])}
                      >
                        {getYears(refs.value.current, refs.values.current).map((item: any, index: number) => {
                          const monthValue = refs.values.current.date;
                          const year = +formatMethod(monthValue, 'YYYY');

                          const selected = year === item.value;

                          return (
                            <PaginationItem
                              key={index}

                              tonal={tonal}

                              color='inherit'

                              TypeProps={{
                                version: 'b2',

                                color: !selected ? 'primary' : undefined
                              }}

                              onClick={() => onYearClick(item.value)}

                              data-value={item.value}

                              className={classNames([
                                staticClassName('DatePicker', theme) && [
                                  'AmauiDatePicker-day-value-modal'
                                ],

                                classes.dayValue_modal
                              ])}

                              style={{
                                ...(selected ? {
                                  color: theme.methods.palette.color.value(undefined, 90, true, palette),
                                  backgroundColor: theme.methods.palette.color.value(undefined, 40, true, palette)
                                } : undefined)
                              }}
                            >
                              {item.value}
                            </PaginationItem>
                          );
                        })}
                      </Line>
                    </Fade>
                  )}
                </Line>
              </Line>
            )}
          </Surface>
        )}

        {/* Input */}
        {refs.mode.current === 'input' && (
          <Line
            direction='column'

            style={{
              width: '100%',
              padding: '16px 24px 8px'
            }}
          >
            <AdvancedTextField
              tonal={tonal}

              color={color}

              version='outlined'

              label={label}

              mask={mask}

              placeholder={placeholder}

              value={refs.values.current.inputModal}

              onChange={(valueNew: any) => updateValuesInputModal(valueNew)}

              helperText={useHelperText ? placeholder : undefined}

              className={classNames([
                staticClassName('DatePicker', theme) && [
                  'AmauiDatePicker-input'
                ],

                classes.input
              ])}

              {...AdvancedTextFieldProps}
            />
          </Line>
        )}

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
      </Surface>
    );
  }), [tonal, color, switch_, modeModalHeadingText, inputModeHeadingText]);

  const ModeFullScreen = React.useCallback(React.forwardRef((props_: any, ref: any) => {

    return (
      <div />
    );
  }), [tonal, color]);

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

  if (version === 'static') return versionStatic === 'docked' ? <ModeDocked /> : versionStatic === 'modal' ? <ModeModal /> : <ModeFullScreen />;

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

        NoSurfaceProps={{
          className: classNames([
            staticClassName('DatePicker', theme) && [
              'AmauiDatePicker-modal'
            ],

            classes.modal
          ])
        }}

        {...ModalProps}
      >
        <ModeModal />
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
            onClickOutside={() => onClose()}

            includeParentQueries={['.AmauiDatePicker-mode', '.AmauiDatePicker-list', '.AmauiDatePicker-day']}

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
