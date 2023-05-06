

### API

#### ITimeline

```ts
interface ITimeline extends ILine {
    orientation?: 'vertical' | 'horizontal';
}
```

#### Timeline

```ts
const Timeline: React.ForwardRefExoticComponent<Omit<ITimeline, "ref"> & React.RefAttributes<unknown>>;
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
