
# string

- Used for creating a simple className from styles that can be used directly in the `className` in the element.
- Values are added within a template string.

### Use

- Every time this element instance is used, new style sheet will be added to the DOM.
- Every time this element instance is removed from the DOM, its style sheet instance will be removed from the DOM.

Additionally
- If you have dynamic values in any of the properties, it will create a new dynamic style sheet in the DOM for every instance of this element used.
- Once element instance is removed, its specific dynamic style sheet will be removed from the DOM.

#### Important
Using `string`, instead of `style` method, it will inject a new style sheet in the DOM, for every instance of this element used in the app, where as using `style` method since its invokation is outside the element function body, you'll define it once, and for 1 or many used instances of the element only 1 style sheet for it will be added to the DOM.

```tsx
import { className, useAmauiTheme } from '@amaui/style-react';

const Button = () => {
  const amauiTheme = useAmauiTheme();

  const classNameRoot = string`
    color: ${amauiTheme.palette.text.default.primary};
    background: ${props.a === 1 ? 'yellow' : 'orange'};
  `;

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

#### string

```ts
default function string(value_: TemplateStringsArray, ...args: any[]): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: reset",
      "to": "/dev/style-react/use/reset"
    },
    "next": {
      "label": "Style react: style",
      "to": "/dev/style-react/use/style"
    }
  }
}~
