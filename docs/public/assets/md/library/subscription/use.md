
# AmauiSubscription

### Options

#### emit

Options for emiting the value.

##### priorValue

If during the emit value being emit is always the original one from the beginning, and is the same value passed to all subscribers.

##### copy

If to copy the value before passing it into each subscriber method on emit.

Important for values that are of reference type, if you want to preserve the value between subscriber methods using it.

##### pre

###### method

Method to run pre emiting the value to all subscribers.

##### post

###### method

Method to run post emiting the value to all subscribers.

### Methods

#### Emit

Emits the value to all subscribed methods.

```ts
// Make a new subscription instance
// with an optional initial value
const amauiSubscription = new AmauiSubscription('🙂');

// Value
amauiSubscription.value;

// '🙂'

const method = (...value) => console.log('Yup, I got it ', ...value);

const method1 = value => console.log('Yup, I got it as well ', value);

// Methods subscribe
amauiSubscription.subscribe(method);

amauiSubscription.subscribe(method1);

// Emit a value to all subscribed methods
// a value always emitted as arguments received by emit method
amauiSubscription.emit('🌱', '🌱', '🌱', '🌱');

// method, log:
// Yup, I got it 🌱 🌱 🌱 🌱

// method1, log:
// Yup, I got it as well 🌱
```

#### Subscribe, unsubscribe

Returns the object with unsubscribe method, which unsubscribes the subscribed method reference from the AmauiSubscription instance.

```ts
const amauiSubscription = new AmauiSubscription();

const subscription = amauiSubscription.subscribe(() => ...);

// Unsubscribe
subscription.unsubscribe();
```

#### For each

Unlike the map, for each passes the same provided value to each subscribe method.

```ts
const amauiSubscription = new AmauiSubscription();

const method = (v: any) => v + 1;
const method1 = () => { throw new Error('a'); };

amauiSubscription.subscribe(method);
amauiSubscription.subscribe(method1);

const values_ = amauiSubscription.forEach(114);
```

#### Map

Value starts with the provided value, but it gets passed into each subscriber method in order, and value is now whatever each subscriber returns. So subscriber method 2's value input is subscriber method 1 return value.

```ts
const amauiSubscription = new AmauiSubscription();

const method = (v: any) => v + 1;
const method1 = () => { throw new Error('a'); };

amauiSubscription.subscribe(method);
amauiSubscription.subscribe(method1);

const values_ = amauiSubscription.map(1114);
```

### Other

#### Length

Returns number of subscribed methods.

```ts
const amauiSubscription = new AmauiSubscription();

const method = (v: any) => v + 1;
const method1 = () => { throw new Error('a'); };

amauiSubscription.subscribe(method);
amauiSubscription.subscribe(method1);

amauiSubscription.length;

// 2
```

## API

#### ISubscribe

```ts
interface ISubscribe {
    unsubscribe: () => void;
}
```

#### IOptions

```ts
interface IOptions {
    emit?: {
        priorValue?: boolean;
        copy?: boolean;
        pre?: {
            method?: TMethod;
        };
        post?: {
            method?: TMethod;
        };
    };
}
```

#### IAmauiSubscription

```ts
interface IAmauiSubscription {
    methods: Array<TMethod>;
    emit(...args: any[]): void;
    subscribe(method: TMethod): void;
    unsubscribe(method: TMethod): void;
    [p: string]: any;
}
```

#### AmauiSubscription

```ts
class AmauiSubscription implements IAmauiSubscription {
    value?: any;
    options: IOptions;
    methods: Array<TMethod>;
    constructor(value?: any, options?: IOptions);
    get length(): number;
    emit(...args: any[]): void;
    forEach(...args: any[]): void;
    map(value_?: any): any;
    subscribe(method: TMethod): ISubscribe;
    unsubscribe(method: TMethod): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Subscription: Start",
      "to": "/dev/subscription/start"
    },
    "next": {
      "label": "Test: Start",
      "to": "/dev/test/start"
    }
  }
}~
