

### API

#### IAvatarGroup

```ts
interface IAvatarGroup extends IAvatar {
    tonal?: TTonal;
    color?: TColor;
    size?: TSizeAny;
    total?: number;
    max?: number;
    disabled?: boolean;
    AdditionalAvatar?: TElement;
    AdditionalAvatarProps?: TPropsAny;
}
```

#### AvatarGroup

```ts
const AvatarGroup: React.ForwardRefExoticComponent<Omit<IAvatarGroup, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Avatar",
      "to": "/dev/ui-react/use/Avatar"
    },
    "next": {
      "label": "UI react: Backdrop",
      "to": "/dev/ui-react/use/Backdrop"
    }
  }
}~
