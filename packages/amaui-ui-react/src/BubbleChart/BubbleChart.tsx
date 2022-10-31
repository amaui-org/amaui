import React from 'react';

import { copy, is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import Path from '../Path';
import Line from '../Line';
import Type from '../Type';
import useMediaQuery from '../useMediaQuery';
import Surface from '../Surface';

import { staticClassName, valueBreakpoints } from '../utils';

interface IItem {
  color: string;
  tone?: string;
  name?: string;
  style?: Record<string, any>;

  values: [number, number, number, string];
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
  },

  text: {
    ...theme.typography.values.b3,
    fill: 'currentColor',
    textAnchor: 'middle',
    alignmentBaseline: 'middle'
  },

  append_wrapper: {
    userSelect: 'none',
    pointerEvents: 'none'
  },

  append: {
    padding: '12px 20px',
    borderRadius: '12px',
    marginBottom: '16px'
  },

  append_icon: {
    width: '8px',
    height: '8px',
    borderRadius: '50%'
  }
}), { name: 'AmauiBubbleChart' });

const BubbleChart = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiBubbleChart?.props?.default }), [props_]);

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

    minPadding: minPadding_,

    maxPadding: maxPadding_,

    minPaddingX: minPaddingX_,

    minPaddingY: minPaddingY_,

    maxPaddingX: maxPaddingX_,

    maxPaddingY: maxPaddingY_,

    tooltipRender: tooltipRender_,

    tooltipGroupRender: tooltipGroupRender_,

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
          staticClassName('BubbleChart', theme) && [
            'AmauiBubbleChart-legend-item'
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
              'AmauiBubbleChart-legend-icon'
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

      // Sort based on 3rd value
      values.sort((a, b) => a.values?.[2] - b.values?.[2]);

      const minSize = values[0]?.values?.[2];

      const maxSize = values[values.length - 1]?.values?.[2];

      // Elements
      const elements_ = copy(values).map((item: IItem) => {
        const {
          color: color_,

          tone = 'main'
        } = item;

        const [x, y, size, label] = item.values;

        const values_ = {
          x: percentageFromValueWithinRange(x, refs.minMax.current.min.x, refs.minMax.current.max.x),
          y: percentageFromValueWithinRange(y, refs.minMax.current.min.y, refs.minMax.current.max.y)
        };

        values_.x = valueFromPercentageWithinRange(values_.x, 0, width);

        values_.y = valueFromPercentageWithinRange(values_.y, 0, height);

        const value_: any = [...[values_.x, height - values_.y].map(item_ => Math.abs(item_)), size, label];

        const minR = 4;
        const maxR = 40;

        const percentage = percentageFromValueWithinRange(value_[2], minSize, maxSize);

        const r = valueFromPercentageWithinRange(percentage, minR, maxR);

        return {
          item,

          element: (
            <g>
              <Path
                r={r}

                cx={value_[0]}

                cy={value_[1]}

                fill={theme.methods.palette.color.colorToRgb(!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone], 0.14)}

                stroke={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

                strokeWidth='2px'

                Component='circle'

                {...PathProps}
              />

              {(r >= 20 && value_[3]) && (
                <text
                  x={value_[0]}

                  y={value_[1]}

                  className={classNames([
                    staticClassName('BubbleChart', theme) && [
                      'AmauiBubbleChart-text'
                    ],

                    classes.text
                  ])}
                >
                  {value_[3]}
                </text>
              )}
            </g>
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

  const tooltipRender = is('function', tooltipRender_) ? tooltipRender_ : (values_: any) => {
    const {
      values
    } = values_;

    return {
      element: (
        <Line
          tonal={tonal}

          color={color}

          elevation={1}

          gap={0.5}

          direction='column'

          offset={[14, 14]}

          padding={[14, 14]}

          switch

          Component={Surface}

          className={classNames([
            staticClassName('Chart', theme) && [
              'AmauiChart-append'
            ],

            classes.append
          ])}
        >
          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <Type
              version='b3'
            >
              {values?.[3]}
            </Type>
          </Line>

          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {names?.y || 'y'}
            </Type>

            <Type
              version='b3'
            >
              {values?.[1]}
            </Type>
          </Line>

          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {names?.x || 'x'}
            </Type>

            <Type
              version='b3'
            >
              {values?.[0]}
            </Type>
          </Line>

          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {names?.size || 'Size'}
            </Type>

            <Type
              version='b3'
            >
              {values?.[2]}
            </Type>
          </Line>
        </Line>
      )
    };
  };

  const tooltipGroupRender = is('function', tooltipGroupRender_) ? tooltipGroupRender_ : (groups: any, groupsSorted: string[]) => {

    return (
      <Line
        tonal={tonal}

        color={color}

        elevation={1}

        gap={0.25}

        direction='column'

        offset={[14, 14]}

        padding={[14, 14]}

        switch

        Component={Surface}

        className={classNames([
          staticClassName('Chart', theme) && [
            'AmauiChart-append'
          ],

          classes.append
        ])}
      >
        <Line
          gap={1}

          direction='column'

          style={{
            width: '100%'
          }}
        >
          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              Label
            </Type>

            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {names?.y || 'y'}
            </Type>

            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {names?.x || 'x'}
            </Type>

            <Type
              version='b3'

              style={{
                fontWeight: 600
              }}
            >
              {names?.size || 'Size'}
            </Type>
          </Line>

          <Line
            gap={1}

            direction='column'
          >
            {groupsSorted.map((group: string, index: number) => (
              <Line
                key={index}

                gap={1}

                direction='column'

                style={{
                  width: '100%'
                }}
              >
                <span
                  className={classNames([
                    staticClassName('Chart', theme) && [
                      'AmauiLineChart-append-icon'
                    ],

                    classes.append_icon
                  ])}

                  style={{
                    background: !theme.palette.color[group] ? group : theme.palette.color[group][groups[group][0]?.item?.tone || 'main']
                  }}
                />

                <Line
                  gap={0}

                  direction='column'

                  style={{
                    width: '100%'
                  }}
                >
                  {groups[group].map((item: any, index_: number) => (
                    <Line
                      key={index_}

                      gap={1}

                      direction='row'

                      style={{
                        width: '100%'
                      }}
                    >
                      <Type
                        version='b3'
                      >
                        {item?.values?.[3]}
                      </Type>

                      <Type
                        version='b3'
                      >
                        {item?.values?.[0]}
                      </Type>

                      <Type
                        version='b3'
                      >
                        {item?.values?.[1]}
                      </Type>

                      <Type
                        version='b3'
                      >
                        {item?.values?.[2]}
                      </Type>
                    </Line>
                  ))}
                </Line>
              </Line>
            ))}
          </Line>
        </Line>
      </Line>
    );
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

      tooltipRender={tooltipRender}

      tooltipGroupRender={tooltipGroupRender}

      onUpdateRects={onUpdateRects}

      className={classNames([
        staticClassName('BubbleChart', theme) && [
          'AmauiBubbleChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

BubbleChart.displayName = 'AmauiBubbleChart';

export default BubbleChart;
