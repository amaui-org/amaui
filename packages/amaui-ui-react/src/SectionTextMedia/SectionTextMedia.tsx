import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Text from '../Text';
import Image from '../Image';
import Section, { ISection } from '../Section/Section';
import AudioPlayer from '../AudioPlayer';
import VideoPlayer from '../VideoPlayer';
import Line from '../Line';
import Type from '../Type';
import { TPropsAny, TValueBreakpoints, staticClassName, textToInnerHTML } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-SectionTextMedia' });

export interface ISectionTextMedia extends ISection {
  title?: string | Partial<Record<TValueBreakpoints, string>>;
  text?: string | Partial<Record<TValueBreakpoints, string>>;

  mediaPosition?: 'top' | 'left' | 'right' | 'bottom';

  image?: any;
  video?: any;
  audio?: any;

  MainProps?: TPropsAny;
  TitleProps?: TPropsAny;
  WrapperProps?: TPropsAny;
  TextProps?: TPropsAny;
  ImageProps?: TPropsAny;
  AudioProps?: TPropsAny;
  VideoProps?: TPropsAny;
  MediaProps?: TPropsAny;
}

const SectionTextMedia: React.FC<ISectionTextMedia> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSection?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    size,

    title,
    description,

    mediaPosition = 'top',

    image,
    audio,
    video,

    MainProps,
    TitleProps,
    WrapperProps,
    TextProps,
    ImageProps,
    AudioProps,
    VideoProps,
    MediaProps,

    className,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  let media: any;

  const mediaProps: any = {
    size,
    themed: true,
    color: 'primary',

    ...MediaProps
  };

  if (image) {
    media = (
      <Image
        src={is('string', image) ? image : image?.src}

        {...mediaProps}

        {...ImageProps}
      />
    );
  }

  if (audio) {
    media = (
      <AudioPlayer
        src={is('string', audio) ? audio : audio?.src}

        name={audio?.name}

        meta={audio?.meta}

        versions={audio?.versions}

        mime={audio?.mime}

        {...mediaProps}

        {...AudioProps}
      />
    );
  }

  if (video) {
    media = (
      <VideoPlayer
        src={is('string', video) ? video : video?.src}

        name={video?.name}

        meta={video?.meta}

        versions={video?.versions}

        thumbnails={video?.thumbnails}

        mime={video?.mime}

        {...mediaProps}

        {...VideoProps}
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
        staticClassName('Section', theme) && [
          'amaui-SectionTextMedia-root'
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

          align={['left', 'right'].includes(mediaPosition) ? 'center' : 'flex-start'}

          justify={['left', 'right'].includes(mediaPosition) ? 'flex-start' : 'center'}

          fullWidth

          {...WrapperProps}
        >
          {['top', 'left'].includes(mediaPosition) && media}

          {is('string', description) && (
            <Text
              version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

              align='center'

              columns={2}

              {...TextProps}

              value={description}
            />
          )}

          {['bottom', 'right'].includes(mediaPosition) && media}
        </Line>
      </Line>
    </Section>
  );
});

SectionTextMedia.displayName = 'amaui-SectionTextMedia';

export default SectionTextMedia;
