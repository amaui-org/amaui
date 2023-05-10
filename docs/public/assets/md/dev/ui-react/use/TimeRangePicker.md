

### API

#### ITimeRangePicker

```ts
interface ITimeRangePicker extends ITimePicker {
}
```

#### TimeRangePicker

```ts
const TimeRangePicker: React.ForwardRefExoticComponent<Omit<ITimeRangePicker, "ref"> & React.RefAttributes<unknown>>;
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