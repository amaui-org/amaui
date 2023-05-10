

### API

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