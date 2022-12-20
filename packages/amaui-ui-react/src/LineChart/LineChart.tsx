import React from 'react';

import { copy, is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import Path from '../Path';
import Line from '../Line';
import Type from '../Type';
import useMediaQuery from '../useMediaQuery';

import { controlPoint, staticClassName, valueBreakpoints } from '../utils';
import { IChart } from '../Chart/Chart';

const useStyle = styleMethod(theme => ({
  root: {
    '& .amaui-Chart-legend-icon': {
      width: '11px',
      height: '2px',
      borderRadius: 'unset'
    }
  },

  legend_item: {
    userSelect: 'none'
  },

  legend_icon: {
    width: '10px',
    height: '2px'
  }
}), { name: 'amaui-LineChart' });

export interface ILineChart extends IChart {
  smooth?: boolean;

  smoothRatio?: number;
}

const LineChart = React.forwardRef((props_: ILineChart, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiLineChart?.props?.default, ...props_ }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    values,

    minX: minX_,

    maxX: maxX_,

    minY: minY_,

    maxY: maxY_,

    minMaxPadding: minMaxPadding_,

    minPadding: minPadding__,

    maxPadding: maxPadding__,

    minPaddingX: minPaddingX__,

    minPaddingY: minPaddingY__,

    maxPaddingX: maxPaddingX__,

    maxPaddingY: maxPaddingY__,

    animate: animate_,

    animateTimeout: animateTimeout_,

    smooth = true,

    smoothRatio = 0.14,

    PathProps,
    LegendItemProps,

    className,

    ...other
  } = props;

  const minX = valueBreakpoints(minX_, undefined, breakpoints, theme);
  const maxX = valueBreakpoints(maxX_, undefined, breakpoints, theme);
  const minY = valueBreakpoints(minY_, undefined, breakpoints, theme);
  const maxY = valueBreakpoints(maxY_, undefined, breakpoints, theme);
  const minMaxPadding = valueBreakpoints(minMaxPadding_, undefined, breakpoints, theme);
  const minPadding = valueBreakpoints(minPadding__, undefined, breakpoints, theme);
  const maxPadding = valueBreakpoints(maxPadding__, undefined, breakpoints, theme);
  const minPaddingX = valueBreakpoints(minPaddingX__, undefined, breakpoints, theme);
  const minPaddingY = valueBreakpoints(minPaddingY__, undefined, breakpoints, theme);
  const maxPaddingX = valueBreakpoints(maxPaddingX__, undefined, breakpoints, theme);
  const maxPaddingY = valueBreakpoints(maxPaddingY__, undefined, breakpoints, theme);
  const animate = valueBreakpoints(animate_, true, breakpoints, theme);
  const animateTimeout = valueBreakpoints(animateTimeout_, 140, breakpoints, theme);

  const [value, setValue] = React.useState<any>();
  const [init, setInit] = React.useState<any>();

  const refs = {
    rects: React.useRef<any>(),
    minMax: React.useRef<any>(),
    smooth: React.useRef<any>(),
    theme: React.useRef<any>(),
    path: React.useRef<SVGPathElement>(),
    pathStyle: React.useRef({}),
    animate: React.useRef<any>(),
    animateTimeout: React.useRef<number>(),
    init: React.useRef<any>()
  };

  refs.theme.current = theme;

  refs.animate.current = animate;

  refs.animateTimeout.current = animateTimeout;

  refs.init.current = init;

  const minMax = React.useMemo(() => {
    const values_ = {
      min: {
        x: minX || Number.MAX_SAFE_INTEGER,
        y: minY || Number.MAX_SAFE_INTEGER
      },

      max: {
        x: maxX || Number.MIN_SAFE_INTEGER,
        y: maxY || Number.MIN_SAFE_INTEGER
      }
    };

    const allItems = values.flatMap(item => item.values);

    if (is('array', values)) {
      allItems.forEach((item: [number, number]) => {
        const [x, y] = item;

        if (minX === undefined) values_.min.x = Math.min(values_.min.x, x);

        if (maxX === undefined) values_.max.x = Math.max(values_.max.x, x);

        if (minY === undefined) values_.min.y = Math.min(values_.min.y, y);

        if (maxY === undefined) values_.max.y = Math.max(values_.max.y, y);
      });
    }

    const minPaddingY_ = minPaddingY !== undefined ? minPaddingY : minPadding !== undefined ? minPadding : minMaxPadding;

    const maxPaddingY_ = maxPaddingY !== undefined ? maxPaddingY : maxPadding !== undefined ? maxPadding : minMaxPadding;

    const minPaddingX_ = minPaddingX !== undefined ? minPaddingX : minPadding !== undefined ? minPadding : minMaxPadding;

    const maxPaddingX_ = maxPaddingX !== undefined ? maxPaddingX : maxPadding !== undefined ? maxPadding : minMaxPadding;

    const totals = {
      x: values_.max.x - values_.min.x,
      y: values_.max.y - values_.min.y
    };

    if (minPaddingY_ !== undefined) values_.min.y -= totals.y * minPaddingY_;

    if (maxPaddingY_ !== undefined) values_.max.y += totals.y * maxPaddingY_;

    if (minPaddingX_ !== undefined) values_.min.x -= totals.x * minPaddingX_;

    if (maxPaddingX_ !== undefined) values_.max.x += totals.x * maxPaddingX_;

    return values_;
  }, [values, minX, maxX, minY, maxY, minMaxPadding, minPadding, maxPadding, minPaddingX, minPaddingY, maxPaddingX, maxPaddingY]);

  refs.minMax.current = minMax;

  refs.smooth.current = smooth;

  const LegendItem = React.useCallback((props__: any) => {
    const {
      item = {},

      className: className_,

      ...other_
    } = props__;

    const {
      color: color_,
      tone = 'main',

      name = 'No name'
    } = item;

    return (
      <Line
        gap={1}

        direction='row'

        align='center'

        {...LegendItemProps}

        className={classNames([
          staticClassName('LineChart', theme) && [
            'amaui-LineChart-legend-item'
          ],

          className_,
          LegendItemProps?.className,
          classes.legend_item
        ])}

        {...other_}
      >
        <span
          className={classNames([
            staticClassName('LineChart', theme) && [
              'amaui-LineChart-legend-icon'
            ],

            classes.legend_icon
          ])}

          style={{
            background: !refs.theme.current.palette.color[color_] ? color_ : refs.theme.current.palette.color[color_][tone]
          }}
        />

        <Type
          version='b3'
        >
          {name}
        </Type>
      </Line>
    );
  }, [theme]);

  const make = () => {
    // Make values into x, y, coordinates
    // normalized in rect width, height values

    // invert y so 0, 0 is at bottom left
    if (refs.rects.current && values) {
      const { width, height } = refs.rects.current.wrapper;

      // Legend
      const legend_ = values.map((item: any) => {

        return {
          item,

          element: (
            <LegendItem
              item={item}
            />
          )
        };
      });

      // Elements
      const elements_ = copy(values).map(item => {
        const {
          color: color_,

          tone = 'main'
        } = item;

        const values_ = item.values
          // Sort for x from smallest to largest
          .sort((a, b) => a[0] - b[0])
          .map(itemValue => {
            const [x, y] = itemValue;

            const values__ = {
              x: percentageFromValueWithinRange(x, refs.minMax.current.min.x, refs.minMax.current.max.x),
              y: percentageFromValueWithinRange(y, refs.minMax.current.min.y, refs.minMax.current.max.y)
            };

            values__.x = valueFromPercentageWithinRange(values__.x, 0, width);

            values__.y = valueFromPercentageWithinRange(values__.y, 0, height);

            return [values__.x, height - values__.y].map(item_ => Math.abs(item_));
          });

        let d = '';

        if (!refs.smooth.current) {
          d = values_.reduce((result: string, itemValue, index: number) => {
            const [x, y] = itemValue;

            // Move
            if (index === 0) return result += `M ${x} ${y}`;

            return result += `L ${x} ${y}`;
          }, '');
        }
        else {
          d = values_.reduce((result: string, itemValue: [number, number], index: number, array: Array<[number, number]>) => {
            const [x, y] = itemValue;

            // Move
            if (index === 0) return result += `M ${x} ${y}`;

            const [x1, y1] = controlPoint(array[index - 1], array[index - 2], itemValue, false, smoothRatio);

            const [x2, y2] = controlPoint(itemValue, array[index - 1], array[index + 1], true, smoothRatio);

            return result += `C ${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
          }, '');
        }

        return {
          item,

          element: (
            <Path
              ref={refs.path}

              d={d}

              fill='none'

              stroke={!refs.theme.current.palette.color[color_] ? color_ : refs.theme.current.palette.color[color_][tone]}

              strokeWidth='2px'

              {...PathProps}

              style={{
                ...PathProps?.style,

                ...((animate && !init) && {
                  opacity: 0
                }),

                ...refs.pathStyle.current
              }}
            />
          )
        };
      });

      // Update children value
      setValue({
        legend: legend_,

        elements: elements_
      });
    }
  };

  const initMethod = React.useCallback(() => {
    if (animate) {
      if (!init && refs.path.current) {
        const total = refs.path.current.getTotalLength();

        refs.pathStyle.current = {
          strokeDasharray: total,
          strokeDashoffset: total,
          transition: theme.methods.transitions.make('stroke-dashoffset', { duration: 2400, timing_function: 'decelerated' })
        };

        setInit(true);

        setTimeout(() => {
          refs.pathStyle.current = {
            ...refs.pathStyle.current,

            opacity: 1,

            strokeDashoffset: 0
          };

          setInit('animated');
        }, refs.animateTimeout.current);
      }
    }
  }, [init, animate]);

  React.useEffect(() => {
    make();

    initMethod();
  }, [values, theme, animate, init, !!refs.path.current]);

  const onUpdateRects = (valueNew: any) => {
    refs.rects.current = valueNew;

    make();
  };

  return (
    <Chart
      ref={ref}

      tonal={tonal}

      color={color}

      values={values}

      minX={minX}

      maxX={maxX}

      minY={minY}

      maxY={maxY}

      minMaxPadding={minMaxPadding}

      minPadding={minPadding}

      maxPadding={maxPadding}

      minPaddingX={minPaddingX}

      minPaddingY={minPaddingY}

      maxPaddingX={maxPaddingX}

      maxPaddingY={maxPaddingY}

      elements={value?.elements}

      legend={value?.legend}

      onUpdateRects={onUpdateRects}

      className={classNames([
        staticClassName('LineChart', theme) && [
          'amaui-LineChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

LineChart.displayName = 'amaui-LineChart';

export default LineChart;
