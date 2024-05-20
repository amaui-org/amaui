import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { arrayToParts, is } from '@amaui/utils';
import { add, AmauiDate, endOf, format, remove, set, startOf, is as isAmauiDate } from '@amaui/date';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import TypeElement from '../Type';
import PaginationItemElement from '../PaginationItem';
import TransitionsElement from '../Transitions';
import TransitionElement, { TTransitionStatus } from '../Transition';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, IPropsAny, ISize, ITonal } from '../types';

const useStyle = style(theme => ({
  root: {
    // for transition
    overflow: 'hidden',
    position: 'relative'
  },

  size_small: {
    height: '250px'
  },

  size_regular: {
    height: '300px'
  },

  size_large: {
    height: '370px'
  },

  root_no_labels: {
    height: '260px'
  },

  dayNames: {
    width: '100%'
  },

  dayName: {
    flex: '1 1 auto',
    userSelect: 'none'
  },

  dayName_size_small: {
    width: '30px',
    height: '30px'
  },

  dayName_size_regular: {
    width: '40px',
    height: '40px'
  },

  dayName_size_large: {
    width: '50px',
    height: '50px'
  },

  day: {
    flex: '1 1 auto',
    position: 'relative'
  },

  day_size_small: {
    width: '30px',
    height: '30px'
  },

  day_size_regular: {
    width: '40px',
    height: '40px'
  },

  day_size_large: {
    width: '50px',
    height: '50px'
  },

  day_out: {
    opacity: '0.4'
  },

  day_out_no: {
    visibility: 'hidden',
    opacity: '0'
  },

  dayStart: {
    borderRadius: `${theme.methods.shape.radius.value(40, 'px')} 0 0 ${theme.methods.shape.radius.value(40, 'px')}`
  },

  dayEnd: {
    borderRadius: `0 ${theme.methods.shape.radius.value(40, 'px')} ${theme.methods.shape.radius.value(40, 'px')} 0`
  },

  dayStartEnd: {
    borderRadius: theme.methods.shape.radius.value(40, 'px')
  },

  dayStartSelected: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '0',
      height: '100%',
      width: '50%',
      background: 'currentColor'
    }
  },

  dayEndSelected: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '0',
      right: '50%',
      top: '0',
      height: '100%',
      width: '50%',
      background: 'currentColor'
    }
  },

  weeks: {
    width: '100%',
    position: 'absolute',
    left: '0px',
    transition: theme.methods.transitions.make(['opacity', 'transform'])
  },

  weeks_size_small: {
    top: '30px'
  },

  weeks_size_regular: {
    top: '40px'
  },

  weeks_size_large: {
    top: '50px'
  },

  weeks_no_labels: {
    top: '0px'
  },

  week: {
    width: '100%'
  },

  move_previous: {
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

  move_next: {
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

  dayValue: {
    '&:hover': {
      boxShadow: 'inset 0px 0px 0px 1px currentColor'
    }
  },

  disabled: {
    opacity: '0.54',
    pointerEvents: 'none'
  }
}), { name: 'amaui-CalendarMonth' });

export type TCalendarMonthValue = AmauiDate | [AmauiDate, AmauiDate];

export type TCalendarMonthCalendar = AmauiDate;

export interface ICalendarMonthValuesValue {
  day: string;
  month: string;
  year: string;
  inputModal: string;
  input: string;
  selected: AmauiDate;
  date: AmauiDate;
  previous: AmauiDate;
  move: 'previous' | 'next';
}

export type TCalendarMonthValues = [ICalendarMonthValuesValue, ICalendarMonthValuesValue];

export interface ICalenarDays extends ILine {
  tonal?: ITonal;
  color?: IColor;

  size?: ISize;

  value?: TCalendarMonthValue;
  valueDefault?: TCalendarMonthValue;
  onChange?: (value: TCalendarMonthValue) => any;

  calendar?: TCalendarMonthCalendar;
  calendarDefault?: TCalendarMonthCalendar;
  onChangeCalendar?: (value: TCalendarMonthCalendar) => any;

  now?: boolean;
  outside?: boolean;
  range?: boolean;
  weekStartDay?: 'Monday' | 'Sunday';
  noTransition?: boolean;
  offset?: number;
  min?: AmauiDate;
  max?: AmauiDate;
  validate?: (value: AmauiDate) => boolean;
  labels?: boolean;
  dayNamesFull?: boolean;

  valid?: (value: AmauiDate, version: 'day' | 'month' | 'year') => boolean;
  renderDay?: (value: AmauiDate, props: any, day: any, outside: boolean) => React.ReactNode;
  renderDayName?: (order: number) => any;

  PaginationItemProps?: IPropsAny;
  TransitionProps?: IPropsAny;
  TransitionsProps?: IPropsAny;
}

const CalendarMonth: React.FC<ICalenarDays> = React.forwardRef((props__, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCalendarMonth?.props?.default, ...props__ }), [props__]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const PaginationItem = React.useMemo(() => theme?.elements?.PaginationItem || PaginationItemElement, [theme]);

  const Transitions = React.useMemo(() => theme?.elements?.Transitions || TransitionsElement, [theme]);

  const Transition = React.useMemo(() => theme?.elements?.Transition || TransitionElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    size = 'regular',

    value: value_,
    valueDefault,
    onChange,

    calendar: calendar_,
    calendarDefault,
    onChangeCalendar,

    range,
    offset = 0,
    outside = true,
    weekStartDay: weekStartDay_ = 'Monday',
    now = true,
    min,
    max,
    validate,
    labels = true,
    dayNamesFull,
    noTransition,

    valid: valid_,
    renderDay,
    renderDayName,

    disabled,

    PaginationItemProps,
    TransitionProps,
    TransitionsProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [value, setValue] = React.useState(() => {
    const valueResult = (valueDefault !== undefined ? valueDefault : value_) || (now && (range ? [new AmauiDate(), new AmauiDate()] : [new AmauiDate()]));

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<AmauiDate>).filter(Boolean);
  });
  const [calendar, setCalendar] = React.useState((calendarDefault !== undefined ? calendarDefault : calendar_) || new AmauiDate());

  let month: AmauiDate = calendar || value[0] || new AmauiDate();

  if (!month?.valid) month = new AmauiDate();

  const refs = {
    id: React.useRef<string>(`${(month).year} ${(month).month}`),
    previous: React.useRef<AmauiDate>(month),
    previousTheme: React.useRef<boolean>(theme.palette.light),
    move: React.useRef<'previous' | 'next'>(),
    noTransition: React.useRef<any>()
  };

  const weekStartDay = !['Monday', 'Sunday'].includes(weekStartDay_) ? 'Monday' : weekStartDay_;

  // Value
  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) setValue(((is('array', value_) ? value_ : [value_] as any).filter(Boolean)));
  }, [value_]);

  // Calendar
  React.useEffect(() => {
    if (calendar_ !== undefined && calendar_ !== calendar) setCalendar(calendar_);
  }, [calendar_]);

  const valid = React.useCallback((...args: [AmauiDate, any]) => {
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

  const onUpdateCalendar = React.useCallback((valueNew: AmauiDate) => {
    // Inner update
    if (!props.hasOwnProperty('calendar')) setCalendar(valueNew);

    if (is('function', onChangeCalendar)) onChangeCalendar(valueNew);
  }, [onChangeCalendar]);

  const onUpdate = React.useCallback((valueUpdated: AmauiDate, offsetMultiplier?: number) => {
    let valueNew: Array<AmauiDate> = [valueUpdated, value[1]].filter(Boolean);

    // Previous
    // Range reset
    // If value is range, and is the same (in terms of day, month, year as from and/or to)
    // make a reset, ie. make both values that same date
    if (range) {
      if (
        value.filter(Boolean)
          .some(item => valueUpdated.year === item.year && valueUpdated.month === item.month && valueUpdated.day === item.day)
      ) valueNew = [valueUpdated, valueUpdated];
      else {
        // Update the value closest to from, to value
        let index: number;

        // Update from or to
        // based on if value is closer to the middle from, or middle to
        if (!value[0]) index = 0;
        else if (!value[1]) index = 1;
        else if (valueUpdated.milliseconds < value[0].milliseconds) index = 0;
        else if (valueUpdated.milliseconds > value[1].milliseconds) index = 1;
        else {
          const middle = Math.abs(value[1].milliseconds - value[0].milliseconds) / 2;

          index = valueUpdated.milliseconds <= (value[0].milliseconds + middle) ? 0 : 1;
        }

        valueNew = [...value];

        valueNew[index] = valueUpdated;
      }
    }

    // If value isnt's same as the calendar
    // update calendar to the value
    if (!(valueUpdated.year === calendar.year && valueUpdated.month === calendar.month)) {
      onUpdateCalendar(add(offsetMultiplier !== undefined ? (offsetMultiplier * offset) : 0, 'month', valueUpdated));
    }

    // Inner value update
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange((!range ? valueNew[0] : valueNew) as any);
  }, [value, range, offset, calendar, onChange]);

  const dayNames = [1, 2, 3, 4, 5, 6];

  if (weekStartDay === 'Monday') dayNames.push(7);
  else dayNames.unshift(7);

  const renderDayNameMethod = is('function', renderDayName) ? renderDayName : (order_: number) => {
    const values = {
      1: dayNamesFull ? 'Monday' : 'M',
      2: dayNamesFull ? 'Tuesday' : 'T',
      3: dayNamesFull ? 'Wednesday' : 'W',
      4: dayNamesFull ? 'Thursday' : 'T',
      5: dayNamesFull ? 'Friday' : 'F',
      6: dayNamesFull ? 'Saturday' : 'S',
      7: dayNamesFull ? 'Sunday' : 'S'
    };

    return values[order_];
  };

  const days = [];

  const monthNow = new AmauiDate();

  // value or value range selected value
  let id = `${month.year} ${month.month} ${month.day} ${theme.palette.light}`;

  value.forEach(item => id += ` ${item.year} ${item.month} ${item.day}`);

  const monthStart = startOf(month, 'month');

  const previousMonth = remove(1, 'month', month);

  const previousMonthEnd = endOf(previousMonth, 'month');

  const nextMonth = add(1, 'month', month);

  const monthSame = refs.previous.current?.year === calendar?.year && refs.previous.current?.month === calendar?.month;

  const isBetween = (day: any) => day.milliseconds >= value[0]?.milliseconds && day.milliseconds <= (value[1]?.milliseconds + 4000);

  const isSelected = (day: any) => value.some((item: any) => item.year === day.year && item.month === day.month && item.day === day.day);

  const selectedIndex = (day: any) => value.findIndex((item: any) => item.year === day.year && item.month === day.month && item.day === day.day);

  const selectedSame = (day: any) => value.filter((item: any) => item.year === day.year && item.month === day.month && item.day === day.day).length === 2;

  let isMonthFrom = false;
  let isMonthTo = false;

  // Add all month days
  for (let i = 0; i < month.daysInMonth; i++) {
    const day = set(i + 1, 'day', month);

    const selectedIndex_ = selectedIndex(day);

    if (selectedIndex_ === 0) isMonthFrom = true;
    else if (selectedIndex_ === 1) isMonthTo = true;

    days.push({
      value: i + 1,

      in: true,

      dayWeek: day.dayWeek,

      weekend: [0, 6].includes(day.dayWeek),

      today: day.year === monthNow.year && day.dayYear === monthNow.dayYear,

      between: isBetween(day),

      selected: isSelected(day),

      selectedIndex: selectedIndex_,

      selectedSame: selectedSame(day),

      amauiDate: day
    });
  }

  days[0].start = true;

  days[days.length - 1].end = true;

  // Add to start
  if (
    (weekStartDay === 'Sunday' && monthStart.dayWeek !== 0) ||
    (weekStartDay === 'Monday' && monthStart.dayWeek !== 1)
  ) {
    let toAdd = monthStart.dayWeek === 0 ? 6 : monthStart.dayWeek - 1;

    if (weekStartDay === 'Sunday') toAdd++;

    for (let i = 0; i < toAdd; i++) {
      const day = set(previousMonthEnd.day - i, 'day', previousMonth);

      days.unshift({
        value: day.day,

        in: false,

        dayWeek: day.dayWeek,

        weekend: [0, 6].includes(day.dayWeek),

        today: day.year === monthNow.year && day.dayYear === monthNow.dayYear,

        between: isBetween(day),

        selected: isSelected(day),

        selectedIndex: selectedIndex(day),

        selectedSame: selectedSame(day),

        start: true,

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

        between: isBetween(day),

        selected: isSelected(day),

        selectedIndex: selectedIndex(day),

        selectedSame: selectedSame(day),

        end: true,

        amauiDate: day
      });
    }
  }

  // noTransition
  refs.noTransition.current = monthSame;

  // Update previous
  if (refs.id.current !== `${month.year} ${month.month}`) {
    refs.move.current = refs.previous.current?.milliseconds > month.milliseconds ? 'next' : 'previous';

    refs.id.current = `${month.year} ${month.month}`;
    refs.previous.current = month;

    refs.noTransition.current = false;
  }

  const weeks = arrayToParts(days, 7);

  const getCalendar = (status?: TTransitionStatus) => {
    return (
      <Surface
        tonal={tonal}

        color={color}
      >
        {({ palette }) => (
          <Line
            gap={0.5}

            direction='column'

            align='unset'

            justify='unset'

            className={classNames([
              staticClassName('CalendarMonth', theme) && [
                'amaui-CalendarMonth-weeks'
              ],

              classes.weeks,
              classes[`weeks_size_${size}`],
              status && [`weeks_${status}`],
              !labels && classes.weeks_no_labels
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
                  staticClassName('CalendarMonth', theme) && [
                    'amaui-CalendarMonth-week'
                  ],

                  classes.week
                ])}
              >
                {week.map((day: any, index_: number) => {
                  const propsDay = {
                    onClick: () => onUpdate(day.amauiDate, day.start || day.end ? -1 : undefined),

                    disabled: (
                      (!day.in && !outside) ||

                      !valid(day.amauiDate, 'day') ||

                      // not prior to 1970, we may potentially update this in the future
                      day.amauiDate.year < 1970
                    )
                  };

                  return (
                    <Line
                      key={index_}

                      direction='row'

                      align='center'

                      justify='center'

                      className={classNames([
                        staticClassName('CalendarMonth', theme) && [
                          'amaui-CalendarMonth-day',
                          `amaui-CalendarMonth-day-${day.in ? 'in' : 'out'}`
                        ],

                        classes.day,
                        classes[`day_size_${size}`],
                        classes[`day_${day.in ? 'in' : 'out'}`],
                        (!day.in && !outside) && classes.day_out_no,
                        !day.selectedSame && range && [
                          (day.dayWeek === 1 || (day.selected && day.selectedIndex === 0) || (day.start && !outside)) && classes.dayStart,
                          (day.dayWeek === 0 || (day.selected && day.selectedIndex === 1) || (day.end && !outside)) && classes.dayEnd,
                          ((day.dayWeek === 1 || (day.selected && day.selectedIndex === 0) || (day.start && !outside)) && (day.dayWeek === 0 || (day.selected && day.selectedIndex === 1) || (day.end && !outside))) && classes.dayStartEnd,
                          (day.selected && day.selectedIndex === 0 && !day.selectedSame) && classes.dayStartSelected,
                          (day.selected && day.selectedIndex === 1 && !day.selectedSame) && classes.dayEndSelected
                        ]
                      ])}

                      style={{
                        ...(range && !day.selected && !day.selectedSame && day.between ? {
                          background: theme.methods.palette.color.value(undefined, 60, true, palette)
                        } : undefined),

                        ...(range && day.selected && !day.selectedSame ? {
                          color: theme.methods.palette.color.value(undefined, 60, true, palette)
                        } : undefined)
                      }}
                    >
                      {is('function', renderDay) ?
                        renderDay(day.amauiDate, propsDay, day, outside) :
                        (
                          <PaginationItem
                            tonal={tonal}

                            color='inherit'

                            size={size}

                            InteractionProps={{
                              background: false
                            }}

                            TypeProps={{
                              version: 'b3',

                              priority: !day.selected ? !day.weekend ? 'primary' : 'secondary' : undefined
                            }}

                            aria-label={format(day.amauiDate, 'DD-MM-YYYY')}

                            {...PaginationItemProps}

                            className={classNames([
                              staticClassName('CalendarMonth', theme) && [
                                'amaui-CalendarMonth-day-value',
                                day.in && 'amaui-CalendarMonth-day-in',
                                day.dayWeek && 'amaui-CalendarMonth-day-day-week',
                                day.weekend && 'amaui-CalendarMonth-day-weekend',
                                day.today && 'amaui-CalendarMonth-day-today',
                                day.between && 'amaui-CalendarMonth-day-between',
                                day.selected && 'amaui-CalendarMonth-day-selected',
                                day.start && 'amaui-CalendarMonth-day-start',
                                day.end && 'amaui-CalendarMonth-day-end'
                              ],

                              PaginationItemProps?.className,
                              classes.dayValue
                            ])}

                            style={{
                              ...(day.today ? {
                                boxShadow: `inset 0px 0px 0px 1px ${palette[40]}`
                              } : undefined),

                              ...(day.selected ? {
                                color: theme.methods.palette.color.value(undefined, 90, true, palette),
                                backgroundColor: theme.methods.palette.color.value(undefined, 40, true, palette)
                              } : undefined),

                              ...PaginationItemProps?.style
                            }}

                            {...propsDay}
                          >
                            {day.value}
                          </PaginationItem>
                        )}
                    </Line>
                  );
                })}
              </Line>
            ))}
          </Line>
        )}
      </Surface>
    );
  };

  return (
    <Line
      ref={ref}

      gap={0}

      direction='column'

      className={classNames([
        staticClassName('CalendarMonth', theme) && [
          'amaui-CalendarMonth-root',
          `amaui-CalendarMonth-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        classes[`move_${refs.move.current}`],
        !labels && classes.root_no_labels,
        disabled && classes.disabled
      ])}

      {...(isMonthFrom && { 'data-month-from': true })}

      {...(isMonthTo && { 'data-month-to': true })}

      {...other}
    >
      {/* Day names */}
      {labels && (
        <Line
          gap={0}

          direction='row'

          align='center'

          justify='space-between'

          className={classNames([
            staticClassName('CalendarMonth', theme) && [
              'amaui-CalendarMonth-day-names'
            ],

            classes.dayNames
          ])}
        >
          {dayNames.map((day: number, index: number) => (
            <Line
              key={index}

              version='b3'

              direction='row'

              align='center'

              justify='center'

              Component={Type}

              className={classNames([
                staticClassName('CalendarMonth', theme) && [
                  'amaui-CalendarMonth-day-name'
                ],

                classes.dayName,
                classes[`dayName_size_${size}`]
              ])}
            >
              {renderDayNameMethod(day)}
            </Line>
          ))}
        </Line>
      )}

      {/* Weeks */}
      {noTransition && (
        getCalendar()
      )}

      {!noTransition && (
        <Transitions
          id={refs.id.current}

          mode='in-out-follow'

          switch

          {...TransitionsProps}
        >
          <Transition
            key={id}

            in

            {...TransitionProps}
          >
            {getCalendar}
          </Transition>
        </Transitions>
      )}
    </Line>
  );
});

CalendarMonth.displayName = 'amaui-CalendarMonth';

export default CalendarMonth;
