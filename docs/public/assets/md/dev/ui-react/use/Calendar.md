

### API

#### TGetAmauiDates

```ts
type TGetAmauiDates = (value: TCalendarMonthValue, calendar: TCalendarMonthCalendar, props: TPropsAny) => Array<{
```

#### TCalendarUnit

```ts
type TCalendarUnit = 'day' | 'month' | 'year';
```

#### ICalendar

```ts
interface ICalendar extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    version?: 'regular' | 'year';
    value?: TCalendarMonthValue;
    valueDefault?: TCalendarMonthValue;
    onChange?: (value: TCalendarMonthValue) => any;
    calendar?: TCalendarMonthCalendar;
    calendarDefault?: TCalendarMonthCalendar;
    onChangeCalendar?: (value: TCalendarMonthCalendar) => any;
    menu?: 'month-year' | 'month';
    now?: boolean;
    range?: boolean;
    calendars?: number;
    min?: AmauiDate;
    max?: AmauiDate;
    validate?: (value: AmauiDate) => boolean;
    menu_month_previous_unit?: TCalendarUnit;
    menu_month_next_unit?: TCalendarUnit;
    valid?: (value: AmauiDate, version: TCalendarUnit) => boolean;
    geMonths?: TGetAmauiDates;
    geYears?: TGetAmauiDates;
    belowCalendars?: any;
    IconPrevious?: TElementReference;
    IconNext?: TElementReference;
    IconDropDown?: TElementReference;
    CalendarMonthProps?: any;
    CalendarDayProps?: ICalenarDays;
    OptionButtonProps: any;
}
```

#### Calendar

```ts
const Calendar: React.ForwardRefExoticComponent<Omit<ICalendar, "ref"> & React.RefAttributes<unknown>>;
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
