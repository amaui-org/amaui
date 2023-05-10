

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
    download?: {
        type?: string;
        name?: string;
        quality?: number;
    };
    filter?: Array<string>;
    crop?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    };
    styleSheets?: boolean;
    urls?: boolean;
    images?: boolean;
    links?: boolean;
}
```

#### elementToCanvas

```ts
const elementToCanvas: (element_: HTMLElement, options_?: IElementToCanvasOptions) => Promise<TElementToCanvas>;
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