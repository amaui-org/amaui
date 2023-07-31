
# getStringVariables

Useful method when you want to create template strings with placeholders within that string, that you want to replace with dynamic values, ie. email templates.

```ts
getStringVariables('mm [a] mm {a1} mm');

// {
//   value: 'mm [a] mm {a1} mm',
//   variables: [
//     'a',
//     'a1'
//   ],
//   valueWithPlaceholders: 'mm _0 mm _1 mm'
// }
```

Each variable is extracted & replaced with a `placeholderPrefix` followed by an index of the variable, in order in which it was found in the string.

### Options

#### variablesRegExp

Regular expression to extract variables from the string.

```ts
getStringVariables("'a' DD \"a\" MM \"a\" YYYY {a} [a]", { variablesRegExp: /(\[.*?\])/g });

// {
//   value: "'a' DD \"a\" MM \"a\" YYYY {a} [a]",
//   variables: [
//      'a'
//   ],
//   valueWithPlaceholders: "'a' DD \"a\" MM \"a\" YYYY {a} _0"
// }
```

#### cleanVariables

If true removes the surrounding characters that makes it a variable ie. `[]`.

```ts
getStringVariables("'a' DD \"a\" MM \"a\" YYYY {a} [a]", { clearVariables: false });

// {
//   value: "'a' DD \"a\" MM \"a\" YYYY {a} [a]",
//   variables: [
//     '{a}',
//     '[a]',
//   ],
//   valueWithPlaceholders: "'a' DD \"a\" MM \"a\" YYYY _0 _1"
// }
```

#### placeholderPrefix

Placeholder prefix, important option if you have some parts in the string that might collide with default `_1` pattern, of replacing variables with the placeholder values.

```ts
getStringVariables("'a' DD \"a\" MM \"a\" YYYY {a} [a]", { placeholderPrefix: ',' });

// {
//   value: "'a' DD \"a\" MM \"a\" YYYY {a} [a]",
//   variables: [
//     'a',
//     'a',
//   ],
//   valueWithPlaceholders: "'a' DD \"a\" MM \"a\" YYYY ,0 ,1"
// }
```

## API

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
    // default: /(\{.*?\}|\[.*?\])/g
    variablesRegExp?: RegExp;
    // default: true
    cleanVariables?: boolean;
    // default: _
    placeholderPrefix?: string;
}
```

#### getStringVariables

```ts
// defaults
// options: interface IOptions
const getStringVariables: (value: string, options_?: IOptions) => IGetStringVariables;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getRedirectTo",
      "to": "/library/utils/use/getRedirectTo"
    },
    "next": {
      "label": "Utils: getURL",
      "to": "/library/utils/use/getURL"
    }
  }
}~
