

### API

#### ISelect

```ts
interface ISelect extends ITextField {
    multiple?: boolean;
    autoWidth?: boolean;
    getLabel?: (item: TElement, props: any) => TElement;
    chip?: boolean;
    renderValues?: (value: string | string[]) => TElement;
    ChipGroupProps?: TPropsAny;
    ListProps?: TPropsAny;
    MenuProps?: TPropsAny;
}
```

#### Select

```ts
const Select: React.ForwardRefExoticComponent<Omit<ISelect, "ref"> & React.RefAttributes<unknown>>;
```


{
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