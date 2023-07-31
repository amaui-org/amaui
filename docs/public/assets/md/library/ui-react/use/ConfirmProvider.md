

## API

#### IConfirmOpen

```ts
interface IConfirmOpen {
    modal?: (promise: IConfirmPromiseArgument) => React.ReactElement;
    title?: string | boolean | React.ReactElement;
    description?: string | React.ReactElement;
    buttons?: {
        positive?: {
            text?: string;
        };
        negative?: {
            text?: string;
        };
    };
    throwError?: boolean;
    ButtonNegativeProps?: any;
    ButtonPositiveProps?: any;
    [p: string]: any;
}
```

#### IConfirmPromiseArgument

```ts
interface IConfirmPromiseArgument {
    resolve: TMethod;
    reject: TMethod;
}
```

#### IConfirmProvider

```ts
interface IConfirmProvider {
    open: (value?: IConfirmOpen) => void;
    close: (confirmed?: boolean) => void;
}
```

#### IConfirmProvider

```ts
interface IConfirmProvider extends IBaseElement {
    throwError?: boolean;
    onOpen?: () => any;
    onClose?: () => any;
}
```

#### ConfirmProvider

```ts
const ConfirmProvider: React.ForwardRefExoticComponent<Omit<IConfirmProvider, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: ConfirmContext",
      "to": "/library/ui-react/use/ConfirmContext"
    },
    "next": {
      "label": "UI react: useConfirm",
      "to": "/library/ui-react/use/useConfirm"
    }
  }
}~
