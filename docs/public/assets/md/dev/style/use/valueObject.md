

## API

#### IValueObject

```ts
interface IValueObject {
    value?: any;
    arguments?: any;
}
```

#### valueObject

```ts
function valueObject(amauiStyle: AmauiStyle): {
    methods: {
        method: (value_?: {
            property?: string;
            value?: any;
        }) => IValueObject;
    };
    remove: () => void;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: utils",
      "to": "/dev/style/use/utils"
    },
    "next": {
      "label": "Subscription: Start",
      "to": "/dev/subscription/start"
    }
  }
}~