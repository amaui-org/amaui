

### API

#### IColorTextField

```ts
interface IColorTextField extends ITextField {
}
```

#### ColorTextField

```ts
const ColorTextField: React.ForwardRefExoticComponent<Omit<IColorTextField, "ref"> & React.RefAttributes<unknown>>;
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
