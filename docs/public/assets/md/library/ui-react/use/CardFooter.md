

## API

#### ICardFooter

```ts
interface ICardFooter extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
}
```

#### CardFooter

```ts
const CardFooter: React.ForwardRefExoticComponent<Omit<ICardFooter, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: CardButton",
      "to": "/library/ui-react/use/CardButton"
    },
    "next": {
      "label": "UI react: CardHeader",
      "to": "/library/ui-react/use/CardHeader"
    }
  }
}~
