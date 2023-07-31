
# countries

Array of most countries, with many important meta information about them.

Useful for country select UI elements, and other use cases.

```ts
const Serbia = countries.find(item => item.name === 'Serbia');

Serbia;

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


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: copyToClipboard",
      "to": "/library/utils/use/copyToClipboard"
    },
    "next": {
      "label": "Utils: darken",
      "to": "/library/utils/use/darken"
    }
  }
}~
