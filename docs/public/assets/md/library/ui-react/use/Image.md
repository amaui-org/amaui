

## API

#### IImage

```ts
interface IImage extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    src?: string;
    sources?: Array<string>;
    alt?: string;
    description?: string;
    alignmentDescription?: 'start' | 'left' | 'center' | 'right' | 'end';
    width?: number;
    height?: number;
    alignment?: 'start' | 'left' | 'center' | 'right' | 'end';
    responsive?: boolean;
    fullWidth?: boolean;
    maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset';
    loading?: 'eager' | 'lazy';
    DescriptionProps?: TPropsAny;
}
```

#### Image

```ts
const Image: React.ForwardRefExoticComponent<Omit<IImage, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: IconButton",
      "to": "/library/ui-react/use/IconButton"
    },
    "next": {
      "label": "UI react: ImageCrop",
      "to": "/library/ui-react/use/ImageCrop"
    }
  }
}~
