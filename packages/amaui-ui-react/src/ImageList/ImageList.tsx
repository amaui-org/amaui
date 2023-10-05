import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import useMediaQuery from '../useMediaQuery';

import { IBaseElement, staticClassName, TValueBreakpoints, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    listStyleType: 'none'
  },

  version_standard: {
    display: 'grid'
  },

  version_quilted: {
    display: 'grid'
  },

  version_vowen: {
    display: 'grid',

    '& > *:nth-of-type(2n)': {
      height: '70%',
      overflow: 'hidden',
      alignSelf: 'center'
    }
  },

  version_masonry: {
    display: 'block'
  }
}), { name: 'amaui-ImageList' });

export interface IImageList extends IBaseElement {
  version?: 'standard' | 'vowen' | 'masonry';

  gap?: number | Record<TValueBreakpoints, number>;
  rowGap?: number | Record<TValueBreakpoints, number>;
  columnGap?: number | Record<TValueBreakpoints, number>;
  columns?: number | Record<TValueBreakpoints, number>;
}

const ImageList = React.forwardRef((props_: IImageList, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiImageList?.props?.default, ...props_ }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key]);
  });

  const { classes } = useStyle(props);

  const {
    version = 'standard',

    gap: gap_,
    rowGap: rowGap_,
    columnGap: columnGap_,
    columns: columns_,

    Component = 'ul',

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {

    },
    item: {}
  };

  const gap = valueBreakpoints(gap_, 0.5, breakpoints, theme);
  const rowGap = valueBreakpoints(rowGap_, undefined, breakpoints, theme);
  const columnGap = valueBreakpoints(columnGap_, undefined, breakpoints, theme);
  const columns = valueBreakpoints(columns_, { xxs: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 7, default: 4 }, breakpoints, theme);

  if (['standard', 'quilted', 'vowen'].includes(version)) {
    styles.root.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }

  if (version === 'masonry') styles.root.columnCount = columns;

  if (rowGap !== undefined || columnGap !== undefined) {
    if (rowGap !== undefined) {
      styles.root.rowGap = `${rowGap}px`;

      if (version === 'masonry') styles.item.marginBottom = `${rowGap * theme.space.unit}px`;
    }

    if (columnGap !== undefined) styles.root.columnGap = `${columnGap * theme.space.unit}px`;
  }
  else {
    styles.root.gap = `${gap * theme.space.unit}px`;

    if (version === 'masonry') styles.item.marginBottom = `${gap * theme.space.unit}px`;
  }

  const Wrapper = version !== 'masonry' ? React.Fragment : 'div';

  const WrapperProps: any = {};

  if (version === 'masonry') {
    WrapperProps.ref = ref;

    WrapperProps.style = {
      ...style
    };

    other.style = {
      ...styles.root
    };
  }
  else {
    other.ref = ref;

    other.style = {
      ...styles.root,

      ...style
    };
  }

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Component
        className={classNames([
          staticClassName('ImageList', theme) && [
            `amaui-ImageList-root`
          ],

          className,
          classes.root,
          classes[`version_${version}`]
        ])}

        {...other}
      >
        {React.Children.toArray(children).map((item: any, index: number) => (
          React.cloneElement(item, {
            key: index,

            version,

            style: {
              ...styles.item,

              ...item.props.style
            }
          })
        ))}
      </Component>
    </Wrapper>
  );
});

ImageList.displayName = 'amaui-ImageList';

export default ImageList;
