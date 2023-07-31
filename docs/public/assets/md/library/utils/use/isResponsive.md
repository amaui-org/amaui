
# isResponsive

Used to validate a size of the user device.

```ts
isResponsive('mobile');

// true
```

### Type

- mobile (only screen and (max-width: 767px))
- tablet (only screen and (min-width: 768px) and (max-width: 1279px))
- laptop (only screen and (min-width: 1280px) and (max-width: 1919px))
- desktop (only screen and (min-width: 1920px) and (max-width: 2559px))
- tv (only screen and (min-width: 2560px))

### value

User provided value for the method.

## API

#### isResponsive

```ts
default function isResponsive(type: string, value?: any): any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: isOS",
      "to": "/library/utils/use/isOS"
    },
    "next": {
      "label": "Utils: isState",
      "to": "/library/utils/use/isState"
    }
  }
}~
