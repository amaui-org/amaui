
# AmauiStorage

### Options

#### Variant

If `local` localStorage, if `session` sessionStorage.

#### namespace

Namespace value under which all keys will be prefixed prior to adding to, and reading from the storage.

#### namespace_separator

Separator between namespace, and key name.

```ts
// separator: -
// namespace-key: value
```

### Methods

#### add

Adds new key, value into the storage.

Value is stringified, prior to writing into the storage, so you can pass any reference value as well.

```ts
const amauiStorage = new AmauiStorage();

amauiStorage.add('todo-1', { id: 1114 });

// amaui_todo-1: '{ "id": 1114 }'
```

#### update

Alias for the add method, as it basically does the same thing, updating is just overwriting the existing key's value.

#### get

Gets a value from the storage, based on a key.

Value is automatically parsed back into its value type, while reading from the storage, prior to returning.

```ts
const amauiStorage = new AmauiStorage();

amauiStorage.get('todo-1');

// { id: 1114 }
```

#### items

Returns an object with all the storage items, with a prefix for the instance.

```ts
const amauiStorage = new AmauiStorage();

amauiStorage.add('todo-1', { id: 1114 });

amauiStorage.items;

// {
//   'todo-1': { id: 1114 }
// }
```

#### properties

Returns all the properties from the storage, prefixed with a prefix for the instance.

```ts
const amauiStorage = new AmauiStorage();

amauiStorage.add('todo-1', { id: 1114 });

amauiStorage.properties;

// ['todo-1']
```

#### values

Returns all the values from the storage, with a key prefixed with a prefix for the instance.

```ts
const amauiStorage = new AmauiStorage();

amauiStorage.add('todo-1', { id: 1114 });

amauiStorage.values;

// [{ id: 1114 }]
```

#### has

Check is the storage has any value under this key.

Prefix is added on the key, as it's the same prefix added while writing the value to the storage.

```ts
const amauiStorage = new AmauiStorage();

amauiStorage.has('todo-1');

// true
```

#### remove

Removes a value from the storage, based on a key.

```ts
const amauiStorage = new AmauiStorage();

amauiStorage.remove('todo-1');
```

#### clear static method

Clears the entire storage.

```ts
AmauiStorage.clear();
```

#### clear instance getter method

Removes all prefixed key items from the storage, other than ones mentioned in `removeNotAllowed` internal array variable.

```ts
const amauiStorage = new AmauiStorage();

amauiStorage.add('todo-1', { id: 1114 });

// amaui_todo-1: '{ "id": 1114 }'

amauiStorage.clear;

// All amaui_[name] key items are removed from the storage.
```

### Other

#### namespace

Returns the namespace for in the instance.

```ts
const amauiStorage = new AmauiStorage({ namespace: 'a' });

amauiStorage.namespace;

// a_
```

Instance of this class has `removeNotAllowed`, which is an array of string values, defining any key that will not be removed, on calling clear method.

```ts
const amauiStorage = new AmauiStorage();

amauiStorage.removeNotAllowed = ['a'];

amauiStorage.clear;

// amaui_a: 4 is still there
// but other amaui_[name] properties are removed from the storage.
```

## API

#### TVariant

```ts
type TVariant = 'local' | 'session';
```

#### IOptions

```ts
interface IOptions {
    variant?: TVariant;
    storage?: Storage;
    namespace?: string;
    namespace_separator?: string;
}
```

#### AmauiStorage

```ts
class AmauiStorage {
    options: IOptions;
    storage: Storage;
    removeNotAllowed: string[];
    constructor(options?: IOptions);
    init(): void;
    static clear(variant: TVariant): void;
    get namespace(): string;
    get properties(): Array<string>;
    get values(): Array<string>;
    get items(): Record<string, any>;
    get clear(): void;
    get(name: string): any;
    has(name: string): boolean;
    add(name: string, value: any): void;
    update(...args: [string, any]): void;
    remove(name: string): void;
    private property;
    private propertyOriginal;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Storage: Start",
      "to": "/dev/storage/start"
    },
    "next": {
      "label": "Style: Start",
      "to": "/dev/style/start"
    }
  }
}~
