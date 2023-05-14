

## API

#### TUseScrollDirection

```ts
type TUseScrollDirection = 'up' | 'down';
```

#### IUseScroll

```ts
interface IUseScroll {
    offset?: number;
    direction?: TUseScrollDirection;
    target?: HTMLElement | Window;
}
```

#### useScroll

```ts
const useScroll: {
    (props: IUseScroll): boolean;
    displayName: string;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: useMediaQuery",
      "to": "/dev/ui-react/use/useMediaQuery"
    },
    "next": {
      "label": "UI react: useSwipe",
      "to": "/dev/ui-react/use/useSwipe"
    }
  }
}~
