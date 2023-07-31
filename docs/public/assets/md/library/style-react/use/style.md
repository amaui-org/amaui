
# style

- Most `practical` method to use.
- Used for creating styles.
- You can define each property as a new class, and its values in an object, will be its CSS values.

### Use

- Every time first instance of this element is added to the DOM, its style sheet will be added to the DOM.
- On every new instance of this element used, it will reuse the same style sheet that was initially added to the DOM.
- Once there are 0 instances of this element in the DOM, its style sheet will be removed from the DOM.

Additionally
- If you have dynamic values in any of the properties, it will create a new dynamic style sheet in the DOM for every instance of this element used.
- Once element instance is removed, its specific dynamic style sheet will be removed from the DOM.

```tsx
import { style } from '@amaui/style-react';
import AmauiSubscription from '@amaui/subscription';

const amauiSubscription = new AmauiSubscription('beige');

const useStyle = style(theme => ({
  '@keyframes a': {
    '0%': {
        color: 'white'
    },
    '40%': {
        color: 'yellow'
    }
  },

  root: {
      width: 100,
      'max-width': 100,

      // Using theme
      color: theme.palette.text.default.primary,

      // Using a method
      // any time below element's props change that update this expression
      // this property's value will be dynamically updated
      background: props => props.a === 114 ? 'yellow' : 'beige',

      // Using @amaui/subscription
      // any time amauiSubscription emits new value
      // this property's value will be dynamically updated
      borderColor: amauiSubscription,

      // Simple
      margin: '0 14px 4px 40px',

      // rtl
      marginLeft: 41,
      float: 'left',

      // sort
      paddingLeft: 41,
      padding: 40,

      // prefixes
      position: 'sticky',
      transition: 'all .4s ease',
      maskOrigin: 'inherit',
      maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
      maskPosition: '40% 74%',

      // animation
      animation: '$a .4s ease'
  }
}), { name: 'My Button' });

const Button = props => {
  const { classes } = useStyle(props);

  return (
    <button
      className={classes.root}

      {...props}
    >
      My button
    </button>
  );
};
```

## API

#### TValueObject

```ts
type TValueObject = Record<string, TValueObjectValue>;
```

#### RecursiveRequired

```ts
type RecursiveRequired<T> = {
    [P in keyof T]-?: T[P] extends Function ? T[P] : RecursiveRequired<T[P]>;
};
```

#### AmauiThemeRequired

```ts
type AmauiThemeRequired = RecursiveRequired<AmauiTheme>;
```

#### TValueMethod

```ts
type TValueMethod = (theme: AmauiThemeRequired) => TValueObject;
```

#### TValue

```ts
type TValue = TValueObject | TValueMethod;
```

#### IResponseStyle

```ts
interface IResponseStyle extends IMethodResponse {
    amauiTheme?: AmauiTheme;
}
```

#### propsAreNew

```ts
const propsAreNew: (props: any) => string;
```

#### style

```ts
default function style(value: TValue, options_?: IOptions, responses_?: Array<IResponseStyle>): (props_?: any) => IResponse;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: string",
      "to": "/library/style-react/use/string"
    },
    "next": {
      "label": "Style react: styled",
      "to": "/library/style-react/use/styled"
    }
  }
}~
