

### API

#### ITree

```ts
interface ITree extends Omit<IBaseElement, 'children'> {
    open?: boolean;
    openDefault?: boolean;
    onChange?: (value: boolean) => any;
    selected?: boolean;
    line?: boolean;
    indicator?: boolean;
    arrow?: boolean;
    checkbox?: boolean;
    indicatorPosition?: 'start' | 'end';
    level?: number;
    icon?: TElement;
    iconOpen?: TElement;
    start?: TElement;
    middle?: TElement;
    end?: TElement;
    button?: boolean;
    noTransition?: boolean;
    noExpand?: boolean;
    noPadding?: boolean;
    parentDisabled?: boolean;
    disabled?: boolean;
    ExpandProps?: TPropsAny;
    MainProps?: TPropsAny;
    StartProps?: TPropsAny;
    MiddleProps?: TPropsAny;
    EndProps?: TPropsAny;
    IndicatorProps?: TPropsAny;
    TransitionComponentProps?: TPropsAny;
    IconArrow?: TElementReference;
    TransitionComponent?: TElementReference;
    children: any;
}
```

#### Tree

```ts
const Tree: React.ForwardRefExoticComponent<Omit<ITree, "ref"> & React.RefAttributes<unknown>>;
```

~{
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
}~
