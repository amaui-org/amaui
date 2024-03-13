import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';
import { IBaseElement, ITonal, IColor, IVersion, IElevation } from '../types';

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
}), { name: 'amaui-CardImage' });

export interface ICardImage extends IBaseElement {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;
  elevation?: IElevation;

  alt?: string;
  image?: string;
  shape?: 'all' | 'none' | 'top' | 'left' | 'bottom' | 'right';
  marginHorizontal?: boolean;
}

const CardImage: React.FC<ICardImage> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCardImage?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
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
          `amaui-CardImage-root`
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

CardImage.displayName = 'amaui-CardImage';

export default CardImage;
