

### API

#### TTrackValueVersion

```ts
type TTrackValueVersion = 'image' | 'canvas';
```

#### IScreenCapture

```ts
interface IScreenCapture extends ISurface {
    nameDefault?: string;
    name?: string;
    onChangeName?: (value: string) => any;
    view?: boolean;
    entirePage?: boolean;
    free?: boolean;
    type?: string;
    quality?: number;
    onInit?: (supported: boolean) => any;
    onView?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
    onEntirePage?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
    onFree?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
    onFreeSave?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
    onFreeClose?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
    IconView?: TElementReference;
    IconEntirePage?: TElementReference;
    IconFree?: TElementReference;
    IconDownload?: TElementReference;
    TextFieldProps?: TPropsAny;
    TooltipProps?: TPropsAny;
    IconButtonProps?: TPropsAny;
    ImageCropProps?: TPropsAny;
}
```

#### ScreenCapture

```ts
const ScreenCapture: React.ForwardRefExoticComponent<Omit<IScreenCapture, "ref"> & React.RefAttributes<unknown>>;
```


{
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
}