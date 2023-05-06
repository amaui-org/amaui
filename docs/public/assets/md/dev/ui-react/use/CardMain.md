

### API

#### ICardMain

```ts
interface ICardMain extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
}
```

#### CardMain

```ts
const CardMain: React.ForwardRefExoticComponent<Omit<ICardMain, "ref"> & React.RefAttributes<unknown>>;
```

