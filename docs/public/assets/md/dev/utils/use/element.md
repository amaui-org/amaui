

### API

#### TArrayMethod

```ts
type TArrayMethod = 'every' | 'some';
```

#### IElementObject

```ts
interface IElementObject {
    value?: Element;
    parent?: () => Element;
    parents?: (selectors?: Array<string | Element>, arrayMethod?: TArrayMethod) => Array<Element>;
    nearest?: (selector?: Array<string | Element>, arrayMethod?: TArrayMethod) => Element;
    furthest?: (selector?: Array<string | Element>, arrayMethod?: TArrayMethod) => Element;
    hasParent?: (selector: Array<string | Element>, grandparents?: boolean, arrayMethod?: TArrayMethod) => boolean;
    hasParents?: (selector: Array<string | Element>, unique?: boolean, arrayMethod?: TArrayMethod) => boolean;
}
```

#### element

```ts
function element(value: string | Element): IElementObject;
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