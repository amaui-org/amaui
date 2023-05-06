

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
```

#### Weather

```ts
const Weather: React.ForwardRefExoticComponent<Omit<IWeather, "ref"> & React.RefAttributes<unknown>>;
```

