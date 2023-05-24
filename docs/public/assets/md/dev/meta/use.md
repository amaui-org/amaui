
# AmauiMeta

All methods are static methods.

### Options

#### value

##### copy

If true, copy of the value will be saved as a value, default value is false.

#### add

##### override

If true, even if key exists already during add method, it will override the existing key, value with the new value, default value is true.

### Methods

#### Add

You can key, value referenced to an object, or object's property. \
Property doesn't have to exist in that object, but can be anything, property, method name, etc.

```ts
const object = {};

AmauiMeta.add('a', 114, object);
AmauiMeta.add('a', 1114, object, 'p');

AmauiMeta.get('a', object);
AmauiMeta.get('a', object, 'p');

// 114
// 1114
```

#### Update

Updates key's value referenced to an object, or object's property.

```ts
const object = {};

AmauiMeta.add('a', 114, object);
AmauiMeta.add('a', 1114, object, 'p');

AmauiMeta.update('a', 1114, object);
AmauiMeta.update('a', 11114, object, 'p');

AmauiMeta.get('a', object);
AmauiMeta.get('a', object, 'p');

// 1114
// 11114
```

#### Get

Returns a value referenced to an object, or object's property.

```ts
const object = {};

AmauiMeta.add('a', 11, object);
AmauiMeta.add('a', 114, object, 'p');

AmauiMeta.get('a', object);
AmauiMeta.get('a', object, 'p');

// 11
// 114
```

#### Has

Returns true if there's a key, value referenced to an object, or object's property.

```ts
const object = {};

AmauiMeta.add('a', 11, object);
AmauiMeta.add('a', 114, object, 'p');

AmauiMeta.has('a', object);
AmauiMeta.has('a', object, 'p');

// true
// true
```

#### Remove

Removes key, value referenced to an object, or object's property.

```ts
const object = {};

AmauiMeta.add('a', 11, object);
AmauiMeta.add('a', 114, object, 'p');

AmauiMeta.remove('a', object);
AmauiMeta.remove('a', object, 'p');

AmauiMeta.has('a', object);
AmauiMeta.has('a', object, 'p');

// undefined
// undefined
```

#### Values

Returns all values referenced to an object, or object's property.

```ts
const object = {};

AmauiMeta.add('a', 11, object);
AmauiMeta.add('a1', 14, object);

AmauiMeta.add('a14', 114, object, 'p');
AmauiMeta.add('a114', 1114, object, 'p');

AmauiMeta.values(object);
AmauiMeta.values(object, 'p');

// [11, 14]
// [114, 1114]
```

#### Keys

Returns all keys referenced to an object, or object's property.

```ts
const object = {};

AmauiMeta.add('a', 11, object);
AmauiMeta.add('a1', 14, object);

AmauiMeta.add('a14', 114, object, 'p');
AmauiMeta.add('a114', 1114, object, 'p');

AmauiMeta.keys(object);
AmauiMeta.keys(object, 'p');

// ['a', 'a1']
// ['a14', 'a114']
```

#### Reset

Resets the entire meta value, to its empty value.

```ts
const object = {};

AmauiMeta.add('a', 11, object);
AmauiMeta.add('a', 114, object, 'p');

AmauiMeta.reset();

AmauiMeta.get('a', object);
AmauiMeta.get('a', object, 'p');

// undefined
// undefined
```

### Decorators

Typescript decorators for classes, class's methods, properties & parameters.

#### class

```ts
@AmauiMeta.class(
  'a',
  1114
)
class A { }

AmauiMeta.get('a', A);

// 1114
```

#### method

```ts
class A {

  @AmauiMeta.method(
    'a',
    1114
  )
  public m() {

  }
}

AmauiMeta.get('a', A, 'm');

// 1114
```

#### property

```ts
class A {

  @AmauiMeta.property(
    'a',
    1114
  )
  public p = 'a';

}

AmauiMeta.get('a', A, 'p');

// 1114
```

#### parameter

```ts
class A {

  public m(
    @AmauiMeta.parameter(
      1114
    )
    p = 'a'
  ) { }

}

AmauiMeta.get('amaui-meta-param:0', A, 'm');

// 1114
```

## API

#### IOptionsValue

```ts
interface IOptionsValue {
    // default: false
    copy?: boolean;
}
```

#### IOptionsAdd

```ts
interface IOptionsAdd {
    // default: true
    override?: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    value?: IOptionsValue;
    add?: IOptionsAdd;
}
```

#### AmauiMeta

```ts
class AmauiMeta {
    static meta: WeakMap<object, any>;
    private static options_;
    static get options(): IOptions;
    static set options(value: IOptions);
    static class(...args: any[]): ClassDecorator;
    static method(...args: any[]): MethodDecorator;
    static property(...args: any[]): PropertyDecorator;
    static parameter(...args: any[]): ParameterDecorator;
    static add(key: any, value: any, object: any, property?: any): void;
    static update(key: any, value: any, object: any, property?: any): void;
    static values(object: any, property?: any): Array<any> | undefined;
    static keys(object: any, property?: any): Array<any> | undefined;
    static get(key: any, object: any, property?: any): any | undefined;
    static has(key: any, object: any, property?: any): boolean;
    static remove(key: any, object: any, property?: any): void;
    static reset(): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Meta: Start",
      "to": "/dev/meta/start"
    },
    "next": {
      "label": "Models: Start",
      "to": "/dev/models/start"
    }
  }
}~
