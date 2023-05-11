

### API

#### rtl_icons

```ts
const rtl_icons: string[];
```

#### IIcon

```ts
interface IIcon extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    size?: 'very small' | 'small' | 'regular' | 'medium' | 'large' | 'very large' | number;
    tone?: TTone;
    viewBox?: string;
    name?: string;
    short_name?: string;
    noRtl?: boolean;
    disabled?: boolean;
}
```

#### Icon

```ts
const Icon: React.ForwardRefExoticComponent<Omit<IIcon, "ref"> & React.RefAttributes<unknown>>;
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
