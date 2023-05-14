

## API

#### ILink

```ts
interface ILink extends Omit<IType, 'color'> {
    color?: TColor;
    underline?: true | 'hover';
}
```

#### Link

```ts
const Link: React.ForwardRefExoticComponent<Omit<ILink, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: LinearProgress",
      "to": "/dev/ui-react/use/LinearProgress"
    },
    "next": {
      "label": "UI react: List",
      "to": "/dev/ui-react/use/List"
    }
  }
}~
