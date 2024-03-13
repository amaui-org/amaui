import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, textToInnerHTML } from '@amaui/utils';
import { TPaletteVersion, classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Section, { ISection } from '../Section/Section';
import useMediaQuery from '../useMediaQuery';
import Button from '../Button';
import Carousel from '../Carousel';
import Line from '../Line';
import Type from '../Type';
import { staticClassName } from '../utils';
import { IMediaObject, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    '&.amaui-Section-root': {
      padding: '0'
    }
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
    padding: '0 44px',
    zIndex: '14'
  },

  item: {
    position: 'relative',
    height: '100%',
    userSelect: 'none'
  },

  item_size_small: {
    padding: '24px 24px'
  },

  item_size_regular: {
    padding: '54px 24px'
  },

  item_size_large: {
    padding: '74px 24px'
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
    pointerEvents: 'none',
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
    inset: '0',
    zIndex: '4'
  },

  backgroundOverlayBlur: {
    backdropFilter: 'blur(12px)'
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

  values?: ISectionCarousel[];

  fullHeight?: boolean;

  responsive?: boolean;

  ItemProps?: IPropsAny;
  CarouselProps?: IPropsAny;
}

const Element: React.FC<ISectionCarousel> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionCarousel?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

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

  const navigate = useNavigate();

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
        <div
          className={classNames([
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

              className={classes.backgroundVideo}
            >
              <source
                src={urlVideo}
              />
            </video>
          )}

          {item.overlay && (
            <div
              className={classNames([
                classes.backgroundOverlay,
                item.overlayBlur && classes.backgroundOverlayBlur
              ])}

              style={{
                ...styleOverlay
              }}
            />
          )}
        </div>

        <Line
          gap={1}

          align='flex-start'

          fullWidth

          className={classes.main}
        >
          {item.name && (
            <Type
              version={size === 'large' ? 'd2' : size === 'regular' ? 'd3' : 'h1'}

              fullWidth

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(item.name)
              }}

              {...item.propsName}
            />
          )}

          {item.description && (
            <Type
              version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b2'}

              priority='secondary'

              fullWidth

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(item.description)
              }}

              {...item.propsDescription}
            />
          )}

          {(item.to || item.link) && (
            <Line
              align='flex-start'

              fullWidth

              {...item.propsButtonWrapper}

              style={{
                marginTop: 12,

                ...item.propsButtonWrapper?.style
              }}
            >
              <Button
                version='outlined'

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

      padding={false}

      className={classNames([
        staticClassName('SectionCarousel', theme) && [
          'amaui-SectionCarousel-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
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
    </Section>
  );
});

Element.displayName = 'amaui-SectionCarousel';

export default Element;
