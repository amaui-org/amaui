

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

