

## API

#### TTransitionStatus

```ts
type TTransitionStatus = 'appended' | 'add' | 'adding' | 'added' | 'enter' | 'entering' | 'entered' | 'exit' | 'exiting' | 'exited' | 'removed';
```

#### STATUS

```ts
const STATUS: Record<TTransitionStatus, TTransitionStatus>;
```

#### ITransitionDelay

```ts
interface ITransitionDelay {
    default?: number;
    add?: number;
    enter?: number;
    exit?: number;
}
```

#### ITransition

```ts
interface ITransition extends Omit<IBaseElement, 'children' | 'className'> {
    in?: boolean;
    name?: string;
    className?: boolean;
    prefix?: string;
    run?: boolean;
    append?: boolean;
    add?: boolean;
    enter?: boolean;
    exit?: boolean;
    enterOnAdd?: boolean;
    exitOnAdd?: boolean;
    noAbruption?: boolean;
    removeOnExited?: boolean;
    preEnterAppendTimeout?: number;
    delay?: TTransitionsDurationProperties | number | ITransitionDelay;
    duration?: TTransitionsDurationProperties | number | ITransitionDelay;
    onTransition?: (element: HTMLElement, status: TTransitionStatus) => void;
    onInit?: (element: HTMLElement) => void;
    onAppended?: (element: HTMLElement) => void;
    onAdd?: (element: HTMLElement) => void;
    onAdding?: (element: HTMLElement) => void;
    onAdded?: (element: HTMLElement) => void;
    onEnter?: (element: HTMLElement) => void;
    onEntering?: (element: HTMLElement) => void;
    onEntered?: (element: HTMLElement) => void;
    onExit?: (element: HTMLElement) => void;
    onExiting?: (element: HTMLElement) => void;
    onExited?: (element: HTMLElement) => void;
    onRemoved?: (element: HTMLElement) => void;
    children?: any;
    [p: string]: any;
}
```

#### Transition

```ts
function Transition(props_: ITransition): JSX.Element;
```

#### Transition

```ts
namespace Transition {
    var displayName: string;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: TopAppBar",
      "to": "/dev/ui-react/use/TopAppBar"
    },
    "next": {
      "label": "UI react: TransitionContext",
      "to": "/dev/ui-react/use/TransitionContext"
    }
  }
}~
