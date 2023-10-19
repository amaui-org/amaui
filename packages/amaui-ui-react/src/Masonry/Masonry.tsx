import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import useMediaQuery from '../useMediaQuery';
import Line from '../Line';
import { ILine } from '../Line/Line';

import { staticClassName, TValueBreakpoints, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    position: 'relative'
  },

  lineBreak: {
    flex: '1 1 100%'
  }
}), { name: 'amaui-Masonry' });

export interface IMasonry extends Omit<ILine, 'gap'> {
  gap?: number | Record<TValueBreakpoints, number>;
  columns?: number | Record<TValueBreakpoints, number>;
}

const Masonry = React.forwardRef((props_: IMasonry, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiMasonry?.props?.default, ...props_ }), [props_]);

  const {
    gap: gap_,
    columns: columns_,

    className,
    style,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);

  const refs = {
    root: React.useRef<any>(),
    gap: React.useRef<any>(),
    columns: React.useRef<any>(),
    init: React.useRef<any>()
  };

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  refs.init.current = init;

  const { classes } = useStyle(props);

  const styles: any = {
    root: {},
    item: {}
  };

  const gap = valueBreakpoints(gap_, 2, breakpoints, theme);

  const columns = valueBreakpoints(columns_, { xxs: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 7, default: 4 }, breakpoints, theme);

  refs.gap.current = gap;

  refs.columns.current = columns;

  const update = () => {
    if (refs.root.current) {
      // Get all children
      const elements = Array.from(refs.root.current.children).slice(0, refs.columns.current > 1 ? -(refs.columns.current - 1) : undefined);

      const width = refs.columns.current === 1 ? '100%' : `calc(${100 / refs.columns.current}% - ${(gap * theme.space.unit * (refs.columns.current - 1)) / refs.columns.current}px)`;

      const columns__ = {};

      const order = {};

      for (let i = 1; i < refs.columns.current + 1; i++) columns__[i] = 0;

      // order them by adding to lowest available order value
      let lowestColumn = 1;
      let lowestValue = Number.MAX_SAFE_INTEGER;
      let highestValue = Number.MIN_SAFE_INTEGER;

      elements.forEach((element: HTMLElement, index: number) => {
        // Width
        element.style.width = width;

        // Update lowest column
        lowestValue = Number.MAX_SAFE_INTEGER;

        Object.keys(columns__).forEach(column => {
          if (columns__[column] < lowestValue) {
            lowestColumn = +column;

            lowestValue = columns__[column];
          }
        });

        const addition = columns__[lowestColumn] === 0 ? 0 : (refs.gap.current * theme.space.unit);

        columns__[lowestColumn] += element.clientHeight + addition;

        order[index] = lowestColumn;

        // Order
        element.style.order = String(lowestColumn);
      });

      // update height (biggest column height)
      Object.keys(columns__).forEach(column => {
        if (columns__[column] > highestValue) highestValue = columns__[column];
      });

      // Height
      const height = highestValue + (gap * theme.space.unit);

      refs.root.current.style.height = `${height}px`;

      if (refs.init.current !== 'animated') setInit(true);
    }
  };

  const method = React.useCallback(update, []);

  React.useEffect(() => {
    setTimeout(update);

    const observer = new ResizeObserver(method);

    [refs.root.current, ...Array.from(refs.root.current.children)].forEach((item: any) => observer.observe(item));

    return () => {
      // Clean up
      observer.disconnect();
    };
  }, []);

  React.useEffect(method as any, [gap, columns]);

  styles.item.margin = 0;

  styles.root.gap = 'unset';

  styles.root.rowGap = `${gap * theme.space.unit}px`;

  styles.root.columnGap = `${(gap / 2) * theme.space.unit}px`;

  if (!init) {
    styles.root.position = 'fixed';

    styles.root.visibility = 'hidden';
  }

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      wrap='wrap'

      align='unset'

      justify='unset'

      direction='column'

      className={classNames([
        staticClassName('Masonry', theme) && [
          'amaui-Masonry-root'
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
            ...styles.item,

            ...item.props.style
          }
        })
      ))}

      {/* Line break */}
      {columns > 1 && new Array(columns - 1).fill(true).map((item: any, index: number) => (
        <div
          key={index}

          className={classNames([
            staticClassName('Masonry', theme) && [
              'amaui-Masonry-line-break'
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

Masonry.displayName = 'amaui-Masonry';

export default Masonry;
