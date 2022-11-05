import React from 'react';

import { clamp, copy, is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import Path from '../Path';
import Line from '../Line';
import Type from '../Type';
import useMediaQuery from '../useMediaQuery';
import { IChart } from '../Chart/Chart';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = styleMethod((theme: AmauiTheme) => ({
  root: {
    '& .AmauiChart-legend-icon': {
      width: '6px',
      height: '12px',
      borderRadius: 'unset'
    }
  },

  legend_item: {
    userSelect: 'none'
  },

  legend_icon: {
    width: '4px',
    height: '12px'
  }
}), { name: 'AmauiColumnChart' });

export interface IColumnChart extends IChart {

}

const ColumnChart = React.forwardRef((props_: IColumnChart, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiColumnChart?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    values,

    names,

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

    const allItems = values.map(item => item.values);

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
          staticClassName('ColumnChart', theme) && [
            'AmauiColumnChart-legend-item'
          ],

          className_,
          LegendItemProps?.className,
          classes.legend_item
        ])}

        {...other_}
      >
        <span
          className={classNames([
            staticClassName('ColumnChart', theme) && [
              'AmauiColumnChart-legend-icon'
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

      const widthItem = clamp(width / (values.length * 2), undefined, 40);

      // Elements
      const elements_ = copy(values).map(item => {
        const {
          color: color_,

          tone = 'main'
        } = item;

        const [x, y] = item.values;

        const values_ = {
          x: percentageFromValueWithinRange(x, refs.minMax.current.min.x, refs.minMax.current.max.x),
          y: percentageFromValueWithinRange(y, refs.minMax.current.min.y, refs.minMax.current.max.y)
        };

        values_.x = valueFromPercentageWithinRange(values_.x, 0, width);

        values_.y = valueFromPercentageWithinRange(values_.y, 0, height);

        const value_: any = [values_.x, height - values_.y].map(item_ => Math.abs(item_));

        return {
          item,

          element: (
            <Path
              x={value_[0] - (widthItem / 2)}

              y={value_[1]}

              width={widthItem}

              height={height - value_[1]}

              fill={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

              stroke='none'

              Component='rect'

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

      names={names}

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

      pointsVisibility='hidden'

      elementTooltip

      elements={value?.elements}

      legend={value?.legend}

      onUpdateRects={onUpdateRects}

      className={classNames([
        staticClassName('ColumnChart', theme) && [
          'AmauiColumnChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

ColumnChart.displayName = 'AmauiColumnChart';

export default ColumnChart;
