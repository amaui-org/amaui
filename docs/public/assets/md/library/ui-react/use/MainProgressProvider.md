

## API

#### IMainProgressStartArgument

```ts
interface IMainProgressStartArgument {
    tonal?: boolean;
    color?: string;
}
```

#### IMainProgressProvider

```ts
interface IMainProgressProvider {
    start: (value?: IMainProgressStartArgument) => void;
    increment: () => void;
    update: (value: number) => void;
    done: () => void;
}
```

#### IMainProgressProvider

```ts
interface IMainProgressProvider extends ILinearProress {
    min?: number;
    max?: number;
    firstIncrement?: boolean;
    incrementMin?: number;
    incrementMax?: number;
    stepMin?: number;
    stepMax?: number;
    stepInterval?: number;
    onStart?: () => any;
    onIncrement?: (value: number) => any;
    onUpdate?: (value: number) => any;
    onDone?: () => any;
    fixed?: boolean;
    position?: 'top' | 'bottom';
    TransitionComponent?: TElementReference;
    TransitionComponentProps?: TPropsAny;
}
```

#### MainProgressProvider

```ts
const MainProgressProvider: React.ForwardRefExoticComponent<Omit<IMainProgressProvider, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: MainProgressContext",
      "to": "/library/ui-react/use/MainProgressContext"
    },
    "next": {
      "label": "UI react: useMainProgress",
      "to": "/library/ui-react/use/useMainProgress"
    }
  }
}~
