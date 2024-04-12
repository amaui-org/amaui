import React from 'react';

import { is, textToInnerHTML } from '@amaui/utils';
import { TPaletteVersion, classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line, { ILine } from '../Line/Line';
import Type from '../Type';
import Reveal from '../Reveal';
import useMediaQuery from '../useMediaQuery';
import { valueBreakpoints, staticClassName } from '../utils';
import { IValueBreakpoints, IMediaObject, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative'
  },

  main: {
    zIndex: '14'
  },

  header: {
    zIndex: '14'
  },

  margin_small: {
    margin: '64px 32px',
    width: 'calc(100% - 64px) !important'
  },

  margin_regular: {
    margin: '104px 40px',
    width: 'calc(100% - 80px) !important'
  },

  margin_large: {
    margin: '144px 48px',
    width: 'calc(100% - 96px) !important'
  },

  margin_extra_large: {
    margin: '184px 56px',
    width: 'calc(100% - 112px) !important'
  },

  margin_extra_extra_large: {
    margin: '224px 64px',
    width: 'calc(100% - 128px) !important'
  },

  margin_vertical_small: {
    margin: '64px 0'
  },

  margin_vertical_regular: {
    margin: '104px 0'
  },

  margin_vertical_large: {
    margin: '144px 0'
  },

  margin_vertical_extra_large: {
    margin: '184px 0'
  },

  margin_vertical_extra_extra_large: {
    margin: '224px 0'
  },

  padding_small: {
    padding: `${theme.methods.space.value(8, 'px')} ${theme.methods.space.value(4, 'px')}`
  },

  padding_regular: {
    padding: `${theme.methods.space.value(13, 'px')} ${theme.methods.space.value(5, 'px')}`
  },

  padding_large: {
    padding: `${theme.methods.space.value(18, 'px')} ${theme.methods.space.value(6, 'px')}`
  },

  padding_extra_large: {
    padding: `${theme.methods.space.value(23, 'px')} ${theme.methods.space.value(7, 'px')}`
  },

  padding_extra_extra_large: {
    padding: `${theme.methods.space.value(28, 'px')} ${theme.methods.space.value(8, 'px')}`
  },

  maxWidth_extra_small: {
    maxWidth: '480px'
  },

  maxWidth_small: {
    maxWidth: '768px'
  },

  maxWidth_regular: {
    maxWidth: '1024px'
  },

  maxWidth_large: {
    maxWidth: '1440px'
  },

  maxWidth_extra_large: {
    maxWidth: '1920px'
  },

  maxWidth_extra_extra_large: {
    maxWidth: '2400px'
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
  },

  '@media only screen and (max-width: 768px)': {
    $margin_small: {
      margin: '44px 24px',
      width: 'calc(100% - 48px) !important'
    },

    $margin_regular: {
      margin: '76px 32px',
      width: 'calc(100% - 64px) !important'
    },

    $margin_large: {
      margin: '104px 40px',
      width: 'calc(100% - 80px) !important'
    },

    $margin_extra_large: {
      margin: '134px 48px',
      width: 'calc(100% - 96px) !important'
    },

    $margin_extra_extra_large: {
      margin: '164px 56px',
      width: 'calc(100% - 112px) !important'
    },

    $margin_vertical_small: {
      margin: '44px 0'
    },

    $margin_vertical_regular: {
      margin: '76px 0'
    },

    $margin_vertical_large: {
      margin: '104px 0'
    },

    $margin_vertical_extra_large: {
      margin: '134px 0'
    },

    $margin_vertical_extra_extra_large: {
      margin: '164px 0'
    },

    $padding_small: {
      padding: `${theme.methods.space.value(6, 'px')} ${theme.methods.space.value(3, 'px')}`
    },

    $padding_regular: {
      padding: `${theme.methods.space.value(10, 'px')} ${theme.methods.space.value(4, 'px')}`
    },

    $padding_large: {
      padding: `${theme.methods.space.value(14, 'px')} ${theme.methods.space.value(5, 'px')}`
    },

    $padding_extra_large: {
      padding: `${theme.methods.space.value(18, 'px')} ${theme.methods.space.value(6, 'px')}`
    },

    $padding_extra_extra_large: {
      padding: `${theme.methods.space.value(22, 'px')} ${theme.methods.space.value(7, 'px')}`
    }
  },

  '@media only screen and (max-width: 480px)': {
    $margin_small: {
      margin: '24px 24px',
      width: 'calc(100% - 48px) !important'
    },

    $margin_regular: {
      margin: '48px 24px',
      width: 'calc(100% - 48px) !important'
    },

    $margin_large: {
      margin: '64px 24px',
      width: 'calc(100% - 48px) !important'
    },

    $margin_extra_large: {
      margin: '84px 24px',
      width: 'calc(100% - 48px) !important'
    },

    $margin_extra_extra_large: {
      margin: '104px 24px',
      width: 'calc(100% - 48px) !important'
    },

    $margin_vertical_small: {
      margin: '24px 0'
    },

    $margin_vertical_regular: {
      margin: '48px 0'
    },

    $margin_vertical_large: {
      margin: '64px 0'
    },

    $margin_vertical_extra_large: {
      margin: '84px 0'
    },

    $margin_vertical_extra_extra_large: {
      margin: '104px 0'
    },

    $padding_small: {
      padding: theme.methods.space.value(3, 'px')
    },

    $padding_regular: {
      padding: `${theme.methods.space.value(6, 'px')} ${theme.methods.space.value(3, 'px')}`
    },

    $padding_large: {
      padding: `${theme.methods.space.value(9, 'px')} ${theme.methods.space.value(3, 'px')}`
    },

    $padding_extra_large: {
      padding: `${theme.methods.space.value(12, 'px')} ${theme.methods.space.value(3, 'px')}`
    },

    $padding_extra_extra_large: {
      padding: `${theme.methods.space.value(15, 'px')} ${theme.methods.space.value(3, 'px')}`
    }
  }
}), { name: 'amaui-Section' });

export type ISize = 'extra_small' | 'small' | 'regular' | 'large' | 'extra_large' | 'extra_extra_large';

export interface ISection extends ILine {
  themed?: boolean;

  title?: string | Partial<Record<IValueBreakpoints, string>>;
  description?: string | Partial<Record<IValueBreakpoints, string>>;

  show?: boolean | Partial<Record<IValueBreakpoints, boolean>>;

  reveal?: boolean;

  backgroundColor?: TPaletteVersion;
  backgroundGradient?: TPaletteVersion[];

  backgroundImage?: IMediaObject;
  backgroundVideo?: IMediaObject;

  overlay?: TPaletteVersion;
  overlayBlur?: number | boolean;

  size?: ISize | Partial<Partial<Record<IValueBreakpoints, ISize>>>;

  margin?: ISize | boolean | Partial<Partial<Record<IValueBreakpoints, ISize | boolean>>>;
  marginVertical?: ISize | boolean | Partial<Partial<Record<IValueBreakpoints, ISize | boolean>>>;

  padding?: ISize | boolean | Partial<Partial<Record<IValueBreakpoints, ISize | boolean>>>;

  maxWidth?: ISize | boolean | Partial<Partial<Record<IValueBreakpoints, ISize | boolean>>>;

  start?: any;
  end?: any;

  MainProps?: IPropsAny;
  TitleProps?: IPropsAny;
  DescriptionProps?: IPropsAny;
  HeaderProps?: IPropsAny;
  RevealProps?: IPropsAny;
  AdditionalProps?: IPropsAny;
}

const Section: React.FC<ISection> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSection?.props?.default, ...props_, ...props_?.AdditionalProps }), [props_]);

  const { classes } = useStyle();

  const {
    themed = true,

    title: title_,
    description: description_,

    show: show_,

    reveal,

    backgroundColor,

    backgroundGradient,

    backgroundImage,

    backgroundVideo,

    overlay,

    overlayBlur,

    size: size_,

    margin: margin_,

    marginVertical: marginVertical_,

    padding: padding_,

    maxWidth: maxWidth_,

    start,
    end,

    MainProps,
    RevealProps,
    TitleProps,
    DescriptionProps,
    HeaderProps,

    className,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  const breakpoints: any = {};

  theme.breakpoints.keys.forEach(key => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  const title = valueBreakpoints(title_, undefined, breakpoints, theme);
  const description = valueBreakpoints(description_, undefined, breakpoints, theme);
  const show = valueBreakpoints(show_, true, breakpoints, theme);
  const size = valueBreakpoints(size_, 'regular', breakpoints, theme);
  const margin = valueBreakpoints(margin_, false, breakpoints, theme);
  const marginVertical = valueBreakpoints(marginVertical_, false, breakpoints, theme);
  const padding = valueBreakpoints(padding_, true, breakpoints, theme);
  const maxWidth = valueBreakpoints(maxWidth_, 'regular', breakpoints, theme);

  let styleBackground: any = {};

  if (backgroundColor) {
    const palette = theme.palette.color[backgroundColor] || theme.methods.color(backgroundColor);

    styleBackground = {
      ...styleBackground,

      backgroundColor: themed ? theme.methods.palette.color.value(undefined as any, 95, true, palette) : palette?.main
    };
  }

  if (is('array', backgroundGradient) && backgroundGradient!.length >= 2) {
    const palette1 = theme.palette.color[backgroundGradient![0]] || theme.methods.color(backgroundGradient![0]);
    const palette2 = theme.palette.color[backgroundGradient![1]] || theme.methods.color(backgroundGradient![1]);
    const palette3 = theme.palette.color[backgroundGradient![2]] || theme.methods.color(backgroundGradient![2]);

    let backgroundImageStyle = '';

    if (backgroundGradient?.length === 2) {
      backgroundImageStyle = themed ? `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${theme.methods.palette.color.colorToRgb(palette1.main, 0.14)} 0%, ${theme.methods.palette.color.colorToRgb(palette2.main, 0.14)} 100%)` : `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${palette1.main} 0%, ${palette2.main} 100%)`;
    }

    if (backgroundGradient?.length === 3) {
      backgroundImageStyle = themed ? `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${theme.methods.palette.color.colorToRgb(palette1.main, 0.14)} 0%, ${theme.methods.palette.color.colorToRgb(palette2.main, 0.14)} 40%, ${theme.methods.palette.color.colorToRgb(palette3.main, 0.14)} 100%)` : `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${palette1.main} 0%, ${palette2.main} 40%, ${palette3.main} 100%)`;
    }

    styleBackground = {
      ...styleBackground,

      backgroundImage: backgroundImageStyle
    };
  }

  if (backgroundImage) {
    const url = backgroundImage?.url || backgroundImage?.src || backgroundImage?.urlSmall || backgroundImage?.srcSmall || (is('string', backgroundImage) ? backgroundImage as any : '');

    if (url) {
      styleBackground = {
        ...styleBackground,

        backgroundImage: `url('${url}')`
      };
    }
  }

  let styleOverlay: any = {};

  if (overlay) {
    const palette = theme.palette.color[overlay] || theme.methods.color(overlay);

    styleOverlay = {
      ...styleOverlay,

      backgroundColor: themed ? theme.methods.palette.color.alpha(theme.methods.palette.color.value(undefined as any, 95, true, palette), 0.74) : palette?.main
    };
  }

  const urlVideo = backgroundVideo?.url || backgroundVideo?.src || backgroundVideo?.urlSmall || backgroundVideo?.srcSmall || (is('string', backgroundVideo) ? backgroundVideo as any : '');

  const Wrapper = reveal ? Reveal : React.Fragment;

  let wrapperProps = {};

  if (reveal) {
    wrapperProps = {
      ...RevealProps
    };
  }

  if (show !== undefined && !show) return null;

  return (
    <Wrapper
      {...wrapperProps}
    >
      <Line
        ref={(item: any) => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        gap={4}

        direction='column'

        align='center'

        fullWidth

        className={classNames([
          staticClassName('Section', theme) && [
            'amaui-Section-root'
          ],

          className,
          classes.root,
          (margin !== false) && (margin && (classes[`margin_${margin}`] || classes[`margin_${size}`])),
          (marginVertical !== false) && (!margin && marginVertical && (classes[`margin_vertical_${marginVertical}`] || classes[`margin_vertical_${size}`])),
          (padding !== false) && (classes[`padding_${padding}`] || classes[`padding_${size}`])
        ])}

        {...other}
      >
        {start}

        <div
          className={classNames([
            classes.background,
            backgroundImage && styleBackground.backgroundImage && classes.backgroundImage
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

          {overlay && (
            <div
              className={classNames([
                classes.backgroundOverlay,
                overlayBlur && classes.backgroundOverlayBlur
              ])}

              style={{
                ...styleOverlay
              }}
            />
          )}
        </div>

        {(title || description) && (
          <Line
            gap={1}

            align='center'

            fullWidth

            {...HeaderProps}

            className={classNames([
              HeaderProps?.className,
              classes.header,
              maxWidth && classes[`maxWidth_${maxWidth}`]
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

            {is('string', description) && (
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                align='center'

                {...DescriptionProps}

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(description)
                }}
              />
            )}
          </Line>
        )}

        <Line
          gap={2}

          direction='column'

          align='center'

          fullWidth

          className={classNames([
            staticClassName('Section', theme) && [
              'amaui-Section-main'
            ],

            MainProps?.className,
            classes.main,
            maxWidth && classes[`maxWidth_${maxWidth}`]
          ])}

          {...MainProps}
        >
          {children}
        </Line>

        {end}
      </Line>
    </Wrapper>
  );
});

Section.displayName = 'amaui-Section';

export default Section;
