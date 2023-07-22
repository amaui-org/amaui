
# withStyle

- Creates all provided styles, and passes `styles` as a prop, to the provided element, with classes within it, same as in `style` method, whatever `useStyle` returns.
- Element can be any `React` element.
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
import { withStyle } from '@amaui/style-react';

const MyLink = props => {
  const { classes } = props.styles;

  return (
    <a
      className={classes.root}

      href={props.href}
    >
      {props.children}
    </a>;
  );
};

const MyLinkWithStyle = withStyle(MyLink)(theme => ({
  root: {
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
      <MyLinkWithStyle
        href='...'
      >
        My website url
      </MyLinkWithStyle>
    <div/>
  );
};
```

## API

#### withStyle

```ts
const withStyle: (Element: any) => (value: TValue, options?: IOptions) => React.ElementType;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: styled",
      "to": "/dev/style-react/use/styled"
    },
    "next": {
      "label": "Icons Material react: Start",
      "to": "/dev/icons-material-react/start"
    }
  }
}~
