

## API

#### ICarouselValue

```ts
interface ICarouselValue {
    index?: number;
    x?: number;
    y?: number;
}
```

#### TCarouselItem

```ts
type TCarouselItem = string | null | TElement | {
    element: TElement;
};
```

#### TCarouseOnUpdate

```ts
type TCarouseOnUpdate = (to: string | number, values: TCarouselItem[]) => any;
```

#### ICarousel

```ts
interface ICarousel extends Omit<ISurface, 'version'> {
    version?: 'regular' | 'transition' | Record<TValueBreakpoints, 'regular' | 'transition'>;
    valueDefault?: ICarouselValue;
    value?: ICarouselValue;
    onChange?: (value: ICarouselValue) => any;
    id?: any;
    items?: Array<TCarouselItem>;
    orientation?: 'vertical' | 'horizontal' | Record<TValueBreakpoints, 'vertical' | 'horizontal'>;
    itemSize?: 'auto' | Record<TValueBreakpoints, 'auto' | false>;
    gap?: number | Record<TValueBreakpoints, number>;
    move?: boolean | Record<TValueBreakpoints, boolean>;
    moveValue?: number | Record<TValueBreakpoints, number>;
    moveItems?: number | Record<TValueBreakpoints, number>;
    moveBeyondEdge?: boolean | Record<TValueBreakpoints, boolean>;
    free?: boolean | Record<TValueBreakpoints, boolean>;
    swipe?: boolean | Record<TValueBreakpoints, boolean>;
    background?: boolean | Record<TValueBreakpoints, boolean>;
    index?: number;
    autoPlay?: boolean | Record<TValueBreakpoints, boolean>;
    autoHeight?: boolean | Record<TValueBreakpoints, boolean>;
    autoHeightDelay?: number;
    autoPlayInterval?: number;
    pauseOnHover?: boolean;
    round?: boolean | Record<TValueBreakpoints, boolean>;
    arrows?: boolean | Record<TValueBreakpoints, boolean>;
    mouseScroll?: boolean;
    momentum?: boolean | Record<TValueBreakpoints, boolean>;
    previousSub?: AmauiSubscription;
    nextSub?: AmauiSubscription;
    updateSub?: AmauiSubscription;
    arrowsVisibility?: 'hover' | 'visible' | Record<TValueBreakpoints, 'hover' | 'visible'>;
    arrowHideOnStartEnd?: boolean | Record<TValueBreakpoints, boolean>;
    renderProgress?: (update: TCarouseOnUpdate) => TElement;
    renderArrowPrevious?: (update: () => any) => TElement;
    renderArrowNext?: (update: () => any) => TElement;
    progress?: boolean | Record<TValueBreakpoints, boolean>;
    progressVisibility?: 'hover' | 'visible' | Record<TValueBreakpoints, 'hover' | 'visible'>;
    noTransition?: boolean | Record<TValueBreakpoints, boolean>;
    onUpdatePosition?: (value: ICarouselValue) => any;
    onInit?: TMethod;
    onUpdateItems?: TMethod;
    onBlur?: (event: React.FocusEvent<any>) => any;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onMouseEnte?: (event: React.MouseEvent<any>) => any;
    onMouseLeave?: (event: React.MouseEvent<any>) => any;
    TransitionComponent?: TElementReference;
    ProgressTransitionComponent?: TElementReference;
    ArrowTransitionComponent?: TElementReference;
    ArrowPreviousTransitionComponent?: TElementReference;
    ArrowNextTransitionComponent?: TElementReference;
    IconButtonPrevious?: TElement;
    IconButtonNext?: TElement;
    IconPrevious?: TElementReference;
    IconNext?: TElementReference;
    ArrowProps?: TPropsAny;
    ArrowPreviousProps?: TPropsAny;
    ArrowNextProps?: TPropsAny;
    CarouselProps?: TPropsAny;
    TransitionsProps?: TPropsAny;
    TransitionComponentProps?: TPropsAny;
    ArrowTransitionComponentProps?: TPropsAny;
    ArrowPreviousTransitionComponentProps?: TPropsAny;
    ArrowNextTransitionComponentProps?: TPropsAny;
    ProgressTransitionComponentProps?: TPropsAny;
    ItemWrapperProps?: TPropsAny;
}
```

#### Carousel

```ts
const Carousel: React.ForwardRefExoticComponent<Omit<ICarousel, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: CardMain",
      "to": "/dev/ui-react/use/CardMain"
    },
    "next": {
      "label": "UI react: Chart",
      "to": "/dev/ui-react/use/Chart"
    }
  }
}~
