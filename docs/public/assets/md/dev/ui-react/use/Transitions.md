

## API

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

#### Transitions

```ts
function Transitions(props_: ITransitions): any;
```

#### Transitions

```ts
namespace Transitions {
    var displayName: string;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: useTransition",
      "to": "/dev/ui-react/use/useTransition"
    },
    "next": {
      "label": "UI react: Tree",
      "to": "/dev/ui-react/use/Tree"
    }
  }
}~
