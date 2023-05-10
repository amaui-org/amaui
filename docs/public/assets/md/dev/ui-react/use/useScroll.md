

### API

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


{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}