

### API

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
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
