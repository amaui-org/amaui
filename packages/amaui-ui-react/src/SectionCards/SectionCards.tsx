import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, textToInnerHTML } from '@amaui/utils';
import { TPaletteVersion, classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Section, { ISection } from '../Section/Section';
import Line from '../Line';
import Type from '../Type';
import Button from '../Button';
import { staticClassName } from '../utils';
import { IMediaObject, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  main: {
    maxWidth: '768px',
    zIndex: '14'
  },

  items: {
    padding: '16px 0',
    overflow: 'auto hidden'
  },

  item: {
    position: 'relative',
    flex: '0 0 auto',
    width: '100%',
    userSelect: 'none',

    '&:active': {
      '& $background': {
        borderRadius: theme.methods.shape.radius.value(5)
      }
    }
  },

  item_size_small: {
    maxWidth: '174px',
  },

  item_size_regular: {
    maxWidth: '254px',
  },

  item_size_large: {
    maxWidth: '314px',
  },

  background: {
    position: 'relative',
    aspectRatio: '3 / 4',
    borderRadius: theme.methods.shape.radius.value(3),
    zIndex: '1',
    transition: theme.methods.transitions.make('border-radius')
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
}), { name: 'amaui-SectionCards' });

export interface ISectionCardsItem {
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

export interface ISectionCards extends ISection {
  size?: 'small' | 'regular' | 'large';

  values?: ISectionCards[];

  ItemProps?: IPropsAny;
  ItemsProps?: IPropsAny;
}

const Element: React.FC<ISectionCards> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionCards?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    size = 'regular',

    values = [],

    ItemProps,
    ItemsProps,

    className,

    ...other
  } = props;

  const navigate = useNavigate();

  const refs = {
    root: React.useRef<any>()
  };

  const getItem = React.useCallback((item: ISectionCardsItem, index: number) => {
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
      <Line
        key={index}

        gap={size === 'large' ? 3 : size === 'regular' ? 2 : 1}

        align='center'

        justify='center'

        fullWidth

        {...ItemProps}

        className={classNames([
          staticClassName('SectionCards', theme) && [
            'amaui-SectionCards-item'
          ],

          ItemProps?.className,
          classes.item,
          classes[`item_size_${size}`]
        ])}
      >
        <Line
          fullWidth

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
        </Line>

        <Line
          gap={1}

          align='center'

          fullWidth

          className={classes.main}
        >
          {item.name && (
            <Type
              version={size === 'large' ? 'h3' : size === 'regular' ? 't1' : 't2'}

              align='center'

              fullWidth

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(item.name)
              }}

              {...item.propsName}
            />
          )}

          {item.description && (
            <Type
              version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

              priority='secondary'

              align='center'

              fullWidth

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(item.description)
              }}

              {...item.propsDescription}
            />
          )}

          {(item.to || item.link) && (
            <Line
              align='center'

              fullWidth

              {...item.propsButtonWrapper}

              style={{
                marginTop: 8,

                ...item.propsButtonWrapper?.style
              }}
            >
              <Button
                version='outlined'

                size={size === 'large' ? 'regular' : size === 'regular' ? 'small' : 'small'}

                onClick={() => item.to ? navigate(item.to) : window.open(item.link, 'blank')}

                {...item.propsButton}
              >
                {item.buttonText || 'Click here'}
              </Button>
            </Line>
          )}
        </Line>
      </Line>
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

      className={classNames([
        staticClassName('SectionCards', theme) && [
          'amaui-SectionCards-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={size === 'large' ? 3.5 : size === 'regular' ? 2.5 : 1.5}

        align='flex-start'

        fullWidth

        direction='row'

        {...ItemsProps}

        className={classNames([
          staticClassName('SectionCards', theme) && [
            'amaui-SectionCards-items'
          ],

          ItemsProps?.className,
          classes.items
        ])}
      >
        {values?.map((item, index) => getItem(item, index))}
      </Line>
    </Section>
  );
});

Element.displayName = 'amaui-SectionCards';

export default Element;
