

### API

#### ICardFooter

```ts
interface ICardFooter extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
}
```

#### CardFooter

```ts
const CardFooter: React.ForwardRefExoticComponent<Omit<ICardFooter, "ref"> & React.RefAttributes<unknown>>;
```

