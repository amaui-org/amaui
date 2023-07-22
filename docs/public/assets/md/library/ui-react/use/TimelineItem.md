

## API

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


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Timeline",
      "to": "/dev/ui-react/use/Timeline"
    },
    "next": {
      "label": "UI react: Timer",
      "to": "/dev/ui-react/use/Timer"
    }
  }
}~
