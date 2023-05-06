

### API

#### TTransitionStatus

```ts
type TTransitionStatus = 'appended' | 'add' | 'adding' | 'added' | 'enter' | 'entering' | 'entered' | 'exit' | 'exiting' | 'exited' | 'removed';
```

#### STATUS

```ts
const STATUS: Record<TTransitionStatus, TTransitionStatus>;
```

#### ITransition

```ts
interface ITransition extends Omit<IBaseElement, 'children' | 'className'> {
    in?: boolean;
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
    timeout?: TTransitionsDurationProperties | number | {
        default?: number;
        add?: number;
        enter?: number;
        exit?: number;
    };
```

#### Transitionprops_

```ts
function Transition(props_: ITransition): JSX.Element;
```

