

## API

#### IOptionsUseSwipe

```ts
interface IOptionsUseSwipe {
    open?: boolean;
    min?: number;
    direction?: 'top' | 'left' | 'right' | 'bottom';
    touchAnywhere?: boolean;
}
```

#### IResponseUseSwipe

```ts
interface IResponseUseSwipe {
    value?: number;
    valuePercentage?: number;
    position?: string;
}
```

#### useSwipe

```ts
const useSwipe: {
    (element: HTMLElement, options?: IOptionsUseSwipe): IResponseUseSwipe;
    displayName: string;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: useScroll",
      "to": "/dev/ui-react/use/useScroll"
    },
    "next": {
      "label": "UI react: utils",
      "to": "/dev/ui-react/use/utils"
    }
  }
}~
