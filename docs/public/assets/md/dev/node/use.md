
# AmauiNode

### File

File a static getter method, with util methods for files.

#### Add

Adds a file.

```ts
await AmauiNode.file.add(path.resolve('a.txt'), 'a');
```

#### Update

Alias for the add method.

#### Get

Gets a file.

If native (default true), is false, it will return `utf-8` version of the file, meaning in the string value.

```ts
await AmauiNode.file.get(path.resolve('a.txt'));

// Buffer

await AmauiNode.file.get(path.resolve('a.txt'), false);

// Text
```

#### Remove

Removes a file.

```ts
await AmauiNode.file.remove(path.resolve('a.txt'));
```

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
      "to": "/dev/queue/start"
    }
  }
}~
