import React from 'react';

import { copy, is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import Path from '../Path';
import Line from '../Line';
import Type from '../Type';
import useMediaQuery from '../useMediaQuery';

import { controlPoint, staticClassName, valueBreakpoints } from '../utils';

export interface IItem {
  color: string;
  tone?: string;
  name?: string;
  style?: Record<string, any>;

  values: Array<[number, number]>;
}

const useStyle = style(theme => ({
  root: {

  },

  legend_item: {
    userSelect: 'none'
  },

  legend_icon: {
    width: '8px',
    height: '8px',
    borderRadius: '50%'
  }
}), { name: 'AmauiAreaChart' });

const AreaChart = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAreaChart?.props?.default }), [props_]);

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

    minPadding: minPadding_,

    maxPadding: maxPadding_,

    minPaddingX: minPaddingX_,

    minPaddingY: minPaddingY_,

    maxPaddingX: maxPaddingX_,

    maxPaddingY: maxPaddingY_,

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
  const minPadding = valueBreakpoints(minPadding_, undefined, breakpoints, theme);
  const maxPadding = valueBreakpoints(maxPadding_, undefined, breakpoints, theme);
  const minPaddingX = valueBreakpoints(minPaddingX_, undefined, breakpoints, theme);
  const minPaddingY = valueBreakpoints(minPaddingY_, undefined, breakpoints, theme);
  const maxPaddingX = valueBreakpoints(maxPaddingX_, undefined, breakpoints, theme);
  const maxPaddingY = valueBreakpoints(maxPaddingY_, undefined, breakpoints, theme);

  const [value, setValue] = React.useState<any>();

  const refs = {
    rects: React.useRef<any>(),
    minMax: React.useRef<any>(),
    smooth: React.useRef<any>()
  };

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

  const LegendItem = React.useCallback((props__: any) => {
    const {
      item = {},

      className: className_,

      ...other
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
          staticClassName('AreaChart', theme) && [
            'AmauiAreaChart-legend-item'
          ],

          className_,
          LegendItemProps?.className,
          classes.legend_item
        ])}

        {...other}
      >
        <span
          className={classNames([
            staticClassName('Chart', theme) && [
              'AmauiAreaChart-legend-icon'
            ],

            classes.legend_icon
          ])}

          style={{
            background: !theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]
          }}
        />

        <Type
          version='b3'
        >
          {name}
        </Type>
      </Line>
    );
  }, []);

  const make = () => {
    // Make values into x, y, coordinates
    // normalized in rect width, height values

    // invert y so 0, 0 is at bottom left
    if (refs.rects.current && values) {
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

      // Update children value
      setValue({
        legend: legend_
      });
    }
  };

  React.useEffect(() => {
    make();
  }, [values]);

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

      legend={value?.legend}

      pointsVisibility='visible'

      onUpdateRects={onUpdateRects}

      className={classNames([
        staticClassName('AreaChart', theme) && [
          'AmauiAreaChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

AreaChart.displayName = 'AmauiAreaChart';

export default AreaChart;
