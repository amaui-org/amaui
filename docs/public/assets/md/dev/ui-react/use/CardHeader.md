

### API

#### ICardHeader

```ts
interface ICardHeader extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
}
```

#### CardHeader

```ts
const CardHeader: React.ForwardRefExoticComponent<Omit<ICardHeader, "ref"> & React.RefAttributes<unknown>>;
```

