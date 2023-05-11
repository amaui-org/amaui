

### API

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
      "label": "Style React: string",
      "to": "/dev/style-react/use/string"
    },
    "next": {
      "label": "Style React: styled",
      "to": "/dev/style-react/use/styled"
    }
  }
}~
