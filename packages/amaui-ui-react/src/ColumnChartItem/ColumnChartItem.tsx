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
    width: '4px',
    height: '12px'
  }
}), { name: 'amaui-ColumnChartItem' });

export interface IColumnChartItem extends IChart {
  name?: string;

  refs?: {
    wrapper?: HTMLElement;
    defs?: HTMLElement;
  };

  rects?: {
    wrapper?: DOMRect;
    svg?: DOMRect;
  };

  values?: TChartValueValues;

  width?: number;

  updateDefs: TMethod;

  updateLegend: TMethod;
}

const ColumnChartItem = React.forwardRef((props_: IColumnChartItem, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiColumnChartItem?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    name,

    values,

    width: widthItem = 14,

    refs: refs_,

    rects,

    updateDefs,

    updateLegend,

    minMax,

    animate: animate_,

    animateTimeout: animateTimeout_,

    PathProps,
    BackgroundProps,
    BorderProps,
    LegendItemProps,

    className,

    ...other
  } = props;

  const refs = {
    minMax: React.useRef<any>(),
    theme: React.useRef<any>(),
    path: React.useRef<SVGPathElement>(),
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

  const [value, setValue] = React.useState<any>();
  const [init, setInit] = React.useState<any>();

  refs.theme.current = theme;

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
          staticClassName('ColumnChartItem', theme) && [
            'amaui-ColumnChartItem-legend-item'
          ],

          legendItemProps?.className,
          LegendItemProps?.className,
          classes.legend_item
        ])}
      >
        <span
          className={classNames([
            staticClassName('ColumnChartItem', theme) && [
              'amaui-ColumnChartItem-legend-icon'
            ],

            classes.legend_icon
          ])}

          style={{
            background: !refs.theme.current.palette.color[color] ? color : refs.theme.current.palette.color[color]['main']
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

      const [x, y] = values;

      const values_ = {
        x: percentageFromValueWithinRange(x, minMax.min.x, minMax.max.x),
        y: percentageFromValueWithinRange(y, minMax.min.y, minMax.max.y)
      };

      values_.x = valueFromPercentageWithinRange(values_.x, 0, width);

      values_.y = valueFromPercentageWithinRange(values_.y, 0, height);

      const value_: any = [values_.x, height - values_.y].map(item_ => Math.abs(item_));

      const element = (
        <g>
          <Path
            x={value_[0] - (widthItem / 2)}

            y={value_[1]}

            width={widthItem}

            height={height - value_[1]}

            fill={!refs.theme.current.palette.color[color] ? color : refs.theme.current.palette.color[color]['main']}

            stroke='none'

            Component='rect'

            {...PathProps}

            style={{
              ...PathProps?.style,

              ...((refs.animate.current && refs.init.current !== 'animated') && {
                opacity: 0,

                transform: 'scaleY(0)'
              }),

              transformOrigin: 'bottom',

              ...refs.pathStyle.current
            }}
          />
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
    if (animate) {
      if (!init) {
        refs.pathStyle.current = {
          transition: theme.methods.transitions.make(['transform', 'opacity'], { timing_function: 'decelerated' })
        };

        setInit(true);

        setTimeout(() => {
          refs.pathStyle.current = {
            ...refs.pathStyle.current,

            opacity: 1,

            transform: 'scaleY(1)'
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

ColumnChartItem.displayName = 'amaui-ColumnChartItem';

export default ColumnChartItem;
