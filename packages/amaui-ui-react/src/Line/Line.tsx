import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Divider from '../Divider';
import useMediaQuery from '../useMediaQuery';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex'
  },

  // wrap
  wrap_nowrap: { flexWrap: 'nowrap' },

  wrap_wrap: { flexWrap: 'wrap' },

  'wrap_wrap-reverse': { flexWrap: 'wrap-reverse' },

  // direction
  direction_row: { flexDirection: 'row' },

  'direction_row-reverse': { flexDirection: 'row-reverse' },

  direction_column: { flexDirection: 'column' },

  'direction_column-reverse': { flexDirection: 'column-reverse' },

  // align
  'align_inherit': { alignItems: 'inherit' },

  'align_initial': { alignItems: 'initial' },

  'align_flex-start': { alignItems: 'flex-start' },

  align_center: { alignItems: 'center' },

  'align_flex-end': { alignItems: 'flex-end' },

  'align_baseline': { alignItems: 'baseline' },

  'align_stretch': { alignItems: 'stretch' },

  // justify
  justify_inherit: { justifyContent: 'inherit' },

  justify_initial: { justifyContent: 'initial' },

  'justify_flex-start': { justifyContent: 'flex-start' },

  justify_center: { justifyContent: 'center' },

  'justify_flex-end': { justifyContent: 'flex-end' },

  'justify_space-around': { justifyContent: 'space-around' },

  'justify_space-between': { justifyContent: 'space-between' },

  'justify_space-evenly': { justifyContent: 'space-evenly' },

  // gaps
  // gap
  gap_0: { gap: 0 },

  'gap_05': { gap: `${0.5 * theme.space.unit}px` },

  'gap_1': { gap: `${1 * theme.space.unit}px` },

  'gap_2': { gap: `${2 * theme.space.unit}px` },

  'gap_3': { gap: `${3 * theme.space.unit}px` },

  'gap_4': { gap: `${4 * theme.space.unit}px` },

  'gap_8': { gap: `${8 * theme.space.unit}px` },

  'gap_12': { gap: `${12 * theme.space.unit}px` },

  'gap_16': { gap: `${16 * theme.space.unit}px` },

  // rowGap
  rowGap_0: { rowGap: 0 },

  'rowGap_05': { rowGap: `${0.5 * theme.space.unit}px` },

  'rowGap_1': { rowGap: `${1 * theme.space.unit}px` },

  'rowGap_2': { rowGap: `${2 * theme.space.unit}px` },

  'rowGap_3': { rowGap: `${3 * theme.space.unit}px` },

  'rowGap_4': { rowGap: `${4 * theme.space.unit}px` },

  'rowGap_8': { rowGap: `${8 * theme.space.unit}px` },

  'rowGap_12': { rowGap: `${12 * theme.space.unit}px` },

  'rowGap_16': { rowGap: `${16 * theme.space.unit}px` },

  // columnGap
  columnGap_0: { columnGap: 0 },

  'columnGap_05': { columnGap: `${0.5 * theme.space.unit}px` },

  'columnGap_1': { columnGap: `${1 * theme.space.unit}px` },

  'columnGap_2': { columnGap: `${2 * theme.space.unit}px` },

  'columnGap_3': { columnGap: `${3 * theme.space.unit}px` },

  'columnGap_4': { columnGap: `${4 * theme.space.unit}px` },

  'columnGap_8': { columnGap: `${8 * theme.space.unit}px` },

  'columnGap_12': { columnGap: `${12 * theme.space.unit}px` },

  'columnGap_16': { columnGap: `${16 * theme.space.unit}px` }
}), { name: 'AmauiLine' });

const Line = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiLine?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key]);
  });

  const { classes } = useStyle(props);

  const {
    align: align_,
    justify: justify_,
    direction: direction_,
    gap: gap_,
    rowGap: rowGap_,
    columnGap: columnGap_,
    divider: divider_,
    wrap: wrap_,

    DividerProps = {},
    Component = 'div',

    className,
    style,

    children: children_,

    ...other
  } = props;

  const align = valueBreakpoints(align_, 'flex-start', breakpoints, theme);
  const justify = valueBreakpoints(justify_, 'flex-start', breakpoints, theme);
  const direction = valueBreakpoints(direction_, 'column', breakpoints, theme);
  const gap = valueBreakpoints(gap_, 2, breakpoints, theme);
  const rowGap = valueBreakpoints(rowGap_, undefined, breakpoints, theme);
  const columnGap = valueBreakpoints(columnGap_, undefined, breakpoints, theme);
  const divider = valueBreakpoints(divider_, undefined, breakpoints, theme);
  const wrap = valueBreakpoints(wrap_, undefined, breakpoints, theme);

  const styles: any = {
    root: {},
    divider: {}
  };

  const valuesGaps = [0, 0.5, 1, 2, 3, 4, 8, 12, 16];

  if (rowGap !== undefined || columnGap !== undefined) {
    if (!valuesGaps.includes(rowGap)) styles.root.rowGap = is('string', rowGap) ? rowGap : `${rowGap * theme.space.unit}px`;

    if (!valuesGaps.includes(columnGap)) styles.root.columnGap = is('string', columnGap) ? columnGap : `${columnGap * theme.space.unit}px`;
  }
  else {
    if (!valuesGaps.includes(gap)) styles.root.gap = is('string', gap) ? gap : `${gap * theme.space.unit}px`;
  }

  const children = React.Children.toArray(children_);

  const Divider_ = (
    <Divider
      flex

      orientation={direction.includes('row') ? 'vertical' : 'horizontal'}

      {...DividerProps}
    />
  );

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Line', theme) && [
          'AmauiLine-root',
          wrap && `AmauiLine-wrap-${wrap}`,
          direction && `AmauiLine-direction-${direction}`,
          align && `AmauiLine-align-${align}`,
          justify && `AmauiLine-justify-${justify}`,
          gap && `AmauiLine-gap-${gap}`,
          rowGap !== undefined && `AmauiLine-rowGap-${rowGap}`,
          columnGap !== undefined && `AmauiLine-columnGap-${columnGap}`,
          divider && `AmauiLine-divider`
        ],

        className,
        classes.root,
        classes[`wrap_${wrap}`],
        classes[`direction_${direction}`],
        classes[`align_${align}`],
        classes[`justify_${justify}`],
        classes[`gap_${String(gap).replace('.', '')}`],
        classes[`rowGap_${String(rowGap).replace('.', '')}`],
        classes[`columnGap_${String(columnGap).replace('.', '')}`]
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {children.flatMap((item: any, index: number) => (!divider || index === children.length - 1) ? [item] : [item, Divider_])}
    </Component>
  );
});

Line.displayName = 'AmauiLine';

export default Line;
