

### API

#### IAmauiStyleProvider

```ts
interface IAmauiStyleProvider extends AmauiStyle {
    updateWithRerender?: (value: any) => AmauiStyle;
}
```

#### AmauiStyleProvider

```ts
const AmauiStyleProvider: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
```

