

### API

#### IOptions

```ts
interface IOptions {
    utc?: boolean;
    overrides?: {
        months?: string[];
        monthsAbr?: string[];
        daysWeek?: string[];
        daysWeekAbr?: string[];
    };
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
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
