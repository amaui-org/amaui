
# className

Used for creating a simple className from styles that can be used directly in the `className` in the element.

### Use

- Every time this element instance is used, new style sheet will be added to the DOM.
- Every time this element instance is removed from the DOM, its style sheet instance will be removed from the DOM.

Additionally
- If you have dynamic values in any of the properties, it will create a new dynamic style sheet in the DOM for every instance of this element used.
- Once element instance is removed, its specific dynamic style sheet will be removed from the DOM.

#### Important
Using `className`, instead of `style` method, it will inject a new style sheet in the DOM, for every instance of this element used in the app, where as using `style` method since its invokation is outside the element function body, you'll define it once, and for 1 or many used instances of the element only 1 style sheet for it will be added to the DOM.

```tsx
import { className } from '@amaui/style-react';

const Button = props => {
  const classNameRoot = className(theme => ({
    a: {
      color: 'yellow'
    }
  }), props, 'MyButton', { name: 'Button' });

  return (
    <button
      className={classNameRoot}
    >
      My button
    </button>
  );
};
```

## API

#### className

```ts
default function className(value_: string | TValue, props_?: any, className_?: string, options_?: IOptions): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: AmauiThemeProvider",
      "to": "/dev/style-react/use/AmauiThemeProvider"
    },
    "next": {
      "label": "Style react: inline",
      "to": "/dev/style-react/use/inline"
    }
  }
}~
