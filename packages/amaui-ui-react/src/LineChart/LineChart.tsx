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
    width: '10px',
    height: '2px'
  }
}), { name: 'AmauiLineChart' });

const LineChart = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiLineChart?.props?.default }), [props_]);

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

    smooth = true,

    smoothRatio = 0.17,

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

  refs.smooth.current = smooth;

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
          staticClassName('LineChart', theme) && [
            'AmauiLineChart-legend-item'
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
              'AmauiLineChart-legend-icon'
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
      const { width, height } = refs.rects.current?.wrapper;

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
      const elements_ = copy(values).map((item: IItem) => {
        const {
          color: color_,

          tone = 'main'
        } = item;

        const values = item.values
          // Sort for x from smallest to largest
          .sort((a, b) => a[0] - b[0])
          .map(value => {
            const [x, y] = value;

            const values = {
              x: percentageFromValueWithinRange(x, refs.minMax.current.min.x, refs.minMax.current.max.x),
              y: percentageFromValueWithinRange(y, refs.minMax.current.min.y, refs.minMax.current.max.y)
            };

            values.x = valueFromPercentageWithinRange(values.x, 0, width);

            values.y = valueFromPercentageWithinRange(values.y, 0, height);

            return [values.x, height - values.y].map(item_ => Math.abs(item_));
          });

        let d = '';

        if (!refs.smooth.current) {
          d = values.reduce((result: string, value, index: number) => {
            const [x, y] = value;

            // Move
            if (index === 0) return result += `M ${x} ${y}`;

            return result += `L ${x} ${y}`;
          }, '');
        }
        else {
          d = values.reduce((result: string, value: [number, number], index: number, array: Array<[number, number]>) => {
            const [x, y] = value;

            // Move
            if (index === 0) return result += `M ${x} ${y}`;

            const [x1, y1] = controlPoint(array[index - 1], array[index - 2], value, false, smoothRatio);

            const [x2, y2] = controlPoint(value, array[index - 1], array[index + 1], true, smoothRatio);

            return result += `C ${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
          }, '');
        }

        return {
          item,

          element: (
            <Path
              d={d}

              fill='none'

              stroke={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

              strokeWidth='2px'

              {...PathProps}
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

      elements={value?.elements}

      legend={value?.legend}

      onUpdateRects={onUpdateRects}

      className={classNames([
        staticClassName('LineChart', theme) && [
          'AmauiLineChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

// Parts of the logic done thanks to
// https://francoisromain.medium.com/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74

// Copyright (c) 2022 by François Romain (https://codepen.io/francoisromain/pen/YxyEQL)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

LineChart.displayName = 'AmauiLineChart';

export default LineChart;
