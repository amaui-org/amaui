

### API

#### ISpyScroll

```ts
interface ISpyScroll extends IBaseElement {
    ids?: Array<string>;
    offset?: number;
    offsetStart?: number;
    addClassName?: string;
    addStyle?: TStyle;
}
```

#### SpyScroll

```ts
const SpyScroll: React.ForwardRefExoticComponent<Omit<ISpyScroll, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: SpeedDialItem",
      "to": "/dev/ui-react/use/SpeedDialItem"
    },
    "next": {
      "label": "UI react: Step",
      "to": "/dev/ui-react/use/Step"
    }
  }
}~
