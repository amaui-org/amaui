
# assert

Method to assert if value comparison is true or false, if false it throws an error, so the to method can fail the test.

### Assert methods

#### Modifiers

##### own

True if it has own property `a` and not from the prototype methods.

```ts
assert(new a()).own.property('a');
```

##### not

```ts
assert('a').not.eq(4);
```

#### Filters

##### one

```ts
assert('a').one.eq(['a', 4]);
```

##### any

```ts
assert('a').any.eq(['a', 4, 'a']);
```

##### all

```ts
assert('a').all.eq(['a', 'a']);
```

#### Props

##### true

```ts
assert(true).true;
```

##### false

```ts
assert(false).false;
```

##### undefined

```ts
assert(undefined).undefined;
```

##### null

```ts
assert(null).null;
```

##### NaN

```ts
assert(NaN).NaN;
```

##### empty

```ts
assert('').empty;
assert([]).empty;
assert(new Map()).empty;
assert(new Set()).empty;
```

##### exist

```ts
// true
assert('').exist;
assert([]).exist;
assert(0).exist;
assert(new Map()).exist;

// false
assert(undefined).exist;
assert(null).exist;
```

##### truthy

```ts
assert('a').truthy;
assert(4).truthy;
assert([]).truthy;
assert(new Map()).truthy;
```

##### falsy

```ts
assert('').falsy;
assert(0).falsy;
assert(undefined).falsy;
assert(null).falsy;
```

#### Valid

va, valid uses `@amaui/utils`'s `isValid` method to do the validation.

##### va

Alias for valid.

##### valid

```ts
assert(new Date()).valid('date');
assert(AmauiUtils.getID()).valid('uuid');
assert('110101').valid('binary-string');
assert('abcdef').valid('hexadecimal-string');
assert('https://a.com/a').valid('url');
assert('/a').valid('url-path');
assert().valid('compare', { valueA: 14, valueB: 4, operator: 'greater-than-equal' });
assert().valid('compare', { valueA: 14, valueB: 4, operator: 'greater-than-equal' });
assert.valid('compare', { valueA: 14, valueB: 4, operator: 'greater-than-equal' });
assert.valid('compare', { valueA: 14, valueB: 4, operator: 'greater-than-equal' });
assert('1.4.1-a').valid('semver');
assert.valid('semver-compare', { valueA: '1.4.3', valueB: '1.4.4', operator: 'less-than' });
assert(1638223021).valid('timestamp');
assert('+381611234123').valid('mobile');
assert('a@a.com').valid('email');
assert('0xaa7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad').valid('hash');
assert('rgb(1, 144, 144)').valid('color-rgb');
assert('#ff44ff').valid('color-hex');
assert('hsl(1, 40%, 40%)').valid('color-hsl');
assert('{"a":4,"c":4}').valid('json');
assert(4).valid('min', { min: 1 });
assert(4).valid('max', { max: 14 });
assert(4).valid('max', { min: 1, max: 14 });
assert(4, { noError: true }).valid('same-origin');
assert({ __esModule: true, default: () => 4, }).valid('js-chunk');
assert('get').valid('http-method');
assert('aGVsbG8sIFdvcmxkIQ==').valid('base64');
assert('data:,A%20brief%20note').valid('datauri');
```

#### A, an

a, an uses `@amaui/utils`'s `is`, `isState`, `isEnvironment`, `isExists`, `isOS`, `isBrowser`, `isResponsive` methods to do the validation.

A one or array of arguments are passed into all of the above methods, and if any of them is true, then this method is true.

##### a

Alias for an.

##### an

```ts
assert('').a('string');
assert(4).a('number');
assert(true).a('boolean');
assert([]).an('array');
assert({}).an('object');
assert(new Map()).a('object-like');
assert(new A()).a('class');
assert(a).a('function');
assert(async function ay() { }).an('async');
assert(new Map()).a('map');
assert(new WeakMap()).a('weakmap');
assert(new Set()).a('set');
assert(new WeakSet()).a('weakset');
assert(new Promise(resolve => resolve(4))).a('promise');
assert(new Int8Array()).an('int8array');
assert(new Uint8Array()).an('uint8array');
assert(new Uint8ClampedArray()).a('uint8clampedarray');
assert(new Int16Array()).an('int16array');
assert(new Uint16Array()).an('uint16array');
assert(new Int32Array()).an('int32array');
assert(new Uint32Array()).an('uint32array');
assert(new Float32Array()).a('float32array');
assert(new Float64Array()).a('float64array');
assert(new BigInt64Array()).a('bigint64array');
assert(new BigUint64Array()).a('biguint64array');
assert(new Int8Array()).a('typedarray');
assert(new DataView(new ArrayBuffer(4))).a('dataview');
assert(new ArrayBuffer(4)).an('arraybuffer');
assert(new SharedArrayBuffer(4)).a('sharedarraybuffer');
assert(Symbol(4)).a('symbol');
assert(new Error()).an('error');
assert(new Date()).a('date');
assert(/a+/gi).a('regexp');
assert((function a() { return arguments; })()).an('arguments');
assert(null).a('null');
assert(undefined).an('undefined');
assert(Buffer.from([4, 1])).a('buffer');
assert(Aa).an('element', { variant: 'react' });
assert('a').a('simple');
assert(4).a('not-array-object');
assert().an('online', { noError: true });
assert.an('online', { noError: true });
assert.an('offline', { noError: true });
assert.a([
  'browser',
  'worker',
  'nodejs',
  'localhost'
], { any: true });
assert.a('crypto', { noError: true });
assert.an('Intl');
assert.a([
  'mac',
  'mobile',
  'android',
  'ios',
  'windows',
  'linux'
], { any: true, noError: true });
assert.a([
  'chrome',
  'opera',
  'firefox',
  'safari',
  'edge-chromium',
  'edge',
  'ie'
], { any: true, noError: true });
assert.a([
  'mobile',
  'tablet',
  'laptop',
  'desktop',
  'tv'
], { any: true, noError: true });
```

#### Equal

##### eq

Alias for equal.

##### equals

Alias for equal.

##### equal

```ts
assert('a').equal('a');
```

#### Equal deep

##### eql

Alias for equalDeep.

##### equalsDeep

Alias for equalDeep.

##### equalDeep

```ts
assert({ a: 4, aa: { a: 4 } }).equalDeep({ a: 4, aa: { a: 4 } });
```

#### Less, greater, equal then operators

##### lt

Alias for lessThan.

##### lessThan

```ts
assert(4).lessThan(14);
```

##### lte

Alias for lessThanEqual.

##### lessThanEqual

```ts
assert(4).lessThanEqual(4);
```

##### gt

Alias for greaterThen.

##### greaterThan

```ts
assert(14).greaterThan(4);
```

##### gte

Alias for greaterThanEqual.

##### greaterThanEqual

```ts
assert(14).greaterThanEqual(14);
```

#### in

Alias for include.

#### Includes

Alias for include.

##### include

```ts
assert('aa4').include('4');
assert('aa14').include('14');
assert(['a', { a: { a: 4 } }]).include('a');
assert(['a', { a: { a: 4 } }]).include({ a: { a: 4 } });
assert(new Map([['a', 4]])).include(4);
assert(new Map([['a', { a: 4 }]])).include({ a: 4 });
assert(new Set([4])).include(4);
assert(new Set([4, { a: 4 }])).include({ a: 4 });
assert({ a: { a: 4 }, ab: 4 }).include({ a: { a: 4 } });
assert({ a: { a: 4 }, ab: 4 }).include({ a: { a: 4 }, ab: 4 });
```

#### Properties

Uses `@amaui/utils`'s `hasObjectProperty`, `getObjectValue`, to validate the values.

##### prop

Alias for property.

##### property

```ts
assert({ a: { a: 4 }, ab: 4 }).property('a.a');
assert([4, { a: 4 }]).property('1.a');
assert([4, { a: 4 }]).property('1', { a: 4 });
assert([4, { a: 4 }]).property('1.a', 4);
assert({ a: { a: 4 }, ab: 4 }).property('a.a', 4);
assert({ a: { a: 4 }, ab: 4 }).property('a.a', 4);
assert({ a: { a: 4 }, ab: 4 }).property('toString');
```

##### props

Alias for properties.

##### properties

```ts
assert({ a: { a: 4 }, ab: 4, ad: 4 }).properties({ a: { a: 4 }, ab: 4 });
assert({ a: { a: 4 }, ab: 4, ad: 4 }).properties({ a: { a: 4 }, ad: 4 });
assert([14, { a: 4 }, true]).properties([14, true]);
assert([14, { a: 4 }, true]).properties([14, { a: 4 }]);
```

#### Errors

##### th

Alias for throw.

##### throw

```ts
function a() { throw new Error(); }
function a1() { }

assert(a).throw();
assert(a).throw(String(new Error()));
```

##### tha

Alias for throwAsync.

##### throwAsync

```ts
async function a() {
  await AmauiUtils.wait(140);

  throw new Error();
}
async function a1() { }

await assert(a).throwAsync();
await assert(a).throwAsync(String(new Error()));
```


## API

#### TAssertOperator

```ts
type TAssertOperator = 'a' | 'valid' | 'empty' | 'equal' | 'equal-deep' | 'include' | 'lt' | 'less-than' | 'lte' | 'less-than-equal' | 'gt' | 'greater-than' | 'gte' | 'greater-than-equal' | 'property' | 'properties' | 'truthy' | 'falsy' | 'true' | 'false' | 'undefined' | 'null' | 'NaN' | 'throw' | 'throw-async' | 'exist';
```

#### IAssertOptions

```ts
interface IAssertOptions extends IIsOptions {
    message: string;
    not: boolean;
    own: boolean;
    any: boolean;
    one: boolean;
    all: boolean;
    noError: boolean;
}
```

#### TAliases

```ts
type TAliases = 'to' | 'be' | 'been' | 'is' | 'that' | 'which' | 'and' | 'has' | 'have' | 'with' | 'at' | 'of' | 'same' | 'but' | 'does' | 'still' | 'also';
```

#### TAssertObjectAliases

```ts
type TAssertObjectAliases = {
    [p in TAliases]?: IAssertObject;
};
```

#### IAssertObject

```ts
interface IAssertObject extends TAssertObjectAliases {
    own: IAssertObject;
    not: IAssertObject;
    one: IAssertObject;
    any: IAssertObject;
    all: IAssertObject;
    true: IAssertObject;
    false: IAssertObject;
    undefined: IAssertObject;
    null: IAssertObject;
    NaN: IAssertObject;
    empty: IAssertObject;
    exist: IAssertObject;
    truthy: IAssertObject;
    falsy: IAssertObject;
    va: (value: Array<string> | string, options?: IAssertOptions) => IAssertObject;
    valid: (value: Array<string> | string, options?: IAssertOptions) => IAssertObject;
    a: (value: Array<string> | string, options?: IAssertOptions) => IAssertObject;
    an: (value: Array<string> | string, options?: IAssertOptions) => IAssertObject;
    eq: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    equal: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    equals: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    eql: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    equalDeep: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    equalsDeep: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    lt: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    lessThan: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    lte: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    lessThanEqual: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    gt: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    greaterThan: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    gte: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    greaterThanEqual: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    in: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    include: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    prop: (value: string, value1?: any, options?: IAssertOptions) => IAssertObject;
    property: (value: string, value1?: any, options?: IAssertOptions) => IAssertObject;
    props: (properties: Array<Record<string, any>> | Record<string, any>, options?: IAssertOptions) => IAssertObject;
    properties: (properties: Array<Record<string, any>> | Record<string, any>, options?: IAssertOptions) => IAssertObject;
    th: (value?: any, options?: IAssertOptions) => IAssertObject;
    throw: (value?: any, options?: IAssertOptions) => IAssertObject;
    tha: (value?: any, options?: IAssertOptions) => Promise<IAssertObject>;
    throwAsync: (value?: any, options?: IAssertOptions) => Promise<IAssertObject>;
}
```

#### IAssertError

```ts
interface IAssertError extends AssertError {
    operator: string;
    expression: string;
    expected: any;
    actual?: any;
    modifier?: 'not' | 'own';
    filter?: 'one' | 'any' | 'all';
}
```

#### IAssert

```ts
type IAssert = {
    (value?: any, options?: IAssertOptions): IAssertObject;
    a?: (value: Array<string> | string, options?: IAssertOptions) => IAssertObject;
    an?: (value: Array<string> | string, options?: IAssertOptions) => IAssertObject;
    va?: (value: Array<string> | string, options?: IAssertOptions) => IAssertObject;
    valid?: (value: Array<string> | string, options?: IAssertOptions) => IAssertObject;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: AmauiTo",
      "to": "/library/test/use/AmauiTo"
    },
    "next": {
      "label": "Test: cli",
      "to": "/library/test/use/cli"
    }
  }
}~
