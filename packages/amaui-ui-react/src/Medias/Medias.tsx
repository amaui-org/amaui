import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TypeElement from '../Type';
import InteractionElement from '../Interaction';
import LineElement, { ILine } from '../Line/Line';
import AudioPlayerElement from '../AudioPlayer';
import VideoPlayerElement from '../VideoPlayer';
import PortalElement from '../Portal';
import ImageGalleryElement from '../ImageGallery';
import IconElement, { IIcon } from '../Icon';
import { staticClassName } from '../utils';
import { IMediaObject, IPropsAny } from '../types';

const IconMaterialDraft = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Draft'

      short_name='Draft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-14V4H6v16h12V9h-4q-.425 0-.712-.288Q13 8.425 13 8ZM6 4v5-5 16V4Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {

  },

  items: {
    padding: theme.methods.space.value(0.5, 'px'),
    overflow: 'auto hidden'
  },

  item: {

  },

  wrapper: {
    position: 'relative',
    flex: '0 0 auto'
  },

  wrapper_image: {
    transition: theme.methods.transitions.make('transform'),

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  wrapper_other: {
    transition: theme.methods.transitions.make('transform'),

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  name: {
    wordBreak: 'break-word'
  },

  image: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    aspectRatio: '16 / 9'
  },

  imageWrapper_size_small: {
    width: '174px'
  },

  imageWrapper_size_regular: {
    width: '214px'
  },

  imageWrapper_size_large: {
    width: '254px'
  },

  image_size_small: {
    borderRadius: theme.methods.shape.radius.value(1)
  },

  image_size_regular: {
    borderRadius: theme.methods.shape.radius.value(2)
  },

  image_size_large: {
    borderRadius: theme.methods.shape.radius.value(3)
  },

  audioWrapper_size_small: {
    width: '324px'
  },

  audioWrapper_size_regular: {
    width: '340px'
  },

  audioWrapper_size_large: {
    width: '440px'
  },

  videoWrapper_size_small: {
    width: '324px'
  },

  videoWrapper_size_regular: {
    width: '340px'
  },

  videoWrapper_size_large: {
    width: '440px'
  },

  other: {
    position: 'relative',
    aspectRatio: '3 / 4',
    cursor: 'pointer',
    userSelect: 'none',
    background: theme.palette.background.secondary.tertiary,
    boxShadow: theme.shadows.values.default[1]
  },

  otherWrapper_size_small: {
    width: '74px'
  },

  otherWrapper_size_regular: {
    width: '94px'
  },

  otherWrapper_size_large: {
    width: '114px'
  },

  other_size_small: {
    borderRadius: theme.methods.shape.radius.value(1)
  },

  other_size_regular: {
    borderRadius: theme.methods.shape.radius.value(2)
  },

  other_size_large: {
    borderRadius: theme.methods.shape.radius.value(3)
  }
}), { name: 'amaui-Medias' });

export interface IMediasItem {
  value: IMediaObject;
  props?: any;
}

export type IMediasMediaVersion = 'image' | 'audio' | 'video' | 'other';

export interface IMedias extends ILine {
  size?: 'small' | 'regular' | 'large';

  values?: IMediasItem | IMediasItem[];

  imageGallery?: boolean;

  show?: IMediasMediaVersion[];

  noName?: boolean;

  IconDocument?: any;

  NameProps?: IPropsAny;
  WrapperProps?: IPropsAny;
  ImageProps?: IPropsAny;
  AudioProps?: IPropsAny;
  VideoProps?: IPropsAny;
  OtherProps?: IPropsAny;
  ItemsProps?: IPropsAny;
  ImageItemsProps?: IPropsAny;
  AudioItemsProps?: IPropsAny;
  VideoItemsProps?: IPropsAny;
  OtherItemsProps?: IPropsAny;
}

const Medias: React.FC<IMedias> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiMedias?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Interaction = React.useMemo(() => theme?.elements?.Interaction || InteractionElement, [theme]);

  const AudioPlayer = React.useMemo(() => theme?.elements?.AudioPlayer || AudioPlayerElement, [theme]);

  const VideoPlayer = React.useMemo(() => theme?.elements?.VideoPlayer || VideoPlayerElement, [theme]);

  const Portal = React.useMemo(() => theme?.elements?.Portal || PortalElement, [theme]);

  const ImageGallery = React.useMemo(() => theme?.elements?.ImageGallery || ImageGalleryElement, [theme]);

  const {
    size = 'regular',

    values: values_ = [],

    imageGallery = true,

    show = ['image', 'video', 'audio', 'other'],

    noName,

    IconDocument = IconMaterialDraft,

    NameProps,
    WrapperProps,
    ImageProps,
    AudioProps,
    VideoProps,
    OtherProps,
    ItemsProps,
    ImageItemsProps,
    AudioItemsProps,
    VideoItemsProps,
    OtherItemsProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [open, setOpen] = React.useState<any>();

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const values = is('array', values_) ? values_ : [values_];

  const onOpen = React.useCallback((index: number) => {
    setOpen({
      index
    });
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(null);
  }, []);

  const onOpenMedia = React.useCallback((media: IMediaObject) => {
    window.open(media.url || media.urlSmall, 'blank_');
  }, []);

  const items = React.useMemo(() => {
    const items_: Record<string, IMediasItem[]> = {
      image: [],
      audio: [],
      video: [],
      other: []
    };

    (values as any).filter(Boolean).forEach(item => {
      const media = item.value;

      if (media) {
        if (media.mime?.startsWith('image')) items_.image.push(item);
        else if (media.mime?.startsWith('audio')) items_.audio.push(item);
        else if (media.mime?.startsWith('video')) items_.video.push(item);
        else items_.other.push(item);
      }
    });

    return items_;
  }, [values]);

  const getItem = (version: IMediasMediaVersion, item: IMediasItem, index: number) => {
    const media = item.value;

    const name = (item?.props?.name || !noName) && (
      <Type
        version={size === 'large' ? 'l2' : size === 'regular' ? 'l3' : 'l3'}

        {...NameProps}

        className={classNames([
          staticClassName('Medias', theme) && [
            'amaui-Medias-name'
          ],

          NameProps?.className,
          classes.name
        ])}
      >
        {media?.name || 'No name'}
      </Type>
    );

    if (version === 'image') {
      return (
        <Line
          key={index}

          gap={1}

          {...WrapperProps}

          onClick={() => imageGallery && onOpen(index)}

          className={classNames([
            staticClassName('Medias', theme) && [
              'amaui-Medias-wrapper',
              'amaui-Medias-wrapper-image'
            ],

            WrapperProps?.className,
            classes.wrapper,
            classes.wrapper_image,
            classes[`imageWrapper_size_${size}`]
          ])}
        >
          <Line
            key={index}

            {...ImageProps}

            {...item?.props}

            fullWidth

            className={classNames([
              staticClassName('Medias', theme) && [
                'amaui-Medias-item',
                'amaui-Medias-item-image'
              ],

              ImageProps?.className,
              item?.props?.className,
              classes.item,
              classes.image,
              classes[`image_size_${size}`]
            ])}

            style={{
              backgroundImage: `url(${media.urlSmall || media.url})`,

              ...item?.props?.style
            }}
          >
            <Interaction />
          </Line>

          {name}
        </Line>
      );
    }

    if (version === 'audio') {
      return (
        <Line
          key={index}

          gap={1}

          {...WrapperProps}

          className={classNames([
            staticClassName('Medias', theme) && [
              'amaui-Medias-wrapper',
              'amaui-Medias-wrapper-audio'
            ],

            WrapperProps?.className,
            classes.wrapper,
            classes[`audioWrapper_size_${size}`]
          ])}
        >
          <AudioPlayer
            key={index}

            tonal

            color='primary'

            src={media.url || media.urlSmall}

            size={size}

            {...media}

            {...AudioProps}

            {...item?.props}

            fullWidth

            className={classNames([
              staticClassName('Medias', theme) && [
                'amaui-Medias-item',
                'amaui-Medias-item-audio'
              ],

              VideoProps?.className,
              item?.props?.className,
              classes.item,
              classes.audio
            ])}
          />

          {name}
        </Line>
      );
    }

    if (version === 'video') {
      return (
        <Line
          key={index}

          gap={1}

          {...WrapperProps}

          className={classNames([
            staticClassName('Medias', theme) && [
              'amaui-Medias-wrapper',
              'amaui-Medias-wrapper-video'
            ],

            WrapperProps?.className,
            classes.wrapper,
            classes[`videoWrapper_size_${size}`]
          ])}
        >
          <VideoPlayer
            key={index}

            tonal

            color='primary'

            src={media.url || media.urlSmall}

            size={size}

            {...media}

            {...VideoProps}

            {...item?.props}

            fullWidth

            className={classNames([
              staticClassName('Medias', theme) && [
                'amaui-Medias-item',
                'amaui-Medias-item-video'
              ],

              VideoProps?.className,
              item?.props?.className,
              classes.item,
              classes.video
            ])}
          />

          {name}
        </Line>
      );
    }

    if (version === 'other') {
      return (
        <Line
          key={index}

          gap={1}

          {...WrapperProps}

          className={classNames([
            staticClassName('Medias', theme) && [
              'amaui-Medias-wrapper',
              'amaui-Medias-wrapper-other'
            ],

            WrapperProps?.className,
            classes.wrapper,
            classes[`otherWrapper_size_${size}`]
          ])}
        >
          <Line
            key={index}

            {...OtherProps}

            {...item?.props}

            align='center'

            justify='center'

            onClick={() => onOpenMedia(media)}

            fullWidth

            className={classNames([
              staticClassName('Medias', theme) && [
                'amaui-Medias-item',
                'amaui-Medias-item-other'
              ],

              OtherProps?.className,
              item?.props?.className,
              classes.item,
              classes.other,
              classes[`other_size_${size}`]
            ])}
          >
            <Interaction />

            <IconDocument
              size={size === 'large' ? 44 : size === 'regular' ? 34 : 24}
            />
          </Line>

          {name}
        </Line>
      );
    }

    return null;
  };

  return (
    <Line
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={size === 'large' ? 3 : size === 'regular' ? 2 : 1.5}

      fullWidth

      className={classNames([
        staticClassName('Medias', theme) && [
          'amaui-Medias-root',
          `amaui-Medias-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {show.filter(item => !!items[item]?.length).map((item, index) => (
        <Line
          key={index}

          gap={size === 'large' ? 2 : size === 'regular' ? 1.5 : 1}

          direction='row'

          align='flex-start'

          justify='flex-start'

          fullWidth

          {...ItemsProps}

          {...(item === 'image' && ImageItemsProps)}

          {...(item === 'audio' && AudioItemsProps)}

          {...(item === 'video' && VideoItemsProps)}

          {...(item === 'other' && OtherItemsProps)}

          className={classNames([
            staticClassName('Medias', theme) && [
              'amaui-Medias-items',
              `amaui-Medias-items-${item}`
            ],

            ItemsProps?.className,
            item === 'image' && ImageItemsProps?.className,
            item === 'audio' && AudioItemsProps?.className,
            item === 'video' && VideoItemsProps?.className,
            item === 'other' && OtherItemsProps?.className,
            classes.items
          ])}
        >
          {items[item].map((itemMedia, indexItemMedia) => getItem(item as any, itemMedia, indexItemMedia))}
        </Line>
      ))}

      {refs.root.current && imageGallery && !!items.image?.length && (
        <Portal
          element={refs.root.current?.ownerDocument?.body}
        >
          <ImageGallery
            open={!!open}

            onClose={onClose}

            value={open?.index}

            items={items.image.map(item => ({
              ...item.value,

              url: item.value.url || item.value.urlSmall,

              urlSmall: item.value.urlSmall || item.value.url
            }))}
          />
        </Portal>
      )}
    </Line>
  );
});

Medias.displayName = 'amaui-Medias';

export default Medias;
