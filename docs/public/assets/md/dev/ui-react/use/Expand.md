

### API

#### IExpand

```ts
interface IExpand extends ITransition {
    expandSize?: number;
    orientation?: 'veritcal' | 'horizontal';
    WrapperProps?: TPropsAny;
}
```

#### Expand

```ts
const Expand: React.ForwardRefExoticComponent<Omit<IExpand, "ref"> & React.RefAttributes<unknown>>;
```

