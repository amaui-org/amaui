
# AmauiAws

### Options

#### s3

##### access

###### endpoint

AWS S3 bucket endpoint.

###### credentials

- accessKeyId
- secretAccessKey

##### bucket_name

Bucket name.

#### config

##### region

##### apiVersion

##### signatureVersion

##### s3ForcePathStyle

### s3

#### Add

Add a value to the s3 bucket.

If value isn't a string or a buffer, it will be stringified.

```ts
const amauiAws =  new AmauiAws(options);

await amauiAws.s3.add('a', { a: 1114 });
```

#### Get

Reads a value from the s3 bucket.

You can retrive it as a pure response from the AWS, or convert it to text, JSON, buffer, whatever you prefer, default `{ type: 'buffer' }`.

If no such key exists, it throws an error.

```ts
const amauiAws =  new AmauiAws(options);

await amauiAws.s3.get('a', { type: 'json' });

// { a: 1114 }
```

#### Remove

Removes an object from the s3 bucket.

If no such key exists, it throws an error.

```ts
const amauiAws =  new AmauiAws(options);

await amauiAws.s3.remove('a');
```

#### Remove many

Removes many objects from the s3 bucket.

It returns array of responses, if no such key exists, the response is an error.

```ts
const amauiAws =  new AmauiAws(options);

await amauiAws.s3.removeMany(['a', 'a114', 'a1114']);
```


## API

#### IConnections

```ts
interface IConnections {
    s3?: aws.S3;
}
```

#### IOptionsS3Add

```ts
interface IOptionsS3Add {
    bucket_name?: string;
}
```

#### IOptionsS3Get

```ts
interface IOptionsS3Get {
    bucket_name?: string;
    type: 'buffer' | 'json' | 'text';
    pure?: boolean;
}
```

#### IOptionsS3Remove

```ts
interface IOptionsS3Remove {
    bucket_name?: string;
    pure?: boolean;
}
```

#### IOptionsS3RemoveMany

```ts
interface IOptionsS3RemoveMany {
    bucket_name?: string;
    pure?: boolean;
}
```

#### IOptionsS3AccessCredentials

```ts
interface IOptionsS3AccessCredentials {
    accessKeyId: string;
    secretAccessKey: string;
}
```

#### IOptionsS3Access

```ts
interface IOptionsS3Access {
    endpoint: string;
    credentials: IOptionsS3AccessCredentials;
    [p: string]: any;
}
```

#### IOptionsS3

```ts
interface IOptionsS3 {
    access: IOptionsS3Access;
    bucket_name?: string;
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

#### IOptions

```ts
interface IOptions {
    s3: IOptionsS3;
    config?: IOptionsConfig;
}
```

#### AmauiAws

```ts
class AmauiAws {
    private options;
    private connections_;
    private amalog;
    get connections(): IConnections;
    constructor(options: IOptions);
    get s3(): {
        add(id: string, value_: any, options?: IOptionsS3Add): Promise<aws.S3.PutObjectOutput>;
        get(id: string, options?: IOptionsS3Get): Promise<aws.S3.GetObjectOutput | Buffer | string | object>;
        remove(id: string, options?: IOptionsS3Remove): Promise<aws.S3.DeleteObjectOutput | boolean>;
        removeMany(ids: string[], options?: IOptionsS3RemoveMany): Promise<Array<aws.S3.DeleteObjectOutput | boolean | Error>>;
    };
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
      "label": "Binary tree: Start",
      "to": "/dev/binary-tree/start"
    }
  }
}~
