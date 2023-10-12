import React from 'react';

import { clamp, getLeadingZerosNumber, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { duration as durationMethod } from '@amaui/date';

import Line from '../Line';
import Surface from '../Surface';
import Slider from '../Slider';
import IconButton from '../IconButton';
import Expand from '../Expand';
import Type from '../Type';
import Icon from '../Icon';

import { IBaseElement, staticClassName, TColor, TElementReference, TPropsAny, TSize, TTonal } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    overflow: 'hidden'
  },

  wrapper: {

  },

  wrapperFullScreen: {
    height: '100%'
  },

  video: {
    background: 'black',
    flex: '1 1 auto',
    cursor: 'pointer',
    userSelect: 'none'
  },

  size_small: {
    borderRadius: theme.methods.shape.radius.value(0.5)
  },

  size_regular: {
    borderRadius: theme.methods.shape.radius.value(1.5)
  },

  size_large: {
    borderRadius: theme.methods.shape.radius.value(2)
  },

  fullScreen: {
    borderRadius: 0
  },

  controls_size_small: {
    padding: '6px 8px 4px'
  },

  controls_size_regular: {
    padding: '12px 12px 8px'
  },

  controls_size_large: {
    padding: '18px 16px 12px'
  },

  wrapperTimeline: {
    padding: '0 12px'
  },

  timeline: {
    height: 20,
    width: '100%'
  },

  volume: {
    flex: '1 1 auto',
    width: '100vw',
    maxWidth: 54,
    height: 24,

    '&.amaui-Slider-root': {
      borderRadius: 0,

      '& .amaui-Slider-rail': {
        borderRadius: 0
      },

      '& .amaui-Slider-track': {
        borderRadius: 0
      }
    }
  },

  volumeExpand: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },

  time: {
    cursor: 'default',
    userSelect: 'none'
  },

  placeholder: {

  }
}), { name: 'amaui-VideoPlayer' });

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

const IconMaterialForwardMediaRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardMedia'

      short_name='ForwardMedia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120 616q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480 256h6l-34-34q-11-11-11-27.5t11-28.5q12-12 28.5-12.5T509 165l103 103q11 11 11 28t-11 28L509 427q-12 12-28.5 11.5T452 426q-11-12-11-28.5t11-27.5l34-34h-6q-117 0-198.5 81.5T200 616q0 117 81.5 198.5T480 896q106 0 185-69t93-174q2-16 14-26.5t28-10.5q16 0 28 10t10 25q-14 139-116 232t-242 93Z" />
    </Icon>
  );
});

const IconMaterialVolumeDownAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltRounded'
      short_name='VolumeDownAlt'

      {...props}
    >
      <path d="M6 15Q5.575 15 5.287 14.712Q5 14.425 5 14V10Q5 9.575 5.287 9.287Q5.575 9 6 9H9L12.3 5.7Q12.775 5.225 13.387 5.487Q14 5.75 14 6.425V17.575Q14 18.25 13.387 18.512Q12.775 18.775 12.3 18.3L9 15ZM16 16V7.95Q17.125 8.475 17.812 9.575Q18.5 10.675 18.5 12Q18.5 13.325 17.812 14.4Q17.125 15.475 16 16ZM12 8.85 9.85 11H7V13H9.85L12 15.15ZM9.5 12Z" />
    </Icon>
  );
});

const IconMaterialVolumeOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeOffRounded'
      short_name='VolumeOff'

      {...props}
    >
      <path d="M19.1 21.9 16.775 19.575Q16.425 19.775 16.075 19.962Q15.725 20.15 15.35 20.3Q14.85 20.5 14.425 20.175Q14 19.85 14 19.275Q14 19 14.163 18.788Q14.325 18.575 14.575 18.475Q14.775 18.4 14.963 18.312Q15.15 18.225 15.325 18.125L12 14.8V17.575Q12 18.25 11.387 18.512Q10.775 18.775 10.3 18.3L7 15H4Q3.575 15 3.288 14.712Q3 14.425 3 14V10Q3 9.575 3.288 9.287Q3.575 9 4 9H6.2L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM15.35 3.65Q17.9 4.675 19.45 6.925Q21 9.175 21 11.975Q21 13.3 20.638 14.525Q20.275 15.75 19.6 16.8L18.15 15.35Q18.575 14.575 18.788 13.725Q19 12.875 19 11.975Q19 9.775 17.788 8.025Q16.575 6.275 14.575 5.475Q14.3 5.375 14.15 5.15Q14 4.925 14 4.65Q14 4.1 14.425 3.775Q14.85 3.45 15.35 3.65ZM9.1 11.9ZM16.25 13.45 14 11.2V7.95Q15.175 8.5 15.838 9.6Q16.5 10.7 16.5 12Q16.5 12.375 16.438 12.738Q16.375 13.1 16.25 13.45ZM12 9.2 9.4 6.6 10.3 5.7Q10.775 5.225 11.387 5.487Q12 5.75 12 6.425ZM10 15.15V12.8L8.2 11H5V13H7.85Z" />
    </Icon>
  );
});

const IconMaterialFullscreenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenRounded'
      short_name='Fullscreen'

      {...props}
    >
      <path d="M6 19Q5.575 19 5.287 18.712Q5 18.425 5 18V15Q5 14.575 5.287 14.287Q5.575 14 6 14Q6.425 14 6.713 14.287Q7 14.575 7 15V17H9Q9.425 17 9.713 17.288Q10 17.575 10 18Q10 18.425 9.713 18.712Q9.425 19 9 19ZM6 10Q5.575 10 5.287 9.712Q5 9.425 5 9V6Q5 5.575 5.287 5.287Q5.575 5 6 5H9Q9.425 5 9.713 5.287Q10 5.575 10 6Q10 6.425 9.713 6.713Q9.425 7 9 7H7V9Q7 9.425 6.713 9.712Q6.425 10 6 10ZM15 19Q14.575 19 14.288 18.712Q14 18.425 14 18Q14 17.575 14.288 17.288Q14.575 17 15 17H17V15Q17 14.575 17.288 14.287Q17.575 14 18 14Q18.425 14 18.712 14.287Q19 14.575 19 15V18Q19 18.425 18.712 18.712Q18.425 19 18 19ZM18 10Q17.575 10 17.288 9.712Q17 9.425 17 9V7H15Q14.575 7 14.288 6.713Q14 6.425 14 6Q14 5.575 14.288 5.287Q14.575 5 15 5H18Q18.425 5 18.712 5.287Q19 5.575 19 6V9Q19 9.425 18.712 9.712Q18.425 10 18 10Z" />
    </Icon>
  );
});

const IconMaterialFullscreenExitRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitRounded'
      short_name='FullscreenExit'

      {...props}
    >
      <path d="M9 19Q8.575 19 8.288 18.712Q8 18.425 8 18V16H6Q5.575 16 5.287 15.712Q5 15.425 5 15Q5 14.575 5.287 14.287Q5.575 14 6 14H9Q9.425 14 9.713 14.287Q10 14.575 10 15V18Q10 18.425 9.713 18.712Q9.425 19 9 19ZM6 10Q5.575 10 5.287 9.712Q5 9.425 5 9Q5 8.575 5.287 8.287Q5.575 8 6 8H8V6Q8 5.575 8.288 5.287Q8.575 5 9 5Q9.425 5 9.713 5.287Q10 5.575 10 6V9Q10 9.425 9.713 9.712Q9.425 10 9 10ZM15 19Q14.575 19 14.288 18.712Q14 18.425 14 18V15Q14 14.575 14.288 14.287Q14.575 14 15 14H18Q18.425 14 18.712 14.287Q19 14.575 19 15Q19 15.425 18.712 15.712Q18.425 16 18 16H16V18Q16 18.425 15.713 18.712Q15.425 19 15 19ZM15 10Q14.575 10 14.288 9.712Q14 9.425 14 9V6Q14 5.575 14.288 5.287Q14.575 5 15 5Q15.425 5 15.713 5.287Q16 5.575 16 6V8H18Q18.425 8 18.712 8.287Q19 8.575 19 9Q19 9.425 18.712 9.712Q18.425 10 18 10Z" />
    </Icon>
  );
});

export interface IVideoPlayer extends IBaseElement {
  name?: string;
  src?: string;
  mime?: string;
  duration?: number;

  tonal?: TTonal;
  color?: TColor;
  size?: TSize;

  start?: any;
  end?: any;
  startControls?: any;
  endControls?: any;

  forward?: boolean;
  backward?: boolean;
  fullScreen?: boolean;

  startMediaSessionOnPlay?: boolean;

  disabled?: boolean;

  IconPlay?: TElementReference;
  IconPause?: TElementReference;
  IconForward?: TElementReference;
  IconBackward?: TElementReference;
  IconVolume?: TElementReference;
  IconVolumeMuted?: TElementReference;

  PlayButtonProps?: TPropsAny;
  ForwardButtonProps?: TPropsAny;
  BackwardButtonProps?: TPropsAny;
  VolumeButtonProps?: TPropsAny;
  IconButtonProps?: TPropsAny;
  TypeProps?: TPropsAny;
  TimelineProps?: TPropsAny;
  VolumeProps?: TPropsAny;
  SliderProps?: TPropsAny;
}

const VideoPlayer = React.forwardRef((props_: IVideoPlayer, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiVideoPlayer?.props?.default, ...props_ }), [props_]);

  const {
    name,

    src,

    mime,

    duration: duration_,

    tonal = true,
    color = 'default',
    size = 'regular',

    start,
    end,
    startControls,
    endControls,

    forward,
    backward,
    fullScreen: fullScreen_ = true,

    startMediaSessionOnPlay,

    disabled,

    IconPlay = IconMaterialPlayArrowRounded,
    IconPause = IconMaterialPauseRounded,
    IconForward = IconMaterialForwardMediaRounded,
    IconBackward = IconMaterialForwardMediaRounded,
    IconVolume = IconMaterialVolumeDownAltRounded,
    IconVolumeMuted = IconMaterialVolumeOffRounded,
    IconFullScreen = IconMaterialFullscreenRounded,
    IconFullScreenExit = IconMaterialFullscreenExitRounded,

    PlayButtonProps,
    ForwardButtonProps,
    BackwardButtonProps,
    VolumeButtonProps,
    IconButtonProps,
    TypeProps,
    TimelineProps,
    VolumeProps,
    SliderProps,
    FullScreenButtonProps,

    className,

    Component,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const [loaded, setLoaded] = React.useState(false);
  const [duration, setDuration] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0);
  const [play, setPlay] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const [volumeVisible, setVolumeVisible] = React.useState(false);
  const [updating, setUpdating] = React.useState<any>(false);
  const [fullScreen, setFullScreen] = React.useState(false);

  const refs = {
    root: React.useRef<any>(),
    video: React.useRef<HTMLVideoElement>(),
    controls: React.useRef<any>(),
    duration: React.useRef<any>(),
    time: React.useRef<any>(),
    play: React.useRef<any>(),
    updating: React.useRef<any>(),
    onPlay: React.useRef<any>(),
    onPause: React.useRef<any>(),
    onTimeChange: React.useRef<any>(),
    onBackward: React.useRef<any>(),
    onForward: React.useRef<any>(),
    onStop: React.useRef<any>(),
    startMediaSession: React.useRef<any>(),
    updateMediaSession: React.useRef<any>(),
    startMediaSessionOnPlay: React.useRef<any>()
  };

  refs.duration.current = duration;

  refs.time.current = time;

  refs.play.current = play;

  refs.updating.current = updating;

  refs.startMediaSessionOnPlay.current = startMediaSessionOnPlay;

  const startMediaSession = React.useCallback(() => {
    if ('mediaSession' in navigator) {
      window.navigator.mediaSession.metadata = new MediaMetadata({
        title: name
      });

      const methods = [
        { name: 'play', method: refs.onPlay.current },
        { name: 'pause', method: refs.onPause.current },
        { name: 'previoustrack', method: () => { } },
        { name: 'nexttrack', method: () => { } },
        { name: 'seekbackward', method: refs.onBackward.current },
        { name: 'seekforward', method: refs.onForward.current },
        { name: 'seekto', method: (details: MediaSessionActionDetails) => refs.onTimeChange.current(details.seekTime) },
        { name: 'stop', method: refs.onStop.current }
      ];

      for (const method of methods) {
        try {
          window.navigator.mediaSession.setActionHandler(method.name as any, method.method);
        }
        catch (error) {
          console.log(`MediaSession action ${method.name}, is not supported`);
        }
      }
    }
  }, [name]);

  const updateMediaSession = React.useCallback(() => {
    if ('mediaSession' in navigator) {
      window.navigator.mediaSession.setPositionState({
        duration: refs.duration.current,
        playbackRate: 1,
        position: clamp(refs.time.current, 0, refs.duration.current)
      });
    }
  }, [name]);

  refs.startMediaSession.current = startMediaSession;

  refs.updateMediaSession.current = updateMediaSession;

  const onVolumeChange = React.useCallback((value: number) => {
    setVolume(value);

    refs.video.current!.volume = value;
  }, []);

  const onTimeChange = React.useCallback((value: number) => {
    setTime(value);

    refs.video.current!.currentTime = value;

    // update MediaSession
    refs.updateMediaSession.current();
  }, []);

  const onForward = React.useCallback((details?: MediaSessionActionDetails) => {
    const part = refs.duration.current * 0.1;
    const toMove = clamp(details?.seekOffset || part, 1, refs.duration.current);

    const value = clamp(refs.time.current + toMove, 0, refs.duration.current);

    refs.onTimeChange.current(value);
  }, []);

  const onBackward = React.useCallback((details?: MediaSessionActionDetails) => {
    const part = refs.duration.current * 0.1;
    const toMove = clamp(details?.seekOffset || part, 1, refs.duration.current);

    const value = clamp(refs.time.current - toMove, 0, refs.duration.current);

    refs.onTimeChange.current(value);
  }, []);

  const onPlay = React.useCallback(() => {
    try {
      setPlay(true);

      refs.video.current!.play();

      // start MediaSession
      if (refs.startMediaSessionOnPlay.current) refs.startMediaSession.current();

      // update MediaSession
      refs.updateMediaSession.current();
    }
    catch (error) {
      console.error(`videoPlayer`, error);
    }
  }, []);

  const onPause = React.useCallback(() => {
    setPlay(false);

    refs.video.current!.pause();
  }, []);

  const onStop = React.useCallback(() => {
    setPlay(false);

    refs.video.current!.pause();

    refs.video.current!.currentTime = 0;
  }, []);

  const onMute = React.useCallback(() => {
    setMuted(true);

    refs.video.current!.muted = true;
  }, []);

  const onUnmute = React.useCallback(() => {
    setMuted(false);

    refs.video.current!.muted = false;
  }, []);

  refs.onPlay.current = onPlay;

  refs.onPause.current = onPause;

  refs.onTimeChange.current = onTimeChange;

  refs.onForward.current = onForward;

  refs.onBackward.current = onBackward;

  refs.onStop.current = onStop;

  const init = React.useCallback(() => {
    setLoaded(false);

    const video = refs.video.current as HTMLVideoElement;

    video.addEventListener('loadedmetadata', () => {
      const value = video!.duration;

      if (!is('number', duration_) && is('number', value)) {
        setDuration(value);

        setLoaded(true);
      }
    });

    video.addEventListener('ended', () => {
      refs.onStop.current();
    });

    video.addEventListener('timeupdate', () => {
      const value = video.currentTime;

      if (!refs.updating.current && refs.time.current !== value) {
        setTime(value);

        // update MediaSession
        refs.updateMediaSession.current();
      }
    });

    // start MediaSession
    startMediaSession();

    if (is('number', duration_)) {
      setDuration(duration_);

      setLoaded(true);
    }

    const rootDocument = refs.root.current?.ownerDocument || window.document;

    const method = () => {
      if (rootDocument.fullscreenElement) {
        setFullScreen(true);
      }
      else {
        setFullScreen(false);
      }
    };

    rootDocument.addEventListener('fullscreenchange', method);

    video.src = src;

    // video.load();

    return () => {
      rootDocument.removeEventListener('fullscreenchange', method);
    };
  }, [src, duration_, startMediaSession]);

  const onMouseEnter = React.useCallback(() => {
    setVolumeVisible(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setVolumeVisible(false);
  }, []);

  const onUpdating = React.useCallback(() => {
    setUpdating(refs.play.current ? 'play' : true);

    if (refs.play.current) onPause();
  }, [onPause]);

  const onUpdatingDone = React.useCallback(() => {
    const updatingPrevious = refs.updating.current;

    setUpdating(false);

    if (updatingPrevious === 'play') onPlay();
  }, [onPlay]);

  const onFullScreen = React.useCallback(async () => {
    const root = refs.root.current;

    try {
      if (root.requestFullscreen) await root.requestFullscreen();
      else if ((root as any).webkitRequestFullscreen) await (root as any).webkitRequestFullscreen();
      else if ((root as any).msRequestFullscreen) await (root as any).msRequestFullscreen();
    }
    catch (error) { }
  }, []);

  const onFullScreenExit = React.useCallback(async () => {
    const rootDocument = refs.root.current?.ownerDocument || window.document;

    try {
      if (rootDocument.exitFullscreen) await rootDocument.exitFullscreen();
      else if ((rootDocument as any).webkitExitFullscreen) await (rootDocument as any).webkitExitFullscreen();
      else if ((rootDocument as any).msExitFullscreen) await (rootDocument as any).msExitFullscreen();
    }
    catch (error) { }
  }, []);

  const onVideoClick = React.useCallback((event: any) => {
    if (event.detail === 1) {
      !play ? onPlay() : onPause();
    }

    if (event.detail === 2) {
      !fullScreen ? onFullScreen() : onFullScreenExit();
    }
  }, [play, fullScreen, onPlay, onPause, onFullScreen, onFullScreenExit]);

  React.useEffect(() => {
    // init
    init();
  }, [src]);

  const durationToValue = (item: any) => {
    let value = '';

    const separator = ':';

    if (item.hour) value += `${getLeadingZerosNumber(item.hour, { leadingZeros: 0 })}`;

    if (item.minute) {
      if (value) value += separator;

      value += `${getLeadingZerosNumber(item.minute, { leadingZeros: 0 })}`;
    }
    else {
      if (value) value += separator;

      value += '0';
    }

    if (item.second) {
      if (value) value += separator;

      value += `${getLeadingZerosNumber(item.second, { leadingZeros: 1 })}`;
    }
    else {
      if (value) value += separator;

      value += '00';
    }

    return value;
  };

  const typeProps: any = {
    version: size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3',

    ...TypeProps
  };

  const iconButtonProps: any = {
    version: 'text',
    size,
    disabled,

    ...IconButtonProps
  };

  const sliderProps: any = {
    color,
    size,
    disabled,

    ...SliderProps
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

      direction='column'

      align='unset'

      justify='unset'

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('VideoPlayer', theme) && [
          `amaui-VideoPlayer-root`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        fullScreen && classes.fullScreen
      ])}

      {...other}
    >
      <Surface
        gap={0}

        tonal={tonal}

        color={color}

        direction='column'

        align='unset'

        justify='unset'

        fullWidth

        Component={Line}

        className={classNames([
          classes.wrapper,
          fullScreen && classes.wrapperFullScreen
        ])}
      >
        {start}

        <video
          ref={refs.video as any}

          onClick={onVideoClick}

          controls={false}

          className={classNames([
            classes.video,
            fullScreen && classes.videoFullScreen
          ])}
        >
          <source src={src} type={mime} />
        </video>

        <Line
          gap={0}

          fullWidth

          className={classNames([
            classes[`controls_size_${size}`]
          ])}
        >
          <Line
            fullWidth

            className={classes.wrapperTimeline}
          >
            <Slider
              value={time}

              onChange={onTimeChange}

              min={0}

              max={10}

              onMouseDown={onUpdating}

              onTouchStart={onUpdating}

              onMouseUp={onUpdatingDone}

              onToucheEnd={onUpdatingDone}

              {...sliderProps}

              {...TimelineProps}

              className={classNames([
                sliderProps?.className,
                TimelineProps?.className,
                classes.timeline
              ])}
            />
          </Line>

          <Line
            ref={refs.controls}

            direction='row'

            align='center'

            fullWidth

            className={classNames([
              classes.controls
            ])}
          >
            {startControls}

            <Line
              gap={1}

              direction='row'

              align='center'

              justify='space-between'

              fullWidth
            >
              <Line
                gap={1.5}

                direction='row'

                align='center'
              >
                <Line
                  gap={0}

                  direction='row'

                  align='center'
                >
                  <IconButton
                    onClick={play ? onPause : onPlay}

                    {...iconButtonProps}

                    {...PlayButtonProps}
                  >
                    {play ? <IconPause /> : <IconPlay />}
                  </IconButton>

                  {backward && (
                    <IconButton
                      onClick={onBackward}

                      {...iconButtonProps}

                      {...BackwardButtonProps}
                    >
                      <IconBackward
                        style={{
                          transform: 'rotateY(180deg)'
                        }}
                      />
                    </IconButton>
                  )}

                  {forward && (
                    <IconButton
                      onClick={onForward}

                      {...iconButtonProps}

                      {...ForwardButtonProps}
                    >
                      <IconForward

                      />
                    </IconButton>
                  )}

                  <IconButton
                    onClick={muted ? onUnmute : onMute}

                    onMouseEnter={onMouseEnter}

                    onMouseLeave={onMouseLeave}

                    {...iconButtonProps}

                    {...VolumeButtonProps}
                  >
                    {!muted ? <IconVolume /> : <IconVolumeMuted />}
                  </IconButton>

                  <Expand
                    in={volumeVisible}

                    parent={refs.controls.current}

                    orientation='horizontal'

                    onMouseEnter={onMouseEnter}

                    onMouseLeave={onMouseLeave}

                    className={classes.volumeExpand}
                  >
                    <Slider
                      value={volume}

                      onChange={onVolumeChange}

                      min={0}

                      max={1}

                      orientation='horizontal'

                      onMouseEnter={onMouseEnter}

                      onMouseLeave={onMouseLeave}

                      {...sliderProps}

                      size={['small', 'regular'].includes(size) ? 'small' : 'regular'}

                      {...VolumeProps}

                      className={classNames([
                        sliderProps?.className,
                        VolumeProps?.className,
                        classes.volume
                      ])}
                    />
                  </Expand>
                </Line>

                <Line
                  gap={0.5}

                  direction='row'

                  align='center'

                  className={classNames([
                    'amaui-Audio-time',
                    classes.time
                  ])}
                >
                  <Type
                    {...typeProps}
                  >
                    {durationToValue(durationMethod(time * 1000, false, true))}
                  </Type>

                  <Type
                    {...typeProps}
                  >
                    /
                  </Type>

                  <Type
                    {...typeProps}
                  >
                    {durationToValue(durationMethod(duration * 1000, false, true))}
                  </Type>
                </Line>
              </Line>

              <Line
                gap={0.5}

                direction='row'

                align='center'
              >
                {fullScreen_ && (
                  <IconButton
                    onClick={!fullScreen ? onFullScreen : onFullScreenExit}

                    {...iconButtonProps}

                    {...FullScreenButtonProps}
                  >
                    {fullScreen ? <IconFullScreenExit /> : <IconFullScreen />}
                  </IconButton>
                )}
              </Line>
            </Line>

            {endControls}
          </Line>
        </Line>

        {end}
      </Surface>
    </Line>
  );
});

VideoPlayer.displayName = 'amaui-VideoPlayer';

export default VideoPlayer;
