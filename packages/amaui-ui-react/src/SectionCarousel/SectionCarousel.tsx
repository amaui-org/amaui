import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, isEnvironment, textToInnerHTML } from '@amaui/utils';
import { TPaletteVersion, classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SectionElement, { ISection } from '../Section/Section';
import ButtonElement from '../Button';
import CarouselElement from '../Carousel';
import LineElement from '../Line';
import TypeElement from '../Type';
import useMediaQuery from '../useMediaQuery';
import { staticClassName } from '../utils';
import { IMediaObject, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  size_small: {
    '&.amaui-Carousel-root': {
      height: '340px'
    }
  },

  size_regular: {
    '&.amaui-Carousel-root': {
      height: '540px'
    }
  },

  size_large: {
    '&.amaui-Carousel-root': {
      height: '740px'
    }
  },

  fullHeight: {
    '&.amaui-Carousel-root': {
      height: '100vh'
    }
  },

  main: {
    padding: '0 96px',
    zIndex: '14'
  },

  item: {
    position: 'relative',
    height: '100%'
  },

  item_size_small: {
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  item_size_regular: {
    padding: `${theme.methods.space.value(6.75, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  item_size_large: {
    padding: `${theme.methods.space.value(9.25, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  text: {
    '&.amaui-Type-root': {
      color: 'white',
      mixBlendMode: 'difference'
    }
  },

  button: {
    transition: theme.methods.transitions.make('transform'),

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  background: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden',
    zIndex: '1'
  },

  backgroundImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },

  backgroundVideo: {
    position: 'absolute',
    inset: '0',
    minHeight: '100%',
    minWidth: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1'
  },

  backgroundOverlay: {
    position: 'absolute',
    inset: '0'
  },

  backgroundOverlayBlur: {
    backdropFilter: 'blur(12px)'
  },

  '@media only screen and (max-width: 640px)': {
    $main: {
      paddingInline: 72
    }
  }
}), { name: 'amaui-SectionCarousel' });

export interface ISectionCarouselItem {
  name?: any;
  description?: any;

  buttonText?: any;

  to?: string;
  link?: string;

  backgroundColor?: TPaletteVersion;
  backgroundGradient?: TPaletteVersion[];

  backgroundImage?: IMediaObject;
  backgroundVideo?: IMediaObject;

  overlay?: TPaletteVersion;
  overlayBlur?: number | boolean;

  themed?: boolean;

  propsName?: any;
  propsDescription?: any;

  propsButton?: any;
  propsButtonWrapper?: any;
}

export interface ISectionCarousel extends ISection {
  size?: 'small' | 'regular' | 'large';

  values?: ISectionCarouselItem[];

  fullHeight?: boolean;

  responsive?: boolean;

  ItemProps?: IPropsAny;
  CarouselProps?: IPropsAny;
}

const Element: React.FC<ISectionCarousel> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionCarousel?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Carousel = React.useMemo(() => theme?.elements?.Carousel || CarouselElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    size: size_ = 'regular',

    values: values_ = [],

    responsive = true,

    fullHeight,

    ItemProps,
    CarouselProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const navigate = isEnvironment('browser') && useNavigate();

  const refs = {
    root: React.useRef<any>()
  };

  const laptop = useMediaQuery('(max-width: 1440px)', { element: refs.root.current });

  const mobile = useMediaQuery('(max-width: 768px)', { element: refs.root.current });

  let size = size_;

  if (responsive) {
    if (laptop) size = 'regular';
    else if (mobile) size = 'small';
  }

  // Max 4
  const values = values_?.slice(0, 4);

  const getItem = React.useCallback((item: ISectionCarouselItem, index: number) => {
    let styleBackground: any = {};

    const themed = [undefined, true].includes(item.themed);

    if (item.backgroundColor) {
      const palette = theme.palette.color[item.backgroundColor] || theme.methods.color(item.backgroundColor);

      styleBackground = {
        ...styleBackground,

        backgroundColor: themed ? theme.methods.palette.color.value(undefined as any, 95, true, palette) : palette?.main
      };
    }

    if (is('array', item.backgroundGradient) && item.backgroundGradient!.length >= 2) {
      const palette1 = theme.palette.color[item.backgroundGradient![0]] || theme.methods.color(item.backgroundGradient![0]);
      const palette2 = theme.palette.color[item.backgroundGradient![1]] || theme.methods.color(item.backgroundGradient![1]);
      const palette3 = theme.palette.color[item.backgroundGradient![2]] || theme.methods.color(item.backgroundGradient![2]);

      let backgroundImageStyle = '';

      if (item.backgroundGradient?.length === 2) {
        backgroundImageStyle = themed ? `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${theme.methods.palette.color.colorToRgb(palette1.main, 0.14)} 0%, ${theme.methods.palette.color.colorToRgb(palette2.main, 0.14)} 100%)` : `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${palette1.main} 0%, ${palette2.main} 100%)`;
      }

      if (item.backgroundGradient?.length === 3) {
        backgroundImageStyle = themed ? `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${theme.methods.palette.color.colorToRgb(palette1.main, 0.14)} 0%, ${theme.methods.palette.color.colorToRgb(palette2.main, 0.14)} 40%, ${theme.methods.palette.color.colorToRgb(palette3.main, 0.14)} 100%)` : `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${palette1.main} 0%, ${palette2.main} 40%, ${palette3.main} 100%)`;
      }

      styleBackground = {
        ...styleBackground,

        backgroundImage: backgroundImageStyle
      };
    }

    if (item.backgroundImage) {
      const url = item.backgroundImage?.url || item.backgroundImage?.src || item.backgroundImage?.urlSmall || item.backgroundImage?.srcSmall || (is('string', item.backgroundImage) ? item.backgroundImage as any : '');

      if (url) {
        styleBackground = {
          ...styleBackground,

          backgroundImage: `url('${url}')`
        };
      }
    }

    let styleOverlay: any = {};

    if (item.overlay) {
      const palette = theme.palette.color[item.overlay] || theme.methods.color(item.overlay);

      styleOverlay = {
        ...styleOverlay,

        backgroundColor: themed ? theme.methods.palette.color.alpha(theme.methods.palette.color.value(undefined as any, 95, true, palette), 0.74) : palette?.main
      };
    }

    const urlVideo = item.backgroundVideo?.url || item.backgroundVideo?.src || item.backgroundVideo?.urlSmall || item.backgroundVideo?.srcSmall || (is('string', item.backgroundVideo) ? item.backgroundVideo as any : '');

    return (
      <Section
        key={index}

        size={size}

        gap={0}

        align='flex-start'

        justify='center'

        fullWidth

        {...ItemProps}

        className={classNames([
          staticClassName('SectionCarousel', theme) && [
            'amaui-SectionCarousel-item'
          ],

          ItemProps?.className,
          classes.item,
          classes[`item_size_${size}`]
        ])}
      >
        <Line
          gap={1}

          align='flex-start'

          justify='center'

          fullWidth

          className={classNames([
            staticClassName('SectionCarousel', theme) && [
              'amaui-SectionCarousel-item-main'
            ],

            classes.main,
            classes.background,
            item.backgroundImage && styleBackground.backgroundImage && classes.backgroundImage
          ])}

          style={{
            ...styleBackground
          }}
        >
          {urlVideo && (
            <video
              autoPlay
              muted
              loop

              className={classNames([
                staticClassName('SectionCarousel', theme) && [
                  'amaui-SectionCarousel-item-background-video'
                ],

                classes.backgroundVideo
              ])}
            >
              <source
                src={urlVideo}
              />
            </video>
          )}

          {item.overlay && (
            <div
              className={classNames([
                staticClassName('SectionCarousel', theme) && [
                  'amaui-SectionCarousel-item-background-overlay'
                ],

                classes.backgroundOverlay,
                item.overlayBlur && classes.backgroundOverlayBlur
              ])}

              style={{
                ...styleOverlay
              }}
            />
          )}

          {item.name && (
            <Type
              version={size === 'large' ? 'd1' : size === 'regular' ? 'd2' : 'd3'}

              fullWidth

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(item.name)
              }}

              {...item.propsName}

              className={classNames([
                staticClassName('SectionCarousel', theme) && [
                  'amaui-SectionCarousel-item-title'
                ],

                item.propsName?.className,
                classes.text
              ])}
            />
          )}

          {item.description && (
            <Type
              version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b2'}

              fullWidth

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(item.description)
              }}

              {...item.propsDescription}

              className={classNames([
                staticClassName('SectionCarousel', theme) && [
                  'amaui-SectionCarousel-item-description'
                ],

                item.propsDescription?.className,
                classes.text
              ])}
            />
          )}

          {item.buttonText && (
            <Line
              direction='row'

              align='center'

              justify='flex-start'

              fullWidth

              {...item.propsButtonWrapper}

              style={{
                marginTop: 12,

                ...item.propsButtonWrapper?.style
              }}
            >
              <Button
                version='filled'

                color='primary'

                size={size === 'large' ? 'regular' : size === 'regular' ? 'small' : 'small'}

                onClick={() => item.to ? navigate(item.to) : window.open(item.link, 'blank')}

                {...item.propsButton}

                className={classNames([
                  staticClassName('SectionCarousel', theme) && [
                    'amaui-SectionCarousel-item-button'
                  ],

                  item.propsButton?.className,
                  classes.button
                ])}
              >
                {item.buttonText || 'Click here'}
              </Button>
            </Line>
          )}
        </Line>
      </Section>
    );
  }, [theme, size]);

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      maxWidth={false}

      padding={!values?.length}

      className={classNames([
        staticClassName('SectionCarousel', theme) && [
          'amaui-SectionCarousel-root',
          `amaui-SectionCarousel-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {!!values?.length && (
        <Carousel
          items={values?.map((item, index) => getItem(item, index))}

          autoPlay

          {...CarouselProps}

          className={classNames([
            staticClassName('SectionCarousel', theme) && [
              'amaui-SectionCarousel-items'
            ],

            CarouselProps?.className,
            classes.items,
            classes[`size_${size}`],
            fullHeight && classes.fullHeight
          ])}
        />
      )}
    </Section>
  );
});

Element.displayName = 'amaui-SectionCarousel';

export default Element;
