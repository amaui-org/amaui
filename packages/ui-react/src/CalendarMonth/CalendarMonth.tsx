import React from 'react';

import { classNames, style, useOnesyTheme } from '@onesy/style-react';
import { arrayToParts, is } from '@onesy/utils';
import { add, OnesyDate, endOf, format, remove, set, startOf, is as isOnesyDate } from '@onesy/date';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import TypeElement from '../Type';
import PaginationItemElement from '../PaginationItem';
import TransitionsElement from '../Transitions';
import TransitionElement, { TTransitionStatus } from '../Transition';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, IPropsAny } from '../types';
import { ICalendarViewsView } from '../CalendarViews/CalendarViews';

const useStyle = style(theme => ({
  root: {
    position: 'relative'
  },

  root_transition: {
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

  daySelected: {
    '&.onesy-Button-disabled': {
      opacity: 1
    }
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

  dayRangeStart: {
    '&::before': {
      display: 'none'
    }
  },

  dayRangeEnd: {
    '&::after': {
      display: 'none'
    }
  },

  dayStartSelection: {
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '0',
      height: '100%',
      width: '50%',
      zIndex: 0
    },

    '&.onesy-enabled::after': {
      backgroundColor: `hsl(from var(--onesy-color) h s ${theme.palette.light ? 85 : 40})`
    },

    '&.onesy-disabled::after': {
      backgroundColor: `hsl(from var(--onesy-color) h s ${theme.palette.light ? 90 : 35})`
    }
  },

  dayEndSelection: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '0',
      right: '50%',
      top: '0',
      height: '100%',
      width: '50%',
      zIndex: 0
    },

    '&.onesy-enabled::before': {
      backgroundColor: `hsl(from var(--onesy-color) h s ${theme.palette.light ? 85 : 40})`
    },

    '&.onesy-disabled::before': {
      backgroundColor: `hsl(from var(--onesy-color) h s ${theme.palette.light ? 90 : 35})`
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
    position: 'relative',
    zIndex: 1,

    '&:hover': {
      boxShadow: 'inset 0px 0px 0px 1px currentColor !important'
    }
  },

  disabled: {
    opacity: '0.54',
    pointerEvents: 'none'
  }
}), { name: 'onesy-CalendarMonth' });

export type TCalendarMonthValue = OnesyDate | [OnesyDate, OnesyDate];

export type TCalendarMonthCalendar = OnesyDate;

export type ICalendarMonthValuesValue = {
  day: string;
  month: string;
  year: string;
  inputModal: string;
  input: string;
  selected: OnesyDate;
  date: OnesyDate;
  previous: OnesyDate;
  move: 'previous' | 'next';
};

export type TCalendarMonthValues = [ICalendarMonthValuesValue, ICalendarMonthValuesValue];

export type ICalendarMonth = Omit<ILine, 'onChange'> & {
  value?: TCalendarMonthValue;
  valueDefault?: TCalendarMonthValue;
  onChange?: (value: TCalendarMonthValue) => any;

  calendar?: TCalendarMonthCalendar;
  calendarDefault?: TCalendarMonthCalendar;
  onChangeCalendar?: (value: TCalendarMonthCalendar) => any;

  colorSelected?: IColor;
  colorSelectedFuture?: IColor;

  selected?: Array<[OnesyDate, OnesyDate?]>;

  onTimeClick?: (date: OnesyDate, view: ICalendarViewsView, event: MouseEvent) => any;

  now?: boolean;
  outside?: boolean;
  range?: boolean;
  weekStartDay?: 'Monday' | 'Sunday';
  noTransition?: boolean;
  offset?: number;
  min?: OnesyDate;
  max?: OnesyDate;
  validate?: (value: OnesyDate) => boolean;
  labels?: boolean;
  dayNamesFull?: boolean;

  valid?: (value: OnesyDate, version: 'day' | 'month' | 'year') => boolean;
  renderDay?: (value: OnesyDate, props: any, day: any, outside: boolean) => React.ReactNode;
  renderDayValue?: (value: number, date: OnesyDate, day: any) => any;
  renderDayName?: (order: number) => any;

  DayNameProps?: IPropsAny;
  PaginationItemProps?: IPropsAny;
  TransitionProps?: IPropsAny;
  TransitionsProps?: IPropsAny;
};

export interface IDay {
  value: number;
  in: boolean;
  dayWeek: number;
  weekend: boolean;
  today: boolean;
  future: boolean;
  is: {
    start: boolean;
    between: boolean;
    end: boolean;
    same: boolean;
    selected: boolean;
    outside: boolean;

    value: {
      has: boolean;
      start: boolean;
      between: boolean;
      end: boolean;
      same: boolean;
    };

    fromSelected: boolean;

    monthStart: boolean;
    monthEnd: boolean;

    selectedIndex: number;
    selectedSame: boolean;
  };
  start: boolean;
  end: boolean;
  onesyDate: OnesyDate;
}

const CalendarMonth: React.FC<ICalendarMonth> = props__ => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyCalendarMonth?.props?.default, ...props__ };

  const Line = theme?.elements?.Line || LineElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const Type = theme?.elements?.Type || TypeElement;

  const PaginationItem = theme?.elements?.PaginationItem || PaginationItemElement;

  const Transitions = theme?.elements?.Transitions || TransitionsElement;

  const Transition = theme?.elements?.Transition || TransitionElement;

  const {
    tonal,
    color = 'primary',

    size = 'regular',

    value: value_,
    valueDefault,
    onChange,

    calendar: calendar_,
    calendarDefault,
    onChangeCalendar,

    colorSelected = 'secondary',

    colorSelectedFuture = props.colorSelected || 'secondary',

    selected,

    onTimeClick,

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
    noTransition = true,

    valid: valid_,
    renderDay,
    renderDayValue,
    renderDayName,

    disabled,

    DayNameProps,
    PaginationItemProps,
    TransitionProps,
    TransitionsProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [value, setValue] = React.useState(() => {
    const valueResult = (valueDefault !== undefined ? valueDefault : value_) || (now && (range ? [new OnesyDate(), new OnesyDate()] : [new OnesyDate()]));

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<OnesyDate>).filter(Boolean);
  });
  const [calendar, setCalendar] = React.useState((calendarDefault !== undefined ? calendarDefault : calendar_) || new OnesyDate());

  let month: OnesyDate = calendar || value[0] || new OnesyDate();

  if (!(month?.valid && month?.daysInMonth)) month = new OnesyDate();

  const refs = {
    id: React.useRef<string>(`${(month).year} ${(month).month}`),
    previous: React.useRef<OnesyDate>(month),
    previousTheme: React.useRef<boolean>(theme.palette.light),
    move: React.useRef<'previous' | 'next'>(null),
    noTransition: React.useRef<any>(null)
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

  const valid = (...args: [OnesyDate, any]) => {
    if (is('function', valid_)) return valid_(...args);

    const onesyDate = args[0];

    if (min || max || validate) {
      let response = true;

      if (is('function', validate)) response = validate(onesyDate);

      if (min !== undefined) response = response && isOnesyDate(onesyDate, 'after or same', min);

      if (max !== undefined) response = response && isOnesyDate(onesyDate, 'before or same', max);

      return response;
    }

    return true;
  };

  const onUpdateCalendar = (valueNew: OnesyDate) => {
    // Inner update
    if (!props.hasOwnProperty('calendar')) setCalendar(valueNew);

    if (is('function', onChangeCalendar)) onChangeCalendar(valueNew);
  };

  const onUpdate = (valueUpdated: OnesyDate, offsetMultiplier?: number) => {
    let valueNew: Array<OnesyDate> = [valueUpdated, value[1]].filter(Boolean);

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
        else if (valueUpdated.milliseconds < value[0]?.milliseconds) index = 0;
        else if (valueUpdated.milliseconds > value[1]?.milliseconds) index = 1;
        else {
          const middle = Math.abs(value[1].milliseconds - value[0]?.milliseconds) / 2;

          index = valueUpdated.milliseconds <= (value[0]?.milliseconds + middle) ? 0 : 1;
        }

        valueNew = [...value];

        valueNew[index] = valueUpdated;
      }

      // start of the day
      if (valueNew[0]) {
        valueNew[0] = startOf(valueNew[0], 'day');
      }

      // end of the day
      if (valueNew[1]) {
        valueNew[1] = endOf(valueNew[1], 'day');
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
  };

  const dayNames = [1, 2, 3, 4, 5, 6];

  if (weekStartDay === 'Monday') dayNames.push(7);
  else dayNames.unshift(7);

  const renderDayNameMethod = is('function', renderDayName) ? renderDayName : (order_: number) => {
    const values = {
      1: dayNamesFull ? l('Monday') : l('Mo'),
      2: dayNamesFull ? l('Tuesday') : l('Tu'),
      3: dayNamesFull ? l('Wednesday') : l('We'),
      4: dayNamesFull ? l('Thursday') : l('Th'),
      5: dayNamesFull ? l('Friday') : l('Fr'),
      6: dayNamesFull ? l('Saturday') : l('Sa'),
      7: dayNamesFull ? l('Sunday') : l('Su')
    };

    return values[order_];
  };

  const monthNow = new OnesyDate();

  // value or value range selected value
  let id = `${month.year} ${month.month} ${month.day} ${theme.palette.light}`;

  value.forEach(item => id += ` ${item.year} ${item.month} ${item.day}`);

  const monthStart = startOf(month, 'month');

  const previousMonth = remove(1, 'month', month);

  const previousMonthEnd = endOf(previousMonth, 'month');

  const nextMonth = add(1, 'month', month);

  const monthSame = refs.previous.current?.year === calendar?.year && refs.previous.current?.month === calendar?.month;

  const getRanges = (ranges: any) => {
    // Convert all ranges to start/end timestamps
    const rangeTimestamps = ranges.filter(itemRange => itemRange.filter(Boolean).length).map(itemRange => ({
      start: itemRange[0].milliseconds,
      end: (itemRange[1] || itemRange[0]).milliseconds
    }));

    // Sort by start time
    rangeTimestamps.sort((a, b) => a.start - b.start);

    // Merge overlapping ranges
    const mergedRanges = [];

    let currentRange = rangeTimestamps[0];

    for (let i = 1; i < rangeTimestamps.length; i++) {
      if (rangeTimestamps[i].start <= currentRange.end) {
        // Ranges overlap, merge them
        currentRange.end = Math.max(currentRange.end, rangeTimestamps[i].end);
      }
      else {
        // No overlap, push current range and start new one
        mergedRanges.push(currentRange);
        currentRange = rangeTimestamps[i];
      }
    }

    mergedRanges.push(currentRange);

    return mergedRanges.filter(Boolean);
  };

  const rangesValue = React.useMemo(() => {
    const ranges = [value].map(item => {
      return item.map((itemRange, index) => !index ? startOf(itemRange, 'day') : endOf(itemRange, 'day'));
    });

    return getRanges(ranges);
  }, [value]);

  const rangesSelected = React.useMemo(() => {
    const ranges = [...selected || []].map(item => {
      return item.map((itemRange, index) => !index ? startOf(itemRange, 'day') : endOf(itemRange, 'day'));
    });

    return getRanges(ranges);
  }, [selected]);

  const getDetails = (day: OnesyDate) => {
    const dayFormat = format(day, 'DD-MM-YYYY');

    const dayMonthStart = format(startOf(day, 'month'), 'DD-MM-YYYY');
    const dayMonthEnd = format(endOf(day, 'month'), 'DD-MM-YYYY');

    const result: any = {
      same: false,
      selected: false,
      outside: false,
      fromSelected: false,

      value: {
        has: false
      },

      monthStart: dayMonthStart === dayFormat,
      monthEnd: dayMonthEnd === dayFormat,

      selectedIndex: value.findIndex((item: any) => item.year === day.year && item.month === day.month && item.day === day.day),
      selectedSame: value.filter((item: any) => item.year === day.year && item.month === day.month && item.day === day.day).length === 2,
    };

    // pre-selected
    for (const itemSelectedRange of rangesSelected) {
      const rangeStartDay = format(new OnesyDate(itemSelectedRange.start), 'DD-MM-YYYY');
      const rangeEndDay = format(new OnesyDate(itemSelectedRange.end), 'DD-MM-YYYY');

      // start
      if (dayFormat === rangeStartDay) result.selected = result.start = true;

      // end
      if (dayFormat === rangeEndDay) result.selected = result.end = true;

      // between
      if (day.milliseconds >= itemSelectedRange.start && day.milliseconds <= itemSelectedRange.end) result.selected = result.between = true;

      // same
      result.same = result.start && result.end;

      if (result.selected) {
        result.fromSelected = true;

        break;
      }
    }

    // value
    for (const itemValueRange of rangesValue) {
      const rangeStartDay = format(new OnesyDate(itemValueRange.start), 'DD-MM-YYYY');
      const rangeEndDay = format(new OnesyDate(itemValueRange.end), 'DD-MM-YYYY');

      const resultValue: any = {};

      // start
      if (dayFormat === rangeStartDay) resultValue.selected = resultValue.start = true;

      // end
      if (dayFormat === rangeEndDay) resultValue.selected = resultValue.end = true;

      // between
      if (day.milliseconds >= itemValueRange.start && day.milliseconds <= itemValueRange.end) resultValue.selected = resultValue.between = true;

      // same
      resultValue.same = resultValue.start && resultValue.end;

      // value selected as well
      if (resultValue.selected) {
        result.value = {
          has: true,
          ...resultValue
        };

        result.selected = true;

        if (result.between && resultValue.between) {
          result.start = result.end = false;
        }

        if (!result.between) {
          result.start = result.start ?? resultValue.start;
          result.between = result.between ?? resultValue.between;
          result.end = result.end ?? resultValue.end;

          if (result.start && result.end) result.same = true;
        }
      }
    }

    if (!result.selected) result.outside = true;

    return result;
  };

  const days: Partial<IDay>[] = React.useMemo(() => {
    const items = [];
    const nowDate = new OnesyDate();

    const monthToUse = (month?.valid && month?.daysInMonth) ? month : new OnesyDate();

    // Add all month days
    for (let i = 0; i < monthToUse.daysInMonth; i++) {
      let day = set(i + 1, 'day', monthToUse);

      day = set(14, 'hour', day);

      const details = getDetails(day);

      items.push({
        value: i + 1,

        in: true,

        dayWeek: day.dayWeek,

        weekend: [0, 6].includes(day.dayWeek),

        today: day.year === monthNow.year && day.dayYear === monthNow.dayYear,

        future: day.milliseconds > nowDate.milliseconds,

        is: {
          ...details
        },

        onesyDate: day
      });
    }

    items[0].start = true;

    items[items.length - 1].end = true;

    // Add to start
    if (
      (weekStartDay === 'Sunday' && monthStart.dayWeek !== 0) ||
      (weekStartDay === 'Monday' && monthStart.dayWeek !== 1)
    ) {
      let toAdd = monthStart.dayWeek === 0 ? 6 : monthStart.dayWeek - 1;

      if (weekStartDay === 'Sunday') toAdd++;

      for (let i = 0; i < toAdd; i++) {
        const day = set(previousMonthEnd.day - i, 'day', previousMonth);

        const details = getDetails(day);

        items.unshift({
          value: day.day,

          in: false,

          dayWeek: day.dayWeek,

          weekend: [0, 6].includes(day.dayWeek),

          today: day.year === monthNow.year && day.dayYear === monthNow.dayYear,

          future: day.milliseconds > nowDate.milliseconds,

          is: {
            ...details
          },

          start: true,

          onesyDate: day
        });
      }
    }

    // Add to end
    const dayLast = items[items.length - 1];

    if (dayLast.dayWeek < 7) {
      let toAdd = 7 - dayLast.dayWeek;

      if (items.length + toAdd - 1 < 42) toAdd += 41 - (items.length + toAdd - 1);

      for (let i = 0; i < toAdd; i++) {
        const day = set(i + 1, 'day', nextMonth);

        const details = getDetails(day);

        items.push({
          value: i + 1,

          in: false,

          dayWeek: day.dayWeek,

          weekend: [0, 6].includes(day.dayWeek),

          today: day.year === monthNow.year && day.dayYear === monthNow.dayYear,

          future: day.milliseconds > nowDate.milliseconds,

          is: {
            ...details
          },

          end: true,

          onesyDate: day
        });
      }
    }

    return items;
  }, [month, rangesValue, rangesSelected]);

  const colorSelectedTheme = React.useMemo(() => {
    return theme.palette.color[colorSelected] || theme.methods.color(colorSelected);
  }, [colorSelected, theme]);

  const colorSelectedFutureTheme = React.useMemo(() => {
    return theme.palette.color[colorSelectedFuture] || theme.methods.color(colorSelectedFuture);
  }, [colorSelectedFuture, theme]);

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
        color={color}

        tonal={tonal}
      >
        {({ palette }) => (
          <Line
            gap={0.5}

            direction='column'

            align='unset'

            justify='unset'

            className={classNames([
              staticClassName('CalendarMonth', theme) && [
                'onesy-CalendarMonth-weeks'
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
                    'onesy-CalendarMonth-week'
                  ],

                  classes.week
                ])}
              >
                {week.map((day: IDay, index_: number) => {
                  const propsDay = {
                    onClick: () => onUpdate(day.onesyDate, day.start || day.end ? -1 : undefined),

                    disabled: (
                      (!day.in && !outside) ||
                      !valid(day.onesyDate, 'day') ||
                      // not prior to 1970, we may potentially update this in the future
                      day.onesyDate.year < 1970
                    )
                  };

                  const isEdge = (day.is.same || ((day.is.monthStart || day.is.monthEnd) && day.is.selected));

                  return (
                    <Line
                      key={index_}

                      direction='row'

                      align='center'

                      justify='center'

                      onClick={(event: MouseEvent) => {
                        const timeDate = startOf(day.onesyDate, 'hour');

                        onTimeClick?.(timeDate, 'month', event);
                      }}

                      className={classNames([
                        staticClassName('CalendarMonth', theme) && [
                          'onesy-CalendarMonth-day',
                          `onesy-CalendarMonth-day-${day.in ? 'in' : 'out'}`
                        ],

                        classes.day,
                        classes[`day_size_${size}`],
                        classes[`day_${day.in ? 'in' : 'out'}`],
                        (!day.in && !outside) && classes.day_out_no,
                        !propsDay.disabled ? 'onesy-enabled' : 'onesy-disabled',
                        day.is.between && 'onesy-is-between',
                        day.is.same && 'onesy-is-same',
                        day.is.start && 'onesy-is-start',
                        day.is.end && 'onesy-is-end',
                        // start
                        (day.is.start && !isEdge) && classes.dayStart,
                        // end
                        (day.is.end && !isEdge) && classes.dayEnd,
                        day.is.same && [
                          day.is.start && classes.dayRangeStart,
                          day.is.end && classes.dayRangeEnd
                        ],
                        day.is.start && !day.is.end && classes.dayRangeStart,
                        day.is.end && !day.is.start && classes.dayRangeEnd,
                        // between
                        (day.is.between || day.is.start || day.is.end) && [
                          day.dayWeek !== 0 && !day.is.monthEnd && classes.dayStartSelection,
                          day.dayWeek !== 1 && !day.is.monthStart && classes.dayEndSelection
                        ]
                      ])}

                      style={{
                        'z-index': `${day.is.selected ? ((day.is.start || day.is.end) ? 3 : 2) : 1}`,
                        '--onesy-color': theme.methods.palette.color.alpha(day.is.fromSelected ? (day.future ? colorSelectedFutureTheme : colorSelectedTheme)?.main : palette?.main, 1)
                      }}
                    >
                      {is('function', renderDay) ?
                        renderDay(day.onesyDate, propsDay, day, outside) :
                        (
                          <PaginationItem
                            tonal={tonal}

                            color='inherit'

                            size={size}

                            InteractionProps={{
                              background: false
                            }}

                            TypeProps={{
                              version: size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3',

                              priority: !day.is.selected ? !day.weekend ? 'primary' : 'secondary' : undefined
                            }}

                            aria-label={format(day.onesyDate, 'DD-MM-YYYY', { l })}

                            {...PaginationItemProps}

                            className={classNames([
                              staticClassName('CalendarMonth', theme) && [
                                'onesy-CalendarMonth-day-value',
                                day.in && 'onesy-CalendarMonth-day-in',
                                day.dayWeek && 'onesy-CalendarMonth-day-day-week',
                                day.weekend && 'onesy-CalendarMonth-day-weekend',
                                day.today && 'onesy-CalendarMonth-day-today',
                                day.is.between && 'onesy-CalendarMonth-day-between',
                                day.is.selected && 'onesy-CalendarMonth-day-selected',
                                day.is.start && 'onesy-CalendarMonth-day-start',
                                day.is.end && 'onesy-CalendarMonth-day-end'
                              ],

                              PaginationItemProps?.className,
                              classes.dayValue,
                              day.is.selected && classes.daySelected,
                              classes[`day_size_${size}`]
                            ])}

                            style={{
                              ...(day.is.value.has && {
                                '--onesy-color': theme.methods.palette.color.alpha(palette?.main, 1)
                              }),

                              ...(day.today ? {
                                boxShadow: `inset 0px 0px 0px 1px ${palette[theme.palette.light ? 40 : 60]}`
                              } : undefined),

                              ...(day.is.selected && day.is.between && {
                                color: `hsl(from var(--onesy-color) h s ${theme.palette.light ? 10 : 98})`,
                                backgroundColor: `hsl(from var(--onesy-color) h s ${theme.palette.light ? propsDay.disabled ? 90 : 85 : propsDay.disabled ? 35 : 40})`
                              }),

                              ...(day.is.selected && (!day.is.value.has ? (day.is.start || day.is.end) : (day.is.value.start || day.is.value.end)) && {
                                color: `hsl(from var(--onesy-color) h s ${theme.palette.light ? 98 : 10})`,
                                backgroundColor: `hsl(from var(--onesy-color) h s ${theme.palette.light ? propsDay.disabled ? 40 : 50 : propsDay.disabled ? 60 : 70})`
                              }),

                              ...PaginationItemProps?.style
                            }}

                            {...propsDay}
                          >
                            {is('function', renderDayValue) ? renderDayValue(day.value, day.onesyDate, day) : day.value}
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
      gap={0}

      direction='column'

      className={classNames([
        staticClassName('CalendarMonth', theme) && [
          'onesy-CalendarMonth-root',
          `onesy-CalendarMonth-size-${size}`
        ],

        className,
        noTransition ? classes.root : classes.root_transition,
        classes[`size_${size}`],
        classes[`move_${refs.move.current}`],
        !labels && classes.root_no_labels,
        disabled && classes.disabled
      ])}

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
              'onesy-CalendarMonth-day-names'
            ],

            classes.dayNames
          ])}
        >
          {dayNames.map((day: number, index: number) => (
            <Line
              key={index}

              direction='column'

              align='center'

              justify='center'

              className={classNames([
                staticClassName('CalendarMonth', theme) && [
                  'onesy-CalendarMonth-day-name'
                ],

                classes.dayName,
                classes[`dayName_size_${size}`]
              ])}
            >
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                align='center'

                {...DayNameProps}
              >
                {renderDayNameMethod(day)}
              </Type>
            </Line>
          ))}
        </Line>
      )}

      {/* Weeks */}
      {noTransition && getCalendar()}

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
};

CalendarMonth.displayName = 'onesy-CalendarMonth';

export default CalendarMonth;
