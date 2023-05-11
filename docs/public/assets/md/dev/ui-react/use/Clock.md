

### API

#### TClockValue

```ts
type TClockValue = AmauiDate;
```

#### TClockFormat

```ts
type TClockFormat = '12' | '24';
```

#### TClockUnit

```ts
type TClockUnit = 'hour' | 'minute' | 'second';
```

#### TClockDayTime

```ts
type TClockDayTime = 'am' | 'pm';
```

#### IClock

```ts
interface IClock extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    value?: TClockValue;
    valueDefault?: TClockValue;
    onChange?: (value: TClockValue) => any;
    selecting?: TClockUnit;
    selectingDefault?: TClockUnit;
    onChangeSelecting?: (value: TClockUnit) => any;
    format?: TClockFormat;
    dayTime?: TClockDayTime;
    hour?: boolean;
    minute?: boolean;
    second?: boolean;
    autoNext?: boolean;
    min?: AmauiDate;
    max?: AmauiDate;
    validate?: (value: AmauiDate) => boolean;
    readOnly?: boolean;
    disabled?: boolean;
    valid?: (value: AmauiDate, selecting: TClockUnit) => any;
    renderValue?: (value: TClockValue, version: TClockUnit, x: number, y: number, valueNumber: number, otherProps: any) => React.ReactNode;
    onDoneSelecting?: (value: TClockValue, selecting: TClockUnit) => any;
}
```

#### Clock

```ts
const Clock: React.ForwardRefExoticComponent<Omit<IClock, "ref"> & React.RefAttributes<unknown>>;
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
