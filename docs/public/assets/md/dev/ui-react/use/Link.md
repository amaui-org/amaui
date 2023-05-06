

### API

#### ILink

```ts
interface ILink extends Omit<IType, 'color'> {
    color?: TColor;
    underline?: true | 'hover';
}
```

#### Link

```ts
const Link: React.ForwardRefExoticComponent<Omit<ILink, "ref"> & React.RefAttributes<unknown>>;
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
