import React from 'react';

import { is, getLeadingZerosNumber } from '@amaui/utils';
import { AmauiDate, duration } from '@amaui/date';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Fade from '../Fade';
import Expand from '../Expand';
import Type from '../Type';
import Tooltip from '../Tooltip';
import Tree from '../Tree';
import Surface from '../Surface';
import Line from '../Line';
import IconButton from '../IconButton';
import Icon from '../Icon';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    minWidth: '270px',
    padding: '24px 40px',
    borderRadius: theme.methods.shape.radius.value('rg')
  },

  value: {
    marginTop: '8px'
  },

  flags: {
    width: '100%',
    paddingTop: '8px'
  },

  actions: {
    marginTop: '8px'
  }
}), { name: 'AmauiTimer' });

const IconMaterialTimerRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerRounded'
      short_name='Timer'

      {...props}
    >
      <path d="M10 3Q9.575 3 9.288 2.712Q9 2.425 9 2Q9 1.575 9.288 1.287Q9.575 1 10 1H14Q14.425 1 14.713 1.287Q15 1.575 15 2Q15 2.425 14.713 2.712Q14.425 3 14 3ZM12 14Q12.425 14 12.713 13.712Q13 13.425 13 13V9Q13 8.575 12.713 8.287Q12.425 8 12 8Q11.575 8 11.288 8.287Q11 8.575 11 9V13Q11 13.425 11.288 13.712Q11.575 14 12 14ZM12 22Q10.15 22 8.512 21.288Q6.875 20.575 5.65 19.35Q4.425 18.125 3.712 16.488Q3 14.85 3 13Q3 11.15 3.712 9.512Q4.425 7.875 5.65 6.65Q6.875 5.425 8.512 4.713Q10.15 4 12 4Q13.55 4 14.975 4.5Q16.4 5 17.65 5.95L18.375 5.225Q18.65 4.95 19.05 4.95Q19.45 4.95 19.75 5.25Q20.025 5.525 20.025 5.95Q20.025 6.375 19.75 6.65L19.05 7.35Q20 8.6 20.5 10.025Q21 11.45 21 13Q21 14.85 20.288 16.488Q19.575 18.125 18.35 19.35Q17.125 20.575 15.488 21.288Q13.85 22 12 22ZM12 20Q14.9 20 16.95 17.95Q19 15.9 19 13Q19 10.1 16.95 8.05Q14.9 6 12 6Q9.1 6 7.05 8.05Q5 10.1 5 13Q5 15.9 7.05 17.95Q9.1 20 12 20ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z" />
    </Icon>
  );
});

const IconMaterialPlayArrowRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowRounded'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M9.525 18.025Q9.025 18.35 8.512 18.062Q8 17.775 8 17.175V6.825Q8 6.225 8.512 5.937Q9.025 5.65 9.525 5.975L17.675 11.15Q18.125 11.45 18.125 12Q18.125 12.55 17.675 12.85ZM10 12ZM10 15.35 15.25 12 10 8.65Z" />
    </Icon>
  );
});

const IconMaterialPauseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseRounded'
      short_name='Pause'

      {...props}
    >
      <path d="M15 19Q14.175 19 13.588 18.413Q13 17.825 13 17V7Q13 6.175 13.588 5.588Q14.175 5 15 5H17Q17.825 5 18.413 5.588Q19 6.175 19 7V17Q19 17.825 18.413 18.413Q17.825 19 17 19ZM7 19Q6.175 19 5.588 18.413Q5 17.825 5 17V7Q5 6.175 5.588 5.588Q6.175 5 7 5H9Q9.825 5 10.413 5.588Q11 6.175 11 7V17Q11 17.825 10.413 18.413Q9.825 19 9 19ZM15 17H17V7H15ZM7 17H9V7H7ZM7 7V17ZM15 7V17Z" />
    </Icon>
  );
});

const IconMaterialStopRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopRounded'
      short_name='Stop'

      {...props}
    >
      <path d="M8 8V16ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V8Q6 7.175 6.588 6.588Q7.175 6 8 6H16Q16.825 6 17.413 6.588Q18 7.175 18 8V16Q18 16.825 17.413 17.413Q16.825 18 16 18ZM8 16H16V8H8Z" />
    </Icon>
  );
});

const IconMaterialFlagRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagRounded'
      short_name='Flag'

      {...props}
    >
      <path d="M6 21Q5.575 21 5.287 20.712Q5 20.425 5 20V5Q5 4.575 5.287 4.287Q5.575 4 6 4H13.175Q13.525 4 13.8 4.225Q14.075 4.45 14.15 4.8L14.4 6H19Q19.425 6 19.712 6.287Q20 6.575 20 7V15Q20 15.425 19.712 15.712Q19.425 16 19 16H13.825Q13.475 16 13.2 15.775Q12.925 15.55 12.85 15.2L12.6 14H7V20Q7 20.425 6.713 20.712Q6.425 21 6 21ZM12.5 10ZM14.65 14H18V8H12.75L12.35 6H7V12H14.25Z" />
    </Icon>
  );
});

const Timer = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTimer?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    render,

    onStart: onStart_,
    onFlag: onFlag_,
    onPause: onPause_,
    onStop: onStop_,
    onResume: onResume_,

    icon = true,

    Icon = IconMaterialTimerRounded,
    IconStart = IconMaterialPlayArrowRounded,
    IconPause = IconMaterialPauseRounded,
    IconFlag = IconMaterialFlagRounded,
    IconStop = IconMaterialStopRounded,

    TreeProps: TreeProps_,
    TooltipProps: TooltipProps_,
    IconButtonProps: IconButtonProps_,
    IconProps: IconProps_,

    Component = 'div',

    className,

    ...other
  } = props;

  const [status, setStatus] = React.useState('initial');
  const [flags, setFlags] = React.useState([]);
  const [expand, setExpand] = React.useState<any>();
  const [value, setValue] = React.useState<number>(0);

  const refs = {
    start: React.useRef<number>(0),
    valuePaused: React.useRef<any>(0),
    value: React.useRef<any>(),
    animationFrame: React.useRef<any>()
  };

  refs.value.current = value;

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
    setValue(refs.valuePaused.current + (AmauiDate.milliseconds - refs.start.current));

    refs.animationFrame.current = requestAnimationFrame(update);
  };

  const onStart = React.useCallback(() => {
    refs.start.current = AmauiDate.milliseconds;

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    setStatus('running');

    if (is('function', onStart_)) onStart_();
  }, []);

  const onFlag = React.useCallback(() => {
    if (!expand) setExpand(true);

    setFlags(values => [...values, refs.value.current]);

    if (is('function', onFlag_)) onFlag_();
  }, [expand]);

  const onPause = React.useCallback(() => {
    clear();

    // Remember previous value
    refs.valuePaused.current = refs.value.current;

    setStatus('paused');

    if (is('function', onPause_)) onPause_();
  }, []);

  const onStop = React.useCallback(() => {
    clear();

    setStatus('initial');

    setExpand(false);

    setValue(0);

    refs.start.current = 0;

    refs.valuePaused.current = 0;

    refs.value.current = 0;

    if (is('function', onStop_)) onStop_();
  }, []);

  const onResume = React.useCallback(() => {
    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    // Update start, valuePaused value
    refs.start.current = AmauiDate.milliseconds;

    setStatus('running');

    if (is('function', onResume_)) onResume_();
  }, []);

  const onExited = React.useCallback(() => {
    setFlags([]);
  }, []);

  const IconProps = {

    ...IconProps_
  };

  const TooltipProps = {
    portal: false,
    interactive: false,

    ...TooltipProps_
  };

  const TreeProps = {
    tonal,
    color: 'inherit',

    ...TreeProps_
  };

  const IconButtonProps = {
    tonal,
    color: 'inherit',
    version: 'text',

    ...IconButtonProps_
  };

  const valueFormat = (valueNew_: number) => {
    let valueNew = '';

    const valueDuration: any = duration(valueNew_, undefined, true, undefined, ['hour', 'minute', 'second', 'millisecond']);

    if (valueDuration.hour > 0) valueNew += `${getLeadingZerosNumber(valueDuration.hour)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.minute || 0)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.second || 0)}.`;

    valueNew += `${getLeadingZerosNumber(Math.floor((valueDuration.millisecond || 0) / 10))}`;

    return valueNew;
  };

  const value_ = status === 'initial' ? '00:00.00' : valueFormat(value);

  return (
    <Line
      ref={ref}

      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      align='center'

      Component={Surface}

      className={classNames([
        staticClassName('Timer', theme) && [
          'AmauiTimer-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {/* Icon  */}
      {icon && (
        <Icon
          size='medium'

          {...IconProps}

          style={{
            marginBottom: 4,

            ...IconProps?.style
          }}
        />
      )}

      {/* Time */}
      {is('function', render) ? render(value_) : (
        <Type
          version='h1'

          className={classNames([
            staticClassName('Timer', theme) && [
              'AmauiTimer-value'
            ],

            classes.value
          ])}
        >
          {value_}
        </Type>
      )}

      {/* Flags */}
      <Expand
        in={expand}

        onExited={onExited}

        className={classNames([
          staticClassName('Timer', theme) && [
            'AmauiTimer-flags'
          ],

          classes.flags
        ])}
      >
        <Tree
          openDefault

          middle='Flags'

          indicator

          indicatorPosition='end'

          style={{
            width: '100%'
          }}

          {...TreeProps}
        >
          {flags.map((item: number, index: number) => (
            <Tree
              key={index}

              icon={<IconFlag size='small' />}

              middle={(
                <Line
                  direction='row'

                  align='center'

                  justify='center'

                  style={{
                    marginInlineStart: '4px'
                  }}
                >
                  <Type
                    version='b2'
                  >
                    {getLeadingZerosNumber(index + 1)}
                  </Type>

                  <Type
                    version='b2'

                    style={{
                      opacity: '0.7'
                    }}
                  >
                    +{valueFormat(item - (flags[index - 1] || 0))}
                  </Type>

                  <Type
                    version='b2'
                  >
                    {valueFormat(item)}
                  </Type>
                </Line>
              )}

              noPadding

              indicator

              indicatorPosition='end'

              {...TreeProps}
            />
          ))}
        </Tree>
      </Expand>

      {/* Controls */}
      <Line
        gap={1}

        direction='row'

        align='center'

        justify='center'

        className={classNames([
          staticClassName('Timer', theme) && [
            'AmauiTimer-actions'
          ],

          classes.actions
        ])}
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
              {/* Flag */}
              <Tooltip
                label='Flag'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onFlag}

                  {...IconButtonProps}
                >
                  <IconFlag />
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
    </Line>
  );
});

Timer.displayName = 'AmauiTimer';

export default Timer;
