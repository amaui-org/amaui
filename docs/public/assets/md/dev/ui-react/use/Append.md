

### API

#### TAppendPadding

```ts
type TAppendPadding = Array<number>;
```

#### IAppendValue

```ts
interface IAppendValue {
    x?: number;
    y?: number;
    switch?: boolean;
    init?: boolean;
}
```

#### Append

```ts
const Append: {
    (props_: IAppend): JSX.Element;
    displayName: string;
};
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
