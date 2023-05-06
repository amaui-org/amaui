

### API

#### AmauiMongo

```ts
class AmauiMongo {
    static Mongo_: Mongo;
    static get mongo(): Mongo;
    static createPaginator(object: TObject, properties: string[], sort?: mongodb.Sort, type?: 'next' | 'previous'): string;
}
```

