

### API

#### IPath

```ts
interface IPath extends IBaseElement {
    value?: any;
}
```

#### Path

```ts
const Path: React.ForwardRefExoticComponent<Omit<IPath, "ref"> & React.RefAttributes<unknown>>;
```

