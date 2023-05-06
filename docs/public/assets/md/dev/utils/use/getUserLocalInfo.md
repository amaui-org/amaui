

### API

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

