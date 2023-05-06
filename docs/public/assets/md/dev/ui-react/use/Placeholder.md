

### API

#### IPlaceholder

```ts
interface IPlaceholder extends Omit<IBaseElement, 'version'> {
    color?: TColor;
    version?: 'rectangle' | 'rounded' | 'circle';
    width?: string | number;
    height?: string | number;
    animation?: 'wave' | 'pulse' | boolean;
    text?: boolean;
}
```

#### Placeholder

```ts
const Placeholder: React.ForwardRefExoticComponent<Omit<IPlaceholder, "ref"> & React.RefAttributes<unknown>>;
```

