
# styled

- Adds all provided styles as 1 new className added, to the provided element.
- Element can be a string representing any valid DOM element tag name, or an existing `React` element.
- It creates a new element.

### Use

- Uses `style` method.
- Every time first instance of this element is added to the DOM, its style sheet will be added to the DOM.
- On every new instance of this element used, it will reuse the same style sheet that was initially added to the DOM.
- Once there are 0 instances of this element in the DOM, its style sheet will be removed from the DOM.

Additionally
- If you have dynamic values in any of the properties, it will create a new dynamic style sheet in the DOM for every instance of this element used.
- Once element instance is removed, its specific dynamic style sheet will be removed from the DOM.

```tsx
import { styled } from '@amaui/style-react';

const MyLink = styled('a')(theme => ({
  a: {
    width: '100px',
  },

  a1: {
    color: theme.palette.text.default.primary
  },

  a4: {
    background: props => props.a === 1 ? 'yellow' : 'orange'
  }
}), { name: 'My Link' });

const App = () => {

  return (
    <div>
      <MyLink
        href='...'
      >
        My website url
      </MyLink>
    <div/>
  );
};
```

## API

#### styled

```ts
const styled: (Element: any) => (value: TValue, options?: IOptions) => React.ElementType;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: style",
      "to": "/dev/style-react/use/style"
    },
    "next": {
      "label": "Style react: withStyle",
      "to": "/dev/style-react/use/withStyle"
    }
  }
}~
