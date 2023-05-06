

### API

#### ITopAppBar

```ts
interface ITopAppBar extends Omit<ISurface, 'version'> {
    version?: 'small' | 'center' | 'medium' | 'large';
    size?: TSize;
    title?: TElement;
    start?: TElement;
    end?: TElement;
    position?: 'relative' | 'absolute' | 'static' | 'position' | 'unset';
}
```

#### TopAppBar

```ts
const TopAppBar: React.ForwardRefExoticComponent<Omit<ITopAppBar, "ref"> & React.RefAttributes<unknown>>;
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
