

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

#### _default

```ts
const _default: IAssert;
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: AmauiTo",
      "to": "/dev/test/use/AmauiTo"
    },
    "next": {
      "label": "Test: cli",
      "to": "/dev/test/use/cli"
    }
  }
}~
