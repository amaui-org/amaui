
# getUserLocalInfo

Returns useful user local info.

```ts
await getUserLocalInfo();

// {
//     "ip_address": "14.114.114.14",
//     "country": {
//         "flag": "🇷🇸",
//         "name": "Serbia",
//         "full_name": "The Republic of Serbia",
//         "sovereignty": "UN member state",
//         "alpha-2": "RS",
//         "alpha-3": "SRB",
//         "numeric": "688",
//         "subdivision": "ISO 3166-2:RS",
//         "tlds": [
//             "rs"
//         ]
//     },
//     "browser": {
//         "name": "chrome",
//         "version": "113.0.0.0",
//         "major_version": "113",
//         "agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
//         "language": "en"
//     },
//     "os": {
//         "platform": "mac"
//     }
// }
```

### Why?

Use case to save the current user session, and know where the session is coming from, and alert the user if he is using the device on a new device, and whatnot.

## API

#### IUserIPandLocation

```ts
interface IUserIPandLocation {
    ip_address: string;
    country_code: string;
}
```

#### IUserOSandBrowser

```ts
interface IUserOSandBrowser {
    browser: {
        name: string;
        version: string;
        major_version: string;
        agent: string;
        language: string;
    };
    os: {
        platform: string;
    };
}
```

#### UserLocalInfo

```ts
interface UserLocalInfo extends IUserOSandBrowser {
    ip_address: string;
    country: ICountry;
}
```

#### getUserIPandLocation

```ts
const getUserIPandLocation: () => Promise<IUserIPandLocation>;
```

#### getUserOSandBrowser

```ts
const getUserOSandBrowser: () => IUserOSandBrowser;
```

#### getUserLocalInfo

```ts
const getUserLocalInfo: () => Promise<UserLocalInfo>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getURL",
      "to": "/dev/utils/use/getURL"
    },
    "next": {
      "label": "Utils: hash",
      "to": "/dev/utils/use/hash"
    }
  }
}~
