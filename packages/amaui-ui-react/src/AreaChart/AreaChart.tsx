import React from 'react';

import { copy, is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

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

const useStyle = styleMethod(theme => ({
  root: {
    '& .AmauiChart-legend-icon': {
      width: '14px',
      position: 'relative',
      background: 'none',
      borderTop: '2px solid currentColor',
      borderRadius: 'unset',
      height: 'unset',

      '&::before': {
        content: "''",
        position: 'absolute',
        top: '0',
        left: '0',
        height: '4px',
        width: '100%',
        background: 'currentColor',
        opacity: '0.4'
      }
    }
  },

  legend_item: {
    userSelect: 'none'
  },

  legend_icon: {
    width: '10px',
    height: '2px'
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

    minMaxPadding: minMaxPadding__,

    minPadding: minPadding__,

    maxPadding: maxPadding__,

    minPaddingX: minPaddingX__,

    minPaddingY: minPaddingY__,

    maxPaddingX: maxPaddingX__,

    maxPaddingY: maxPaddingY__,

    smooth = true,

    smoothRatio = 0.14,

    linearGradient,

    PathProps,
    LegendItemProps,

    className,

    ...other
  } = props;

  const minX = valueBreakpoints(minX_, undefined, breakpoints, theme);
  const maxX = valueBreakpoints(maxX_, undefined, breakpoints, theme);
  const minY = valueBreakpoints(minY_, undefined, breakpoints, theme);
  const maxY = valueBreakpoints(maxY_, undefined, breakpoints, theme);
  const minMaxPadding = valueBreakpoints(minMaxPadding__, undefined, breakpoints, theme);
  const minPadding = valueBreakpoints(minPadding__, undefined, breakpoints, theme);
  const maxPadding = valueBreakpoints(maxPadding__, undefined, breakpoints, theme);
  const minPaddingX = valueBreakpoints(minPaddingX__, undefined, breakpoints, theme);
  const minPaddingY = valueBreakpoints(minPaddingY__, undefined, breakpoints, theme);
  const maxPaddingX = valueBreakpoints(maxPaddingX__, undefined, breakpoints, theme);
  const maxPaddingY = valueBreakpoints(maxPaddingY__, undefined, breakpoints, theme);

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
          staticClassName('AreaChart', theme) && [
            'AmauiAreaChart-legend-item'
          ],

          className_,
          LegendItemProps?.className,
          classes.legend_item
        ])}

        {...other_}
      >
        <span
          className={classNames([
            staticClassName('AreaChart', theme) && [
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

      // Pre
      const pre = [];

      // Elements
      const elements_ = copy(values).map((item: IItem) => {
        const {
          color: color_,

          tone = 'main',

          name
        } = item;

        const values_ = item.values
          // Sort for x from smallest to largest
          .sort((a, b) => a[0] - b[0])
          .map(item_ => {
            const [x, y] = item_;

            const values__ = {
              x: percentageFromValueWithinRange(x, refs.minMax.current.min.x, refs.minMax.current.max.x),
              y: percentageFromValueWithinRange(y, refs.minMax.current.min.y, refs.minMax.current.max.y)
            };

            values__.x = valueFromPercentageWithinRange(values__.x, 0, width);

            values__.y = valueFromPercentageWithinRange(values__.y, 0, height);

            return [values__.x, height - values__.y].map(item__ => Math.abs(item__));
          });

        const d = {
          border: '',
          background: ''
        };

        let lastX = 0;

        if (!refs.smooth.current) {
          d.border = values_.reduce((result: string, item_, index: number) => {
            const [x, y] = item_;

            // Move
            if (index === 0) return result += `M ${x} ${y}`;

            return result += `L ${x} ${y}`;
          }, '');

          d.background = values_.reduce((result: string, item_, index: number) => {
            const [x, y] = item_;

            // Move
            if (index === 0) return result += `M ${x} ${height} L ${x} ${y}`;

            if (index === values_.length - 1) lastX = x;

            return result += `L ${x} ${y}`;
          }, '');

          d.background += `L ${lastX} ${height} Z`;
        }
        else {
          d.border = values_.reduce((result: string, item_: [number, number], index: number, array: Array<[number, number]>) => {
            const [x, y] = item_;

            // Move
            if (index === 0) return result += `M ${x} ${y}`;

            const [x1, y1] = controlPoint(array[index - 1], array[index - 2], item_, false, smoothRatio);

            const [x2, y2] = controlPoint(item_, array[index - 1], array[index + 1], true, smoothRatio);

            return result += `C ${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
          }, '');

          d.background = values_.reduce((result: string, item_: [number, number], index: number, array: Array<[number, number]>) => {
            const [x, y] = item_;

            // Move
            if (index === 0) return result += `M ${x} ${height} L ${x} ${y}`;

            if (index === values_.length - 1) lastX = x;

            const [x1, y1] = controlPoint(array[index - 1], array[index - 2], item_, false, smoothRatio);

            const [x2, y2] = controlPoint(item_, array[index - 1], array[index + 1], true, smoothRatio);

            return result += `C ${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
          }, '');

          d.background += `L ${lastX} ${height} Z`;
        }

        // Linear gradient
        pre.push(
          <linearGradient
            id={`areaChart_id_${name}`}

            x1='0%'
            x2='0%'

            y1='0%'
            y2='100%'
          >
            <stop
              offset='0%'

              stopColor={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

              stopOpacity='0.54'
            />

            <stop
              offset='74%'

              stopColor={theme.palette.background.default.primary}

              stopOpacity='0'
            />
          </linearGradient>
        );

        return {
          item,

          element: (
            <g>
              {/* Border */}
              <Path
                d={d.border}

                fill='none'

                stroke={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

                strokeWidth='2px'

                {...PathProps}
              />

              {/* Background */}
              <Path
                d={d.background}

                fill={linearGradient ? `url('#areaChart_id_${name}')` : theme.methods.palette.color.colorToRgb(!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone], 0.14)}

                stroke='none'

                {...PathProps}
              />
            </g>
          )
        };
      });

      // Update children value
      setValue({
        legend: legend_,

        pre: pre.length ? (
          <defs>
            {pre.map((item: any, index: number) => (
              React.cloneElement(item, {
                key: index
              })
            ))}
          </defs>
        ) : undefined,

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

      pre={value?.pre}

      elements={value?.elements}

      legend={value?.legend}

      onUpdateRects={onUpdateRects}

      className={classNames([
        staticClassName('AreaChart', theme) && [
          'AmauiAreaChart-root',
          smooth && 'AmauiAreaChart-smooth',
          linearGradient && 'AmauiAreaChart-linear-gradient'
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

AreaChart.displayName = 'AmauiAreaChart';

export default AreaChart;
