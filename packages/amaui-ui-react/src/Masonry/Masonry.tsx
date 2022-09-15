import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import useMediaQuery from '../useMediaQuery';
import Line from '../Line';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%',
    position: 'relative'
  },

  lineBreak: {
    flex: '1 1 100%'
  }
}), { name: 'AmauiMasonry' });

const Masonry = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMasonry?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key]);
  });

  const [values, setValues] = React.useState<any>({ order: {}, item: {} });

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
    if (refs.root.current) {
      // Get all children
      const elements = Array.from(refs.root.current.children).slice(0, -(refs.columns.current - 1));

      const columns = {};
      const order = {};

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

        order[index] = lowestColumn;
      });

      // update height (biggest column height)
      Object.keys(columns).forEach(column => {
        if (columns[column] > highestValue) highestValue = columns[column];
      });

      refs.height.current = highestValue + (gap * theme.space.unit);

      // update order
      setValues({
        order,
        item: {
          width: `calc(${100 / refs.columns.current}% - ${(gap * theme.space.unit * (refs.columns.current - 1)) / refs.columns.current}px)`
        }
      });
    }
  };

  const method = React.useCallback(update, []);

  React.useEffect(() => {
    update();

    refs.observer.current = new ResizeObserver(method);
  }, []);

  React.useEffect(() => {
    if (!Object.keys(values.order).length) refs.observer.current.disconnect();
    else[refs.root.current, ...Array.from(refs.root.current.children).slice(0, -(refs.columns.current - 1))].forEach((item: any) => refs.observer.current.observe(item));
  }, [values]);

  React.useEffect(method as any, [gap, columns]);

  styles.item.margin = 0;

  if (refs.height.current !== undefined) styles.root.height = refs.height.current;

  styles.root.gap = 'unset';

  styles.root.rowGap = `${gap * theme.space.unit}px`;

  styles.root.columnGap = `${(gap / 2) * theme.space.unit}px`;

  return (
    <Line
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

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

            order: values.order?.[index],

            ...styles.item,

            ...values.item
          }
        })
      ))}

      {new Array(columns - 1).fill(true).map((item: any, index: number) => (
        <div
          key={index}

          className={classNames([
            staticClassName('Masonry', theme) && [
              'AmauiMasonry-lineBreak'
            ],

            classes.lineBreak
          ])}

          style={{
            order: index + 1
          }}
        />
      ))}
    </Line>
  );
});

Masonry.displayName = 'AmauiMasonry';

export default Masonry;
