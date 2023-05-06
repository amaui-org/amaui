

### API

#### IInteraction

```ts
interface IInteraction extends IBaseElement {
    wave?: boolean;
    background?: boolean;
    border?: boolean;
    pulse?: boolean;
    origin?: 'center';
    preselected?: boolean;
    selected?: boolean;
    dragged?: boolean;
    wave_version?: 'simple';
    clear?: any;
    disabled?: boolean;
}
```

#### Interaction

```ts
const Interaction: React.ForwardRefExoticComponent<Omit<IInteraction, "ref"> & React.RefAttributes<unknown>>;
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
