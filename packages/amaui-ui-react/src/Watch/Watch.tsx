import React from 'react';

import { is, unique } from '@amaui/utils';
import { AmauiDate, format } from '@amaui/date';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Path from '../Path';
import Type from '../Type';
import Surface from '../Surface';
import RoundMeter from '../RoundMeter';
import Line from '../Line';

import { angleToCoordinates, staticClassName, TElement, TPropsAny, TSize } from '../utils';
import { ISurface } from '../Surface/Surface';

const useStyle = styleMethod(theme => ({
  root: {
    userSelect: 'none'
  },

  timeOfDay: {
    ...theme.typography.values.b2,

    textAnchor: 'middle',
    alignmentBaseline: 'central',
    dominantBaseline: 'central'
  },

  version_regular: {
    padding: '24px 40px',
    borderRadius: theme.methods.shape.radius.value('rg')
  },

  shadow_version_regular: {
    boxShadow: [theme.shadows.values.default[6], '!important']
  },

  version_analog: {
    background: 'none',

    '& .AmauiRoundMeter-marks': {
      opacity: '0.74'
    }
  },

  shadow_version_analog: {
    '& .AmauiRoundMeter-svg': {
      filter: `drop-shadow(0px 6px 10px rgb(0 0 0 / 4%)) drop-shadow(0px 1px 18px rgb(0 0 0 / 1%)) drop-shadow(0px 3px 5px rgb(0 0 0 / 7%))`
    }
  },

  version_minimal: {
    background: 'none'
  },

  shadow_version_minimal: {
    '& .AmauiRoundMeter-svg': {
      filter: `drop-shadow(0px 6px 10px rgb(0 0 0 / 4%)) drop-shadow(0px 1px 18px rgb(0 0 0 / 1%)) drop-shadow(0px 3px 5px rgb(0 0 0 / 7%))`
    }
  },

  version_modern: {
    background: 'none'
  },

  shadow_version_modern: {
    '& svg:first-of-type': {
      filter: `drop-shadow(0px 6px 10px rgb(0 0 0 / 4%)) drop-shadow(0px 1px 18px rgb(0 0 0 / 1%)) drop-shadow(0px 3px 5px rgb(0 0 0 / 7%))`
    }
  },

  modern_background: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: 'auto'
  },

  modernDate: {
    textAnchor: 'middle'
  }
}), { name: 'AmauiWatch' });

export interface IWatch extends Omit<ISurface, 'version'> {
  version?: 'regular' | 'analog' | 'modern' | 'minimal';

  size?: TSize;

  timeVisible?: boolean;
  timeOfDayVisible?: boolean;
  dateVisible?: boolean;

  timeFormatString?: string;
  dateFormatString?: string;

  renderTime?: (value: number) => TElement;
  renderDate?: (value: number) => TElement;

  shadow?: boolean;

  AnalogProps?: TPropsAny;
  RegularProps?: TPropsAny;
  MinimalProps?: TPropsAny;
  ModernProps?: TPropsAny;
}

const Watch = React.forwardRef((props_: IWatch, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiWatch?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    // regular, analog, minimal, modern
    version = 'regular',

    size = 'regular',

    timeVisible = true,
    timeOfDayVisible = true,
    dateVisible = true,

    timeFormatString = `HH:mm:ss`,
    dateFormatString = `d, DD.MM.YYYY`,

    renderTime,
    renderDate,

    shadow,

    AnalogProps,
    RegularProps,
    MinimalProps,
    ModernProps,

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
    ], 'position'),

    'minimal': unique([
      // Hours
      {
        value: 12,

        padding: 7,

        style: {
          lineHeight: 1,
          letterSpacing: 0,
          fontSize: 87,
          fontWeight: 900
        },

        position: 0 * (100 / 12)
      },
      {
        value: 3,

        padding: 7,

        style: {
          lineHeight: 1,
          letterSpacing: 0,
          fontSize: 87,
          fontWeight: 900
        },

        position: 3 * (100 / 12)
      },
      {
        value: 6,

        padding: 7,

        style: {
          lineHeight: 1,
          letterSpacing: 0,
          fontSize: 87,
          fontWeight: 900
        },

        position: 6 * (100 / 12)
      },
      {
        value: 9,

        padding: 7,

        style: {
          lineHeight: 1,
          letterSpacing: 0,
          fontSize: 87,
          fontWeight: 900
        },

        position: 9 * (100 / 12)
      }
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
          `AmauiWatch-version-${version}`,
          `AmauiWatch-size-${size}`,
          timeVisible && `AmauiWatch-time-visible`,
          timeOfDayVisible && `AmauiWatch-time-of-day-visible`,
          dateVisible && `AmauiWatch-date-visible`,
          shadow && `AmauiWatch-shadow`
        ],

        className,
        classes.root,
        classes[`version_${version.replace('-', '_')}`],
        shadow && classes[`shadow_version_${version.replace('-', '_')}`]
      ])}

      {...other}
    >
      <Surface
        tonal={tonal}

        color={color}
      >
        {({ backgroundColor, palette }) => {

          return <>
            {/* Regular  */}
            {version === 'regular' && (
              <Line
                gap={0.5}

                direction='column'

                align='center'

                justify='center'

                {...RegularProps}

                className={classNames([
                  staticClassName('Watch', theme) && [
                    'AmauiWatch-regular'
                  ],

                  RegularProps?.className,
                  classes.regular
                ])}
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

                size={size}

                marks={marks.analog}

                labels={labels.analog}

                background

                {...AnalogProps}
              >
                {/* AM / PM */}
                {timeOfDayVisible && (
                  <text
                    x={120}

                    y={74}

                    stroke='none'

                    fill='currentColor'

                    className={classNames([
                      staticClassName('Watch', theme) && [
                        'AmauiWatch-time-of-day'
                      ],

                      classes.timeOfDay
                    ])}

                    style={{
                      fontSize: 11
                    }}
                  >
                    {format(new AmauiDate(value), `A`)}
                  </text>
                )}

                {/* Hour */}
                <Path
                  Component='rect'

                  value={(100 / 12) * new AmauiDate(value).hour}

                  x={120}

                  y={120 - (5 / 2)}

                  height={5}

                  width={57}

                  style={{
                    transformOrigin: '50% 50%',
                    stroke: 'none',
                    fill: 'currentColor'
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

                {/* Second */}
                <Path
                  d={`M 120 120 L ${angleToCoordinates(0, 120, 120, 115).x} ${angleToCoordinates(0, 120, 120, 115).y}`}

                  value={(100 / 60) * new AmauiDate(value).second}

                  style={{
                    transformOrigin: '50% 50%',
                    stroke: 'currentColor'
                  }}
                />

                {/* Pointers pin */}
                <Path
                  Component='circle'

                  r='4'

                  cx='120'

                  cy='120'

                  style={{
                    fill: 'currentColor',
                    stroke: color,
                    strokeWidth: 1
                  }}
                />
              </RoundMeter>
            )}

            {/* Minimal */}
            {version === 'minimal' && (
              <RoundMeter
                tonal={tonal}

                color={color}

                size={size}

                labels={labels['minimal']}

                arcsVisible={false}

                LabelProps={{
                  style: {
                    fill: theme.methods.palette.color.value(undefined, 60, true, palette)
                  }
                }}

                background

                {...MinimalProps}
              >
                {/* Hour */}
                <Path
                  d={`M 120 114 L 170 114 A 1 1 0 0 1 170 126 L 120 126 A 1 1 0 0 1 120 114`}

                  value={(100 / 12) * new AmauiDate(value).hour}

                  style={{
                    transformOrigin: '50% 50%',
                    stroke: 'none',
                    fill: theme.methods.palette.color.value(undefined, 30, true, palette)
                  }}
                />

                {/* Minute */}
                <Path
                  d={`M 120 118 L 217 118 A 1 1 0 0 1 217 122 L 120 122 A 1 1 0 0 1 120 118`}

                  value={(100 / 60) * new AmauiDate(value).minute}

                  style={{
                    transformOrigin: '50% 50%',
                    stroke: 'none',
                    fill: theme.methods.palette.color.value(undefined, 20, true, palette)
                  }}
                />

                {/* Second */}
                <Path
                  d={`M 120 119.5 L 217 119.5 A 1 1 0 0 1 217 120.5 L 120 120.5 A 1 1 0 0 1 120 119.5`}

                  value={(100 / 60) * new AmauiDate(value).second}

                  style={{
                    transformOrigin: '50% 50%',
                    stroke: 'none',
                    fill: theme.methods.palette.color.value(undefined, 10, true, palette)
                  }}
                />

                {/* Pointers pin */}
                <Path
                  Component='circle'

                  r='3'

                  cx='120'

                  cy='120'

                  style={{
                    stroke: 'none',
                    fill: theme.methods.palette.color.value(undefined, 10, true, palette)
                  }}
                />
              </RoundMeter>
            )}

            {/* Modern */}
            {version === 'modern' && (
              <RoundMeter
                tonal={tonal}

                color={color}

                size={size}

                arcsVisible={false}

                additional={(
                  <svg
                    viewBox='0 0 240 240'

                    xmlns='http://www.w3.org/2000/svg'

                    fill={theme.methods.palette.color.value(undefined, 10, false, palette)}

                    className={classNames([
                      staticClassName('Watch', theme) && [
                        'AmauiWatch-modern-background'
                      ],

                      classes.modern_background
                    ])}
                  >
                    <path d='M109.976 2.90439C116.096 -0.528799 123.562 -0.528799 129.683 2.90439L143.879 10.8678C146.815 12.5147 150.117 13.3994 153.483 13.4411L169.759 13.6427C176.776 13.7296 183.241 17.4627 186.825 23.496L195.138 37.4906C196.857 40.3849 199.274 42.802 202.168 44.5212L216.163 52.8337C222.196 56.4175 225.929 62.8832 226.016 69.9001L226.218 86.1761C226.26 89.5422 227.144 92.8441 228.791 95.78L236.755 109.976C240.188 116.096 240.188 123.563 236.755 129.683L228.791 143.879C227.144 146.815 226.26 150.117 226.218 153.483L226.016 169.759C225.929 176.776 222.196 183.242 216.163 186.825L202.168 195.138C199.274 196.857 196.857 199.274 195.138 202.168L186.825 216.163C183.241 222.196 176.776 225.929 169.759 226.016L153.483 226.218C150.117 226.26 146.815 227.144 143.879 228.791L129.683 236.755C123.562 240.188 116.096 240.188 109.976 236.755L95.7799 228.791C92.844 227.144 89.5421 226.26 86.1761 226.218L69.9001 226.016C62.8832 225.929 56.4174 222.196 52.8337 216.163L44.5211 202.168C42.802 199.274 40.3848 196.857 37.4906 195.138L23.496 186.825C17.4626 183.242 13.7296 176.776 13.6427 169.759L13.4411 153.483C13.3994 150.117 12.5147 146.815 10.8678 143.879L2.90436 129.683C-0.52883 123.563 -0.528829 116.096 2.90436 109.976L10.8678 95.78C12.5147 92.8441 13.3994 89.5422 13.4411 86.1761L13.6427 69.9001C13.7296 62.8832 17.4626 56.4175 23.496 52.8337L37.4906 44.5212C40.3848 42.802 42.802 40.3849 44.5211 37.4906L52.8337 23.496C56.4174 17.4627 62.8832 13.7296 69.9001 13.6427L86.1761 13.4411C89.5421 13.3994 92.844 12.5147 95.78 10.8678L109.976 2.90439Z' />
                  </svg>
                )}

                {...ModernProps}
              >
                <Path
                  Component='g'

                  value={(100 / 60) * new AmauiDate(value).second}

                  style={{
                    transformOrigin: 'center'
                  }}
                >
                  <text
                    x={25}

                    y={130}

                    stroke='none'

                    fill={theme.methods.palette.color.value(undefined, 90, false, palette)}

                    transform='rotate(-90, 25, 120)'

                    className={classNames([
                      staticClassName('Watch', theme) && [
                        'AmauiWatch-modern-date'
                      ],

                      classes.modernDate
                    ])}

                    style={{
                      fontSize: 19
                    }}
                  >
                    {format(new AmauiDate(value), `d DD`)}
                  </text>
                </Path>

                {/* Hour */}
                <Path
                  d={`M 120 114 L 170 114 A 1 1 0 0 1 170 126 L 120 126 A 1 1 0 0 1 120 114`}

                  value={(100 / 12) * new AmauiDate(value).hour}

                  style={{
                    transformOrigin: '50% 50%',
                    stroke: 'none',
                    fill: palette[20]
                  }}
                />

                {/* Minute */}
                <Path
                  d={`M 120 114 L 194 114 A 1 1 0 0 1 194 126 L 120 126 A 1 1 0 0 1 120 114`}

                  value={(100 / 60) * new AmauiDate(value).minute}

                  style={{
                    transformOrigin: '50% 50%',
                    stroke: 'none',
                    fill: palette[30]
                  }}
                />

                {/* Second */}
                <Path
                  Component='circle'

                  r='8'

                  cx='215'

                  cy='120'

                  value={(100 / 60) * new AmauiDate(value).second}

                  style={{
                    stroke: 'none',
                    fill: palette[50],
                    transformOrigin: 'center'
                  }}
                />
              </RoundMeter>
            )}
          </>;
        }}
      </Surface>
    </Surface>
  );
});

Watch.displayName = 'AmauiWatch';

export default Watch;
