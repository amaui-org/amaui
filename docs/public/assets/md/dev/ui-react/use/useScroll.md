

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

