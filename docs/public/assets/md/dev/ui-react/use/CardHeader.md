

### API

#### ICardHeader

```ts
interface ICardHeader extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
}
```

#### CardHeader

```ts
const CardHeader: React.ForwardRefExoticComponent<Omit<ICardHeader, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: CardFooter",
      "to": "/dev/ui-react/use/CardFooter"
    },
    "next": {
      "label": "UI react: CardImage",
      "to": "/dev/ui-react/use/CardImage"
    }
  }
}~
