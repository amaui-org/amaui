

## API

#### IFile

```ts
interface IFile {
    add(name: string, data: any): Promise<boolean>;
    update(name: string, data: any): Promise<boolean>;
    get(path: string, native: boolean): Promise<Buffer | string>;
    remove(path: string): Promise<boolean>;
}
```

#### AmauiNode

```ts
class AmauiNode {
    static get file(): IFile;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Node: Start",
      "to": "/dev/node/start"
    },
    "next": {
      "label": "Queue: Start",
      "to": "/dev/queue/use"
    }
  }
}~
