
# setStringVariables

Updates string variables using the list of maps of which variable equals which value, into a new string with variables replaced with all the values.

```ts
setStringVariables('a {a} a [ab]', [{ key: 'a', value: 'a' }, { key: 'ab', value: 4 }]);

// a a a 4
```

### Options

#### getVariables

If true, getStringVariables is called on the value, and then all the variable values in the string, are replaced with the mapped values.

If false, value provided has to be a value already replaced with placeholders.

#### cleanVariables

Value forwarded to getStringVariables method.

#### placeholderPrefix

Value forwarded to getStringVariables method.


## API

#### IOptions

```ts
interface IOptions {
    // default: true
    getVariables?: boolean;
    // default: true
    cleanVariables?: boolean;
    // default: _
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
// defaults
// options: interface IOptions
const setStringVariables: (value: string, variablesToValue?: TVariablesToValue, options_?: IOptions) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: setObjectValue",
      "to": "/dev/utils/use/setObjectValue"
    },
    "next": {
      "label": "Utils: shuffle",
      "to": "/dev/utils/use/shuffle"
    }
  }
}~
