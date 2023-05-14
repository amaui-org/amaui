

## API

#### IAvatar

```ts
interface IAvatar extends Omit<IButton, 'elevation'> {
    image?: string;
    alt?: string;
    square?: boolean;
    elevation?: TElevation;
    TypeProps?: TPropsAny;
    InteractionProps?: TPropsAny;
}
```

#### Avatar

```ts
const Avatar: React.ForwardRefExoticComponent<Omit<IAvatar, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: AutoComplete",
      "to": "/dev/ui-react/use/AutoComplete"
    },
    "next": {
      "label": "UI react: AvatarGroup",
      "to": "/dev/ui-react/use/AvatarGroup"
    }
  }
}~
