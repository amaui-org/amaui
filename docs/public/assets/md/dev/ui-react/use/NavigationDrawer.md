

### API

#### INavigationDrawer

```ts
interface INavigationDrawer extends IModal {
    version?: 'modal' | 'standard';
    direction?: 'top' | 'left' | 'bottom' | 'right';
    swipe?: boolean;
    swipeTouchAnywhere?: boolean;
    swipeBackgroundFollow?: boolean;
    min?: number;
    removeOnExited?: TMethodTransition;
    TransitionComponentProps?: TPropsAny;
}
```

#### NavigationDrawer

```ts
const NavigationDrawer: React.ForwardRefExoticComponent<Omit<INavigationDrawer, "ref"> & React.RefAttributes<unknown>>;
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