

### API

#### TFileChooseValue

```ts
type TFileChooseValue = File | Array<File>;
```

#### IFileChoose

```ts
interface IFileChoose extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    inputRef?: TRef;
    max?: number;
    allowedTypes?: Array<string>;
    files?: Array<File>;
    valueDefault?: TFileChooseValue;
    value?: TFileChooseValue;
    multiple?: boolean;
    accept?: string;
    capture?: boolean | 'user' | 'environment';
    remove?: boolean;
    renderFiles?: (value: TFileChooseValue, onRemove: (index: number) => any) => any;
    onClick?: (event: React.MouseEvent<any>) => any;
    onChange?: (value: TFileChooseValue) => any;
    IconStart?: TElementReference;
    inputProps?: TPropsAny;
    WrapperProps?: TPropsAny;
    ComponentProps?: TPropsAny;
}
```

#### FileChoose

```ts
const FileChoose: React.ForwardRefExoticComponent<Omit<IFileChoose, "ref"> & React.RefAttributes<unknown>>;
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
