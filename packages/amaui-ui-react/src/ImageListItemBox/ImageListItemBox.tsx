import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import ListItem from '../ListItem';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  position_top: {
    position: 'absolute',
    top: 0,
    insetInline: 0,
    borderRadius: `0 0 ${theme.shape.radius.unit * 3}px ${theme.shape.radius.unit * 3}px`
  },

  position_bottom: {
    position: 'absolute',
    bottom: 0,
    insetInline: 0,
    borderRadius: `${theme.shape.radius.unit * 3}px ${theme.shape.radius.unit * 3}px 0 0`
  }
}), { name: 'AmauiImageListItemBox' });

const ImageListItemBox = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiImageListItemBox?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    position,
    backgroundOpacity = 0.74,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  return (
    <ListItem
      ref={ref}

      backgroundOpacity={backgroundOpacity}

      Component={Component}

      className={classNames([
        staticClassName('ImageListItemBox', theme) && [
          'AmauiImageListItemBox-root',
          position && `AmauiImageListItemBox-position-${position}`
        ],

        className,
        classes.root,
        position && classes[`position_${position}`]
      ])}

      {...other}
    >
      {children}
    </ListItem>
  );
});

ImageListItemBox.displayName = 'AmauiImageListItemBox';

export default ImageListItemBox;
