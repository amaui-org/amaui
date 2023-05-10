

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
    key: string;
    value: any;
}>;
```

#### setStringVariables

```ts
const setStringVariables: (value: string, variablesToValue?: TVariablesToValue, options_?: IOptions) => string;
```


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