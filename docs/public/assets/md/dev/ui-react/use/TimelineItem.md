

### API

#### ITimelineItem

```ts
interface ITimelineItem extends ILine {
    orientation?: 'vertical' | 'horizontal';
    start?: TElement;
    end?: TElement;
    DividerProps?: TPropsAny;
    IconProps?: TPropsAny;
    Icon?: TElementReference;
    Divider?: TElementReference;
}
```

#### TimelineItem

```ts
const TimelineItem: React.ForwardRefExoticComponent<Omit<ITimelineItem, "ref"> & React.RefAttributes<unknown>>;
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