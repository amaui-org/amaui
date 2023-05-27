
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

#### IOptionsS3

```ts
interface IOptionsS3 {
    access: IOptionsAccess;
    bucket_name?: string;
}
```

#### IOptions

```ts
interface IOptions {
    s3: IOptionsS3;
    config?: IOptionsConfig;
}
```

#### IConnections

```ts
interface IConnections {
    s3?: aws.S3;
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
        add(id: string, value_: any, options?: IOptionsAdd): Promise<aws.S3.PutObjectOutput>;
        get(id: string, options?: IOptionsGet): Promise<aws.S3.GetObjectOutput | Buffer | string | object>;
        remove(id: string, options?: IOptionsRemove): Promise<aws.S3.DeleteObjectOutput | boolean>;
        removeMany(ids: string[], options?: IOptionsRemoveMany): Promise<Array<aws.S3.DeleteObjectOutput | boolean | Error>>;
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
