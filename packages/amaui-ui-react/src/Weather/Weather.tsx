import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Type from '../Type';
import Fade from '../Fade';
import Transitions from '../Transitions';
import Icon from '../Icon';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { ISize, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    aspectRatio: '1',
    width: '100vw',

    '&.amaui-Surface-root': {
      background: 'transparent'
    }
  },

  text: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: '1',
    userSelect: 'none'
  },

  text_regular: {
    top: '22%',
    width: '100%',
    paddingLeft: '30%',
    paddingRight: '11%',
    fontSize: '34%'
  },

  text_large: {
    top: '22%',
    width: '100%',
    paddingLeft: '27%',
    paddingRight: '11%',
    fontSize: '30%'
  },

  icon_background: {
    '&.amaui-Icon-root': {
      width: '100%',
      height: 'auto'
    }
  },

  icon_background_shadow: {
    filter: `drop-shadow(0px 6px 10px rgb(0 0 0 / 4%)) drop-shadow(0px 1px 18px rgb(0 0 0 / 1%)) drop-shadow(0px 3px 5px rgb(0 0 0 / 7%))`
  },

  icon_dayTime: {
    '&.amaui-Icon-root': {
      position: 'absolute',
      zIndex: '1',
      bottom: '21%',
      width: '40% !important',
      height: 'auto',
      left: '13%'
    }
  },

  icon_dayTime_day: {
    '&.amaui-Icon-root': {
      color: '#fcc21d'
    }
  },

  icon_dayTime_night: {
    '&.amaui-Icon-root': {
      color: '#dfe0e2'
    }
  },

  icon_weather: {
    position: 'absolute',
    width: '40% !important',
    height: 'auto',
    zIndex: '4'
  },

  icon_arrangement_regular: {
    bottom: '22%',
    left: '15%',
  },

  icon_arrangement_pair: {
    bottom: '8%',
    left: '25%',
    opacity: '0.94 !important'
  },

  icon_weather_cloudy: {
    '&.amaui-Icon-root': {
      color: '#f1f3f4'
    }
  },

  icon_weather_rainy: {
    '&.amaui-Icon-root': {
      color: '#e6f5fc'
    }
  },

  icon_weather_snowy: {
    '&.amaui-Icon-root': {
      color: '#dcf0ff'
    }
  },

  size_small: {
    maxWidth: '120px'
  },

  size_regular: {
    maxWidth: '180px'
  },

  size_large: {
    maxWidth: '240px'
  }
}), { name: 'amaui-Weather' });

const IconWeather = React.forwardRef((props: any, ref: any) => {
  const {
    tonal,
    color: color_,

    style,

    ...other
  } = props;

  return (
    <Surface
      tonal={tonal}

      color={color_}
    >
      {({ color, backgroundColor }) => (
        <svg
          ref={ref}

          viewBox='0 0 177 178'

          xmlns='http://www.w3.org/2000/svg'

          {...other}

          style={{
            ...style,

            color,

            fill: backgroundColor
          }}
        >
          <path
            d='M93.964 1.5C85.944 3.181 78.964 4.033 66.185 12.689C62.393 14.903 52.521 23.956 36.901 39.544C15.559 60.841 12.951 63.812 9.244 71.058C2.449 84.337 0.5 92.138 0.5 106.058C0.5 115.812 0.935 119.455 2.826 125.523C10.658 150.657 27.954 167.964 52.964 175.692C59.053 177.573 62.722 178.008 72.464 178C86.543 177.99 93.354 176.43 105.964 170.329C114.063 166.411 115.649 165.033 139.556 141.138C162.652 118.054 166.644 113.063 170.5 105.504C175.5 93.058 176.964 86.676 176.964 74.212C176.964 61.815 175.094 53.787 169.473 42.058C160.683 23.716 143.356 9.513 123.082 4.033C114.951 1.835 101.984 -0.181001 93.964 1.5Z'
          />
        </svg>
      )}
    </Surface>
  );
});

const IconMaterialCircleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CircleRoundedFilled'
      short_name='Circle'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z" />
    </Icon>
  );
});

const IconMaterialNightlightRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightRoundedFilled'
      short_name='Nightlight'

      {...props}
    >
      <path d="M14 22Q11.95 22 10.125 21.212Q8.3 20.425 6.938 19.062Q5.575 17.7 4.787 15.875Q4 14.05 4 12Q4 9.925 4.787 8.113Q5.575 6.3 6.938 4.938Q8.3 3.575 10.125 2.787Q11.95 2 14 2Q15.1 2 16.125 2.237Q17.15 2.475 18.1 2.9Q18.45 3.075 18.475 3.362Q18.5 3.65 18.15 3.9Q16.25 5.275 15.125 7.375Q14 9.475 14 12Q14 14.525 15.125 16.625Q16.25 18.725 18.15 20.1Q18.5 20.35 18.475 20.638Q18.45 20.925 18.1 21.1Q17.15 21.525 16.125 21.762Q15.1 22 14 22Z" />
    </Icon>
  );
});

const IconMaterialCloudRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudRoundedFilled'
      short_name='Cloud'

      {...props}
    >
      <path d="M6.5 20Q4.225 20 2.613 18.425Q1 16.85 1 14.575Q1 12.625 2.175 11.1Q3.35 9.575 5.25 9.15Q5.875 6.85 7.75 5.425Q9.625 4 12 4Q14.925 4 16.962 6.037Q19 8.075 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20Z" />
    </Icon>
  );
});

const IconMaterialRainyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyRoundedFilled'
      short_name='Rainy'

      {...props}
    >
      <path d="M13.95 21.9q-.375.2-.762.062-.388-.137-.588-.512l-1.5-3q-.2-.375-.062-.762.137-.388.512-.588.375-.2.762-.062.388.137.588.512l1.5 3q.2.375.063.762-.138.388-.513.588Zm6 0q-.375.2-.762.062-.388-.137-.588-.512l-1.5-3q-.2-.375-.062-.762.137-.388.512-.588.375-.2.762-.062.388.137.588.512l1.5 3q.2.375.063.762-.138.388-.513.588Zm-12 0q-.375.2-.762.062-.388-.137-.588-.512l-1.5-3q-.2-.375-.062-.762.137-.388.512-.588.375-.2.762-.062.388.137.588.512l1.5 3q.2.375.063.762-.138.388-.513.588ZM7.5 16q-2.275 0-3.887-1.613Q2 12.775 2 10.5q0-2.075 1.375-3.625 1.375-1.55 3.4-1.825.8-1.425 2.188-2.238Q10.35 2 12 2q2.25 0 3.912 1.438 1.663 1.437 2.013 3.587 1.725.15 2.9 1.425Q22 9.725 22 11.5q0 1.875-1.312 3.188Q19.375 16 17.5 16Z" />
    </Icon>
  );
});

const IconMaterialCloudySnowingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudySnowingRoundedFilled'
      short_name='CloudySnowing'

      {...props}
    >
      <path d="M6 19Q5.575 19 5.287 18.712Q5 18.425 5 18Q5 17.575 5.287 17.288Q5.575 17 6 17Q6.425 17 6.713 17.288Q7 17.575 7 18Q7 18.425 6.713 18.712Q6.425 19 6 19ZM18 19Q17.575 19 17.288 18.712Q17 18.425 17 18Q17 17.575 17.288 17.288Q17.575 17 18 17Q18.425 17 18.712 17.288Q19 17.575 19 18Q19 18.425 18.712 18.712Q18.425 19 18 19ZM9 23Q8.575 23 8.288 22.712Q8 22.425 8 22Q8 21.575 8.288 21.288Q8.575 21 9 21Q9.425 21 9.713 21.288Q10 21.575 10 22Q10 22.425 9.713 22.712Q9.425 23 9 23ZM12 19Q11.575 19 11.288 18.712Q11 18.425 11 18Q11 17.575 11.288 17.288Q11.575 17 12 17Q12.425 17 12.713 17.288Q13 17.575 13 18Q13 18.425 12.713 18.712Q12.425 19 12 19ZM15 23Q14.575 23 14.288 22.712Q14 22.425 14 22Q14 21.575 14.288 21.288Q14.575 21 15 21Q15.425 21 15.713 21.288Q16 21.575 16 22Q16 22.425 15.713 22.712Q15.425 23 15 23ZM7.5 16Q5.225 16 3.613 14.387Q2 12.775 2 10.5Q2 8.425 3.375 6.875Q4.75 5.325 6.775 5.05Q7.575 3.625 8.963 2.812Q10.35 2 12 2Q14.25 2 15.912 3.438Q17.575 4.875 17.925 7.025Q19.65 7.175 20.825 8.45Q22 9.725 22 11.5Q22 13.375 20.688 14.688Q19.375 16 17.5 16Z" />
    </Icon>
  );
});

export type TWeatherDayTime = 'day' | 'night';

export type TWeather = 'clear' | 'partly clear' | 'rainy' | 'partly rainy' | 'snowy' | 'partly snowy';

export type TTemperature = number;

export interface IWeather extends ISurface {
  size?: ISize;

  shadow?: boolean;

  dayTime?: TWeatherDayTime;

  weather?: TWeather;

  temperature?: TTemperature;

  values?: {
    dayTime?: TWeatherDayTime;

    weather?: TWeather;

    temperature?: TTemperature;
  };

  // Once every 1 hour
  interval?: number;

  IconDay?: IElementReference;
  IconNight?: IElementReference;
  IconCloud?: IElementReference;
  IconRain?: IElementReference;
  IconSnow?: IElementReference;

  IconProps?: IPropsAny;
}

const Weather: React.FC<IWeather> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiWeather?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',
    version = 'filled',

    size = 'regular',

    shadow,

    dayTime: dayTime_,
    weather: weather_,
    temperature: temperature_,

    values: values_,

    // Once every 1 hour
    interval = 60 * 60 * 1e3,

    IconDay = IconMaterialCircleRoundedFilled,
    IconNight = IconMaterialNightlightRoundedFilled,

    IconCloud = IconMaterialCloudRoundedFilled,
    IconRain = IconMaterialRainyRoundedFilled,
    IconSnow = IconMaterialCloudySnowingRoundedFilled,

    IconProps: IconProps_,

    Component = 'div',

    className,
    style,

    ...other
  } = props;

  const [rect, setRect] = React.useState<DOMRect>();
  const [values, setValues] = React.useState(values_ !== undefined ? values_ : {
    dayTime: dayTime_ !== undefined ? dayTime_ : 'day',
    weather: weather_ !== undefined ? weather_ : 'clear',
    temperature: temperature_ !== undefined ? temperature_ : '14'
  });

  const refs = {
    root: React.useRef<any>(),
    values: React.useRef<any>()
  };

  refs.values.current = values;

  const styles: any = {
    root: {

    }
  };

  React.useEffect(() => {
    const method = () => setRect(refs.root.current?.getBoundingClientRect());

    const observer = new ResizeObserver(method);

    method();

    observer.observe(refs.root.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (values_ !== undefined && values_ !== refs.values.current) setValues(values_);
  }, [values_]);

  React.useEffect(() => {
    if (dayTime_ !== undefined && dayTime_ !== refs.values.current.dayTime) setValues(values__ => ({
      ...values__,

      dayTime: dayTime_
    }));
  }, [dayTime_]);

  React.useEffect(() => {
    if (weather_ !== undefined && weather_ !== refs.values.current.weather) setValues(values__ => ({
      ...values__,

      weather: weather_
    }));
  }, [weather_]);

  React.useEffect(() => {
    if (temperature_ !== undefined && temperature_ !== refs.values.current.temperature) setValues(values__ => ({
      ...values__,

      temperature: temperature_
    }));
  }, [temperature_]);

  if (!['small', 'regular', 'large'].includes(size)) styles.root.maxWidth = size;

  const IconProps: any = {
    color: 'unset',

    ...IconProps_
  };

  let IconDayTime = IconDay;

  if (['day'].includes(values.dayTime)) IconDayTime = IconDay;

  if (['night'].includes(values.dayTime)) IconDayTime = IconNight;

  let IconWeather_ = IconCloud;

  if (['partly clear', 'cloudy'].includes(values.weather)) IconWeather_ = IconCloud;

  if (['rainy'].includes(values.weather)) IconWeather_ = IconRain;

  if (['snowy'].includes(values.weather)) IconWeather_ = IconSnow;

  const useDayTime = ['clear', 'partly clear'].includes(values.weather);

  const useWeather = !['clear'].includes(values.weather);

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      version={version}

      Component={Component}

      className={classNames([
        staticClassName('Weather', theme) && [
          'amaui-Weather-root'
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      <IconWeather
        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('Weather', theme) && [
            'amaui-Weather-icon-background'
          ],

          classes.icon_background,
          shadow && classes.icon_background_shadow
        ])}
      />

      <Fade
        in={values.temperature !== undefined}
      >
        <Type
          version='d1'

          className={classNames([
            staticClassName('Weather', theme) && [
              'amaui-Weather-text'
            ],

            classes.text,
            classes[`text_${+values.temperature < 100 ? 'regular' : 'large'}`]
          ])}

          style={{
            fontSize: `${(rect?.width || 0) * (+values.temperature < 100 ? +values.temperature < -10 ? 0.32 : 0.34 : 0.27)}px`
          }}
        >
          {values.temperature}°
        </Type>
      </Fade>

      {/* Day time */}
      {useDayTime && (
        <Transitions>
          <Fade
            key={values.dayTime}
          >
            <IconDayTime
              {...IconProps}

              className={classNames([
                staticClassName('Weather', theme) && [
                  'amaui-Weather-icon',
                  'amaui-Weather-icon-day-time'
                ],

                IconProps?.className,
                classes.icon_dayTime,
                classes[`icon_dayTime_${values.dayTime}`]
              ])}
            />
          </Fade>
        </Transitions>
      )}

      {/* Weather */}
      {useWeather && values.weather && (
        <Transitions>
          <Fade
            key={values.weather}
          >
            <IconWeather_
              {...IconProps}

              className={classNames([
                staticClassName('Weather', theme) && [
                  'amaui-Weather-icon',
                  'amaui-Weather-icon-weather'
                ],

                IconProps?.className,
                classes.icon_weather,
                classes[`icon_weather_${values.weather === 'partly clear' ? 'cloudy' : values.weather}`],
                classes[`icon_arrangement_${useDayTime ? 'pair' : 'regular'}`]
              ])}
            />
          </Fade>
        </Transitions>
      )}
    </Surface>
  );
});

Weather.displayName = 'amaui-Weather';

export default Weather;
