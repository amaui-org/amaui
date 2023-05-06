

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

