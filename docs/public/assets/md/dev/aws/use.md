

### API

#### IOptionsAccessCredentials

```ts
interface IOptionsAccessCredentials {
    accessKeyId: string;
    secretAccessKey: string;
}
```

#### IOptionsAccess

```ts
interface IOptionsAccess {
    endpoint: string;
    credentials: IOptionsAccessCredentials;
    [p: string]: any;
}
```

#### IOptionsConfig

```ts
interface IOptionsConfig {
    region?: string;
    apiVersion?: string;
    signatureVersion?: string;
    s3ForcePathStyle?: boolean;
    [p: string]: any;
}
```

#### IOptionsAdd

```ts
interface IOptionsAdd {
    bucket_name?: string;
}
```

#### IOptionsGet

```ts
interface IOptionsGet {
    bucket_name?: string;
    type: 'buffer' | 'json' | 'text';
    pure?: boolean;
}
```

#### IOptionsRemove

```ts
interface IOptionsRemove {
    bucket_name?: string;
    pure?: boolean;
}
```

#### IOptionsRemoveMany

```ts
interface IOptionsRemoveMany {
    bucket_name?: string;
    pure?: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    access: IOptionsAccess;
    config?: IOptionsConfig;
    bucket_name?: string;
}
```

#### AmauiAws

```ts
class AmauiAws {
    private connection_;
    private options;
    private amalog;
    get connection(): aws.S3;
    constructor(options: IOptions);
    add(id: string, value_: any, options?: IOptionsAdd): Promise<aws.S3.PutObjectOutput>;
    get(id: string, options?: IOptionsGet): Promise<aws.S3.GetObjectOutput | Buffer | string | object>;
    remove(id: string, options?: IOptionsRemove): Promise<aws.S3.DeleteObjectOutput | boolean>;
    removeMany(ids: string[], options?: IOptionsRemoveMany): Promise<Array<aws.S3.DeleteObjectOutput | boolean | Error>>;
    private setup;
    protected response(start: number, bucket_name: string, method: string, value?: any, req?: express.Request): any;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AWS: Start",
      "to": "/dev/aws/start"
    },
    "next": {
      "label": "Binary Tree: Start",
      "to": "/dev/binary-tree/start"
    }
  }
}~
