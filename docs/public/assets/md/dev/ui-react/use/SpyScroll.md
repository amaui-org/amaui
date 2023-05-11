

### API

#### ISpyScroll

```ts
interface ISpyScroll extends IBaseElement {
    ids?: Array<string>;
    offset?: number;
    offsetStart?: number;
    addClassName?: string;
    addStyle?: TStyle;
}
```

#### SpyScroll

```ts
const SpyScroll: React.ForwardRefExoticComponent<Omit<ISpyScroll, "ref"> & React.RefAttributes<unknown>>;
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
