
# reset

- Used for creating reset styles.
- Reset styles merge provided values with default reset styles for the DOM.
- Usefull for adding reset styles for elements in the DOM.

### Use

- Every time first instance of this element is added to the DOM, its style sheet will be added to the DOM.
- On every new instance of this element used, it will reuse the same style sheet that was initially added to the DOM.
- Once there are 0 instances of this element in the DOM, its style sheet will be removed from the DOM.

Additionally
- If you have dynamic values in any of the properties, it will create a new dynamic style sheet in the DOM for every instance of this element used.
- Once element instance is removed, its specific dynamic style sheet will be removed from the DOM.

```tsx
import { reset } from '@amaui/style-react';

const useReset = reset(theme => ({
  a: {
    color: theme.palette.text.default.primary
  }
}), { name: 'Reset' });

const Reset = props => {
  useReset(props);

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
};

const App = () => {

  return (
    <div>
      <Reset />

      ...
    <div/>
  );
};

// or

const App = () => {

  return (
    <React.Fragment>
      <Reset />

      <div>
        ...
      </div>
    </React.Fragment>
  );
};
```

## API

#### reset

```ts
default function reset(value?: TValue, options_?: IOptions): (props_?: any) => IResponse;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: pure",
      "to": "/library/style-react/use/pure"
    },
    "next": {
      "label": "Style react: string",
      "to": "/library/style-react/use/string"
    }
  }
}~
