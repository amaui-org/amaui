import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'inline-block',
    lineHeight: 0
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
    '&.AmauiType-root': {
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
  }
}), { name: 'AmauiImage' });

const Image = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiImage?.props?.default }), [props_]);

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

    DescriptionProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  let Component: any = 'img';

  const children = React.Children.toArray(children_);

  // picture
  // with sources
  const picture = !!children.length || !!sources?.length;

  if (picture && !description) Component = 'picture';

  // description
  if (description) Component = 'figure';

  const img = !picture && !description;

  // surface
  if (picture || description) {
    other.tonal = tonal;
    other.color = color;

    other.Component = Component;

    Component = Surface;
  }
  else if (img) {
    other.src = src;
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
        'AmauiImage-picture'
      ],

      classes.picture
    ])
  } : {};

  if (!img) other.children = (<>
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

      {!img && (
        <img
          src={src}

          alt={alt || ''}

          width={width}

          height={height}

          loading={loading}

          className={classNames([
            staticClassName('Image', theme) && [
              'AmauiImage-img'
            ],

            className,
            classes.img
          ])}

          style={style}
        />
      )}
    </Wrapper>

    {description && (
      <Type
        Component='figcaption'

        version='b3'

        {...DescriptionProps}

        className={classNames([
          staticClassName('Image', theme) && [
            'AmauiImage-figcaption'
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
  </>);

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Image', theme) && [
          'AmauiImage-root',
          `AmauiImage-alignment-${alignment}`,
          `AmauiImage-alignment-description-${alignmentDescription}`,
          responsive && `AmauiContainer-responsive`,
          maxWidth && `AmauiContainer-max-width-${maxWidth}`,
          fullWidth && `AmauiContainer-full-width-${fullWidth}`,
          img && `AmauiImage-img`,
          (picture && !description) && `AmauiImage-picture`,
          description && `AmauiImage-figure`,
        ],

        className,
        classes.root,
        classes[`alignment_${alignment}`],
        responsive && classes.responsive,
        maxWidth && classes[`maxWidth_${maxWidth}`],
        fullWidth && classes.fullWidth,
        img && classes.root_img,
        (picture && !description) && classes.root_picture,
        description && classes.root_figure
      ])}

      {...other}
    />
  );
});

Image.displayName = 'AmauiImage';

export default Image;
