

### API

#### IImageList

```ts
interface IImageList extends IBaseElement {
    version?: 'standard' | 'vowen' | 'masonry';
    gap?: number | Record<TValueBreakpoints, number>;
    rowGap?: number | Record<TValueBreakpoints, number>;
    columnGap?: number | Record<TValueBreakpoints, number>;
    columns?: number | Record<TValueBreakpoints, number>;
}
```

#### ImageList

```ts
const ImageList: React.ForwardRefExoticComponent<Omit<IImageList, "ref"> & React.RefAttributes<unknown>>;
```

