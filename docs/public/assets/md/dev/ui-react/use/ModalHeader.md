

### API

#### IModalHeader

```ts
interface IModalHeader extends ILine {
    align?: TLineAlign;
}
```

#### ModalHeader

```ts
const ModalHeader: React.ForwardRefExoticComponent<Omit<IModalHeader, "ref"> & React.RefAttributes<unknown>>;
```

