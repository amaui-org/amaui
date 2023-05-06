

### API

#### IOptionsDom

```ts
interface IOptionsDom {
    unique?: boolean;
}
```

#### IMakeClassName

```ts
interface IMakeClassName {
    value?: any;
    arguments?: any;
    version?: 'development' | 'production';
}
```

#### IOptions

```ts
interface IOptions {
    production?: boolean;
    dom?: IOptionsDom;
}
```

#### makeClassName

```ts
function makeClassName(amauiStyle: AmauiStyle, options_?: IOptions): {
```

