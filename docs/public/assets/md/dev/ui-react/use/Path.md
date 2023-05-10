

### API

#### IPath

```ts
interface IPath extends IBaseElement {
    value?: any;
}
```

#### Path

```ts
const Path: React.ForwardRefExoticComponent<Omit<IPath, "ref"> & React.RefAttributes<unknown>>;
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