
# AmauiCookie

### Options

#### namespace

Namespace value under which all keys will be prefixed prior to adding to, and reading from the cookie.

#### namespace_separator

Separator between namespace, and key name.

```ts
// separator: -
// namespace-key: value
```

### Methods

#### add

Adds new key, value into the cookie.

3rd, 4th argument are days (default 1 year), path (default: '/').

If value isn't a string, it will be serialized prior to adding it to the cookie.

```ts
const amauiCookie = new AmauiCookie();

amauiCookie.add('todo-1', 'a);

// amaui_todo-1=a
```

#### update

Alias for the add method, as it basically does the same thing, updating is just overwriting the existing key's value.

#### get

Gets a value from the cookie, based on a key.

Value is automatically parsed back into its value type, while reading from the cookie, prior to returning.

```ts
const amauiCookie = new AmauiCookie();

amauiCookie.get('todo-1');

// 'a'
```

#### items

Returns an object with all the cookie items, with a prefix for the instance.

```ts
const amauiCookie = new AmauiCookie();

amauiCookie.add('todo-1', 'a');

amauiCookie.items;

// {
//   'todo-1': 'a'
// }
```

#### properties

Returns all the properties from the cookie, prefixed with a prefix for the instance.

```ts
const amauiCookie = new AmauiCookie();

amauiCookie.add('todo-1', 'a');

amauiCookie.properties;

// ['todo-1']
```

#### values

Returns all the values from the cookie, with a key prefixed with a prefix for the instance.

```ts
const amauiCookie = new AmauiCookie();

amauiCookie.add('todo-1', 'a');

amauiCookie.values;

// ['a']
```

#### has

Check is the cookie has any value under this key.

Prefix is added on the key, as it's the same prefix added while writing the value to the cookie.

```ts
const amauiCookie = new AmauiCookie();

amauiCookie.add('todo-1', 'a');

amauiCookie.has('todo-1');

// true
```

#### remove

Removes a value from the cookie, based on a key.

```ts
const amauiCookie = new AmauiCookie();

amauiCookie.add('todo-1', 'a');

amauiCookie.remove('todo-1');
```

#### clear static method

Clears the entire cookie.

```ts
AmauiCookie.clear();
```

#### clear instance getter method

Removes all prefixed key items from the cookie, other than ones mentioned in `removeNotAllowed` internal array variable.

```ts
const amauiCookie = new AmauiCookie();

amauiCookie.add('todo-1', 'a');

// amaui_todo-1=a

amauiCookie.clear;

// All amaui_[name] key items are removed from the cookie.
```

### Other

#### cookie

Returns the entire browser cookie.

```ts
AmauiCookie.cookie;

// amaui_a=a; ...
```

#### namespace

Returns the namespace for in the instance.

```ts
const amauiCookie = new AmauiCookie({ namespace: 'a' });

amauiCookie.namespace;

// a_
```

#### removeNotAllowed

Instance of this class has `removeNotAllowed`, which is an array of string values, defining any key that will not be removed, on calling clear method.

```ts
const amauiCookie = new AmauiCookie();

amauiCookie.removeNotAllowed = ['a'];

amauiCookie.clear;

// amaui_a=4 is still there
// but other amaui_[name] properties are removed from the cookie.
```


## API

#### IOptions

```ts
interface IOptions {
    namespace?: string;
    namespace_separator?: string;
}
```

#### AmauiCookie

```ts
class AmauiCookie {
    options: IOptions;
    removeNotAllowed: string[];
    constructor(options?: IOptions);
    get namespace(): string;
    static get cookie(): string;
    static get clear(): void;
    get properties(): Array<string>;
    get values(): Array<any>;
    get items(): Record<string, any>;
    get clear(): void;
    get(name: string): any;
    has(name: string): any;
    add(name_: string, value_: any, days?: number, path?: string): void;
    update(...args: [string, any, number, string]): void;
    remove(name: string, path?: string): void;
    private property;
    private propertyOriginal;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Cookie: Start",
      "to": "/library/cookie/start"
    },
    "next": {
      "label": "Date: Start",
      "to": "/library/date/start"
    }
  }
}~
