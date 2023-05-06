

### API

#### IType

```ts
interface IType extends IBaseElement {
    color?: TColor;
    priority?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    version?: TTypographyItem;
    size?: string | number;
    disabled?: boolean;
}
```

#### Type

```ts
const Type: React.ForwardRefExoticComponent<Omit<IType, "ref"> & React.RefAttributes<unknown>>;
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
}~
