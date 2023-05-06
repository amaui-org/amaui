

### API

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
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
