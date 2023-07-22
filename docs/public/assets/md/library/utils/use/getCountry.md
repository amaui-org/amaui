
# getCountry

Returns a country from countries array, that fits most of the arguments passed into this method, where each argument is compared to any country's property value.

```ts
getCountry('The Republic of Serbia', 'RS');

// {
//   "flag": "🇷🇸",
//   "name": "Serbia",
//   "full_name": "The Republic of Serbia",
//   "sovereignty": "UN member state",
//   "alpha-2": "RS",
//   "alpha-3": "SRB",
//   "numeric": "688",
//   "subdivision": "ISO 3166-2:RS",
//   "tlds": [
//     "rs"
//   ]
// }
```

## API

#### ICountry

```ts
interface ICountry {
    flag: string;
    name: string;
    full_name: string;
    sovereignty: string;
    'alpha-2': string;
    'alpha-3': string;
    numeric: string;
    subdivision: string;
    tlds: string[];
}
```

#### countries

```ts
const countries: Array<ICountry>;
```

#### getCountry

```ts
const getCountry: (...args: any[]) => ICountry;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getContrastRatio",
      "to": "/dev/utils/use/getContrastRatio"
    },
    "next": {
      "label": "Utils: getEnvironment",
      "to": "/dev/utils/use/getEnvironment"
    }
  }
}~
