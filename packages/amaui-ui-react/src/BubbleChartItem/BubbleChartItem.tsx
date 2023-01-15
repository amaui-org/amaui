import React from 'react';

import { is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { TMethod } from '@amaui/models';

import Path from '../Path';
import Line from '../Line';
import Type from '../Type';
import useMediaQuery from '../useMediaQuery';
import { IChart, TChartValueValues } from '../Chart/Chart';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  legend_item: {
    userSelect: 'none'
  },

  legend_icon: {
    width: '10px',
    height: '2px'
  },

  text: {
    ...theme.typography.values.b3,
    fill: 'currentColor',
    textAnchor: 'middle',
    alignmentBaseline: 'middle'
  }
}), { name: 'amaui-BubbleChartItem' });

export interface IBubbleChartItem extends IChart {
  name?: string;

  minSize?: number;

  maxSize?: number;

  refs?: {
    wrapper?: HTMLElement;
    defs?: HTMLElement;
  };

  rects?: {
    wrapper?: DOMRect;
    svg?: DOMRect;
  };

  values?: TChartValueValues;

  updateDefs: TMethod;

  updateLegend: TMethod;
}

const BubbleChartItem = React.forwardRef((props_: IBubbleChartItem, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiBubbleChartItem?.props?.default, ...props_ }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    name,

    values,

    minSize,

    maxSize,

    refs: refs_,

    rects,

    updateDefs,

    updateLegend,

    minMax,

    animate: animate_,

    animateTimeout: animateTimeout_,

    PathProps,
    LegendItemProps,

    className,

    ...other
  } = props;

  const animate = valueBreakpoints(animate_, true, breakpoints, theme);
  const animateTimeout = valueBreakpoints(animateTimeout_, 140, breakpoints, theme);

  const [value, setValue] = React.useState<any>();
  const [init, setInit] = React.useState<any>();

  const refs = {
    minMax: React.useRef<any>(),
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

  const LegendItem = React.useCallback(() => {

    return (
      <Line
        gap={1}

        direction='row'

        align='center'

        {...LegendItemProps}

        className={classNames([
          staticClassName('BubbleChart', theme) && [
            'amaui-BubbleChart-legend-item'
          ],

          LegendItemProps?.className,
          classes.legend_item
        ])}
      >
        <span
          className={classNames([
            staticClassName('BubbleChart', theme) && [
              'amaui-BubbleChart-legend-icon'
            ],

            classes.legend_icon
          ])}

          style={{
            background: !theme.palette.color[color] ? color : theme.palette.color[color]['main']
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
    if (rects?.wrapper && values) {
      const { width, height } = rects.wrapper;

      const [x, y, size, label] = values;

      const values_ = {
        x: percentageFromValueWithinRange(x, minMax.min.x, minMax.max.x),
        y: percentageFromValueWithinRange(y, minMax.min.y, minMax.max.y)
      };

      values_.x = valueFromPercentageWithinRange(values_.x, 0, width);

      values_.y = valueFromPercentageWithinRange(values_.y, 0, height);

      const value_: any = [...[values_.x, height - values_.y].map(item_ => Math.abs(item_)), size, label];

      const minR = 4;
      const maxR = 40;

      const percentage = percentageFromValueWithinRange(value_[2], minSize, maxSize);

      const r = valueFromPercentageWithinRange(percentage, minR, maxR);

      const element = (
        <g>
          <Path
            r={r}

            cx={value_[0]}

            cy={value_[1]}

            fill={theme.methods.palette.color.colorToRgb(!theme.palette.color[color] ? color : theme.palette.color[color]['main'], 0.14)}

            stroke={!theme.palette.color[color] ? color : theme.palette.color[color]['main']}

            strokeWidth='2px'

            Component='circle'

            {...PathProps}
          />

          {(r >= 20 && value_[3]) && (
            <text
              x={value_[0]}

              y={value_[1]}

              className={classNames([
                staticClassName('BubbleChartItem', theme) && [
                  'amaui-BubbleChartItem-text'
                ],

                classes.text
              ])}
            >
              {value_[3]}
            </text>
          )}
        </g>
      );

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
    // if (animate) {
    //   if (!init && refs.path.current) {
    //     const total = refs.path.current.getTotalLength();

    //     refs.pathStyle.current = {
    //       strokeDasharray: total,
    //       strokeDashoffset: total,
    //       transition: theme.methods.transitions.make('stroke-dashoffset', { duration: 2400, timing_function: 'decelerated' })
    //     };

    //     setInit(true);

    //     setTimeout(() => {
    //       refs.pathStyle.current = {
    //         ...refs.pathStyle.current,

    //         opacity: 1,

    //         strokeDashoffset: 0
    //       };

    //       setInit('animated');
    //     }, refs.animateTimeout.current);
    //   }
    // }
  }, [init, animate]);

  React.useEffect(() => {
    make();

    initMethod();
  }, [values, theme, animate, init, !!refs.path.current]);

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

BubbleChartItem.displayName = 'amaui-BubbleChartItem';

export default BubbleChartItem;
