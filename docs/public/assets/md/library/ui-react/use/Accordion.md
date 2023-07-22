

## API

#### TPadding

```ts
type TPadding = 'start' | 'end' | 'both' | 'none';
```

#### IAccordion

```ts
interface IAccordion extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    elevation?: TElevation;
    primary?: TElement;
    secondary?: TElement;
    openDefault?: boolean;
    open?: boolean;
    onChange?: (open: boolean) => any;
    noBackground?: boolean;
    noExpandButton?: boolean;
    expandedMarginVertical?: TPadding;
    expandedHeaderPaddingVertical?: TPadding;
    headerPaddingVertical?: TPadding;
    headerPaddingHorizontal?: TPadding;
    mainPaddingVertical?: TPadding;
    mainPaddingHorizontal?: TPadding;
    noTransition?: boolean;
    disabled?: boolean;
    ExpandProps?: TPropsAny;
    TransitionComponentProps?: TPropsAny;
    WrapperHeaderProps?: TPropsAny;
    IconButtonProps?: TPropsAny;
    ExpandIcon?: TElementReference;
    TransitionComponent?: TElementReference;
}
```

#### Accordion

```ts
const Accordion: React.ForwardRefExoticComponent<Omit<IAccordion, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Start",
      "to": "/dev/ui-react/start"
    },
    "next": {
      "label": "UI react: AdvancedTextField",
      "to": "/dev/ui-react/use/AdvancedTextField"
    }
  }
}~
