import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    width: '100%'
  },

  shape_top: {
    borderRadius: '16px 16px 0 0'
  },

  shape_left: {
    borderRadius: '16px 0 0 16px'
  },

  shape_right: {
    borderRadius: '0 16px 16px 0'
  },

  shape_bottom: {
    borderRadius: '0 0 16px 16px'
  },

  shape_all: {
    borderRadius: '16px'
  },

  shape_none: {
    borderRadius: '0'
  },

  marginHorizontal: {
    width: 'calc(100% - 32px)',
    margin: '0 16px'
  }
}), { name: 'AmauiCardImage' });

const CardImage = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCardImage?.props?.default }), [props_]);

  const {
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
