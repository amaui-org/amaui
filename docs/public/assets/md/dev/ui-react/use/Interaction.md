

### API

#### TMethodsVersion

```ts
type TMethodsVersion = 'add' | 'pulse' | 'remove';
```

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
    subscription?: AmauiSubscription;
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
      "label": "UI react: ImageListItemBox",
      "to": "/dev/ui-react/use/ImageListItemBox"
    },
    "next": {
      "label": "UI react: Keyframes",
      "to": "/dev/ui-react/use/Keyframes"
    }
  }
}~
