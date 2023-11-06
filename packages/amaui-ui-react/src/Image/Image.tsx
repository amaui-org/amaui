import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Icon, { IIcon } from '../Icon';
import Type from '../Type';
import Surface from '../Surface';

import { IBaseElement, staticClassName, TColor, TPropsAny, TTonal } from '../utils';
import Line from '../Line';

const useStyle = styleMethod(theme => ({
  root: {
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
    display: 'inline-block'
  },

  figcaption: {
    '&.amaui-Type-root': {
      padding: '12px 16px'
    }
  },

  alignment_description_start: {
    textAlign: 'start'
  },

  alignment_description_left: {
    textAlign: 'left'
  },

  alignment_description_center: {
    textAlign: 'center'
  },

  alignment_description_right: {
    textAlign: 'right'
  },

  alignment_description_end: {
    textAlign: 'end'
  },

  alignment_start: {
    marginInlineStart: 'auto'
  },

  alignment_left: {
    marginLeft: 'auto'
  },

  alignment_center: {
    marginInline: 'auto'
  },

  alignment_right: {
    marginRight: 'auto'
  },

  alignment_end: {
    marginInlineEnd: 'auto'
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
    width: '100vw',
    maxWidth: '240px',
    aspectRatio: '1 / 1',
    background: theme.palette.background.default.primary,
    cursor: 'default',
    userSelect: 'none'
  }
}), { name: 'amaui-Image' });

const IconMaterialBrokenImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImage'

      short_name='BrokenImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm1-8.425 3.3-3.3q.15-.15.325-.213Q9.8 9 10 9t.375.062q.175.063.325.213l3.3 3.3 3.3-3.3q.15-.15.325-.213Q17.8 9 18 9t.375.062q.175.063.325.213l.3.3V5H5v6.575ZM5 19h14v-6.6l-1-1-3.3 3.3q-.125.125-.312.2-.188.075-.388.075t-.375-.075q-.175-.075-.325-.2L10 11.4l-3.3 3.3q-.15.15-.325.212-.175.063-.375.063t-.375-.063Q5.45 14.85 5.3 14.7l-.3-.3Zm0 0v-6.6 2V5v9.4Z" />
    </Icon>
  );
});

export interface IImage extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;

  src?: string;
  sources?: Array<string>;
  alt?: string;
  description?: string;
  alignmentDescription?: 'start' | 'left' | 'center' | 'right' | 'end';

  width?: number;
  height?: number;

  alignment?: 'start' | 'left' | 'center' | 'right' | 'end';
  responsive?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'unset';

  loading?: 'eager' | 'lazy';

  IconNoImage?: any;

  NoImageProps?: TPropsAny;
  DescriptionProps?: TPropsAny;
}

const Image = React.forwardRef((props_: IImage, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiImage?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    src,
    sources,
    alt,
    description,
    alignmentDescription = 'start',

    width,
    height,

    alignment = 'center',
    responsive = true,
    fullWidth,
    maxWidth,

    loading,

    IconNoImage = IconMaterialBrokenImage,

    NoImageProps,
    DescriptionProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  let Component: any = 'img';

  const [loaded, setLoaded] = React.useState(false);
  const [source, setSource] = React.useState('');

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
    const isLoaded = await imageLoad(src);

    setSource(isLoaded ? src : '');

    setLoaded(true);
  }, [src, loaded]);

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {
    if (loaded) init();
  }, [src]);

  if (!loaded) return null;

  const noImage = !source;

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

  const noImageElement = (
    <Line
      align='center'

      justify='center'

      className={classNames([
        staticClassName('Image', theme) && [
          'amaui-Image-noImage-element'
        ],

        classes.noImage
      ])}
    >
      <IconMaterialBrokenImage
        size='very large'
      />
    </Line>
  );

  const Wrapper = (picture && description) ? 'picture' : React.Fragment;

  const WrapperProps = (picture && description) ? {
    className: classNames([
      staticClassName('Image', theme) && [
        'amaui-Image-picture'
      ],

      classes.picture
    ])
  } : {};

  if (!rootIsImage) {
    let imgElement = (
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

    if (noImage) {
      imgElement = noImageElement;
    }

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
            classes[`alignment_description_${alignmentDescription}`]
          ])}
        >
          {description}
        </Type>
      )}
    </>;
  }
  else {
    if (noImage) {
      Component = Line;

      other.children = noImageElement;
    }
  }

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Image', theme) && [
          'amaui-Image-root',
          noImage && 'amaui-Image-noImage',
          (picture && !description) && `amaui-Image-picture`
        ],

        className,
        classes.root,
        classes[`alignment_${alignment}`],
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
