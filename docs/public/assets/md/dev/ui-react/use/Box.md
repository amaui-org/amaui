

### API

#### IBox

```ts
interface IBox extends IBaseElement {
    styles?: string | TValue;
}
```

#### Box

```ts
const Box: React.ForwardRefExoticComponent<Omit<IBox, "ref"> & React.RefAttributes<unknown>>;
```

