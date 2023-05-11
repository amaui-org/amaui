

### API

#### TTimePickerValue

```ts
type TTimePickerValue = AmauiDate | [AmauiDate, AmauiDate];
```

#### TTimePickerSelecting

```ts
type TTimePickerSelecting = TClockUnit | [TClockUnit, TClockUnit];
```

#### ITimePicker

```ts
interface ITimePicker extends Omit<IAdvancedTextField, 'version'> {
    version?: 'auto' | 'mobile' | 'desktop';
    value?: TTimePickerValue;
    valueDefault?: TTimePickerValue;
    onChange?: (value: TTimePickerValue) => any;
    selecting?: TTimePickerSelecting;
    selectingDefault?: TTimePickerSelecting;
    onChangeSelecting?: (value: TTimePickerSelecting) => any;
    now?: boolean;
    range?: boolean;
    static?: boolean;
    valid?: (value: AmauiDate, version: TClockUnit) => boolean;
    validate?: (value: AmauiDate) => boolean;
    min?: AmauiDate;
    max?: AmauiDate;
    autoNext?: boolean | Record<TValueBreakpoints, boolean>;
    autoCloseOnLast?: boolean | Record<TValueBreakpoints, boolean>;
    openMobile?: 'input' | 'select';
    openDesktop?: 'input' | 'select';
    selectModalSubHeadingText?: string;
    selectModalSubHeadingTextRange?: string;
    inputModalSubHeadingText?: string;
    inputModalSubHeadingTextRange?: string;
    orientation?: 'vertical' | 'horizontal' | Record<TValueBreakpoints, 'vertical' | 'horizontal'>;
    format?: '12' | '24';
    hour?: boolean;
    minute?: boolean;
    second?: boolean;
    switch?: boolean | Record<TValueBreakpoints, boolean>;
    placeholder?: string;
    heading?: boolean;
    actions?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<any>) => any;
    onClose?: (event: React.MouseEvent<any>) => any;
    onCancel?: (event: React.MouseEvent<any>) => any;
    onNow?: (event: React.MouseEvent<any>) => any;
    onOk?: (event: React.MouseEvent<any>) => any;
    renderValue?: (value: AmauiDate, version: TClockUnit, x: number, y: number, valueNumber: number, otherProps: any) => React.ReactNode;
    Icon?: TElementReference;
    IconEnter?: TElementReference;
    MainProps?: TPropsAny;
    ModalProps?: TPropsAny;
    MiddleProps?: TPropsAny;
    ButtonProps?: TPropsAny;
    TooltipProps?: TPropsAny;
    ToggleButtonsProps?: TPropsAny;
    ToggleButtonProps?: TPropsAny;
    IconButtonProps?: TPropsAny;
    InputProps?: TPropsAny;
    ClockProps?: TPropsAny;
    TabsProps?: TPropsAny;
    TabFromProps?: TPropsAny;
    TabToProps?: TPropsAny;
    AdvancedTextFieldProps?: TPropsAny;
}
```

#### TimePicker

```ts
const TimePicker: React.ForwardRefExoticComponent<Omit<ITimePicker, "ref"> & React.RefAttributes<unknown>>;
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
