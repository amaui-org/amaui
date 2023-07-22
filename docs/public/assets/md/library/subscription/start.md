
# amaui subscription

Use as a subscription method where you can emit values to the subscribed methods, anywhere in your app.

### Add

```sh
yarn add @amaui/subscription
```

### Use

```ts
import AmauiSubscription from '@amaui/subscription';

// Make a new subscription instance
// with an optional initial value
const amauiSubscription = new AmauiSubscription('🙂');

// Value
amauiSub.value;

// '🙂'

const method = (...value) => console.log('Yup, I got it ', ...value);

const method1 = value => console.log('Yup, I got it as well ', value);

// Methods subscribe
amauiSub.subscribe(method);

amauiSub.subscribe(method1);

// Emit a value to all subscribed methods
// a value always emitted as arguments received by emit method
amauiSub.emit('🌱', '🌱', '🌱', '🌱');

// method, log:
// Yup, I got it 🌱 🌱 🌱 🌱

// method1, log:
// Yup, I got it as well 🌱

// Methods unsubscribe
amauiSub.unsubscribe(method);

amauiSub.unsubscribe(method1);

// or with anonymous method
const subscription = amauiSub.subscribe(value => console.log(value));

subscription.unsubscribe();
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: Start",
      "to": "/dev/style/start"
    },
    "next": {
      "label": "Subscription: Use",
      "to": "/dev/subscription/use"
    }
  }
}~
