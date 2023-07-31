

## API

#### IDropZone

```ts
interface IDropZone extends IFileChoose {
    version?: TVersion;
    start?: TElement;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    onDrop?: (event: React.DragEvent<any>) => any;
    onDragOver?: (event: React.DragEvent<any>) => any;
    onDragEnter?: (event: React.DragEvent<any>) => any;
    onDragLeave?: (event: React.DragEvent<any>) => any;
}
```

#### DropZone

```ts
const DropZone: React.ForwardRefExoticComponent<Omit<IDropZone, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Drawing",
      "to": "/library/ui-react/use/Drawing"
    },
    "next": {
      "label": "UI react: Expand",
      "to": "/library/ui-react/use/Expand"
    }
  }
}~
