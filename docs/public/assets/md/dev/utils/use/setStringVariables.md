

### API

#### IOptions

```ts
interface IOptions {
    getVariables?: boolean;
    cleanVariables?: boolean;
    placeholderPrefix?: string;
}
```

#### TVariablesToValue

```ts
type TVariablesToValue = Array<{
```

#### setStringVariables

```ts
const setStringVariables: (value: string, variablesToValue?: TVariablesToValue, options_?: IOptions) => string;
```

