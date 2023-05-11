

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
      "label": "UI react: TimeRangePicker",
      "to": "/dev/ui-react/use/TimeRangePicker"
    },
    "next": {
      "label": "UI react: TimelineItem",
      "to": "/dev/ui-react/use/TimelineItem"
    }
  }
}~
