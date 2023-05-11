

### API

#### TCalendarMonthValue

```ts
type TCalendarMonthValue = AmauiDate | [AmauiDate, AmauiDate];
```

#### TCalendarMonthCalendar

```ts
type TCalendarMonthCalendar = AmauiDate;
```

#### ICalendarMonthValuesValue

```ts
interface ICalendarMonthValuesValue {
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
```

#### TCalendarMonthValues

```ts
type TCalendarMonthValues = [ICalendarMonthValuesValue, ICalendarMonthValuesValue];
```

#### ICalenarDays

```ts
interface ICalenarDays extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    value?: TCalendarMonthValue;
    valueDefault?: TCalendarMonthValue;
    onChange?: (value: TCalendarMonthValue) => any;
    calendar?: TCalendarMonthCalendar;
    calendarDefault?: TCalendarMonthCalendar;
    onChangeCalendar?: (value: TCalendarMonthCalendar) => any;
    now?: boolean;
    outside?: boolean;
    range?: boolean;
    weekStartDay: 'Monday' | 'Sunday';
    noTransition?: boolean;
    offset?: number;
    min?: AmauiDate;
    max?: AmauiDate;
    validate?: (value: AmauiDate) => boolean;
    labels?: boolean;
    valid?: (value: AmauiDate, version: 'day' | 'month' | 'year') => boolean;
    renderDay?: (value: AmauiDate, props: any, today: boolean, weekend: boolean, selected: boolean, outside: boolean) => React.ReactNode;
    TransitionProps?: TPropsAny;
    TransitionsProps?: TPropsAny;
}
```

#### CalendarMonth

```ts
const CalendarMonth: React.ForwardRefExoticComponent<Omit<ICalenarDays, "ref"> & React.RefAttributes<unknown>>;
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
}
