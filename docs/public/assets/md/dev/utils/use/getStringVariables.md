

### API

#### IGetStringVariables

```ts
interface IGetStringVariables {
    value?: string;
    variables?: string[];
    valueWithPlaceholders?: string;
}
```

#### IOptions

```ts
interface IOptions {
    variablesRegExp?: RegExp;
    cleanVariables?: boolean;
    placeholderPrefix?: string;
}
```

#### getStringVariables

```ts
const getStringVariables: (value: string, options_?: IOptions) => IGetStringVariables;
```

