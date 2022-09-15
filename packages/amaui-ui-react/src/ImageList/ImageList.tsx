import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import useMediaQuery from '../useMediaQuery';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
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
}), { name: 'AmauiImageList' });

const ImageList = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiImageList?.props?.default }), [props_]);

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
    root: {},
    item: {}
  };

  const gap = valueBreakpoints(gap_, 0.5, breakpoints, theme);
  const rowGap = valueBreakpoints(rowGap_, undefined, breakpoints, theme);
  const columnGap = valueBreakpoints(columnGap_, undefined, breakpoints, theme);
  const columns = valueBreakpoints(columns_, { xs: 1, sm: 2, md: 3, lg: 4, xl: 5, default: 3 }, breakpoints, theme);

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

  let WrapperProps: any = {};

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
            `AmauiImageList-root`,
            `AmauiImageList-version-${version}`
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

ImageList.displayName = 'AmauiImageList';

export default ImageList;
