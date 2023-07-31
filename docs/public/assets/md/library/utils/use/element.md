
# element

Util methods for a HTML element.

```ts
const h1Element = ...;

const h1 = element(h1Element);

// ie.
// Furthest parent element with .amaui-theme class
h1.furthest(['.amaui-theme']);

// Div.amaui-theme element
```

### Methods

#### parent

Returns immediate parent of the element.

```ts
const h1 = element(...);

h1.parent();

// Div element
```

#### parents

Returns parents that pass the css selectors match, with second argument arrayMethods being some or every operator.

```ts
const h1 = element(...);

h1.parents(['.amaui-theme']);

// [div, div, div, div]
```

#### nearest

Returns nearest parent that pass the css selectors match, with second argument arrayMethods being some or every operator.

```ts
const h1 = element(...);

h1.nearest(['.amaui-theme']);

// Div element
```

#### furthest

Returns furthest parent that pass the css selectors match, with second argument arrayMethods being some or every operator.

```ts
const h1 = element(...);

h1.furthest(['.amaui-theme']);

// Div element
```

#### hasParent

Returns true if immediate parent or including grandparents (other parents) or not, passes the css selectors match, with second argument arrayMethods being some or every operator.

```ts
const h1 = element(...);

h1.hasParent(['.amaui-theme']);

// true
```

#### hasParents

Returns true if there are parents who pass the css selectors match, and if unique is true, each selector has to match a unique parent element, with second argument arrayMethods being some or every operator.

```ts
const h1 = element(...);

h1.hasParents(['.amaui-theme']);

// true
```

## API

#### TArrayMethod

```ts
type TArrayMethod = 'every' | 'some';
```

#### IElementObject

```ts
interface IElementObject {
    value?: Element;
    parent?: () => Element;
    // defaults
    // arrayMethod: some
    parents?: (selectors?: Array<string | Element>, arrayMethod?: TArrayMethod) => Array<Element>;
    // defaults
    // arrayMethod: some
    nearest?: (selector?: Array<string | Element>, arrayMethod?: TArrayMethod) => Element;
    // defaults
    // arrayMethod: some
    furthest?: (selector?: Array<string | Element>, arrayMethod?: TArrayMethod) => Element;
    // defaults
    // grandparents: true
    // arrayMethod: some
    hasParent?: (selector: Array<string | Element>, grandparents?: boolean, arrayMethod?: TArrayMethod) => boolean;
    // defaults
    // unique: true
    // arrayMethod: some
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
      "label": "Utils: download",
      "to": "/library/utils/use/download"
    },
    "next": {
      "label": "Utils: elementToCanvas",
      "to": "/library/utils/use/elementToCanvas"
    }
  }
}~
