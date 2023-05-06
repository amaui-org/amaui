

### API

#### IReveal

```ts
interface IReveal extends IBaseElement {
    inDefault?: boolean;
    offset?: number;
    offsetReveal?: number;
    offsetUnreveal?: number;
    unreveal?: boolean;
    inClassName?: string;
    onChange?: (value: boolean) => any;
    noTransition?: boolean;
}
```

#### Reveal

```ts
const Reveal: React.ForwardRefExoticComponent<Omit<IReveal, "ref"> & React.RefAttributes<unknown>>;
```

