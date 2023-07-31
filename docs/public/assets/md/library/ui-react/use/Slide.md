

## API

#### ISlide

```ts
interface ISlide extends ITransition {
    root?: HTMLElement;
    min?: number;
    direction?: 'top' | 'left' | 'bottom' | 'right';
    timing_function?: string | Record<string, string>;
    addTransition?: string;
    delay?: number;
}
```

#### Slide

```ts
const Slide: React.ForwardRefExoticComponent<Omit<ISlide, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Select",
      "to": "/library/ui-react/use/Select"
    },
    "next": {
      "label": "UI react: Slider",
      "to": "/library/ui-react/use/Slider"
    }
  }
}~
