

### API

#### ILink

```ts
interface ILink extends Omit<IType, 'color'> {
    color?: TColor;
    underline?: true | 'hover';
}
```

#### Link

```ts
const Link: React.ForwardRefExoticComponent<Omit<ILink, "ref"> & React.RefAttributes<unknown>>;
```

