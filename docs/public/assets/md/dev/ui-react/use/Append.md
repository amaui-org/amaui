

### API

#### types="react"

```ts
/// <reference types="react" />
```

#### TAppendPadding

```ts
type TAppendPadding = Array<number>;
```

#### IAppendValue

```ts
interface IAppendValue {
    x?: number;
    y?: number;
    switch?: boolean;
    init?: boolean;
}
```

#### IAppend

```ts
interface IAppend {
    open?: boolean;
    portal?: boolean;
    accelerated?: boolean;
    anchor?: DOMRect;
    anchorElement?: THTMLElement;
    offset?: TAppendPadding;
    padding?: TAppendPadding;
    paddingUnfollow?: TAppendPadding;
    inset?: boolean;
    position?: 'top' | 'left' | 'bottom' | 'right';
    alignment?: 'start' | 'center' | 'end';
    switch?: boolean;
    overflow?: boolean;
    unfollow?: boolean;
    style?: TStyle;
    update?: any;
    element?: any;
    parent?: THTMLElement;
    additional?: (rects: {
        root: DOMRect;
        element: DOMRect;
    }, rectsOffset: {
        root: DOMRect;
        element: DOMRect;
    }) => any;
    children?: TChildren;
    [property: string]: any;
}
```

#### Append

```ts
const Append: {
    (props_: IAppend): JSX.Element;
    displayName: string;
};
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
}
