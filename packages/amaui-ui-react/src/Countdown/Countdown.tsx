import React from 'react';

import { clamp, getLeadingZerosNumber, is } from '@amaui/utils';
import { AmauiDate, duration } from '@amaui/date';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import FadeElement from '../Fade';
import TypeElement from '../Type';
import TooltipElement from '../Tooltip';
import SurfaceElement from '../Surface';
import NumericTextFieldElement from '../NumericTextField';
import RoundProgressElement from '../RoundProgress';
import LinearProgressElement from '../LinearProgress';
import LineElement from '../Line';
import IconButtonElement from '../IconButton';
import IconElement from '../Icon';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IElement, IElementReference, IPropsAny } from '../types';

const IconMaterialAvTimerRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='AvTimerRounded'
      short_name='AvTimer'

      {...props}
    >
      <path d="M12 18Q11.575 18 11.288 17.712Q11 17.425 11 17Q11 16.575 11.288 16.288Q11.575 16 12 16Q12.425 16 12.713 16.288Q13 16.575 13 17Q13 17.425 12.713 17.712Q12.425 18 12 18ZM12 21Q10.15 21 8.512 20.288Q6.875 19.575 5.65 18.35Q4.425 17.125 3.712 15.488Q3 13.85 3 12Q3 10.05 3.75 8.375Q4.5 6.7 5.825 5.45Q6.15 5.15 6.575 5.175Q7 5.2 7.3 5.5L12.7 10.9Q12.85 11.05 12.913 11.225Q12.975 11.4 12.975 11.6Q12.975 11.8 12.913 11.975Q12.85 12.15 12.7 12.3Q12.425 12.575 12 12.575Q11.575 12.575 11.3 12.3L6.6 7.6Q5.85 8.5 5.425 9.613Q5 10.725 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19Q14.9 19 16.95 16.95Q19 14.9 19 12Q19 9.325 17.288 7.387Q15.575 5.45 13 5.1V6Q13 6.425 12.713 6.713Q12.425 7 12 7Q11.575 7 11.288 6.713Q11 6.425 11 6V4Q11 3.575 11.338 3.287Q11.675 3 12.125 3Q13.925 3 15.538 3.712Q17.15 4.425 18.363 5.65Q19.575 6.875 20.288 8.512Q21 10.15 21 12Q21 13.85 20.288 15.488Q19.575 17.125 18.35 18.35Q17.125 19.575 15.488 20.288Q13.85 21 12 21ZM17 13Q16.575 13 16.288 12.712Q16 12.425 16 12Q16 11.575 16.288 11.287Q16.575 11 17 11Q17.425 11 17.712 11.287Q18 11.575 18 12Q18 12.425 17.712 12.712Q17.425 13 17 13ZM7 13Q6.575 13 6.287 12.712Q6 12.425 6 12Q6 11.575 6.287 11.287Q6.575 11 7 11Q7.425 11 7.713 11.287Q8 11.575 8 12Q8 12.425 7.713 12.712Q7.425 13 7 13Z" />
    </IconElement>
  );
});

const IconMaterialPlayArrowRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='PlayArrowRounded'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M9.525 18.025Q9.025 18.35 8.512 18.062Q8 17.775 8 17.175V6.825Q8 6.225 8.512 5.937Q9.025 5.65 9.525 5.975L17.675 11.15Q18.125 11.45 18.125 12Q18.125 12.55 17.675 12.85ZM10 12ZM10 15.35 15.25 12 10 8.65Z" />
    </IconElement>
  );
});

const IconMaterialPauseRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='PauseRounded'
      short_name='Pause'

      {...props}
    >
      <path d="M15 19Q14.175 19 13.588 18.413Q13 17.825 13 17V7Q13 6.175 13.588 5.588Q14.175 5 15 5H17Q17.825 5 18.413 5.588Q19 6.175 19 7V17Q19 17.825 18.413 18.413Q17.825 19 17 19ZM7 19Q6.175 19 5.588 18.413Q5 17.825 5 17V7Q5 6.175 5.588 5.588Q6.175 5 7 5H9Q9.825 5 10.413 5.588Q11 6.175 11 7V17Q11 17.825 10.413 18.413Q9.825 19 9 19ZM15 17H17V7H15ZM7 17H9V7H7ZM7 7V17ZM15 7V17Z" />
    </IconElement>
  );
});

const IconMaterialStopRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='StopRounded'
      short_name='Stop'

      {...props}
    >
      <path d="M8 8V16ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V8Q6 7.175 6.588 6.588Q7.175 6 8 6H16Q16.825 6 17.413 6.588Q18 7.175 18 8V16Q18 16.825 17.413 17.413Q16.825 18 16 18ZM8 16H16V8H8Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
    minWidth: '314px',
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value('rg', 'px')
  },

  roundWrapper: {
    position: 'relative',
    width: '240px',
    height: '240px'
  },

  linearProgress: {
    borderRadius: theme.methods.shape.radius.value(40, 'px'),

    '&.amaui-LinearProgress-root': {
      height: '6px'
    },

    '& .amaui-LinearProgress-line, & .amaui-LinearProgress-buffer': {
      borderRadius: theme.methods.shape.radius.value(40, 'px')
    }
  },

  roundProgress: {
    '&.amaui-RoundedProgress-root': {
      position: 'absolute',
      inset: '0'
    },

    '& .amaui-RoundedProgress-svg': {
      width: '100%',
      height: '100%',
      margin: '0'
    },

    '& .amaui-RoundedProgress-path-background': {
      stroke: 'currentColor',
      opacity: '0.24'
    },

    '& .amaui-RoundedProgress-path, & .amaui-RoundedProgress-path-background': {
      strokeLinecap: 'round'
    }
  },

  meta: {
    maxWidth: '114px',
    textAlign: 'center'
  },

  numericTextField: {
    width: '70px',

    '& .amaui-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: theme.methods.space.value(1, 'px'),
      height: 'auto'
    },

    '&.amaui-TextField-value .amaui-TextField-label, &.amaui-TextField-focus .amaui-TextField-label': {
      insetInlineStart: '60%',
      transform: `translate(${theme.direction === 'ltr' ? '-' : ''}50%, -16px) scale(0.667)`
    },

    '& .amaui-TextField-input': {
      ...theme.typography.values.h2,

      textAlign: 'center'
    },

    '& .amaui-TextField-border': {
      boxShadow: 'none'
    }
  }
}), { name: 'amaui-Countdown' });

export interface ICountdown extends Omit<ISurface, 'version'> {
  version?: 'linear' | 'round';

  renderValue?: (value: string) => IElement;
  icon?: boolean;

  onStart?: (event: React.MouseEvent<any>) => any;
  onPause?: (event: React.MouseEvent<any>) => any;
  onStop?: (event: React.MouseEvent<any>) => any;
  onResume?: (event: React.MouseEvent<any>) => any;

  Icon?: IElementReference;
  IconStart?: IElementReference;
  IconPause?: IElementReference;
  IconStop?: IElementReference;

  TreeProps?: IPropsAny;
  TooltipProps?: IPropsAny;
  RoundProgressProps?: IPropsAny;
  NumericTextFieldProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  LinearProgressProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const Countdown: React.FC<ICountdown> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCountdown?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const NumericTextField = React.useMemo(() => theme?.elements?.NumericTextField || NumericTextFieldElement, [theme]);

  const RoundProgress = React.useMemo(() => theme?.elements?.RoundProgress || RoundProgressElement, [theme]);

  const LinearProgress = React.useMemo(() => theme?.elements?.LinearProgress || LinearProgressElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    version = 'linear',

    renderValue,
    icon = true,

    onStart: onStart_,
    onPause: onPause_,
    onStop: onStop_,
    onResume: onResume_,

    Icon: Icon_ = IconMaterialAvTimerRounded,
    IconStart = IconMaterialPlayArrowRounded,
    IconPause = IconMaterialPauseRounded,
    IconStop = IconMaterialStopRounded,

    TreeProps: TreeProps_,
    TooltipProps: TooltipProps_,
    RoundProgressProps: RoundProgressProps_,
    NumericTextFieldProps: NumericTextFieldProps_,
    IconButtonProps: IconButtonProps_,
    LinearProgressProps: LinearProgressProps_,
    IconProps: IconProps_,

    Component = 'div',

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [status, setStatus] = React.useState('initial');
  const [value, setValue] = React.useState<number>(0);
  const [values, setValues] = React.useState<any>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const refs = {
    start: React.useRef<number>(0),
    valuePaused: React.useRef<any>(0),
    value: React.useRef<any>(),
    total: React.useRef<any>(),
    values: React.useRef<any>(),
    animationFrame: React.useRef<any>()
  };

  refs.value.current = value;

  refs.values.current = values;

  const updateValues = (property: string, valueItem: any) => {
    setValues(values_ => ({
      ...values_,

      [property]: valueItem
    }));
  };

  const clear = () => {
    cancelAnimationFrame(refs.animationFrame.current);
  };

  React.useEffect(() => {
    return () => {
      // Clean up
      clear();
    };
  }, []);

  const update = () => {
    if (refs.value.current <= 0) {
      // Wait for linear, round progress
      // transitions to end
      setTimeout(() => {
        setStatus('initial');
      }, 1400);

      return clear();
    }

    setValue(refs.valuePaused.current - (AmauiDate.milliseconds - refs.start.current));

    refs.animationFrame.current = requestAnimationFrame(update);
  };

  const onStart = React.useCallback((event: React.MouseEvent<any>) => {
    refs.total.current = refs.valuePaused.current = (
      ((refs.values.current.hours || 0) * (60 ** 2) * 1e3) +
      ((refs.values.current.minutes || 0) * (60 ** 1) * 1e3) +
      ((refs.values.current.seconds || 0) * 1e3)
    );

    setValue(refs.valuePaused.current);

    setStatus('running');

    setTimeout(() => {
      refs.start.current = AmauiDate.milliseconds;

      refs.animationFrame.current = requestAnimationFrame(update);
    }, 14);

    if (is('function', onStart_)) onStart_(event);
  }, []);

  const onPause = React.useCallback((event: React.MouseEvent<any>) => {
    clear();

    // Remember previous value
    refs.valuePaused.current = refs.value.current;

    setStatus('paused');

    if (is('function', onPause_)) onPause_(event);
  }, []);

  const onStop = React.useCallback((event: React.MouseEvent<any>) => {
    clear();

    refs.start.current = 0;

    refs.valuePaused.current = 0;

    refs.value.current = 0;

    setStatus('initial');

    setValue(0);

    if (is('function', onStop_)) onStop_(event);
  }, []);

  const onResume = React.useCallback((event: React.MouseEvent<any>) => {
    // Update start, valuePaused value
    refs.start.current = AmauiDate.milliseconds;

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    setStatus('running');

    if (is('function', onResume_)) onResume_(event);
  }, []);

  const IconProps = {

    ...IconProps_
  };

  const TooltipProps = {
    portal: true,
    interactive: false,

    ...TooltipProps_
  };

  const NumericTextFieldProps: any = {
    tonal,
    color: 'inherit',
    size: 'small',
    version: 'text',

    increment: false,
    decrement: false,

    ...NumericTextFieldProps_
  };

  const RoundProgressProps: any = {
    tonal,
    color,

    rounded: true,

    thickness: 1,

    ...RoundProgressProps_
  };

  const LinearProgressProps: any = {
    tonal,
    color,

    ...LinearProgressProps_
  };

  const IconButtonProps = {
    tonal,
    color: 'inherit',
    version: 'text',

    ...IconButtonProps_
  };

  const valueFormat = (valueNew_: number) => {
    let valueNew = '';

    const valueDuration: any = duration(valueNew_, undefined, true, undefined, ['hour', 'minute', 'second']);

    valueNew += `${getLeadingZerosNumber(valueDuration.hour || 0)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.minute || 0)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.second || 0)}`;

    return valueNew;
  };

  const value_ = status === 'initial' ? '00:00:00' : valueFormat(value);

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      gap={1}

      direction='column'

      align='center'

      Component={Line}

      AdditionalProps={{
        Component
      }}

      className={classNames([
        staticClassName('Countdown', theme) && [
          'amaui-Countdown-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {/* Icon  */}
      {icon && (
        <Icon_
          size='medium'

          {...IconProps}

          style={{
            marginBottom: 4,

            ...IconProps?.style
          }}
        />
      )}

      {/* Inputs */}
      {status === 'initial' && (
        <Fade
          in

          add
        >
          <Line
            gap={1}

            direction='row'

            align='flex-end'

            style={{
              marginTop: 12,
              marginBottom: -8
            }}
          >
            <NumericTextField
              label='Hours'

              min={0}

              max={23}

              value={values.hours}

              onChange={valueNew => updateValues('hours', !valueNew ? 0 : valueNew)}

              {...NumericTextFieldProps}

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-numeric-text-field'
                ],

                NumericTextFieldProps?.className,
                classes.numericTextField
              ])}
            />

            <NumericTextField
              label='Minutes'

              min={0}

              max={59}

              value={values.minutes}

              onChange={valueNew => updateValues('minutes', !valueNew ? 0 : valueNew)}

              {...NumericTextFieldProps}

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-numeric-text-field'
                ],

                NumericTextFieldProps?.className,
                classes.numericTextField
              ])}
            />

            <NumericTextField
              label='Seconds'

              min={0}

              max={59}

              value={values.seconds}

              onChange={valueNew => updateValues('seconds', !valueNew ? 0 : valueNew)}

              {...NumericTextFieldProps}

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-numeric-text-field'
                ],

                NumericTextFieldProps?.className,
                classes.numericTextField
              ])}
            />
          </Line>
        </Fade>
      )}

      {/* Time */}
      {status !== 'initial' && ['regular', 'linear'].includes(version) && (
        <Fade
          in

          add
        >
          <Line
            gap={1}

            direction='column'

            align='center'

            justify='center'

            style={{
              width: '100%'
            }}
          >
            {is('function', renderValue) ? renderValue(value_) : (
              <Type
                version='h1'
              >
                {value_}
              </Type>
            )}

            {version === 'linear' && (
              <LinearProgress
                version='determinate'

                value={clamp(Math.round(((value / 1000) / (refs.total.current / 1000)) * 100), 0, 100)}

                reverse

                style={{
                  margin: '4px 0 8px'
                }}

                {...LinearProgressProps}

                className={classNames([
                  staticClassName('Countdown', theme) && [
                    'amaui-Countdown-linear-progress'
                  ],

                  LinearProgressProps?.className,
                  classes.linearProgress
                ])}
              />
            )}
          </Line>
        </Fade>
      )}

      {status !== 'initial' && ['round'].includes(version) && (
        <Fade
          in

          add
        >
          <Line
            gap={0.5}

            direction='column'

            align='center'

            justify='center'

            className={classNames([
              staticClassName('Countdown', theme) && [
                'amaui-Countdown-round-wrapper'
              ],

              classes.roundWrapper
            ])}
          >
            <RoundProgress
              version='determinate'

              value={clamp(Math.round(((value / 1000) / (refs.total.current / 1000)) * 100), 0, 100)}

              {...RoundProgressProps}

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-round-progress'
                ],

                RoundProgressProps?.className,
                classes.roundProgress
              ])}
            />

            {is('function', renderValue) ? renderValue(value_) : (
              <Type
                version='h1'
              >
                {value_}
              </Type>
            )}

            <Type
              version='b3'

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-meta'
                ],

                classes.meta
              ])}
            >
              Total {duration(refs.total.current, false)}
            </Type>
          </Line>
        </Fade>
      )}

      {/* Controls */}
      <Line
        gap={1}

        direction='row'

        align='center'

        justify='center'
      >
        {status === 'initial' && (
          <Fade
            in

            add
          >
            <span>
              {/* Start */}
              <Tooltip
                label='Start'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onStart}

                  disabled={!((values.hours || 0) + (values.minutes || 0) + (values.seconds || 0))}

                  {...IconButtonProps}
                >
                  <IconStart />
                </IconButton>
              </Tooltip>
            </span>
          </Fade>
        )}

        {status === 'running' && (
          <Fade
            in

            add
          >
            <span>
              {/* Stop */}
              <Tooltip
                label='Stop'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onStop}

                  {...IconButtonProps}
                >
                  <IconStop />
                </IconButton>
              </Tooltip>

              {/* Pause */}
              <Tooltip
                label='Pause'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onPause}

                  {...IconButtonProps}
                >
                  <IconPause />
                </IconButton>
              </Tooltip>
            </span>
          </Fade>
        )}

        {status === 'paused' && (
          <Fade
            in

            add
          >
            <span>
              {/* Stop */}
              <Tooltip
                label='Stop'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onStop}

                  {...IconButtonProps}
                >
                  <IconStop />
                </IconButton>
              </Tooltip>

              {/* Resume */}
              <Tooltip
                label='Resume'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onResume}

                  {...IconButtonProps}
                >
                  <IconStart />
                </IconButton>
              </Tooltip>
            </span>
          </Fade>
        )}
      </Line>
    </Surface>
  );
});

Countdown.displayName = 'amaui-Countdown';

export default Countdown;
