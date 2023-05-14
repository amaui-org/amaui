

## API

#### ICardMain

```ts
interface ICardMain extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
}
```

#### CardMain

```ts
const CardMain: React.ForwardRefExoticComponent<Omit<ICardMain, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: CardImage",
      "to": "/dev/ui-react/use/CardImage"
    },
    "next": {
      "label": "UI react: Carousel",
      "to": "/dev/ui-react/use/Carousel"
    }
  }
}~
