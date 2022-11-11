import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName, TColor, TElevation, TTonal, TVersion } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    width: '100%'
  },

  shape_top: {
    borderRadius: `${theme.shape.radius.unit * 3}px ${theme.shape.radius.unit * 3}px 0 0`
  },

  shape_left: {
    borderRadius: `${theme.shape.radius.unit * 3}px 0 0 ${theme.shape.radius.unit * 3}px`
  },

  shape_right: {
    borderRadius: `0 ${theme.shape.radius.unit * 3}px ${theme.shape.radius.unit * 3}px 0`
  },

  shape_bottom: {
    borderRadius: `0 0 ${theme.shape.radius.unit * 3}px ${theme.shape.radius.unit * 3}px`
  },

  shape_all: {
    borderRadius: `${theme.shape.radius.unit * 3}px`
  },

  shape_none: {
    borderRadius: `0`
  },

  marginHorizontal: {
    width: 'calc(100% - 48px)',
    margin: '0 24px'
  }
}), { name: 'AmauiCardImage' });

export interface ICardImage extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;
  version?: TVersion;
  elevation?: TElevation;

  alt?: string;
  image?: string;
  shape?: 'all' | 'none' | 'top' | 'left' | 'bottom' | 'right';
  marginHorizontal?: boolean;
}

const CardImage = React.forwardRef((props_: ICardImage, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCardImage?.props?.default }), [props_]);

  const {
    tonal,
    color,
    version,
    elevation,

    alt,
    image,
    shape = 'bottom',
    marginHorizontal,

    Component = 'img',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Component
      ref={ref}

      alt={alt || ''}

      src={image}

      className={classNames([
        staticClassName('CardImage', theme) && [
          `AmauiCardImage-root`,
          `AmauiCardImage-shape-${shape}`,
          marginHorizontal && `AmauiCardImage-margin-horizontal`
        ],

        className,
        classes.root,
        classes[`shape_${shape}`],
        marginHorizontal && classes.marginHorizontal
      ])}

      {...other}
    />
  );
});

CardImage.displayName = 'AmauiCardImage';

export default CardImage;
