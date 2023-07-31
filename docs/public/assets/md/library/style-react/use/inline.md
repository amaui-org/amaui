
# inline

Used for creating inline styles for the element.

### Use

- It adds no style sheets, simply utilizes `AmauiStyle` API, by providing the `AmauiStyle`, `AmauiTheme` instances in the background, to generate the CSS, that is usuable for element's style value.

```tsx
import { inline } from '@amaui/style-react';

const Button = () => {
  const style = inline(theme => ({
    color: theme.palette.text.default.primary,
    background: props => props.a === 1 ? 'yellow' : 'orange'
  }), props);

  return (
    <button
      style={style}
    >
      My button
    </button>
  );
};
```

## API

#### inline

```ts
default function inline(value_: TValue, props?: any, options_?: IOptions): any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: className",
      "to": "/library/style-react/use/className"
    },
    "next": {
      "label": "Style react: pure",
      "to": "/library/style-react/use/pure"
    }
  }
}~
