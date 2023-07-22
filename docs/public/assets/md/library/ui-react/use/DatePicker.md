

## API

#### SEPARATOR_SYMBOL

```ts
const SEPARATOR_SYMBOL = "\u2013";
```

#### SEPARATOR

```ts
const SEPARATOR: string;
```

#### IDatePicker

```ts
interface IDatePicker extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: 'auto' | 'mobile' | 'desktop';
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
    switch?: boolean | Record<TValueBreakpoints, boolean>;
    useHelperText?: boolean | Record<TValueBreakpoints, boolean>;
    label?: TElement;
    labelFrom?: string;
    labelTo?: string;
    fullScreen?: boolean;
    heading?: boolean;
    actions?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<any>) => any;
    onClose?: (event: React.MouseEvent<any>) => any;
    onCancel?: (event: React.MouseEvent<any>) => any;
    onToday?: (event: React.MouseEvent<any>) => any;
    onOk?: (event: React.MouseEvent<any>) => any;
    Icon?: TElementReference;
    IconCheck?: TElementReference;
    IconEnter?: TElementReference;
    IconClose?: TElementReference;
    CalendarProps?: TPropsAny;
    CalendarPropsDesktop?: TPropsAny;
    CalendarPropsMobile?: TPropsAny;
    TooltipProps?: TPropsAny;
    IconButtonProps?: TPropsAny;
    AdvancedTextFieldProps?: TPropsAny;
    ActionButtonProps?: TPropsAny;
    ModalProp?: TPropsAny;
}
```

#### DatePicker

```ts
const DatePicker: React.ForwardRefExoticComponent<Omit<IDatePicker, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Countdown",
      "to": "/dev/ui-react/use/Countdown"
    },
    "next": {
      "label": "UI react: DateRangePicker",
      "to": "/dev/ui-react/use/DateRangePicker"
    }
  }
}~
