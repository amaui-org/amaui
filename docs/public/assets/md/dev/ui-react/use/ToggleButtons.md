

### API

#### IToggleButtons

```ts
interface IToggleButtons extends IButtons {
}
```

#### ToggleButtons

```ts
const ToggleButtons: React.ForwardRefExoticComponent<Omit<IToggleButtons, "ref"> & React.RefAttributes<unknown>>;
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
