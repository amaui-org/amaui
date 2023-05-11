

### API

#### IZoom

```ts
interface IZoom extends ITransition {
}
```

#### Zoom

```ts
const Zoom: React.ForwardRefExoticComponent<Omit<IZoom, "ref"> & React.RefAttributes<unknown>>;
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
