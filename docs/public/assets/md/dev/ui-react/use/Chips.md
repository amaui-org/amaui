

### API

#### IChips

```ts
interface IChips extends IChip {
    wrap?: boolean;
}
```

#### Chips

```ts
const Chips: React.ForwardRefExoticComponent<Omit<IChips, "ref"> & React.RefAttributes<unknown>>;
```

