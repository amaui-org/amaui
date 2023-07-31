
# elementToCanvas

Making entire new element, from provided element, within `foreignObject` element in an svg element, along with images, styles, etc., converting that svg element into a bsae64 string, and adding that to canvas element.

Using other options either download the canvas, as an image immediatelly or do anything with it.

```ts
elementToCanvas(element, { response: 'download', crop: { x: 0, y: 1400, width 1400, height: 740 } });

// Downloaded
// amaui-image.png
```

### Options

Each explained as a comment above each option in the API below.

### Why?

Use case using this is making a screenshot of the element, or entire page, with pure javascript, which can be buggy in some browsers, but overall works pretty well.

It's very cool since turning entire body of an html page into canvas, and then either cropping that canvas into current user viewport or downloading entire page as an image.

## API

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
    // What method returns as an output of it
    // download option triggers the download of that canvas as an image
    // default: canvas
    response?: TElementToCanvasOptionsResponse;
    // x value for drawingImage in the output canvas
    x?: number;
    // y value for drawingImage in the output canvas
    y?: number;
    // width value of the foreignObject in the svg
    width?: number;
    // height value of the foreignObject in the svg
    height?: number;
    // options for datauri as a response
    datauri?: {
        type?: string;
        quality?: number;
    };
    // options for download as a response
    download?: {
        type?: string;
        name?: string;
        quality?: number;
    };
    // Selectors to filter out elemenets that are matched from
    // the element being put in the svg for the canvas
    // any elements from provided element you want to remove
    filter?: Array<string>;
    // options for cropping the canvas
    // ie. prior to download, if response is download
    crop?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    };
    // Dummy prop, not used at the moment
    styleSheets?: boolean;
    // If to convert all urls into a base64 version of them
    urls?: boolean;
    // If to convert all src urls into a base64 version of them
    // ie. for images with src urls
    images?: boolean;
    // If to convert all link href values into a base64 version of them
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
      "label": "Utils: element",
      "to": "/library/utils/use/element"
    },
    "next": {
      "label": "Utils: emphasize",
      "to": "/library/utils/use/emphasize"
    }
  }
}~
