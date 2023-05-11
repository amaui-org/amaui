

### API

#### IBreadcrumbs

```ts
interface IBreadcrumbs extends IBaseElement {
    separator?: TElement | string;
    max?: number;
    renderMore?: (onExpandMore: () => void) => TElement;
}
```

#### Breadcrumbs

```ts
const Breadcrumbs: React.ForwardRefExoticComponent<Omit<IBreadcrumbs, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}
