import React from 'react';

import { is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { TMethod } from '@amaui/models';

import PathElement from '../Path';
import LineElement from '../Line';
import TypeElement from '../Type';
import useMediaQuery from '../useMediaQuery';
import { IChart, IChartValueValues } from '../Chart/Chart';
import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  legend_item: {
    userSelect: 'none'
  },

  legend_icon: {
    width: '8px',
    height: '8px',
    borderRadius: theme.methods.shape.radius.value(40, 'px')
  }
}), { name: 'amaui-ScatterChartItem' });

export interface IScatterChartItem extends IChart {
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
}

const ScatterChartItem: React.FC<IScatterChartItem> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiScatterChartItem?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Path = React.useMemo(() => theme?.elements?.Path || PathElement, [theme]);

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

    PathProps,
    BackgroundProps,
    BorderProps,
    LegendItemProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    minMax: React.useRef<any>(),
    path: React.useRef<any>(),
    theme: React.useRef<any>(),
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

  const LegendItem = React.useCallback(() => {

    return (
      <Line
        gap={1}

        direction='row'

        align='center'

        {...LegendItemProps}

        className={classNames([
          staticClassName('ScatterChartItem', theme) && [
            'amaui-ScatterChartItem-legend-item'
          ],

          LegendItemProps?.className,
          classes.legend_item
        ])}
      >
        <span
          className={classNames([
            staticClassName('ScatterChartItem', theme) && [
              'amaui-ScatterChartItem-legend-icon'
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

      const values_ = values
        // Sort for x from smallest to largest
        .sort((a, b) => a[0] - b[0])
        .map(itemValue => {
          const [x, y] = itemValue;

          const values__ = {
            x: percentageFromValueWithinRange(x, minMax.min.x, minMax.max.x),
            y: percentageFromValueWithinRange(y, minMax.min.y, minMax.max.y)
          };

          values__.x = valueFromPercentageWithinRange(values__.x, 0, width);

          values__.y = valueFromPercentageWithinRange(values__.y, 0, height);

          return [values__.x, height - values__.y].map(item_ => Math.abs(item_));
        });

      const element = (
        <g
          ref={refs.path}
        >
          {values_.map((item, index: number) => (
            <Path
              key={index}

              cx={item[0]}

              cy={item[1]}

              r={4}

              fill={!refs.theme.current.palette.color[color] ? color : refs.theme.current.palette.color[color]['main']}

              stroke='none'

              {...PathProps}

              Component='circle'

              style={{
                ...PathProps?.style,

                ...((refs.animate.current && refs.init.current !== 'animated') && {
                  opacity: 0,

                  transform: 'scale(0)'
                }),

                transformBox: 'fill-box',

                transformOrigin: 'center',

                ...refs.pathStyle.current
              }}
            />
          ))}
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

            transform: 'scale(1)'
          };

          setInit('animated');
        }, refs.animateTimeout.current);
      }
    }
  }, [init, animate]);

  React.useEffect(() => {
    make();

    initMethod();
  }, [values, theme, animate, init]);

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

ScatterChartItem.displayName = 'amaui-ScatterChartItem';

export default ScatterChartItem;
