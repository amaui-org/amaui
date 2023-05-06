

### API

#### TTransitionsMode

```ts
type TTransitionsMode = 'in-out' | 'in-out-follow' | 'out-in';
```

#### ITransitions

```ts
interface ITransitions {
    id?: string;
    mode?: TTransitionsMode;
    switch?: boolean;
    TransitionProps?: TPropsAny;
    children?: any;
}
```

#### Transitionsprops_

```ts
function Transitions(props_: ITransitions): any;
```

