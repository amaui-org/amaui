
# formats

Return object with all format options, and their values, for a provided AmauiDate.

```ts
const amauiDate = new AmauiDate();

formats(amauiDate);

// [
//     Milliseconds
//     { abr: 'SSSS', value: '0990' }
//     { abr: 'SSS', value: '990' }
//     { abr: 'SS', value: '99' }
//     { abr: 'S', value: '9' }

//     Seconds
//     { abr: 'ss', value: '23' }
//     { abr: 's', value: '23' }

//     Minutes
//     { abr: 'mm', value: '56' }
//     { abr: 'm', value: '56' }

//     Hours
//     { abr: 'HH', value: '21' }
//     { abr: 'H', value: '21' }
//     { abr: 'hh', value: '09' }
//     { abr: 'h', value: '9' }

//     Day
//     { abr: 'Do', value: '27th' }
//     { abr: 'DD', value: '27' }
//     { abr: 'D', value: '27' }
//     { abr: 'dd', value: 'Saturday' }
//     { abr: 'd', value: 'Sat' }

//     Month
//     { abr: 'Mo', value: '5th' }
//     { abr: 'MMMM', value: 'May' }
//     { abr: 'MMM', value: 'May' }
//     { abr: 'MM', value: '05' }
//     { abr: 'M', value: '5' }

//     Year
//     { abr: 'YYYY', value: '2023' }

//     AM / PM
//     { abr: 'A', value: 'PM' }
//     { abr: 'a', value: 'pm' }

//     Timezone offset
//     { abr: 'ZZ', value: '+0200' }
//     { abr: 'Z', value: '+02:00' }

//     Timezone abr
//     { abr: 'z', value: 'GMT+2' }

//     Unix
//     { abr: 'X', value: '1685217383' }
//     { abr: 'x', value: '1685217383990' }
// ]
```

## API

#### formats

```ts
default function formats(amauiDate?: AmauiDate): Array<{
    abr: string;
    value: string;
}>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: format",
      "to": "/dev/date/use/format"
    },
    "next": {
      "label": "Date: getTimezoneOffset",
      "to": "/dev/date/use/getTimezoneOffset"
    }
  }
}~
