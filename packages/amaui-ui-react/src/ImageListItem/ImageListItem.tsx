import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import useMediaQuery from '../useMediaQuery';

import { staticClassName, TValueBreakpoints, valueBreakpoints } from '../utils';
import { ILine } from '../Line/Line';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',

    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      flex: '1 1 auto'
    }
  },

  version_masonry: {
    display: 'block',
    height: 'auto'
  }
}), { name: 'AmauiImageListItem' });

export interface IImageListItem extends ILine {
  rows?: number | Record<TValueBreakpoints, number>;
  columns?: number | Record<TValueBreakpoints, number>;
  version?: 'standard' | 'vowen' | 'masonry';
}

const ImageListItem = React.forwardRef((props_: IImageListItem, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiImageListItem?.props?.default, ...props_ }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key]);
  });

  const { classes } = useStyle(props);

  const {
    rows: rows_,
    columns: columns_,
    version = 'standard',

    Component = 'li',

    className,
    style,

    children: children_,

    ...other
  } = props;

  const styles: any = {
    root: {

    }
  };

  const rows = valueBreakpoints(rows_, 1, breakpoints, theme);
  const columns = valueBreakpoints(columns_, 1, breakpoints, theme);

  if (version !== 'masonry') {
    styles.root.gridRowEnd = `span ${rows}`;
    styles.root.gridColumnEnd = `span ${columns}`;
  }

  const children = React.Children.toArray(children_);

  if (children.length > 1) other.justify = 'flex-end';

  return (
    <Line
      ref={ref}

      gap={0}

      direction='column'

      align='center'

      justify='center'

      Component={Component}

      className={classNames([
        staticClassName('ImageListItem', theme) && [
          'AmauiImageListItem-root',
          `AmauiImageListItem-version-${version}`
        ],

        className,
        classes.root,
        classes[`version_${version}`]
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {children}
    </Line>
  );
});

ImageListItem.displayName = 'AmauiImageListItem';

export default ImageListItem;
