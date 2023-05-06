

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

