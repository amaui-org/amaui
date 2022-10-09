import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    width: '1em',
    height: '1em',

    '&.AmauiSurface-root': {
      background: 'none'
    }
  },

  icon: {

  },

  size_small: {
    fontSize: '8rem'
  },

  size_regular: {
    fontSize: '12rem'
  },

  size_large: {
    fontSize: '16rem'
  }
}), { name: 'AmauiWeather' });

const IconWeather = React.forwardRef((props: any, ref: any) => {
  const {
    tonal,
    color,

    style,

    ...other
  } = props;

  return (
    <Surface
      tonal={tonal}

      color={color}
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

// to do

// shape

// color

// make regular, small and large and custom sizes

// Text for degrese

// an option for ferenhite

// Add possible icons for weather

// based on current local hour if it's day, make it a day color
// else swithch to night version

const Weather = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiWeather?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',
    version = 'filled',

    size = 'regular',

    Component = 'div',

    className,
    style,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  if (!['small', 'regular', 'large'].includes(size)) styles.root.fontSize = size;

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      version={version}

      Component={Component}

      className={classNames([
        staticClassName('Weather', theme) && [
          'AmauiWeather-root',
          `AmauiWeather-size-${size}`
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
            'AmauiWeather-icon'
          ],

          classes.icon
        ])}
      />
    </Surface>
  );
});

Weather.displayName = 'AmauiWeather';

export default Weather;
