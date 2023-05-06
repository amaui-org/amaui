

### API

#### IAmauiThemeProviderValue

```ts
interface IAmauiThemeProviderValue extends AmauiThemeRequired {
    updateWithRerender: (value: IAmauiTheme) => AmauiThemeRequired;
}
```

#### IAmauiThemeProvider

```ts
interface IAmauiThemeProvider extends React.HTMLAttributes<any> {
    root?: boolean;
    value?: IAmauiTheme;
    addCssVariables?: boolean;
    children?: any;
}
```

#### AmauiThemeProvider

```ts
const AmauiThemeProvider: React.ForwardRefExoticComponent<IAmauiThemeProvider & React.RefAttributes<unknown>>;


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
