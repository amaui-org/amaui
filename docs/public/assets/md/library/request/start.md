
# amaui request

Request making library for front end & back end.

### Add

```sh
yarn add @amaui/request
```

### Use

```ts
import AmauiRequest from '@amaui/request';

// Make a new AmauiRequest instance
const amauiRequest = new AmauiRequest();

await amauiRequest.get('https://jsonplaceholder.typicode.com/posts/4');

// or as a static method without a new instance
await AmauiRequest.get('https://jsonplaceholder.typicode.com/posts/4');

// {
//     response: {
//         userId: 1,
//         id: 4,
//         title: 'eum et est occaecati',
//         body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
//     },
//     status: 200,
//     headers: {
//         cache-control: 'max-age=43200',
//         content-type: 'application/json; charset=utf-8',
//         expires: -1,
//         pragma: 'no-cache'
//     },
//     request: {
//         headers: {
//             Accept: 'application/json, text/plain, */*'
//         }
//     },
//     options: {
//         method: 'GET',
//         url: 'https://jsonplaceholder.typicode.com/posts/4',
//         request: {
//             headers: {
//                 Accept: 'application/json, text/plain, */*'
//             },
//             csrf: {
//                 cookie: 'CSRF-TOKEN',
//                 headers: 'X-CSRF-TOKEN'
//             }
//         },
//         response: {
//             resolveOnError: true,
//             type: 'json',
//             parse: {
//                 json: true
//             }
//         }
//     }
// }
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Queue: Start",
      "to": "/dev/queue/start"
    },
    "next": {
      "label": "Request: Use",
      "to": "/dev/request/use"
    }
  }
}~
