

## API

#### TParallaxDirection

```ts
type TParallaxDirection = 'vertical' | 'horizontal';
```

#### IParallax

```ts
interface IParallax extends IBaseElement {
    value?: number;
    root?: Element | DocumentFragment;
    render?: (value: number, root: Element | DocumentFragment, rate: number, scrollDirection: TParallaxDirection, transformDirection: TParallaxDirection, transition: string, props: TPropsAny) => TStyle;
    rate?: number | ((value: number) => number);
    scrollDirection?: TParallaxDirection;
    transformDirection?: TParallaxDirection;
    transition?: string;
    disabled?: boolean | Record<TValueBreakpoints, boolean>;
}
```

#### Parallax

```ts
const Parallax: React.ForwardRefExoticComponent<Omit<IParallax, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: PaginationItem",
      "to": "/dev/ui-react/use/PaginationItem"
    },
    "next": {
      "label": "UI react: Path",
      "to": "/dev/ui-react/use/Path"
    }
  }
}~
