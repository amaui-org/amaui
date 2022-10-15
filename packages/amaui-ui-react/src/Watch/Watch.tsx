import React from 'react';

import { is, unique } from '@amaui/utils';
import { AmauiDate, format } from '@amaui/date';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Path from '../Path';
import Type from '../Type';
import Surface from '../Surface';
import RoundMeter from '../RoundMeter';
import Line from '../Line';

import { angleToCoordinates, staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  version_regular: {
    padding: '24px 40px',
    borderRadius: theme.methods.shape.radius.value('rg')
  },

  version_analog: {
    background: 'none',

    '& .AmauiRoundMeter-marks': {
      opacity: '0.74'
    }
  }
}), { name: 'AmauiWatch' });

const Watch = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiWatch?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    // regular, analog, google, apple
    version = 'regular',

    marksAnalog,
    labelsAnalog,

    timeVisible = true,
    dateVisible = true,

    timeFormatString = `hh:mm:ss`,
    dateFormatString = `d, DD.MM.YYYY`,

    renderTime,
    renderDate,

    RegularProps,
    AnalogProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const refs = {
    value: React.useRef<any>(),
    animationFrame: React.useRef<any>()
  };

  const [value, setValue] = React.useState(AmauiDate.milliseconds);

  const update = () => {
    setValue(AmauiDate.milliseconds);

    refs.animationFrame.current = requestAnimationFrame(update);
  };

  const clear = () => {
    cancelAnimationFrame(refs.animationFrame.current);
  };

  const marks: any = {
    analog: unique([
      // Hours
      ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
        height: 8,

        padding: 4,

        position: index * (100 / 12)
      }))),

      // Minutes
      ...(Array.from({ length: 60 }).map((item: any, index: number) => ({
        height: 4,

        padding: 4,

        position: index * (100 / 60)
      }))),
    ], 'position')
  };

  const labels: any = {
    analog: unique([
      // Hours
      ...(Array.from({ length: 12 }).map((item: any, index: number) => ({
        value: index === 0 ? 12 : index,

        padding: 12,

        style: {
          fontSize: 14
        },

        position: index * (100 / 12)
      })))
    ], 'position')
  };

  React.useEffect(() => {
    // Update
    update();

    return () => {
      // Clean up
      clear();
    };
  }, []);

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      Component={Component}

      className={classNames([
        staticClassName('Watch', theme) && [
          'AmauiWatch-root',
          `AmauiWatch-version-${version}`
        ],

        className,
        classes.root,
        classes[`version_${version}`]
      ])}

      {...other}
    >
      <Surface
        tonal={tonal}

        color={color}
      >
        {({ color, backgroundColor }) => <>
          {/* Regular  */}
          {version === 'regular' && (
            <Line
              gap={0.5}

              direction='column'

              align='center'

              justify='center'

              className={classNames([
                staticClassName('Watch', theme) && [
                  'AmauiWatch-regular'
                ],

                classes.regular
              ])}

              {...RegularProps}
            >
              {timeVisible && (
                is('function', renderTime) ? renderTime(value) : (
                  <Type
                    version='h2'
                  >
                    {format(new AmauiDate(value), timeFormatString)}
                  </Type>
                )
              )}

              {dateVisible && (
                is('function', renderDate) ? renderDate(value) : (
                  <Type
                    version='b3'

                    color='secondary'
                  >
                    {format(new AmauiDate(value), dateFormatString)}
                  </Type>
                )
              )}
            </Line>
          )}

          {/* Analog */}
          {version === 'analog' && (
            <RoundMeter
              tonal={tonal}

              color={color}

              marks={marks.analog}

              labels={labels.analog}

              background

              {...AnalogProps}
            >
              {/* Second */}
              <Path
                d={`M 120 120 L ${angleToCoordinates(0, 120, 120, 115).x} ${angleToCoordinates(0, 120, 120, 115).y}`}

                value={(100 / 60) * new AmauiDate(value).second}

                style={{
                  transformOrigin: '50% 50%'
                }}
              />

              {/* Minute */}
              <Path
                Component='rect'

                value={(100 / 60) * new AmauiDate(value).minute}

                x={120}

                y={120 - (3 / 2)}

                height={3}

                width={105}

                style={{
                  transformOrigin: '50% 50%',
                  stroke: 'none',
                  fill: 'currentColor'
                }}
              />

              {/* Hour */}
              <Path
                Component='rect'

                value={(100 / 12) * new AmauiDate(value).hour}

                x={120}

                y={120 - (5 / 2)}

                height={5}

                width={54}

                style={{
                  transformOrigin: '50% 50%',
                  stroke: 'none',
                  fill: 'currentColor'
                }}
              />

              {/* Pointers pin */}
              <circle
                r='4'

                cx='120'

                cy='120'

                style={{
                  fill: backgroundColor,
                  stroke: color,
                  strokeWidth: 1
                }}
              />
            </RoundMeter>
          )}
        </>}
      </Surface>
    </Surface>
  );
});

Watch.displayName = 'AmauiWatch';

export default Watch;
