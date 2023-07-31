
# pure

- Used for creating pure styles.
- Pure styles add selectors exactly as they are writen, wihtout making them into classNames.
- Usefull for adding styles for element selectors.

### Use

- Every time first instance of this element is added to the DOM, its style sheet will be added to the DOM.
- On every new instance of this element used, it will reuse the same style sheet that was initially added to the DOM.
- Once there are 0 instances of this element in the DOM, its style sheet will be removed from the DOM.

Additionally
- If you have dynamic values in any of the properties, it will create a new dynamic style sheet in the DOM for every instance of this element used.
- Once element instance is removed, its specific dynamic style sheet will be removed from the DOM.

```tsx
import { pure } from '@amaui/style-react';

const usePure = pure(theme => ({
  a: {
    color: theme.palette.color.primary.main,
    background: props => props.a === 1 ? 'yellow' : 'orange'
  }
}), { name: `Button pure` });

const Button = props => {
  usePure(props);

  return (
    <a
      {...props}
    >
      My button
    </a>
  );
};
```

## API

#### pure

```ts
default function pure(value: TValue, options_?: IOptions): (props_?: any) => IResponse;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: inline",
      "to": "/library/style-react/use/inline"
    },
    "next": {
      "label": "Style react: reset",
      "to": "/library/style-react/use/reset"
    }
  }
}~
