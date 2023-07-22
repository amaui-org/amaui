

## API

#### IPortal

```ts
interface IPortal extends IBaseElement {
    element?: Element | DocumentFragment;
}
```

#### Portal

```ts
const Portal: React.ForwardRefExoticComponent<Omit<IPortal, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Placeholder",
      "to": "/dev/ui-react/use/Placeholder"
    },
    "next": {
      "label": "UI react: Radio",
      "to": "/dev/ui-react/use/Radio"
    }
  }
}~
