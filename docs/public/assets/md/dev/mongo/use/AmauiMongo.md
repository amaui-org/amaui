

### API

#### AmauiMongo

```ts
class AmauiMongo {
    static Mongo_: Mongo;
    static get mongo(): Mongo;
    static createPaginator(object: TObject, properties: string[], sort?: mongodb.Sort, type?: 'next' | 'previous'): string;
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
