

### API

#### ICardImage

```ts
interface ICardImage extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
    alt?: string;
    image?: string;
    shape?: 'all' | 'none' | 'top' | 'left' | 'bottom' | 'right';
    marginHorizontal?: boolean;
}
```

#### CardImage

```ts
const CardImage: React.ForwardRefExoticComponent<Omit<ICardImage, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: CardHeader",
      "to": "/dev/ui-react/use/CardHeader"
    },
    "next": {
      "label": "UI react: CardMain",
      "to": "/dev/ui-react/use/CardMain"
    }
  }
}~
