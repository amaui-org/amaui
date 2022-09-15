import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import useMediaQuery from '../useMediaQuery';
import Line from '../Line';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%'
  },

  column: {
    flex: '1 1 auto'
  }
}), { name: 'AmauiMasonry' });

// Reset children on
// 2. on observerResize only watch on when all children are added
// and if there's no current watcher and remove observer on children reset if observer exists

const Masonry = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMasonry?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key]);
  });

  const {
    gap: gap_,
    columns: columns_,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  const gap = valueBreakpoints(gap_, 2, breakpoints, theme);
  const columns = valueBreakpoints(columns_, { xs: 1, sm: 2, md: 3, lg: 4, xl: 5, default: 3 }, breakpoints, theme);

  const refs = {
    root: React.useRef<any>(),
    gap: React.useRef<any>(),
    columns: React.useRef<any>(),
    children: React.useRef<any>(),
    added: React.useRef<any>(),
    observer: React.useRef<any>()
  };

  refs.gap.current = gap;

  refs.columns.current = columns;

  const reset = () => {
    const values = {};

    for (let i = 0; i < refs.columns.current; i++) {
      values[i] = [];
    }

    return values;
  };

  const [children, setChildren] = React.useState(reset);

  const { classes } = useStyle(props);

  refs.children.current = children_;

  refs.added.current = Object.keys(children).reduce((result: any, item: any) => {
    const value_ = result + children[item].length;

    return value_;
  }, 0);

  const method = React.useCallback(reset, []);

  React.useEffect(() => {
    setChildren(reset());
  }, [gap, columns]);

  React.useEffect(() => {
    // Add
    if (!refs.observer.current && React.Children.toArray(children_).length === refs.added.current) {
      refs.observer.current = new ResizeObserver(method);

      refs.observer.current.observe(refs.root.current);
    }

    if (refs.root.current) {
      if (!refs.added.current || React.Children.toArray(children_).length !== refs.added.current) {
        // Clean up
        if (refs.observer.current) {
          refs.observer.current.disconnect();

          refs.observer.current = undefined;
        }

        let column = 0;
        let lowestHeight = Number.MAX_SAFE_INTEGER;

        const toAddItem: any = React.Children.toArray(children_)[refs.added.current];

        if (!!refs.added.current) {
          // Order value with lowest height
          const rootColumns = Array.from(refs.root.current.children);

          rootColumns.forEach((element: HTMLElement, index: number) => {
            const height = element.clientHeight;

            if (height < lowestHeight) {
              lowestHeight = height;
              column = index;
            }
          });
        }

        // Update
        setChildren(items => {
          const values_ = { ...items };

          values_[column].push(toAddItem);

          return values_;
        });
      }
    }
  }, [refs.added.current]);

  return (
    <Line
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      gap={gap}

      wrap='wrap'

      align='flex-start'

      justify='flex-start'

      direction='row'

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
      {Object.keys(children).map(item => (
        <Line
          gap={gap}

          direction='column'

          align='unset'

          className={classNames([
            staticClassName('Masonry', theme) && [
              'AmauiMasonry-column'
            ],

            classes.column
          ])}
        >
          {children[item].map((item_: any, index: number) => (
            React.cloneElement(item_, {
              key: index
            })
          ))}
        </Line>
      ))}
    </Line>
  );
});

Masonry.displayName = 'AmauiMasonry';

export default Masonry;
