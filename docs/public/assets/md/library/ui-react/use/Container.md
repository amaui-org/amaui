

## API

#### IContainer

```ts
interface IContainer extends ILine {
    alignment?: 'start' | 'center' | 'end' | Record<TValueBreakpoints, 'start' | 'center' | 'end'>;
    paddingVertical?: 'both' | 'start' | 'end' | 'none' | Record<TValueBreakpoints, 'both' | 'start' | 'end' | 'none'>;
    paddingHorizontal?: 'both' | 'start' | 'end' | 'none' | Record<TValueBreakpoints, 'both' | 'start' | 'end' | 'none'>;
    fullWidth?: boolean | Record<TValueBreakpoints, boolean>;
    maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset' | Record<TValueBreakpoints, 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset'>;
}
```

#### Container

```ts
const Container: React.ForwardRefExoticComponent<Omit<IContainer, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: useConfirm",
      "to": "/library/ui-react/use/useConfirm"
    },
    "next": {
      "label": "UI react: Countdown",
      "to": "/library/ui-react/use/Countdown"
    }
  }
}~
