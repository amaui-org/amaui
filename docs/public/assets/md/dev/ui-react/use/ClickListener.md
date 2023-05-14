

## API

#### IClickListener

```ts
interface IClickListener extends IBaseElement {
    mouseEvent?: 'onClick' | 'onMove' | 'onMouseDown' | 'onMouseUp' | 'onMouseEnter' | 'onMouseLeave';
    touchEvent?: 'onTouchStart' | 'onTouchEnd' | 'onTouchMove';
    include?: Array<THTMLElement>;
    includeParentQueries?: Array<string>;
    includeQueries?: Array<string>;
    onClickInside?: () => any;
    onClickOutside?: () => any;
}
```

#### ClickListener

```ts
const ClickListener: React.ForwardRefExoticComponent<Omit<IClickListener, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Chips",
      "to": "/dev/ui-react/use/Chips"
    },
    "next": {
      "label": "UI react: Clock",
      "to": "/dev/ui-react/use/Clock"
    }
  }
}~
