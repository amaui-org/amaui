import React from 'react';

import { clamp, getLeadingZerosNumber, is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { duration as durationMethod } from '@amaui/date';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import SliderElement from '../Slider';
import IconButtonElement from '../IconButton';
import ExpandElement from '../Expand';
import TypeElement from '../Type';
import IconElement from '../Icon';
import MenuElement from '../Menu';
import ListItemElement from '../ListItem';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, IElementReference, IPropsAny, ISize, ITonal } from '../types';

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

const IconMaterialForwardMediaRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ForwardMedia'

      short_name='ForwardMedia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120 616q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480 256h6l-34-34q-11-11-11-27.5t11-28.5q12-12 28.5-12.5T509 165l103 103q11 11 11 28t-11 28L509 427q-12 12-28.5 11.5T452 426q-11-12-11-28.5t11-27.5l34-34h-6q-117 0-198.5 81.5T200 616q0 117 81.5 198.5T480 896q106 0 185-69t93-174q2-16 14-26.5t28-10.5q16 0 28 10t10 25q-14 139-116 232t-242 93Z" />
    </IconElement>
  );
});

const IconMaterialVolumeDownAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='VolumeDownAltRounded'
      short_name='VolumeDownAlt'

      {...props}
    >
      <path d="M6 15Q5.575 15 5.287 14.712Q5 14.425 5 14V10Q5 9.575 5.287 9.287Q5.575 9 6 9H9L12.3 5.7Q12.775 5.225 13.387 5.487Q14 5.75 14 6.425V17.575Q14 18.25 13.387 18.512Q12.775 18.775 12.3 18.3L9 15ZM16 16V7.95Q17.125 8.475 17.812 9.575Q18.5 10.675 18.5 12Q18.5 13.325 17.812 14.4Q17.125 15.475 16 16ZM12 8.85 9.85 11H7V13H9.85L12 15.15ZM9.5 12Z" />
    </IconElement>
  );
});

const IconMaterialVolumeOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='VolumeOffRounded'
      short_name='VolumeOff'

      {...props}
    >
      <path d="M19.1 21.9 16.775 19.575Q16.425 19.775 16.075 19.962Q15.725 20.15 15.35 20.3Q14.85 20.5 14.425 20.175Q14 19.85 14 19.275Q14 19 14.163 18.788Q14.325 18.575 14.575 18.475Q14.775 18.4 14.963 18.312Q15.15 18.225 15.325 18.125L12 14.8V17.575Q12 18.25 11.387 18.512Q10.775 18.775 10.3 18.3L7 15H4Q3.575 15 3.288 14.712Q3 14.425 3 14V10Q3 9.575 3.288 9.287Q3.575 9 4 9H6.2L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM15.35 3.65Q17.9 4.675 19.45 6.925Q21 9.175 21 11.975Q21 13.3 20.638 14.525Q20.275 15.75 19.6 16.8L18.15 15.35Q18.575 14.575 18.788 13.725Q19 12.875 19 11.975Q19 9.775 17.788 8.025Q16.575 6.275 14.575 5.475Q14.3 5.375 14.15 5.15Q14 4.925 14 4.65Q14 4.1 14.425 3.775Q14.85 3.45 15.35 3.65ZM9.1 11.9ZM16.25 13.45 14 11.2V7.95Q15.175 8.5 15.838 9.6Q16.5 10.7 16.5 12Q16.5 12.375 16.438 12.738Q16.375 13.1 16.25 13.45ZM12 9.2 9.4 6.6 10.3 5.7Q10.775 5.225 11.387 5.487Q12 5.75 12 6.425ZM10 15.15V12.8L8.2 11H5V13H7.85Z" />
    </IconElement>
  );
});

const IconMaterialSettingsRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='SettingsRounded'

      short_name='Settings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.612-.3-.288-.175-.563-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7.075-.375.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L2.65 9.9q-.3-.225-.375-.6-.075-.375.125-.7l1.85-3.225q.175-.35.537-.438.363-.087.713.038l2.175.9q.275-.2.575-.375.3-.175.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3.287.175.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7-.075.375-.375.6l-1.875 1.425q.025.175.025.337v.675q0 .163-.05.338l1.875 1.425q.3.225.375.6.075.375-.125.7l-1.85 3.2q-.2.325-.562.438-.363.112-.713-.013l-2.125-.9q-.275.2-.575.375-.3.175-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588.662-.387 1.212-.937l2.475 1.025.975-1.7-2.15-1.625q.125-.35.175-.738.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625-.975-1.7-2.475 1.05q-.55-.575-1.212-.963-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587-.663.388-1.213.938L5.55 7.15l-.975 1.7 2.15 1.6q-.125.375-.175.75-.05.375-.05.8 0 .4.05.775t.175.75l-2.15 1.625.975 1.7 2.475-1.05q.55.575 1.213.962.662.388 1.437.588Z" />
    </IconElement>
  );
});

const IconMaterialTuneRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='TuneRounded'

      short_name='Tune'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-.425 0-.712-.288Q3 18.425 3 18t.288-.712Q3.575 17 4 17h4q.425 0 .713.288Q9 17.575 9 18t-.287.712Q8.425 19 8 19ZM4 7q-.425 0-.712-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5h8q.425 0 .713.287Q13 5.575 13 6t-.287.713Q12.425 7 12 7Zm8 14q-.425 0-.712-.288Q11 20.425 11 20v-4q0-.425.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16v1h7q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19h-7v1q0 .425-.287.712Q12.425 21 12 21Zm-4-6q-.425 0-.713-.288Q7 14.425 7 14v-1H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h3v-1q0-.425.287-.713Q7.575 9 8 9t.713.287Q9 9.575 9 10v4q0 .425-.287.712Q8.425 15 8 15Zm4-2q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11h8q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm4-4q-.425 0-.712-.288Q15 8.425 15 8V4q0-.425.288-.713Q15.575 3 16 3t.712.287Q17 3.575 17 4v1h3q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7h-3v1q0 .425-.288.712Q16.425 9 16 9Z" />
    </IconElement>
  );
});

const IconMaterialSlowMotionVideoRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='SlowMotionVideoRounded'

      short_name='SlowMotionVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.025 15.5q-.5.325-1.025.05-.525-.275-.525-.875v-5.35q0-.6.525-.875t1.025.05l4.15 2.65q.225.15.337.375.113.225.113.475 0 .25-.113.475-.112.225-.337.375Zm-1.2 6.275q-.875-.2-1.687-.525-.813-.325-1.588-.825-.4-.25-.437-.7-.038-.45.312-.8.25-.25.637-.287.388-.038.713.162.55.35 1.138.587.587.238 1.212.388.35.1.588.388.237.287.237.637 0 .5-.337.787-.338.288-.788.188ZM5 17.5q-.35.35-.787.312-.438-.037-.688-.412-.5-.725-.837-1.537-.338-.813-.538-1.713-.125-.45.162-.8Q2.6 13 3.1 13q.35 0 .65.25.3.25.4.6.15.65.4 1.225.25.575.575 1.125.2.3.162.675-.037.375-.287.625ZM3.125 11q-.5 0-.8-.35-.3-.35-.2-.8.2-.875.55-1.713.35-.837.85-1.562.25-.375.688-.4Q4.65 6.15 5 6.5q.25.25.287.625.038.375-.162.675-.325.525-.575 1.112-.25.588-.4 1.238-.1.35-.387.6-.288.25-.638.25ZM14.05 21.75q-.45.1-.775-.175t-.325-.75q0-.35.238-.65.237-.3.587-.4 2.675-.7 4.4-2.837Q19.9 14.8 19.9 12t-1.725-4.975Q16.45 4.85 13.775 4.2q-.35-.1-.587-.388-.238-.287-.238-.637 0-.475.338-.763.337-.287.787-.187Q17.5 2.975 19.7 5.7t2.2 6.3q0 3.55-2.212 6.25-2.213 2.7-5.638 3.5ZM7.7 5.225q-.325.2-.687.15-.363-.05-.613-.3-.35-.35-.312-.8.037-.45.437-.7.775-.5 1.6-.825.825-.325 1.7-.525.45-.1.788.187.337.288.337.763 0 .35-.25.637-.25.288-.6.388-.625.15-1.225.412-.6.263-1.175.613Z" />
    </IconElement>
  );
});

const IconMaterialArrowBackIosRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowBackIosRounded'

      short_name='ArrowBackIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.125 21.1.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862 0 .513-.375.888t-.875.375q-.5 0-.875-.375Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    minWidth: '254px'
  },

  wrapper: {
    position: 'relative',
    borderRadius: 'inherit'
  },

  audio: {

  },

  size_small: {
    borderRadius: theme.methods.shape.radius.value(0.5, 'px')
  },

  size_regular: {
    borderRadius: theme.methods.shape.radius.value(1.5, 'px')
  },

  size_large: {
    borderRadius: theme.methods.shape.radius.value(2, 'px')
  },

  controls: {
    position: 'relative',
    borderRadius: 'inherit'
  },

  controls_size_small: {
    padding: `${theme.methods.space.value(0.75, 'px')} ${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(0.5, 'px')}`
  },

  controls_size_regular: {
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1, 'px')}`
  },

  controls_size_large: {
    padding: `${theme.methods.space.value(2.25, 'px')} ${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(1.5, 'px')}`
  },

  wrapperTimeline: {
    padding: `0 ${theme.methods.space.value(1.5, 'px')}`
  },

  timeline: {
    '&.amaui-Slider-root': {
      height: '20px !important',
      width: '100% !important',
      margin: 'unset !important',
      maxWidth: 'unset !important'
    }
  },

  volume: {
    flex: '1 1 auto',

    '&.amaui-Slider-root': {
      height: '24px !important',
      width: '100vw !important',
      maxWidth: '54px !important',
      margin: 'unset !important',
      borderRadius: '0px',

      '& .amaui-Slider-rail': {
        borderRadius: '0px'
      },

      '& .amaui-Slider-track': {
        borderRadius: '0px'
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

  endControls: {
    position: 'relative'
  },

  placeholder: {

  },

  bottomControls: {
    scrollbarWidth: 'none',
    overflow: 'auto hidden',

    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
}), { name: 'amaui-AudioPlayer' });

export interface IAudioPlayer extends ILine {
  name?: string;
  src?: string;
  mime?: string;
  meta?: any;
  versions?: any;
  duration?: number;

  tonal?: ITonal;
  color?: IColor;
  size?: ISize;

  start?: any;
  end?: any;
  startControls?: any;
  endControls?: any;
  startButtons?: any;
  endButtons?: any;
  startEnd?: any;
  endEnd?: any;

  forward?: boolean;
  backward?: boolean;
  settings?: boolean;
  quality?: boolean;
  playbackSpeed?: boolean;

  startMediaSessionOnPlay?: boolean;

  disabled?: boolean;

  IconPlay?: IElementReference;
  IconPause?: IElementReference;
  IconForward?: IElementReference;
  IconBackward?: IElementReference;
  IconVolume?: IElementReference;
  IconVolumeMuted?: IElementReference;
  IconBack?: IElementReference;
  IconSettings?: IElementReference;
  IconQuality?: IElementReference;
  IconPlaybackSpeed?: IElementReference;

  PlayButtonProps?: IPropsAny;
  ForwardButtonProps?: IPropsAny;
  BackwardButtonProps?: IPropsAny;
  VolumeButtonProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  TypeProps?: IPropsAny;
  TimelineProps?: IPropsAny;
  VolumeProps?: IPropsAny;
  SliderProps?: IPropsAny;
  SettingsButtonProps?: IPropsAny;
  SettingsMenuProps?: IPropsAny;
  QualityButtonProps?: IPropsAny;
}

const AudioPlayer: React.FC<IAudioPlayer> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAudioPlayer?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Slider = React.useMemo(() => theme?.elements?.Slider || SliderElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Expand = React.useMemo(() => theme?.elements?.Expand || ExpandElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const {
    name,
    src,
    meta,
    versions,
    mime,

    duration: duration_,

    tonal = true,
    color = 'primary',
    size = 'regular',

    start,
    end,
    startControls,
    endControls,
    startButtons,
    endButtons,
    startButtonsEnd,
    endButtonsEnd,

    forward,
    backward,
    settings = true,
    quality: quality_ = true,
    playbackSpeed: playbackSpeed_ = true,

    startMediaSessionOnPlay,

    disabled,

    IconPlay = IconMaterialPlayArrowRounded,
    IconPause = IconMaterialPauseRounded,
    IconForward = IconMaterialForwardMediaRounded,
    IconBackward = IconMaterialForwardMediaRounded,
    IconVolume = IconMaterialVolumeDownAltRounded,
    IconVolumeMuted = IconMaterialVolumeOffRounded,
    IconBack = IconMaterialArrowBackIosRounded,
    IconSettings = IconMaterialSettingsRounded,
    IconQuality = IconMaterialTuneRounded,
    IconPlaybackSpeed = IconMaterialSlowMotionVideoRounded,

    PlayButtonProps,
    ForwardButtonProps,
    BackwardButtonProps,
    VolumeButtonProps,
    IconButtonProps,
    TypeProps,
    TimelineProps,
    VolumeProps,
    SliderProps,
    SettingsButtonProps,
    SettingsMenuProps,
    QualityButtonProps,

    className,

    Component,

    ...other
  } = props;

  const { classes } = useStyle();

  const [loaded, setLoaded] = React.useState(false);
  const [duration, setDuration] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0);
  const [play, setPlay] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const [volumeVisible, setVolumeVisible] = React.useState(false);
  const [updating, setUpdating] = React.useState<any>(false);
  const [quality, setQuality] = React.useState<any>();
  const [playbackSpeed, setPlaybackSpeed] = React.useState(1);
  const [openMenu, setOpenMenu] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(),
    audio: React.useRef<HTMLAudioElement>(),
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

  const durationTime = duration_ || meta?.duration;

  const onVolumeChange = React.useCallback((value: number) => {
    setVolume(value);

    refs.audio.current!.volume = value;
  }, []);

  const onTimeChange = React.useCallback((value: number) => {
    setTime(value);

    refs.audio.current!.currentTime = value;

    // update MediaSession
    refs.updateMediaSession.current();
  }, []);

  const onPlaybackSpeed = React.useCallback((value_: number) => {
    const value = clamp(value_, 0, 2);

    setPlaybackSpeed(value);

    setOpenMenu(null);

    refs.audio.current!.playbackRate = value;
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

      refs.audio.current!.play();

      // start MediaSession
      if (refs.startMediaSessionOnPlay.current) refs.startMediaSession.current();

      // update MediaSession
      refs.updateMediaSession.current();
    }
    catch (error) {
      console.error(`AudioPlayer`, error);
    }
  }, []);

  const onPause = React.useCallback(() => {
    setPlay(false);

    refs.audio.current!.pause();
  }, []);

  const onStop = React.useCallback(() => {
    setPlay(false);

    refs.audio.current!.pause();

    refs.audio.current!.currentTime = 0;
  }, []);

  const onMute = React.useCallback(() => {
    setMuted(true);

    refs.audio.current!.muted = true;
  }, []);

  const onUnmute = React.useCallback(() => {
    setMuted(false);

    refs.audio.current!.muted = false;
  }, []);

  refs.onPlay.current = onPlay;

  refs.onPause.current = onPause;

  refs.onTimeChange.current = onTimeChange;

  refs.onForward.current = onForward;

  refs.onBackward.current = onBackward;

  refs.onStop.current = onStop;

  const init = React.useCallback(() => {
    setLoaded(false);

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    refs.audio.current = rootDocument.createElement('audio');

    const audio = refs.audio.current;

    audio.addEventListener('loadedmetadata', () => {
      const value = audio!.duration;

      if (!is('number', durationTime) && is('number', value)) {
        setDuration(value);

        setLoaded(true);
      }
    });

    audio.addEventListener('ended', () => {
      refs.onStop.current();
    });

    audio.addEventListener('timeupdate', () => {
      const value = audio.currentTime;

      if (!refs.updating.current && refs.time.current !== value) {
        setTime(value);

        // update MediaSession
        refs.updateMediaSession.current();
      }
    });

    audio.addEventListener('ratechange', () => {
      const value = audio.playbackRate;

      setPlaybackSpeed(value);
    });

    // start MediaSession
    startMediaSession();

    if (is('number', durationTime)) {
      setDuration(durationTime);

      setLoaded(true);
    }

    audio.src = src;
  }, [src, durationTime, startMediaSession]);

  React.useEffect(() => {
    if (loaded) {
      let urlNew = src;

      if (quality) {
        if (quality?.meta?.resolution) urlNew += `?version=${quality?.meta?.resolution}`;
      }

      const currentTime = refs.audio.current.currentTime;

      const playing = refs.play.current;

      // pause
      if (playing) refs.onPause.current();

      refs.audio.current.src = urlNew;

      refs.audio.current.load();

      refs.audio.current.currentTime = currentTime;

      // play
      if (playing) refs.onPlay.current();
    }
  }, [quality]);

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

  const onQuality = React.useCallback((version: any) => {
    setQuality(version);

    setOpenMenu(null);
  }, []);

  const onSettingsMenuClose = React.useCallback(() => {
    setOpenMenu(null);
  }, []);

  const getSettingsMenuItems = () => {
    const itemProps: any = {
      button: true,
      startAlign: 'center',
      endAlign: 'center',
      size: 'small',
      className: 'amaui-videoPlayer-option'
    };

    const items: any = [];

    if (openMenu) {
      items.push(
        <ListItem
          key='back'

          start={(
            <IconBack
              size='very small'
            />
          )}

          primary={(
            <Type
              version='b3'
            >
              Back
            </Type>
          )}

          onClick={() => setOpenMenu(null)}

          {...itemProps}
        />
      );
    }

    if (!openMenu) {
      if (playbackSpeed_) items.push(
        <ListItem
          key='playbackSpeed'

          start={(
            <IconPlaybackSpeed
              size='small'
            />
          )}

          primary={(
            <Type
              version='b3'
            >
              Playback speed
            </Type>
          )}

          end={(
            <Type
              version='b3'

              priority='secondary'
            >
              {playbackSpeed === 1 ? 'Normal' : playbackSpeed}
            </Type>
          )}

          onClick={() => setOpenMenu('playbackSpeed')}

          {...itemProps}
        />
      );

      if (quality_) items.push(
        <ListItem
          key='quality'

          start={(
            <IconQuality
              size='small'
            />
          )}

          primary={(
            <Type
              version='b3'
            >
              Quality
            </Type>
          )}

          end={(
            <Type
              version='b3'

              priority='secondary'
            >
              {!quality ? 'Original' : `${quality?.meta?.resolution}p`}
            </Type>
          )}

          onClick={() => setOpenMenu('quality')}

          {...itemProps}
        />
      );
    }
    else if (openMenu === 'quality') {
      items.push(
        <ListItem
          key='original'

          primary={(
            <Type
              version='b3'
            >
              Original
            </Type>
          )}

          onClick={() => quality ? onQuality(null) : undefined}

          selected={!quality}

          {...itemProps}
        />
      );

      // versions?.forEach((version: any, index: number) => {
      //   const isSelected = quality?.id === version?.id;

      //   items.push(
      //     <ListItem
      //       key={index}

      //       primary={(
      //         <Type
      //           version='b3'
      //         >
      //           {version?.meta?.resolution}p
      //         </Type>
      //       )}

      //       onClick={() => !isSelected ? onQuality(version) : undefined}

      //       selected={isSelected}

      //       {...itemProps}
      //     />
      //   );
      // });
    }
    else if (openMenu === 'playbackSpeed') {
      const options = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

      options.forEach(option => {
        items.push(
          <ListItem
            key={option}

            primary={(
              <Type
                version='b3'
              >
                {option === 1 ? 'Normal' : option}
              </Type>
            )}

            onClick={() => onPlaybackSpeed(option)}

            selected={playbackSpeed === option}

            {...itemProps}
          />
        );
      });
    }

    return items;
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
        staticClassName('AudioPlayer', theme) && [
          'amaui-AudioPlayer-root',
          `amaui-AudioPlayer-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    >
      <Line
        gap={0}

        direction='column'

        align='unset'

        justify='unset'

        fullWidth

        className={classNames([
          classes.wrapper
        ])}
      >
        {start}

        <Surface
          ref={refs.controls}

          gap={0}

          fullWidth

          tonal={tonal}

          color={color}

          Component={Line}

          className={classNames([
            classes.controls,
            classes[`controls_size_${size}`]
          ])}
        >
          {startControls}

          <Line
            fullWidth

            className={classes.wrapperTimeline}
          >
            <Slider
              value={time}

              onChange={onTimeChange}

              min={0}

              max={duration}

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
            direction='row'

            align='center'

            fullWidth

            onMouseLeave={onMouseLeave}

            className={classes.bottomControls}
          >
            {startButtons}

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

                    {...iconButtonProps}

                    {...VolumeButtonProps}
                  >
                    {!muted ? <IconVolume /> : <IconVolumeMuted />}
                  </IconButton>

                  <Expand
                    in={volumeVisible}

                    parent={refs.controls.current}

                    orientation='horizontal'

                    className={classes.volumeExpand}
                  >
                    <Slider
                      value={volume}

                      onChange={onVolumeChange}

                      min={0}

                      max={1}

                      orientation='horizontal'

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

                className={classes.endControls}
              >
                {startButtonsEnd}

                {settings && (
                  <Menu
                    menuItems={getSettingsMenuItems()}

                    position='top'

                    switch={false}

                    portal

                    onClose={onSettingsMenuClose}

                    className='amaui-videoPlayer'

                    includeParentQueries={['.amaui-videoPlayer']}

                    {...SettingsMenuProps}

                    ListProps={{
                      className: classNames([
                        SettingsMenuProps?.ListProps?.className,
                        classes.menuSettings
                      ]),

                      size: 'small'
                    }}
                  >
                    <IconButton
                      {...iconButtonProps}

                      {...SettingsButtonProps}
                    >
                      <IconSettings />
                    </IconButton>
                  </Menu>
                )}

                {endButtonsEnd}
              </Line>
            </Line>

            {endButtons}
          </Line>

          {endControls}
        </Surface>

        {end}
      </Line>
    </Line>
  );
});

AudioPlayer.displayName = 'amaui-AudioPlayer';

export default AudioPlayer;
