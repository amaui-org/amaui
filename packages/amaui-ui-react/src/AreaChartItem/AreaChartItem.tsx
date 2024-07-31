import React from 'react';

import { is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { TMethod } from '@amaui/models';

import PathElement from '../Path';
import LineElement from '../Line';
import TypeElement from '../Type';
import useMediaQuery from '../useMediaQuery';
import { IChart, IChartValueValues } from '../Chart/Chart';
import { controlPoint, staticClassName, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  legend_item: {
    userSelect: 'none'
  },

  legend_icon: {
    width: '14px',
    position: 'relative',
    background: 'transparent',
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
      opacity: '0.14'
    }
  }
}), { name: 'amaui-AreaChartItem' });

export interface IAreaChartItem extends IChart {
  name?: string;

  refs?: {
    wrapper?: HTMLElement;
    defs?: HTMLElement;
  };

  rects?: {
    wrapper?: DOMRect;
    svg?: DOMRect;
  };

  values?: IChartValueValues;

  updateDefs?: TMethod;

  updateLegend?: TMethod;

  smooth?: boolean;

  smoothRatio?: number;

  linearGradient?: boolean;
}

const AreaChartItem: React.FC<IAreaChartItem> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAreaChartItem?.props?.default, ...props_ }), [props_]);

  const Path = React.useMemo(() => theme?.elements?.Path || PathElement, [theme]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = true,

    color = 'primary',

    name,

    values,

    refs: refs_,

    rects,

    updateDefs,

    updateLegend,

    minMax,

    animate: animate_,

    animateTimeout: animateTimeout_,

    smooth = true,

    smoothRatio = 0.14,

    linearGradient = true,

    PathProps,
    BackgroundProps,
    BorderProps,
    LegendItemProps,

    className,

    ...other
  } = props;

  const [value, setValue] = React.useState<any>();
  const [init, setInit] = React.useState<any>();

  const { classes } = useStyle();

  const refs = {
    minMax: React.useRef<any>(),
    smooth: React.useRef<any>(),
    theme: React.useRef<any>(),
    path: React.useRef<SVGPathElement>(),
    pathBackground: React.useRef<SVGPathElement>(),
    pathStyle: React.useRef({}),
    animate: React.useRef<any>(),
    animateTimeout: React.useRef<number>(),
    init: React.useRef<any>()
  };

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.path.current });
  });

  const animate = valueBreakpoints(animate_, true, breakpoints, theme);
  const animateTimeout = valueBreakpoints(animateTimeout_, 140, breakpoints, theme);

  refs.theme.current = theme;

  refs.smooth.current = smooth;

  refs.animate.current = animate;

  refs.animateTimeout.current = animateTimeout;

  refs.init.current = init;

  const LegendItem = React.useCallback((legendItemProps: any) => {

    return (
      <Line
        gap={1}

        direction='row'

        align='center'

        {...legendItemProps}

        {...LegendItemProps}

        className={classNames([
          staticClassName('AreaChartItem', theme) && [
            'amaui-AreaChartItem-legend-item'
          ],

          legendItemProps?.className,
          LegendItemProps?.className,
          classes.legend_item
        ])}
      >
        <span
          className={classNames([
            staticClassName('AreaChartItem', theme) && [
              'amaui-AreaChartItem-legend-icon'
            ],

            classes.legend_icon
          ])}

          style={{
            color: !refs.theme.current.palette.color[color] ? color : refs.theme.current.palette.color[color].main
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

  const LinearGradient = React.useCallback(() => {

    return (
      <linearGradient
        id={`areaChartItem_id_${name}`}

        x1='0%'
        x2='0%'

        y1='0%'
        y2='100%'
      >
        <stop
          offset='0%'

          stopColor={!refs.theme.current.palette.color[color] ? color : refs.theme.current.palette.color[color]['main']}

          stopOpacity='0.54'
        />

        <stop
          offset='74%'

          stopColor={refs.theme.current.palette.background.default.primary}

          stopOpacity='0'
        />
      </linearGradient>
    );
  }, [theme]);

  const make = () => {
    // Make values into x, y, coordinates
    // normalized in rect width, height values

    // invert y so 0, 0 is at bottom left
    if (rects?.wrapper && values) {
      const { width, height } = rects.wrapper;

      const values_ = values
        // Sort for x from smallest to largest
        .sort((a, b) => a[0] - b[0])
        .map(item_ => {
          const [x, y] = item_;

          const values__ = {
            x: percentageFromValueWithinRange(x, minMax.min.x, minMax.max.x),
            y: percentageFromValueWithinRange(y, minMax.min.y, minMax.max.y)
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

      const element = (
        <g>
          {/* Background */}
          <Path
            ref={refs.pathBackground}

            d={d.background}

            fill={linearGradient ? `url('#areaChartItem_id_${name}` : refs.theme.current.methods.palette.color.colorToRgb(!refs.theme.current.palette.color[color] ? color : refs.theme.current.palette.color[color].main, 0.14)}

            stroke='none'

            {...PathProps}

            {...BackgroundProps}

            style={{
              ...PathProps?.style,

              ...BackgroundProps?.style,

              transition: theme.methods.transitions.make('opacity', { duration: 2400, timing_function: 'decelerated' }),

              ...((refs.animate.current && refs.init.current !== 'animated') && {
                opacity: 0
              }),

              ...((refs.animate.current && refs.init.current === 'animated') && {
                opacity: 1
              })
            }}
          />

          {/* Border */}
          <Path
            ref={refs.path}

            d={d.border}

            fill='none'

            stroke={!refs.theme.current.palette.color[color] ? color : refs.theme.current.palette.color[color].main}

            strokeWidth='2px'

            {...PathProps}

            {...BorderProps}

            style={{
              ...PathProps?.style,

              ...BorderProps?.style,

              transition: theme.methods.transitions.make('stroke-dashoffset', { duration: 2400, timing_function: 'decelerated' }),

              ...((refs.animate.current && refs.init.current !== 'animated') && {
                opacity: 0
              }),

              ...refs.pathStyle.current
            }}
          />
        </g>
      );

      // Defs
      if (refs_.defs) {
        const linearGradientElement = refs_.defs.querySelector(`#areaChartItem_id_${name}`);

        if (!linearGradientElement) {
          updateDefs(previous => {

            return [...(previous || []), <LinearGradient />];
          });
        }
        else {
          linearGradientElement.children[0].setAttribute('stop-color', !refs.theme.current.palette.color[color] ? color : refs.theme.current.palette.color[color]['main']);

          linearGradientElement.children[1].setAttribute('stop-color', refs.theme.current.palette.background.default.primary);
        }
      }

      // Legend item
      if (is('function', updateLegend)) {
        updateLegend(previous => {
          const newValues = [...(previous || [])];

          if (!newValues.find(itemLegend => itemLegend.item?.name === name)) {
            newValues.push({
              item: {
                name,
                values
              },

              element: <LegendItem />
            });
          }

          return newValues;
        });
      }

      // Value
      setValue(element);
    }
  };

  const initMethod = React.useCallback(() => {
    if (animate) {
      if (!init && refs.path.current) {
        const total = refs.path.current.getTotalLength();

        refs.pathStyle.current = {
          strokeDasharray: total,
          strokeDashoffset: total
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
  }, [values, theme, animate, init, !!(refs.path.current && refs.pathBackground.current)]);

  React.useEffect(() => {
    make();
  }, [rects?.wrapper]);

  return (
    value && React.cloneElement(value, {
      className,

      ...other
    })
  );
});

// Parts of the logic done thanks to
// https://francoisromain.medium.com/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74

// Copyright (c) 2022 by François Romain (https://codepen.io/francoisromain/pen/YxyEQL)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

AreaChartItem.displayName = 'amaui-AreaChartItem';

export default AreaChartItem;
