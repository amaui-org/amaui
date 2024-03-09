import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line, { ILine } from '../Line/Line';
import Type from '../Type';
import Interaction from '../Interaction';
import AudioPlayer from '../AudioPlayer';
import VideoPlayer from '../VideoPlayer';
import Portal from '../Portal';
import ImageGallery from '../ImageGallery';
import { IMediaObject, TPropsAny, staticClassName } from '../utils';
import Icon, { IIcon } from '../Icon';

const IconMaterialDraft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Draft'

      short_name='Draft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-14V4H6v16h12V9h-4q-.425 0-.712-.288Q13 8.425 13 8ZM6 4v5-5 16V4Z" />
    </Icon>
  );
});

const useStyle = styleMethod(theme => ({
  root: {

  },

  items: {
    padding: '4px',
    overflow: 'auto hidden'
  },

  wrapper: {
    position: 'relative'
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
    width: '174px',
    borderRadius: theme.methods.shape.radius.value(1)
  },

  image_size_regular: {
    width: '214px',
    borderRadius: theme.methods.shape.radius.value(2)
  },

  image_size_large: {
    width: '254px',
    borderRadius: theme.methods.shape.radius.value(3)
  },

  audioWrapper_size_small: {
    maxWidth: '324px',
    width: '90vw'
  },

  audioWrapper_size_regular: {
    maxWidth: '340px',
    width: '90vw'
  },

  audioWrapper_size_large: {
    maxWidth: '440px',
    width: '90vw'
  },

  videoWrapper_size_small: {
    maxWidth: '324px',
    width: '90vw'
  },

  videoWrapper_size_regular: {
    maxWidth: '340px',
    width: '90vw'
  },

  videoWrapper_size_large: {
    maxWidth: '440px',
    width: '90vw'
  },

  other: {
    position: 'relative',
    aspectRatio: '3 / 4',
    cursor: 'pointer',
    userSelect: 'none',
    background: theme.palette.background.secondary.secondary,
    boxShadow: theme.shadows.values.default[1]
  },

  other_size_small: {
    borderRadius: theme.methods.shape.radius.value(1)
  },

  other_size_regular: {
    borderRadius: theme.methods.shape.radius.value(2)
  },

  other_size_large: {
    borderRadius: theme.methods.shape.radius.value(3)
  },

  otherWrapper_size_small: {
    maxWidth: '74px',
    width: '90vw'
  },

  otherWrapper_size_regular: {
    maxWidth: '94px',
    width: '90vw'
  },

  otherWrapper_size_large: {
    maxWidth: '114px',
    width: '90vw'
  }
}), { name: 'amaui-Medias' });

export interface IMediasItem {
  value: IMediaObject;
  props?: any;
}

export type IMediasMediaVersion = 'image' | 'audio' | 'video' | 'other';

export interface IMedias extends ILine {
  size?: 'small' | 'regular' | 'large';

  values?: IMediasItem[];

  imageGallery?: boolean;

  show?: IMediasMediaVersion[];

  noName?: boolean;

  IconDocument?: any;

  NameProps?: TPropsAny;
  WrapperProps?: TPropsAny;
  ImageProps?: TPropsAny;
  AudioProps?: TPropsAny;
  VideoProps?: TPropsAny;
  OtherProps?: TPropsAny;
  ItemsProps?: TPropsAny;
  ImageItemsProps?: TPropsAny;
  AudioItemsProps?: TPropsAny;
  VideoItemsProps?: TPropsAny;
  OtherItemsProps?: TPropsAny;
}

const Medias: React.FC<IMedias> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiMedias?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    size = 'regular',

    values = [],

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

  const [open, setOpen] = React.useState<any>();

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const onOpen = React.useCallback((index: number) => {
    setOpen({
      index
    });
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(null);
  }, []);

  const onOpenMedia = React.useCallback((media: IMediaObject) => {
    window.open(media.src, 'blank_');
  }, []);

  const items = React.useMemo(() => {
    const items_: Record<string, IMediasItem[]> = {
      image: [],
      audio: [],
      video: [],
      other: []
    };

    values.filter(Boolean).forEach(item => {
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
            classes[`wrapper_size_${size}`]
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
              classes.image,
              classes[`image_size_${size}`]
            ])}

            style={{
              backgroundImage: `url(${media.srcSmall || media.src})`,

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

            src={media.src}

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

            src={media.src}

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

      className={classNames([
        staticClassName('Medias', theme) && [
          'amaui-Medias-root'
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

              url: item.value.src,

              urlSmall: item.value.srcSmall || item.value.src
            }))}
          />
        </Portal>
      )}
    </Line>
  );
});

Medias.displayName = 'amaui-Medias';

export default Medias;
