
# AmauiStyleRenderer

Used to insert css values to the DOM.

### make

Makes the element with provided element, data attributes.

### add

Method called to add the element into the DOM.

### remove

Method called to remove the element from the DOM.

## API

```ts
class AmauiStyleRenderer {
    make(attributes?: {
        element: {};
        data: {};
    }, version?: string): Element;
    add(value: Element, priority: TPriority, attributes: any): Element;
    remove(value: Element): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: AmauiStyle",
      "to": "/dev/style/use/AmauiStyle"
    },
    "next": {
      "label": "Style: AmauiStyleRule",
      "to": "/dev/style/use/AmauiStyleRule"
    }
  }
}~
