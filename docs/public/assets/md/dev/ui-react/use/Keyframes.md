

### API

#### TKeyframesStatus

```ts
type TKeyframesStatus = 'appended' | 'add' | 'adding' | 'added' | 'removed';
```

#### IKeyframe

```ts
interface IKeyframe {
    name: string;
    timeout: number;
}
```

#### IKeyframes

```ts
interface IKeyframes extends Omit<IBaseElement, 'className'> {
    ref?: TRef;
    className?: boolean;
    prefix?: string;
    append?: boolean;
    add?: boolean;
    update?: boolean;
    runOnEnter?: boolean;
    removeOnEnd?: boolean;
    appendStatusPost?: string;
    keyframes?: Array<IKeyframe>;
    timeout?: TTransitionsDurationProperties | number | {
        default?: number;
        add?: number;
    };
```

#### Keyframes

```ts
function Keyframes(props_: IKeyframes): JSX.Element;
```

