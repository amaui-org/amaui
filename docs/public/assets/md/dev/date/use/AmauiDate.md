
# AmauiDate

### Value

Value can be any of the following, any value that's a valid argument for the `Date` class:

- Date string
- Milliseconds as a number
- AmauiDate instance
- Date instance

### Properties

#### Value

Value as a Date value.

```ts
const amauiDate = new AmauiDate();

amauiDate.value;

// Date { }
```

#### Millisecond

Millisecond value.

```ts
const amauiDate = new AmauiDate();

amauiDate.millisecond;

// 114
```

#### Milliseconds

Milliseconds value.

```ts
const amauiDate = new AmauiDate();

amauiDate.milliseconds;

// 1685217383990
```

#### Second

Second value.

```ts
const amauiDate = new AmauiDate();

amauiDate.second;

// 14
```

#### Minute

Minute value.

```ts
const amauiDate = new AmauiDate();

amauiDate.minute;

// 41
```

#### Hour

Hour value.

```ts
const amauiDate = new AmauiDate();

amauiDate.hour;

// 14
```

#### Day

Day value.

```ts
const amauiDate = new AmauiDate();

amauiDate.day;

// 27
```

#### Day week

Day in the week value.

```ts
const amauiDate = new AmauiDate();

amauiDate.dayWeek;

// 4
```

#### Day year

Day in the year value.

```ts
const amauiDate = new AmauiDate();

amauiDate.dayYear;

// 147
```

#### Week

Week value.

```ts
const amauiDate = new AmauiDate();

amauiDate.week;

// 24
```

#### Month

Month value.

```ts
const amauiDate = new AmauiDate();

amauiDate.month;

// 4
```

#### Year

Year value.

```ts
const amauiDate = new AmauiDate();

amauiDate.year;

// 2024
```

### Methods

#### unix

Returns unix date value.

```ts
const amauiDate = new AmauiDate();

amauiDate.unix;

// 1685217383
```

#### utc

All time unit values will be in utc.

```ts
const amauiDate = new AmauiDate();

amauiDate.hour;

// 14

amauiDate.utc().hour;

// 13
```

#### iso

Returns iso date value.

```ts
const amauiDate = new AmauiDate();

amauiDate.unix;

// '2023-05-27T19:56:23.990Z'
```

#### local

All time unit values will be in the local timezone value.

```ts
const amauiDate = new AmauiDate();

amauiDate.local().hour;

// 14
```

#### valid

Returns if the value is valid Date.

```ts
const amauiDate = new AmauiDate();

amauiDate.valid;

// true
```

#### Value of

Returns value in milliseconds.

```ts
const amauiDate = new AmauiDate();

amauiDate.valueOf;

// 1685217383990
```

#### Days in month

Returns days in the value's month.

```ts
const amauiDate = new AmauiDate();

amauiDate.daysInMonth;

// 31
```

#### Weeks in year

Returns weeks in the value's year.

```ts
const amauiDate = new AmauiDate();

amauiDate.weeksInYear;

// 52
```

#### Months

Returns month names of the year.

```ts
const amauiDate = new AmauiDate();

amauiDate.months;

// ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
```

#### Months abbreviated

Returns month abbreviated names of the year.

```ts
const amauiDate = new AmauiDate();

amauiDate.monthsAbr;

// ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
```

#### Days week

Returns day names of the week.

```ts
const amauiDate = new AmauiDate();

amauiDate.daysWeek;

// ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

#### Days week abbreviated

Returns day abbreviated names of the week.

```ts
const amauiDate = new AmauiDate();

amauiDate.daysWeekAbr;

// ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
```

#### Timezone

Returns new AmauiDate with the value localized to that timezone.

```ts
const amauiDate = new AmauiDate();

amauiDate.hour;

// 14

amauiDate.timezone('UTC').hour;

// 13
```

### Methods static

#### unix

```ts
AmauiDate.unix;

// 1685219927
```

#### milliseconds

```ts
AmauiDate.milliseconds;

// 1685219933011
```

#### iso

```ts
AmauiDate.iso;

// '2023-05-27T20:38:58.490Z'
```

#### daysInMonth

```ts
AmauiDate.daysInMonth;

// 31
```

#### valueOf

```ts
AmauiDate.unix;

// 1685219933011
```

#### local

```ts
AmauiDate.local;

// AmauiDate { }
```

#### amauiDate

```ts
AmauiDate.amauiDate;

// AmauiDate { }
```

## API

#### IOptionsOverrides

```ts
interface IOptionsOverrides {
    months?: string[];
    monthsAbr?: string[];
    daysWeek?: string[];
    daysWeekAbr?: string[];
}
```

#### IOptions

```ts
interface IOptions {
    utc?: boolean;
    overrides?: IOptionsOverrides;
}
```

#### TTimeUnits

```ts
type TTimeUnits = 'millisecond' | 'milliseconds' | 'second' | 'minute' | 'hour' | 'day' | 'dayWeek' | 'dayYear' | 'week' | 'month' | 'year';
```

#### TIsQuery

```ts
type TIsQuery = 'before' | 'after' | 'same' | 'between' | 'before or same' | 'after or same' | 'leap-year' | 'leap-month';
```

#### units

```ts
const units: string[];
```

#### months

```ts
const months: string[];
```

#### monthsAbr

```ts
const monthsAbr: string[];
```

#### daysWeek

```ts
const daysWeek: string[];
```

#### daysWeekAbr

```ts
const daysWeekAbr: string[];
```

#### AmauiDate

```ts
default class AmauiDate {
    value_: string | number | AmauiDate | Date;
    options: IOptions;
    value: Date;
    millisecond: number;
    milliseconds: number;
    second: number;
    minute: number;
    hour: number;
    day: number;
    dayWeek: number;
    dayYear: number;
    week: number;
    month: number;
    year: number;
    static get utc(): AmauiDate;
    static get daysInMonth(): number;
    static get valueOf(): number;
    static get unix(): number;
    static get milliseconds(): number;
    static get iso(): string;
    static get amauiDate(): AmauiDate;
    static get local(): AmauiDate;
    constructor(value_?: string | number | AmauiDate | Date, options?: IOptions);
    private init;
    weekValue(): number;
    get months(): string[];
    get monthsAbr(): string[];
    get daysWeek(): string[];
    get daysWeekAbr(): string[];
    get valid(): boolean;
    get local(): AmauiDate;
    get utc(): AmauiDate;
    get iso(): string;
    get daysInMonth(): number;
    get weeksInYear(): number;
    get valueOf(): number;
    get unix(): number;
    timezone(value: string): AmauiDate;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: ago",
      "to": "/dev/date/use/ago"
    },
    "next": {
      "label": "Date: diff",
      "to": "/dev/date/use/diff"
    }
  }
}~
