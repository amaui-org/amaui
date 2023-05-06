

### API

#### IBottomAppBar

```ts
interface IBottomAppBar extends ISurface {
    size?: TSize;
    main?: TElement;
    fixed?: boolean;
    noTransition?: boolean;
}
```

#### BottomAppBar

```ts
const BottomAppBar: React.ForwardRefExoticComponent<Omit<IBottomAppBar, "ref"> & React.RefAttributes<unknown>>;
```

