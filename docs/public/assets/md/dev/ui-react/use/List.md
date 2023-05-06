

### API

#### IList

```ts
interface IList extends ISurface {
    size?: TSize;
    menu?: TElement;
    menuOpen?: boolean;
    noMaxWidth?: boolean;
    indent?: number;
    paddingHorizontal?: 'both' | 'start' | 'end' | 'none';
    paddingVertical?: 'both' | 'start' | 'end' | 'none';
    SurfaceProps?: any;
}
```

#### List

```ts
const List: React.ForwardRefExoticComponent<Omit<IList, "ref"> & React.RefAttributes<unknown>>;
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
