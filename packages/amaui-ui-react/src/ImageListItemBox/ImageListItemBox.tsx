import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ListItem from '../ListItem';
import { IListItem } from '../ListItem/ListItem';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  position_top: {
    position: 'absolute',
    top: '0',
    insetInline: '0',
    borderRadius: `0 0 ${theme.shape.radius.unit * 3}px ${theme.shape.radius.unit * 3}px`
  },

  position_bottom: {
    position: 'absolute',
    bottom: '0',
    insetInline: '0',
    borderRadius: `${theme.shape.radius.unit * 3}px ${theme.shape.radius.unit * 3}px 0 0`
  }
}), { name: 'amaui-ImageListItemBox' });

export interface IImageListItemBox extends IListItem {
  position?: 'top' | 'bottom';
  backgroundOpacity?: number;
}

const ImageListItemBox: React.FC<IImageListItemBox> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiImageListItemBox?.props?.default, ...props_ }), [props_]);

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
          'amaui-ImageListItemBox-root'
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

ImageListItemBox.displayName = 'amaui-ImageListItemBox';

export default ImageListItemBox;
