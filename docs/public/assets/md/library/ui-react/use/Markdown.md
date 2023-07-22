

## API

#### IMarkdown

```ts
interface IMarkdown extends IBaseElement {
    value?: string;
    render?: (element: string, className: string, style: string, ...args: any[]) => string;
    elementClassNames?: Record<string, string>;
    elementStyles?: Record<string, string>;
    onAdded: () => any;
    onUpdate: () => any;
    onStart: () => any;
}
```

#### Markdown

```ts
const Markdown: React.ForwardRefExoticComponent<Omit<IMarkdown, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: useMainProgress",
      "to": "/dev/ui-react/use/useMainProgress"
    },
    "next": {
      "label": "UI react: Masonry",
      "to": "/dev/ui-react/use/Masonry"
    }
  }
}~
