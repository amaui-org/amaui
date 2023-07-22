
# amaui aws

Utils for easier using of `aws-sdk` library, for AWS.

### Add

```bash
yarn add @amaui/aws
```

<br />
Add `@aws-sdk/client-s3` peer dependency.

```bash
yarn add @aws-sdk/client-s3
```

### Use

```ts
import AmauiAws from '@amaui/aws';
// Make if you wanna a config file and
// inside of it add all the process.env aws related props
import Config from './config';

// Make a new aws instance
const amauiAws = new AmauiAws({
  s3: {
    access: {
      endpoint: Config.aws.s3.endpoint,

      credentials: {
        accessKeyId: Config.aws.s3.access_key_id,
        secretAccessKey: Config.aws.s3.secret_access_key,
      }
    },

    bucket_name: Config.aws.s3.bucket_name
  },

  config: {
    region: Config.aws.s3.region,
  }
});

// Add
await amauiAws.s3.add('a', 4);

// Get
await amauiAws.s3.get('a');

// 4

// Remove
await amauiAws.s3.remove('a');

await amauiAws.s3.get('a');

// undefined
```

### Dev

#### One time local setup

Install docker and docker-compose

- https://docs.docker.com/get-docker
- https://docs.docker.com/compose/install

Install python and pip

Install awscli
```bash
pip install awscli
```

Make docker containers

```bash
yarn docker
```

Make local S3 bucket

```bash
yarn make-bucket

yarn make-bucket-test
```

Install

```bash
yarn
```

Test

```bash
yarn test
```

### Prod

Build

```bash
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "API: Start",
      "to": "/dev/api/start"
    },
    "next": {
      "label": "AWS: Use",
      "to": "/dev/aws/use"
    }
  }
}~
