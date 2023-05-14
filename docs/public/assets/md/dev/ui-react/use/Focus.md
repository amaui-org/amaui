

## API

#### matches

```ts
const matches: (value: Element) => any;
```

#### queryMatchFocusable

```ts
const queryMatchFocusable = "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"]):not([disabled]), details:not([disabled]), summary:not(:disabled)";
```

#### IFocus

```ts
interface IFocus extends IBaseElement {
}
```

#### Focus

```ts
const Focus: React.ForwardRefExoticComponent<Omit<IFocus, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: FileChoose",
      "to": "/dev/ui-react/use/FileChoose"
    },
    "next": {
      "label": "UI react: Grid",
      "to": "/dev/ui-react/use/Grid"
    }
  }
}~
