

## API

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
    onKeyframes?: (element: HTMLElement, status: TKeyframesStatus) => void;
    onAppended?: (element: HTMLElement) => void;
    onAdd?: (element: HTMLElement) => void;
    onAdding?: (element: HTMLElement) => void;
    onAdded?: (element: HTMLElement) => void;
    onRemoved?: (element: HTMLElement) => void;
}
```

#### Keyframes

```ts
function Keyframes(props_: IKeyframes): JSX.Element;
```

#### Keyframes

```ts
namespace Keyframes {
    var displayName: string;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Interaction",
      "to": "/library/ui-react/use/Interaction"
    },
    "next": {
      "label": "UI react: KeyframesContext",
      "to": "/library/ui-react/use/KeyframesContext"
    }
  }
}~
