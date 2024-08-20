import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import LineElement from '../Line';
import useVisible, { IUseVisible } from '../useVisible/useVisible';
import { staticClassName } from '../utils';
import { IBaseElement, ITonal, IColor, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    lineHeight: '0'
  },

  root_figure: {
    '& img': {
      height: 'auto',
      width: '100%'
    }
  },

  root_picture: {
    '& img': {
      height: 'auto',
      width: '100%'
    }
  },

  picture: {
    position: 'relative',
    display: 'inline-block'
  },

  figcaption: {
    '&.amaui-Type-root': {
      padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(2, 'px')}`
    }
  },

  align_description_start: {
    textAlign: 'start'
  },

  align_description_left: {
    textAlign: 'left'
  },

  align_description_center: {
    textAlign: 'center'
  },

  align_description_right: {
    textAlign: 'right'
  },

  align_description_end: {
    textAlign: 'end'
  },

  align_start: {
    marginInlineEnd: 'auto'
  },

  align_left: {
    marginLeft: 'auto'
  },

  align_center: {
    marginInline: 'auto'
  },

  align_right: {
    marginRight: 'auto'
  },

  align_end: {
    marginInlineStart: 'auto'
  },

  align_unset: {
    marginInline: 'unset'
  },

  responsive: {
    height: 'auto',
    maxWidth: '100%',
  },

  // maxWidth
  maxWidth_xxs: { maxWidth: '320px' },

  maxWidth_xs: { maxWidth: '400px' },

  maxWidth_sm: { maxWidth: '600px' },

  maxWidth_rg: { maxWidth: '960px' },

  maxWidth_lg: { maxWidth: '1240px' },

  maxWidth_xl: { maxWidth: '1920px' },

  maxWidth_unset: { maxWidth: 'unset' },

  fullWidth: {
    display: 'block',
    width: '100%'
  },

  noImage: {
    width: '100%',
    maxWidth: '540px',
    aspectRatio: '4 / 3',
    backgroundColor: theme.palette.color.neutral[100],
    backgroundImage: `linear-gradient(${theme.palette.light ? '130deg' : '330deg'}, ${theme.methods.palette.color.colorToRgb(theme.palette.color.primary.main, 0.14)} 0%, ${theme.methods.palette.color.colorToRgb(theme.palette.color.secondary.main, 0.14)} 40%, ${theme.methods.palette.color.colorToRgb(theme.palette.color.quaternary.main, 0.14)} 100%)`,
    cursor: 'default',
    userSelect: 'none'
  }
}), { name: 'amaui-Image' });

export interface IImage extends IBaseElement {
  tonal?: ITonal;
  color?: IColor;

  src?: string;
  sources?: Array<string>;
  alt?: string;
  description?: string;
  alignDescription?: 'start' | 'left' | 'center' | 'right' | 'end';

  width?: number;
  height?: number;

  lazyLoad?: boolean;

  align?: 'start' | 'left' | 'center' | 'right' | 'end';
  responsive?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset';

  loading?: 'eager' | 'lazy';

  IconNoImage?: any;

  NoImageProps?: IPropsAny;
  DescriptionProps?: IPropsAny;
  UseVisibleProps?: IUseVisible;
}

const Image: React.FC<IImage> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiImage?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    src,
    url,
    urlSmall,

    sources,
    alt,
    description,
    alignDescription = 'start',

    width,
    height,

    align,
    responsive = true,
    lazyLoad = true,
    fullWidth,
    maxWidth,

    loading,

    NoImageProps,
    DescriptionProps,
    UseVisibleProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  let Component: any = 'img';

  const [root, setRoot] = React.useState<any>();
  const [loaded, setLoaded] = React.useState(false);
  const [source, setSource] = React.useState('');

  const visiblity = lazyLoad ? useVisible({
    element: root,

    ...UseVisibleProps
  }) : { visible: true };

  const refs = {
    root: React.useRef<HTMLElement>(),
    loaded: React.useRef(loaded)
  };

  refs.loaded.current = loaded;

  const imageLoad = React.useCallback((value: any) => new Promise((resolve, reject) => {
    const image = window.document.createElement('img');

    let imageLoaded = false;

    const check = () => {
      if (image.complete && image.naturalWidth !== 0) imageLoaded = true;

      if (imageLoaded) return resolve(true);

      setTimeout(check, 40);
    };

    const onLoad = (event: Event): any => {
      check();
    };

    const onError = (): any => {
      resolve(false);
    };

    image.onload = onLoad;

    image.onerror = onError;

    image.src = value;

    if (image.complete) return resolve(true);
  }), []);

  const init = React.useCallback(async () => {
    const URL = src || url || urlSmall;

    const isLoaded = await imageLoad(URL);

    setSource(isLoaded ? URL : '');

    setLoaded(true);
  }, [src, url, urlSmall, loaded]);

  React.useEffect(() => {
    if (visiblity?.visible && !refs.loaded.current) {
      init();
    }
  }, [visiblity?.visible]);

  React.useEffect(() => {
    if (loaded) init();
  }, [src]);

  const noImage = loaded && !source;

  const children = React.Children.toArray(children_);

  // picture
  // with sources
  let isPicture = false;

  const picture = !!children.length || !!sources?.length;

  if (picture && !description) {
    Component = 'picture';

    isPicture = true;
  }

  // description
  if (description) Component = 'figure';

  const rootIsImage = !picture && !description;

  // surface
  if (picture || description) {
    other.tonal = tonal;
    other.color = color;

    other.Component = Component;

    Component = Surface;
  }
  else if (rootIsImage && !noImage) {
    other.src = source;
    other.atl = alt;
    other.width = width;
    other.height = height;
    other.loading = loading;
    other.style = style;
  }

  const Wrapper = (picture && description) ? 'picture' : React.Fragment;

  const WrapperProps = (picture && description) ? {
    className: classNames([
      staticClassName('Image', theme) && [
        'amaui-Image-picture'
      ],

      classes.picture
    ])
  } : {};

  if (!rootIsImage && !noImage) {
    const imgElement = (
      <img
        src={src}

        alt={alt || ''}

        width={width}

        height={height}

        loading={loading}

        className={classNames([
          staticClassName('Image', theme) && [
            'amaui-Image-img'
          ],

          className,
          classes.img
        ])}

        style={style}
      />
    );

    other.children = <>
      <Wrapper
        {...WrapperProps}
      >
        {sources?.length && sources.map((item: any, index: number) => (
          <source
            key={index}

            {...item}
          />
        ))}

        {children}

        {imgElement}
      </Wrapper>

      {description && (
        <Type
          Component='figcaption'

          version='b3'

          {...DescriptionProps}

          className={classNames([
            staticClassName('Image', theme) && [
              'amaui-Image-figcaption'
            ],

            DescriptionProps?.className,
            className,
            classes.figcaption,
            classes[`align_description_${alignDescription}`]
          ])}
        >
          {description}
        </Type>
      )}
    </>;
  }

  if (noImage) {
    Component = Line;

    other.fullWidth = true;

    other.children = children;

    delete other.Component;
  }

  return (
    <Component
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        setRoot(item);

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('Image', theme) && [
          'amaui-Image-root',
          noImage && 'amaui-Image-no-image',
          (picture && !description) && `amaui-Image-picture`
        ],

        className,
        classes.root,
        classes[`align_${align}`],
        noImage && classes.noImage,
        responsive && classes.responsive,
        maxWidth && classes[`maxWidth_${maxWidth}`],
        fullWidth && classes.fullWidth,
        rootIsImage && classes.root_img,
        (picture && !description) && classes.root_picture,
        description && classes.root_figure
      ])}

      {...other}
    />
  );
});

Image.displayName = 'amaui-Image';

export default Image;
