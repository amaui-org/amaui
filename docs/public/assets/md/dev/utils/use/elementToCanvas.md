

### API

#### TElementToCanvas

```ts
type TElementToCanvas = string | HTMLCanvasElement;
```

#### TElementToCanvasOptionsResponse

```ts
type TElementToCanvasOptionsResponse = 'svg' | 'svg-datauri' | 'datauri' | 'canvas' | 'download';
```

#### IElementToCanvasOptions

```ts
interface IElementToCanvasOptions {
    response?: TElementToCanvasOptionsResponse;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    datauri?: {
        type?: string;
        quality?: number;
    };
```

#### elementToCanvas

```ts
const elementToCanvas: (element_: HTMLElement, options_?: IElementToCanvasOptions) => Promise<TElementToCanvas>;
```

