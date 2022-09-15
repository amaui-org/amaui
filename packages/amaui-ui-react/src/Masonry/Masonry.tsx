import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import useMediaQuery from '../useMediaQuery';
import Line from '../Line';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%',
    position: 'relative'
  }
}), { name: 'AmauiMasonry' });

const Masonry = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMasonry?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key]);
  });

  const [order, setOrder] = React.useState<Record<number, number>>();

  const {
    gap: gap_,
    columns: columns_,

    className,
    style,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(),
    gap: React.useRef<any>(),
    columns: React.useRef<any>(),
    observer: React.useRef<ResizeObserver>(),
    height: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  const styles: any = {
    root: {},
    item: {}
  };

  const gap = valueBreakpoints(gap_, 2, breakpoints, theme);

  const columns = valueBreakpoints(columns_, { xs: 1, sm: 2, md: 3, lg: 4, xl: 5, default: 3 }, breakpoints, theme);

  refs.gap.current = gap;

  refs.columns.current = columns;

  const update = () => {
    // Get all children
    const elements = Array.from(refs.root.current.children);

    const columns = {};
    const order_ = {};

    for (let i = 1; i < refs.columns.current + 1; i++) columns[i] = 0;

    // order them by adding to lowest available order value
    let lowestColumn = 1;
    let lowestValue = Number.MAX_SAFE_INTEGER;
    let highestValue = Number.MIN_SAFE_INTEGER;

    elements.forEach((element: HTMLElement, index: number) => {
      // Update lowest column
      lowestValue = Number.MAX_SAFE_INTEGER;

      Object.keys(columns).forEach(column => {
        if (columns[column] < lowestValue) {
          lowestColumn = +column;
          lowestValue = columns[column];
        }
      });

      const addition = columns[lowestColumn] === 0 ? 0 : (refs.gap.current * theme.space.unit);

      columns[lowestColumn] += element.clientHeight + addition;

      order_[index] = lowestColumn;
    });

    // update height (biggest column height)
    Object.keys(columns).forEach(column => {
      if (columns[column] > highestValue) highestValue = columns[column];
    });

    refs.height.current = highestValue;

    // update order
    setOrder(order_);
  };

  const method = React.useCallback(() => {
    setOrder(undefined);

    update();
  }, []);

  React.useEffect(() => {
    update();

    refs.observer.current = new ResizeObserver(method);
  }, []);

  React.useEffect(() => {
    if (order === undefined) refs.observer.current.disconnect();
    else refs.observer.current.observe(refs.root.current);
  }, [order]);

  React.useEffect(method, [gap, columns]);

  if (order === undefined) {
    styles.item.position = 'absolute';
    styles.item.visibility = 'hidden';
  }

  styles.item.width = `calc(${100 / columns}% - ${(gap * theme.space.unit * (columns - 1)) / columns}px)`;

  if (refs.height.current !== undefined) styles.root.height = refs.height.current;

  return (
    <Line
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      gap={gap}

      wrap='wrap'

      align='unset'

      justify='unset'

      direction='column'

      className={classNames([
        staticClassName('Masonry', theme) && [
          'AmauiMasonry-root'
        ],

        className,
        classes.root
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {React.Children.toArray(children).map((item: any, index: number) => (
        React.cloneElement(item, {
          key: index,

          style: {
            ...item.props.style,

            order: order?.[index],

            ...styles.item
          }
        })
      ))}
    </Line>
  );
});

Masonry.displayName = 'AmauiMasonry';

export default Masonry;
