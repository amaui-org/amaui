
# Style

Provider for `AmauiStyle` instance value.

### Use

- By default all plugins are used in a default `AmauiStyle` instance: `unit`, `makeClassName`, `prefix`, `sort`, `rtl`, `valueObject`.
- If you want to only use specific plugins, or your own instance of `AmauiStyle`, you can provide it as a value to the provider.
- All of the `AmauiStyle` classes, and plugins are also re-exported from this library, but you can import them directly from `@amaui/style` library as well.

```tsx
import { Style, AmauiStyle, unit, sort, prefix } from '@amaui/style-react';

const App = () => {
  const amauiStyle = React.useMemo(() => {
    const instance = new AmauiStyle();

    instance.plugins.add = [unit, sort, prefix];

    return instance;
  }, []);

  return (
    <Style
      value={amauiStyle}
    >
      ...
    </Style>
  );
};
```

### Update

- You can update the `AmauiStyle` by providing new values to it, but, updating it as an instance reference won't trigger the rerender.
- You can use new injected method `updateWithRerender` to update it, while triggering the rerender.
- On `updateWithRerender` new instance of `AmauiStyle` is made, and provided values in this method, are merged with values of the previous `AmauiStyle` instance, as new properties for the new instance.

```tsx
import { Style, useAmauiStyle, AmauiStyle, unit, sort, prefix } from '@amaui/style-react';

const Button = props => {
  // useAmauiStyle (useContext) retrieves
  // the nearest Style value
  const amauiStyle = useAmauiStyle();

  const onClick = React.useCallback(() => {
    amauiStyle.updateWithRerender({ a: 114 });
  }, []);

  console.log(amauiStyle.a);

  // 114

  return (
    <button
      onClick={onClick}

      {...props}
    >
      {props.children}
    </button>
  );
};

const App = () => {
  const amauiStyle = React.useMemo(() => {
    const instance = new AmauiStyle();

    instance.plugins.add = [unit, sort, prefix];

    return instance;
  }, []);

  return (
    <Style
      value={amauiStyle}
    >
      <Button>My button</Button>
    </Style>
  );
};
```

### Other

#### useAmauiStyle

- Using `useAmauiStyle` without the `Style` as a parent returns default `StyleContext` value, which is `AmauiStyle` instance with the default options.

## API

#### IStyle

```ts
interface IStyle extends AmauiStyle {
    updateWithRerender?: (value: any) => AmauiStyle;
}
```

#### Style

```ts
const Style: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style react: Start",
      "to": "/dev/style-react/start"
    },
    "next": {
      "label": "Style react: AmauiThemeProvider",
      "to": "/dev/style-react/use/AmauiThemeProvider"
    }
  }
}~
