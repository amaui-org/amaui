import React from 'react';

import { cleanValue, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import AudioPlayerElement from '../AudioPlayer';
import IconElement, { IIcon } from '../Icon';
import ImageElement from '../Image';
import InteractionElement from '../Interaction';
import LineElement from '../Line';
import SectionElement, { ISection } from '../Section/Section';
import TypeElement from '../Type';
import VideoPlayerElement from '../VideoPlayer';
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

  name: {
    wordBreak: 'break-word'
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
}), { name: 'amaui-SectionMedia' });

export interface ISectionMedia extends ISection {
  value?: IMediaObject;

  size?: 'small' | 'regular' | 'large';

  name?: boolean;

  IconDocument?: any;

  MediaProps?: IPropsAny;
  ImageProps?: IPropsAny;
  AudioProps?: IPropsAny;
  VideoProps?: IPropsAny;
  OtherProps?: IPropsAny;
}

const Element: React.FC<ISectionMedia> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionMedia?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Image = React.useMemo(() => theme?.elements?.Image || ImageElement, [theme]);

  const AudioPlayer = React.useMemo(() => theme?.elements?.AudioPlayer || AudioPlayerElement, [theme]);

  const VideoPlayer = React.useMemo(() => theme?.elements?.VideoPlayer || VideoPlayerElement, [theme]);

  const Interaction = React.useMemo(() => theme?.elements?.Interaction || InteractionElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    value,

    size = 'regular',

    name,

    IconDocument = IconMaterialDraft,

    MediaProps,
    ImageProps,
    AudioProps,
    VideoProps,
    OtherProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>()
  };

  const onOpenMedia = React.useCallback((media: IMediaObject) => {
    window.open(media.url || media.urlSmall, 'blank_');
  }, []);

  let element: any;

  if (value) {
    const mime = value.mime;

    if (mime?.includes('image')) element = (
      <Image
        src={value?.url || value?.urlSmall || (is('string', value) ? value as any : '')}

        maxWidth='rg'

        fullWidth

        {...MediaProps}

        {...ImageProps}

        className={classNames([
          staticClassName('SectionMedia', theme) && [
            'amaui-SectionMedia-item',
            'amaui-SectionMedia-item-image'
          ],

          MediaProps?.className,
          ImageProps?.className
        ])}
      />
    );
    else if (mime?.includes('audio')) element = (
      <AudioPlayer
        size={size}

        {...value}

        {...MediaProps}

        {...AudioProps}

        className={classNames([
          staticClassName('SectionMedia', theme) && [
            'amaui-SectionMedia-item',
            'amaui-SectionMedia-item-audio'
          ],

          MediaProps?.className,
          AudioProps?.className
        ])}
      />
    );
    else if (mime?.includes('video')) element = (
      <VideoPlayer
        size={size}

        {...value}

        {...MediaProps}

        {...VideoProps}

        className={classNames([
          staticClassName('SectionMedia', theme) && [
            'amaui-SectionMedia-item',
            'amaui-SectionMedia-item-video'
          ],

          MediaProps?.className,
          VideoProps?.className
        ])}
      />
    );
    else element = (
      <Line
        gap={1}

        className={classNames([
          staticClassName('SectionMedia', theme) && [
            'amaui-SectionMedia-wrapper',
            'amaui-SectionMedia-wrapper-other'
          ],

          classes.wrapper,
          classes[`otherWrapper_size_${size}`]
        ])}
      >
        <Line
          align='center'

          justify='center'

          onClick={() => onOpenMedia(value as any)}

          fullWidth

          {...MediaProps}

          {...OtherProps}

          className={classNames([
            staticClassName('SectionMedia', theme) && [
              'amaui-SectionMedia-item',
              'amaui-SectionMedia-item-other'
            ],

            MediaProps?.className,
            OtherProps?.className,
            classes.other,
            classes[`other_size_${size}`]
          ])}
        >
          <Interaction />

          <IconDocument
            size={size === 'large' ? 44 : size === 'regular' ? 34 : 24}
          />
        </Line>
      </Line>
    );
  }

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      maxWidth='small'

      align='center'

      className={classNames([
        staticClassName('SectionMedia', theme) && [
          'amaui-SectionMedia-root',
          `amaui-SectionMedia-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        align='center'

        fullWidth
      >
        {element}

        {name && (
          <Type
            version={size === 'large' ? 't1' : size === 'regular' ? 't2' : 't3'}

            align='center'

            fullWidth

            className={classNames([
              staticClassName('SectionMedia', theme) && [
                'amaui-SectionMedia-name'
              ],

              classes.name
            ])}
          >
            {cleanValue(value?.name || 'No name', { capitalize: true })}
          </Type>
        )}
      </Line>
    </Section>
  );
});

Element.displayName = 'amaui-SectionMedia';

export default Element;
