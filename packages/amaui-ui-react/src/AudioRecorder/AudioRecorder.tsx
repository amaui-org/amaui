import React from 'react';

import { getLeadingZerosNumber, is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { AmauiDate, duration } from '@amaui/date';

import Line from '../Line';
import Fade from '../Fade';
import Type from '../Type';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';
import Icon from '../Icon';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny, ISize } from '../types';

const useStyle = styleMethod(theme => ({
  '@keyframes pulse': {
    '0%': {
      opacity: 1
    },
    '50%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },

  root: {
    width: 'auto'
  },

  recordDot: {
    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    background: theme.palette.color.error.main,
    animation: `$pulse 1700ms ${theme.transitions.timing_function.emphasized} 240ms infinite`
  },

  recordDot_size_small: {
    width: 8,
    height: 8,
  },

  recordDot_size_regular: {
    width: 10,
    height: 10,
  },

  recordDot_size_large: {
    width: 12,
    height: 12,
  }
}), { name: 'amaui-AudioRecorder' });

export interface IAudioRecorder extends ILine {
  size?: ISize;

  pause?: boolean;

  renderMain?: (props: { onStart: () => any; supported: boolean; }) => any;
  renderTime?: (value: string) => any;

  loading?: any;
  disabled?: any;

  Icon?: IElementReference;
  IconConfirm?: IElementReference;
  IconStart?: IElementReference;
  IconPause?: IElementReference;
  IconStop?: IElementReference;

  onConfirm?: (value: Blob) => any;
  onData?: (value: Blob) => any;
  onStart?: (event: React.MouseEvent<any>) => any;
  onPause?: (event: React.MouseEvent<any>) => any;
  onResume?: (event: React.MouseEvent<any>) => any;
  onStop?: (event: React.MouseEvent<any>) => any;
  onError?: (error: Error) => any;

  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const IconMaterialMicRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicRounded'
      short_name='Mic'

      {...props}
    >
      <path d="M12 14Q10.75 14 9.875 13.125Q9 12.25 9 11V5Q9 3.75 9.875 2.875Q10.75 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5V11Q15 12.25 14.125 13.125Q13.25 14 12 14ZM12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8ZM12 21Q11.575 21 11.288 20.712Q11 20.425 11 20V17.9Q8.675 17.6 7.05 15.975Q5.425 14.35 5.075 12.075Q5 11.65 5.3 11.325Q5.6 11 6.1 11Q6.45 11 6.725 11.262Q7 11.525 7.075 11.9Q7.4 13.65 8.775 14.825Q10.15 16 12 16Q13.85 16 15.225 14.825Q16.6 13.65 16.925 11.9Q17 11.525 17.288 11.262Q17.575 11 17.925 11Q18.4 11 18.7 11.325Q19 11.65 18.925 12.075Q18.575 14.35 16.95 15.975Q15.325 17.6 13 17.9V20Q13 20.425 12.713 20.712Q12.425 21 12 21ZM12 12Q12.425 12 12.713 11.712Q13 11.425 13 11V5Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5V11Q11 11.425 11.288 11.712Q11.575 12 12 12Z" />
    </Icon>
  );
});

const IconMaterialSendRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendRounded'
      short_name='Send'

      {...props}
    >
      <path d="M3 18.5V5.5Q3 4.95 3.45 4.662Q3.9 4.375 4.4 4.575L19.8 11.075Q20.425 11.35 20.425 12Q20.425 12.65 19.8 12.925L4.4 19.425Q3.9 19.625 3.45 19.337Q3 19.05 3 18.5ZM5 17 16.85 12 5 7V10.5L11 12L5 13.5ZM5 12V7V10.5Q5 10.5 5 10.5Q5 10.5 5 10.5V13.5Q5 13.5 5 13.5Q5 13.5 5 13.5V17Z" />
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

const AudioRecorder: React.FC<IAudioRecorder> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAudioRecorder?.props?.default, ...props_ }), [props_]);
  const {
    size = 'regular',

    pause = true,

    renderMain,
    renderTime,

    loading,
    disabled,

    Component,

    Icon: Icon_ = IconMaterialMicRounded,
    IconConfirm = IconMaterialSendRounded,
    IconStart = IconMaterialPlayArrowRounded,
    IconPause = IconMaterialPauseRounded,
    IconStop = IconMaterialStopRounded,

    onConfirm: onConfirm_,
    onData,
    onStart: onStart_,
    onPause: onPause_,
    onResume: onResume_,
    onStop: onStop_,
    onError,

    TooltipProps,
    IconButtonProps,
    IconProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [status, setStatus] = React.useState('initial');
  const [value, setValue] = React.useState<number>(0);

  const refs = {
    root: React.useRef<any>(),
    mediaRecorder: React.useRef<MediaRecorder>(),
    mediaRecorderBytes: React.useRef<any>([]),
    start: React.useRef<number>(0),
    valuePaused: React.useRef<any>(0),
    value: React.useRef<any>(),
    animationFrame: React.useRef<any>(),
    onData: React.useRef<any>()
  };

  refs.onData.current = onData;

  const supported = isEnvironment('browser') && window.navigator.mediaDevices?.getUserMedia; refs.value.current = value;

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

  const onStart = React.useCallback(async (event: React.MouseEvent<any>) => {
    // MediaStream
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // media recorder
      refs.mediaRecorder.current = new MediaRecorder(stream);

      // reset
      refs.mediaRecorderBytes.current = [];

      // data
      refs.mediaRecorder.current.addEventListener('dataavailable', event_ => {
        const data = event_.data;

        refs.mediaRecorderBytes.current.push(data);

        if (is('function', refs.onData.current)) refs.onData.current(data);
      });

      // stop
      refs.mediaRecorder.current.addEventListener('stop', event_ => {
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());
      });

      // start
      refs.mediaRecorder.current.start();
    }
    catch (error) {
      if (is('function', onError)) onError(error);

      return;
    }

    refs.start.current = AmauiDate.milliseconds;

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    setStatus('running');

    if (is('function', onStart_)) onStart_(event);
  }, [onStart_, onError]);

  const onPause = React.useCallback((event: React.MouseEvent<any>) => {
    // media recorder
    if (refs.mediaRecorder.current) {
      refs.mediaRecorder.current.pause();
    }

    clear();

    // Remember previous value
    refs.valuePaused.current = refs.value.current;

    setStatus('paused');

    if (is('function', onPause_)) onPause_(event);
  }, [onPause_]);

  const onStop = React.useCallback((event: React.MouseEvent<any>) => {
    // media recorder
    if (refs.mediaRecorder.current) {
      refs.mediaRecorder.current.stop();
    }

    clear();

    setStatus('initial');

    setValue(0);

    refs.start.current = 0;

    refs.valuePaused.current = 0;

    refs.value.current = 0;

    if (is('function', onStop_)) onStop_(event);
  }, [onStop_]);

  const onConfirm = React.useCallback((event: React.MouseEvent<any>) => {
    // Stop
    onStop(event);

    setTimeout(() => {
      // Get the blob
      const mimeType = refs.mediaRecorder.current?.mimeType;

      const blob = new Blob(refs.mediaRecorderBytes.current, { type: mimeType });

      // clean up
      refs.mediaRecorderBytes.current = [];

      if (is('function', onConfirm_)) onConfirm_(blob);
    }, 14);
  }, [onStop, onConfirm_]);

  const onResume = React.useCallback((event: React.MouseEvent<any>) => {
    // media recorder
    if (refs.mediaRecorder.current) {
      refs.mediaRecorder.current.resume();
    }

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    // Update start, valuePaused value
    refs.start.current = AmauiDate.milliseconds;

    setStatus('running');

    if (is('function', onResume_)) onResume_(event);
  }, [onResume_]);

  const valueFormat = (valueNew_: number) => {
    let valueNew = '';

    const valueDuration: any = duration(valueNew_, undefined, true, undefined, ['hour', 'minute', 'second', 'millisecond']);

    if (valueDuration.hour > 0) valueNew += `${getLeadingZerosNumber(valueDuration.hour)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.minute || 0)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.second || 0)}`;

    // valueNew += `${getLeadingZerosNumber(Math.floor((valueDuration.millisecond || 0) / 10))}`;

    return valueNew;
  };

  const value_ = status === 'initial' ? '00:00' : valueFormat(value);

  const iconProps = {
    size,

    ...IconProps
  };

  const iconButtonProps = {
    size,
    loading,
    disabled,

    ...IconButtonProps
  };

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={1}

      direction='row'

      align='center'

      Component={Component}

      className={classNames([
        staticClassName('AudioRecorder', theme) && [
          `amaui-AudioRecorder-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {status !== 'initial' && (
        <Fade
          in

          add
        >
          <Line
            gap={1}

            direction='row'

            align='center'
          >
            {status === 'running' && (
              <span
                className={classNames([
                  classes.recordDot,
                  classes[`recordDot_size_${size}`]
                ])}
              />
            )}

            {/* Time */}
            {is('function', renderTime) ? renderTime(value_) : (
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                className={classNames([
                  staticClassName('AudioRecorder', theme) && [
                    'amaui-AudioRecorder-time'
                  ],

                  classes.time
                ])}
              >
                {value_}
              </Type>
            )}
          </Line>
        </Fade>
      )}

      {status === 'initial' && (
        <Fade
          in

          add
        >
          <span>
            {is('function', renderMain) ? renderMain({ onStart, supported } as any) : <>
              {/* Start */}
              <Tooltip
                label='Voice record'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onStart}

                  disabled={!supported}

                  {...iconButtonProps}
                >
                  <Icon_
                    {...iconProps}
                  />
                </IconButton>
              </Tooltip>
            </>}
          </span>
        </Fade>
      )}

      {status === 'running' && (
        <Fade
          in

          add
        >
          <span>
            {/* Cancel */}
            <Tooltip
              label='Cancel'

              {...TooltipProps}
            >
              <IconButton
                onClick={onStop}

                {...iconButtonProps}
              >
                <IconStop
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>

            {/* Pause */}
            {pause && (
              <Tooltip
                label='Pause'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onPause}

                  {...iconButtonProps}
                >
                  <IconPause
                    {...iconProps}
                  />
                </IconButton>
              </Tooltip>
            )}

            {/* Confirm */}
            <Tooltip
              label='Confirm'

              {...TooltipProps}
            >
              <IconButton
                onClick={onConfirm}

                {...iconButtonProps}
              >
                <IconConfirm
                  {...iconProps}
                />
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
            {/* Cancel */}
            <Tooltip
              label='Cancel'

              {...TooltipProps}
            >
              <IconButton
                onClick={onStop}

                {...iconButtonProps}
              >
                <IconStop
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>

            {/* Resume */}
            <Tooltip
              label='Resume'

              {...TooltipProps}
            >
              <IconButton
                onClick={onResume}

                {...iconButtonProps}
              >
                <IconStart
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>

            {/* Confirm */}
            <Tooltip
              label='Confirm'

              {...TooltipProps}
            >
              <IconButton
                onClick={onConfirm}

                {...iconButtonProps}
              >
                <IconConfirm
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>
          </span>
        </Fade>
      )}
    </Line>
  );
});

AudioRecorder.displayName = 'amaui-AudioRecorder';

export default AudioRecorder;
