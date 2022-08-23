import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import useMediaQuery from '../useMediaQuery';
import Line from '../Line';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    flex: '0 1 auto'
  },

  auto: {
    flex: '1 1 auto',
    width: 'auto'
  }
}), { name: 'AmauiGrid' });

const Grid = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiGrid?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    Component: Component_ = 'div',

    auto,
    line,
    wrap = 'wrap',
    direction: direction_ = 'row',
    columns = 10,
    gap: gap_ = 2,
    columnGap: columnGap_,
    offsets,
    values,

    style,
    className,

    children,

    ...other
  } = props;

  // Media query value or value
  const value = (item: any, value_?: any) => {
    if (is('object', item)) {
      for (const breakpoint of theme.breakpoints.keys) {
        if (breakpoints[breakpoint] && item?.[breakpoint] !== undefined) return item[breakpoint];
      }

      if (item?.default !== undefined) return item?.default;
    }

    return value_;
  };

  const gap = is('simple', gap_) ? gap_ : value(gap_, 2);
  const columnGap = is('simple', columnGap_) ? columnGap_ : value(columnGap_);
  const direction = is('simple', direction_) ? direction_ : value(direction_, 'row');

  const styles: any = {
    root: {},
    divider: {}
  };

  const valuesGaps = [0, 0.5, 1, 2, 3, 4, 8, 12, 16];

  if (!valuesGaps.includes(gap)) styles.root.gap = is('string', gap) ? gap : `${gap * theme.space.unit}px`;

  if (!valuesGaps.includes(columnGap)) styles.root.columnGap = is('string', columnGap) ? columnGap : `${columnGap * theme.space.unit}px`;

  let Component = Component_;

  if (line) {
    Component = Line;

    other.wrap = wrap;
    other.gap = gap;
    other.columnGap = columnGap;
    other.direction = direction;
  }

  // Width
  const breakpoint = values && Object.keys(breakpoints).find(item => values && !!values[item] && breakpoints[item]);

  let width = values?.[breakpoint] || columns;
  let offset = offsets?.[breakpoint] || 0;

  const valueGap = columnGap !== undefined ? columnGap : gap;

  if (auto) width = undefined;
  else width = `calc(${(width / columns) * 100}% - ${(valueGap * theme.space.unit) / 2}px)`;

  styles.root.width = width;

  if (offset > 0) styles.root.marginInlineStart = `${(offset / columns) * 100}%`;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Grid', theme) && [
          'AmauiGrid-root',
          auto && 'AmauiGrid-root-auto'
        ],

        className,
        classes.root,
        auto && classes.auto
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, {
          gap,
          columnGap,

          ...other
        })
      ))}
    </Component>
  );
});

Grid.displayName = 'AmauiGrid';

export default Grid;
