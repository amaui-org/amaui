

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

