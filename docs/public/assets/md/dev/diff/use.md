

### API

#### IDiffItemAction

```ts
type IDiffItemAction = 'add' | 'a' | 'remove' | 'r';
```

#### IDiffItem

```ts
type IDiffItem = [IDiffItemAction, number, string?];
```

#### IDiff

```ts
interface IDiff {
    items: Array<IDiffItemAction | number | string>;
}
```

#### IInit

```ts
interface IInit {
    method?: (value: any) => string;
}
```

#### IItemize

```ts
interface IItemize {
    method?: (value: string) => Array<string>;
}
```

#### IEqual

```ts
interface IEqual {
    method: (value: string, value1: string) => boolean;
}
```

#### IJoin

```ts
interface IJoin {
    method?: (value: Array<string>) => string;
}
```

#### IDiffMatrixItem

```ts
type IDiffMatrixItem = [number?, number?, number?];
```

#### IOutput

```ts
interface IOutput {
    compressed?: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    init?: IInit;
    itemize?: IItemize;
    equal?: IEqual;
    join?: IJoin;
    output?: IOutput;
}
```

#### TDiffVariants

```ts
type TDiffVariants = 'default' | 'word' | 'line' | 'sentence' | 'json';
```

#### IOPTIONS

```ts
type IOPTIONS = {
    [p in TDiffVariants]?: IOptions;
};
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### AmauiDiff

```ts
class AmauiDiff {
    options: IOptions;
    static get amauidiff(): AmauiDiff;
    static get word(): AmauiDiff;
    static get line(): AmauiDiff;
    static get sentence(): AmauiDiff;
    static get json(): AmauiDiff;
    static get OPTIONS(): IOPTIONS;
    static updateGroups(diff: IDiff): any[];
    constructor(options?: IOptions);
    diff(value_: any, value1_: any, options_?: IOptions): IDiff;
    update(value__: any, diff: IDiff, options_?: IOptions): string;
    private action;
}
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
