import React from 'react';

import { is, textToInnerHTML } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TextElement from '../Text';
import ImageElement from '../Image';
import SectionElement, { ISection } from '../Section/Section';
import AudioPlayerElement from '../AudioPlayer';
import VideoPlayerElement from '../VideoPlayer';
import LineElement from '../Line';
import TypeElement from '../Type';
import { staticClassName } from '../utils';
import { IValueBreakpoints, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  wrapperRow: {
    '&.amaui-Line-direction-row': {
      '& > *': {
        width: '50%'
      }
    }
  }
}), { name: 'amaui-SectionTextMedia' });

export interface ISectionTextMedia extends ISection {
  title?: string | Partial<Record<IValueBreakpoints, string>>;
  description?: string | Partial<Record<IValueBreakpoints, string>>;

  mediaPosition?: 'top' | 'left' | 'right' | 'bottom';

  media?: any;

  MainProps?: IPropsAny;
  TitleProps?: IPropsAny;
  WrapperProps?: IPropsAny;
  TextProps?: IPropsAny;
  MediaProps?: IPropsAny;
}

const SectionTextMedia: React.FC<ISectionTextMedia> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionTextMedia?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Text = React.useMemo(() => theme?.elements?.Text || TextElement, [theme]);

  const Image = React.useMemo(() => theme?.elements?.Image || ImageElement, [theme]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const AudioPlayer = React.useMemo(() => theme?.elements?.AudioPlayer || AudioPlayerElement, [theme]);

  const VideoPlayer = React.useMemo(() => theme?.elements?.VideoPlayer || VideoPlayerElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const { classes } = useStyle();

  const {
    size,

    title,
    description,

    mediaPosition = 'top',

    media,

    MainProps,
    TitleProps,
    WrapperProps,
    TextProps,
    MediaProps,

    className,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  let mediaElement: any;

  const mediaProps: any = {
    size,
    themed: true,
    color: 'primary',

    ...MediaProps
  };

  const mime = media?.mime || '';

  if (mime.includes('image')) {
    mediaElement = (
      <Image
        src={is('string', media) ? media : media?.src}

        {...mediaProps}
      />
    );
  }

  if (mime.includes('audio')) {
    mediaElement = (
      <AudioPlayer
        src={is('string', media) ? media : media?.src}

        name={media?.name}

        meta={media?.meta}

        versions={media?.versions}

        mime={media?.mime}

        {...mediaProps}
      />
    );
  }

  if (mime.includes('video')) {
    mediaElement = (
      <VideoPlayer
        src={is('string', media) ? media : media?.src}

        name={media?.name}

        meta={media?.meta}

        versions={media?.versions}

        thumbnails={media?.thumbnails}

        mime={media?.mime}

        {...mediaProps}
      />
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

      size={size}

      className={classNames([
        staticClassName('SectionTextMedia', theme) && [
          'amaui-SectionTextMedia-root',
          `amaui-SectionTextMedia-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={7}

        fullWidth

        {...MainProps}

        className={classNames([
          MainProps?.className,
          classes.header
        ])}
      >
        {is('string', title) && (
          <Type
            version={size === 'large' ? 'h1' : size === 'regular' ? 'h2' : 'h3'}

            align='center'

            {...TitleProps}

            dangerouslySetInnerHTML={{
              __html: textToInnerHTML(title)
            }}
          />
        )}

        <Line
          gap={4}

          direction={{
            xxs: 'column',
            xs: 'column',
            sm: 'column',
            md: 'column',
            default: ['left', 'right'].includes(mediaPosition) ? 'row' : 'column'
          }}

          align={['left', 'right'].includes(mediaPosition) ? 'center' : 'center'}

          justify={['left', 'right'].includes(mediaPosition) ? 'flex-start' : 'center'}

          fullWidth

          {...WrapperProps}

          className={classNames([
            classes.wrapper,
            media && classes.wrapperRow
          ])}
        >
          {['top', 'left'].includes(mediaPosition) && mediaElement}

          {is('string', description) && (
            <Text
              align='center'

              columns={1}

              {...TextProps}

              TypeProps={{
                ...TextProps?.TypeProps,

                version: size === 'large' ? 'b1' : [undefined, 'regular'].includes(size as any) ? 'b2' : 'b3'
              }}

              value={description}
            />
          )}

          {['bottom', 'right'].includes(mediaPosition) && mediaElement}
        </Line>
      </Line>
    </Section>
  );
});

SectionTextMedia.displayName = 'amaui-SectionTextMedia';

export default SectionTextMedia;
