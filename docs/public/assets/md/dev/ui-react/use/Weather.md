

### API

#### TWeatherDayTime

```ts
type TWeatherDayTime = 'day' | 'night';
```

#### TWeather

```ts
type TWeather = 'clear' | 'partly clear' | 'rainy' | 'partly rainy' | 'snowy' | 'partly snowy';
```

#### TTemperature

```ts
type TTemperature = number;
```

#### IWeather

```ts
interface IWeather extends ISurface {
    size?: TSize;
    shadow?: boolean;
    dayTime?: TWeatherDayTime;
    weather?: TWeather;
    temperature?: TTemperature;
    values: {
        dayTime?: TWeatherDayTime;
        weather?: TWeather;
        temperature?: TTemperature;
    };
    interval?: number;
    IconDay?: TElementReference;
    IconNight?: TElementReference;
    IconCloud?: TElementReference;
    IconRain?: TElementReference;
    IconSnow?: TElementReference;
    IconProps?: TPropsAny;
}
```

#### Weather

```ts
const Weather: React.ForwardRefExoticComponent<Omit<IWeather, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}
