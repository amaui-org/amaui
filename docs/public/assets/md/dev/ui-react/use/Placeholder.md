

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


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}
