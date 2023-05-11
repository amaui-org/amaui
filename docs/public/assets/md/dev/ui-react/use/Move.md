

### API

#### IMove

```ts
interface IMove extends IBaseElement {
    version?: 'regular' | 'fixed';
    manage?: boolean;
    manageLevel?: number;
    onMouseDown?: (event: React.MouseEvent<any>) => any;
    onTouchStart?: (event: React.TouchEvent<any>) => any;
}
```

#### Move

```ts
const Move: React.ForwardRefExoticComponent<Omit<IMove, "ref"> & React.RefAttributes<unknown>>;
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
