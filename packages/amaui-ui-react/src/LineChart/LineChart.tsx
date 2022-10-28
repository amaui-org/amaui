import React from 'react';

import { is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import Path from '../Path';

import { staticClassName } from '../utils';

export interface IItem {
  color: string;
  tone?: string;

  values: Array<[number, number]>;
}

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiLineChart' });

const LineChart = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiLineChart?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    items,

    minX,

    maxX,

    minY,

    maxY,

    // Add % of the min, max range for min and max, y, x
    minMaxPadding,

    minPadding,

    maxPadding,

    minPaddingX,

    minPaddingY,

    maxPaddingX,

    maxPaddingY,

    smooth = true,

    className,

    ...other
  } = props;

  const [children, setChildren] = React.useState();

  const refs = {
    rect: React.useRef<any>(),
    minMax: React.useRef<any>(),
    smooth: React.useRef<any>()
  };

  const minMax = React.useMemo(() => {
    const values = {
      min: {
        x: minX || Number.MAX_SAFE_INTEGER,
        y: minY || Number.MAX_SAFE_INTEGER
      },

      max: {
        x: maxX || Number.MIN_SAFE_INTEGER,
        y: maxY || Number.MIN_SAFE_INTEGER
      }
    };

    const allItems = items.flatMap(item => item.values);

    if (is('array', items)) {
      allItems.forEach((item: [number, number]) => {
        const [x, y] = item;

        if (minX === undefined) values.min.x = Math.min(values.min.x, x);

        if (maxX === undefined) values.max.x = Math.max(values.max.x, x);

        if (minY === undefined) values.min.y = Math.min(values.min.y, y);

        if (maxY === undefined) values.max.y = Math.max(values.max.y, y);
      });
    }

    const minPaddingY_ = minPaddingY !== undefined ? minPaddingY : minPadding !== undefined ? minPadding : minMaxPadding;

    const maxPaddingY_ = maxPaddingY !== undefined ? maxPaddingY : maxPadding !== undefined ? maxPadding : minMaxPadding;

    const minPaddingX_ = minPaddingX !== undefined ? minPaddingX : minPadding !== undefined ? minPadding : minMaxPadding;

    const maxPaddingX_ = maxPaddingX !== undefined ? maxPaddingX : maxPadding !== undefined ? maxPadding : minMaxPadding;

    const totals = {
      x: values.max.x - values.min.x,
      y: values.max.y - values.min.y
    };

    if (minPaddingY_ !== undefined) values.min.y -= totals.y * minPaddingY_;

    if (maxPaddingY_ !== undefined) values.max.y += totals.y * maxPaddingY_;

    if (minPaddingX_ !== undefined) values.min.x -= totals.x * minPaddingX_;

    if (maxPaddingX_ !== undefined) values.max.x += totals.x * maxPaddingX_;

    return values;
  }, [items, minX, maxX, minY, maxY, minMaxPadding, minPadding, maxPadding, minPaddingX, minPaddingY, maxPaddingX, maxPaddingY]);

  refs.minMax.current = minMax;

  refs.smooth.current = smooth;

  const make = () => {
    // Make values into x, y, coordinates
    // normalized in rect width, height values

    // invert y so 0, 0 is at bottom left
    if (refs.rect.current && items) {
      const { width, height } = refs.rect.current;

      const children_ = items.map((item: IItem) => {
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
          d = values.reduce((result: string, value, index: number) => {
            const [x, y] = value;

            // Move
            if (index === 0) return result += `M ${x} ${y}`;

            return result += `C ${x} ${y} ${x} ${y} ${x} ${y}`;
          }, '');
        }

        return (
          <Path
            d={d}

            fill='none'

            stroke={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}
          />
        );
      });

      // Update children value
      setChildren(children_);
    }
  };

  const onUpdateRect = (valueNew: any) => {
    refs.rect.current = valueNew;

    make();
  };

  return (
    <Chart
      ref={ref}

      tonal={tonal}

      color={color}

      onUpdateRect={onUpdateRect}

      className={classNames([
        staticClassName('LineChart', theme) && [
          'AmauiLineChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Chart>
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
