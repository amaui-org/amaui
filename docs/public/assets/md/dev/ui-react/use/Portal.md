

### API

#### IPortal

```ts
interface IPortal extends IBaseElement {
    element?: Element | DocumentFragment;
}
```

#### Portal

```ts
const Portal: React.ForwardRefExoticComponent<Omit<IPortal, "ref"> & React.RefAttributes<unknown>>;
```

