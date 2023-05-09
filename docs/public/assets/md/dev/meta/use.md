

### API

#### IOptionsValue

```ts
interface IOptionsValue {
    copy?: boolean;
}
```

#### IOptionsAdd

```ts
interface IOptionsAdd {
    override?: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    value?: IOptionsValue;
    add?: IOptionsAdd;
}
```

#### AmauiMeta

```ts
class AmauiMeta {
    static meta: WeakMap<object, any>;
    private static options_;
    static get options(): IOptions;
    static set options(value: IOptions);
    static class(...args: any[]): ClassDecorator;
    static method(...args: any[]): MethodDecorator;
    static property(...args: any[]): PropertyDecorator;
    static parameter(...args: any[]): ParameterDecorator;
    static add(key: any, value: any, object: any, property?: any): void;
    static update(key: any, value: any, object: any, property?: any): void;
    static values(object: any, property?: any): Array<any> | undefined;
    static keys(object: any, property?: any): Array<any> | undefined;
    static get(key: any, object: any, property?: any): any | undefined;
    static has(key: any, object: any, property?: any): boolean;
    static remove(key: any, object: any, property?: any): void;
    static reset(): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Meta: Start",
      "to": "/dev/meta/start"
    },
    "next": {
      "label": "Models: Start",
      "to": "/dev/models/start"
    }
  }
}~
