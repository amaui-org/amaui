

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


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: NavigationBar",
      "to": "/dev/ui-react/use/NavigationBar"
    },
    "next": {
      "label": "UI react: NavigationItem",
      "to": "/dev/ui-react/use/NavigationItem"
    }
  }
}~
