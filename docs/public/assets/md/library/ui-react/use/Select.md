

## API

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


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: ScreenCapture",
      "to": "/library/ui-react/use/ScreenCapture"
    },
    "next": {
      "label": "UI react: Slide",
      "to": "/library/ui-react/use/Slide"
    }
  }
}~
