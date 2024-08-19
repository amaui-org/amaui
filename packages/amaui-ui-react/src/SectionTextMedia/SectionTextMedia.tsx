import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, isEnvironment, textToInnerHTML } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TextElement from '../Text';
import ImageElement from '../Image';
import SectionElement, { ISection } from '../Section/Section';
import AudioPlayerElement from '../AudioPlayer';
import VideoPlayerElement from '../VideoPlayer';
import LineElement from '../Line';
import TypeElement from '../Type';
import ButtonElement from '../Button';
import { staticClassName } from '../utils';
import { IValueBreakpoints, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  main: {
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

  button?: {
    text?: any;
    to?: string;
    link?: string;
    props?: any;
  };

  mediaPosition?: 'top' | 'left' | 'right' | 'bottom';

  media?: any;

  MainProps?: IPropsAny;
  TitleProps?: IPropsAny;
  WrapperProps?: IPropsAny;
  WrapperMainProps?: IPropsAny;
  WrapperTextProps?: IPropsAny;
  DescriptionProps?: IPropsAny;
  MediaProps?: IPropsAny;
  ImageProps?: IPropsAny;
  AudioProps?: IPropsAny;
  VideoProps?: IPropsAny;
  OtherProps?: IPropsAny;
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

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const { classes } = useStyle();

  const {
    size,

    title,

    description,

    button,

    mediaPosition = 'top',

    media,

    MainProps,
    TitleProps,
    WrapperProps,
    WrapperMainProps,
    WrapperTextProps,
    DescriptionProps,
    MediaProps,
    ImageProps,
    AudioProps,
    VideoProps,
    OtherProps,

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

  const navigate = isEnvironment('browser') && useNavigate();

  if (mime.includes('image')) {
    mediaElement = (
      <Image
        src={media?.url || media?.urlSmall || (is('string', media) ? media as any : '')}

        {...mediaProps}

        {...MediaProps}

        {...ImageProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'amaui-SectionTextMedia-item',
            'amaui-SectionTextMedia-item-image'
          ],

          MediaProps?.className,
          ImageProps?.className
        ])}
      />
    );
  }

  if (mime.includes('audio')) {
    mediaElement = (
      <AudioPlayer
        {...media}

        {...mediaProps}

        {...MediaProps}

        {...AudioProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'amaui-SectionTextMedia-item',
            'amaui-SectionTextMedia-item-audio'
          ],

          MediaProps?.className,
          AudioProps?.className
        ])}
      />
    );
  }

  if (mime.includes('video')) {
    mediaElement = (
      <VideoPlayer
        {...media}

        {...mediaProps}

        {...MediaProps}

        {...VideoProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'amaui-SectionTextMedia-item',
            'amaui-SectionTextMedia-item-video'
          ],

          MediaProps?.className,
          VideoProps?.className
        ])}
      />
    );
  }

  const main = (
    <Line
      gap={3}

      direction='column'

      align={['left', 'top', 'bottom'].includes(mediaPosition) ? 'flex-start' : 'flex-end'}

      fullWidth

      {...WrapperMainProps}

      className={classNames([
        staticClassName('SectionTextMedia', theme) && [
          'amaui-SectionTextMedia-wrapper-main'
        ],

        WrapperMainProps?.className
      ])}
    >
      <Line
        gap={2}

        direction='column'

        align={['left', 'top', 'bottom'].includes(mediaPosition) ? 'flex-start' : 'flex-end'}

        fullWidth

        {...WrapperTextProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'amaui-SectionTextMedia-wrapper-text'
          ],

          WrapperTextProps?.className
        ])}
      >
        {is('string', title) && (
          <Type
            version={size === 'large' ? 'h1' : size === 'regular' ? 'h2' : 'h3'}

            align={['left', 'top', 'bottom'].includes(mediaPosition) ? 'start' : 'end'}

            dangerouslySetInnerHTML={{
              __html: textToInnerHTML(title)
            }}

            {...TitleProps}

            className={classNames([
              staticClassName('SectionTextMedia', theme) && [
                'amaui-SectionTextMedia-title'
              ],

              TitleProps?.className
            ])}
          />
        )}

        {is('string', description) && (
          <Text
            align={['left', 'top', 'bottom'].includes(mediaPosition) ? 'start' : 'end'}

            columns={1}

            TypeProps={{
              ...DescriptionProps?.TypeProps,

              version: size === 'large' ? 'b1' : [undefined, 'regular'].includes(size as any) ? 'b2' : 'b3'
            }}

            value={description}

            {...DescriptionProps}

            className={classNames([
              staticClassName('SectionTextMedia', theme) && [
                'amaui-SectionTextMedia-description'
              ],

              DescriptionProps?.className
            ])}
          />
        )}
      </Line>

      {button && (
        <Button
          tonal

          version='filled'

          color='primary'

          size={size}

          onClick={(button.to || button.link) ? () => button.to ? navigate(button.to) : window.open(button.link, 'blank') : undefined}

          {...button.props}

          className={classNames([
            staticClassName('SectionAction', theme) && [
              'amaui-SectionTextMedia-button'
            ],

            button.props?.className,
            classes.button
          ])}
        >
          {button.text || 'Click here'}
        </Button>
      )}
    </Line>
  );

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
        gap={5}

        direction={{
          xxs: 'column',
          xs: 'column',
          sm: 'column',
          md: 'column',
          default: ['left', 'right'].includes(mediaPosition) ? 'row' : 'column'
        }}

        align={['left', 'right'].includes(mediaPosition) ? 'flex-start' : 'center'}

        justify={['left', 'right'].includes(mediaPosition) ? 'flex-start' : 'center'}

        fullWidth

        {...MainProps}

        className={classNames([
          staticClassName('SectionTextMedia', theme) && [
            'amaui-SectionTextMedia-main'
          ],

          MainProps?.className,
          classes.main
        ])}
      >
        {['top', 'left'].includes(mediaPosition) && mediaElement}

        {main}

        {['bottom', 'right'].includes(mediaPosition) && mediaElement}
      </Line>
    </Section>
  );
});

SectionTextMedia.displayName = 'amaui-SectionTextMedia';

export default SectionTextMedia;
