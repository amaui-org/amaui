

## API

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
      "label": "UI react: Box",
      "to": "/library/ui-react/use/Box"
    },
    "next": {
      "label": "UI react: BubbleChart",
      "to": "/library/ui-react/use/BubbleChart"
    }
  }
}~
