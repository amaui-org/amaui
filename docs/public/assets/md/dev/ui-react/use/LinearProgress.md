

### API

#### ILinearProress

```ts
interface ILinearProress extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    value?: number | {
        progress?: number;
        buffer?: number;
    };
```

#### LinearProgress

```ts
const LinearProgress: React.ForwardRefExoticComponent<Omit<ILinearProress, "ref"> & React.RefAttributes<unknown>>;
```

