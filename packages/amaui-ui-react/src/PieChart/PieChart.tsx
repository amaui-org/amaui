import React from 'react';

import { copy, percentageFromValueWithinRange } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import Path from '../Path';
import Line from '../Line';
import Type from '../Type';
import useMediaQuery from '../useMediaQuery';
import Surface from '../Surface';

import { angleToCoordinates, staticClassName } from '../utils';

export interface IItem {
  color: string;
  tone?: string;
  name?: string;
  style?: Record<string, any>;

  values: Array<[number, number]> | [number, number];
}

const useStyle = style(theme => ({
  root: {
    '& .AmauiChart-wrapper': {
      aspectRatio: '1',
      maxWidth: '240px',
      height: 'unset'
    }
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
    textAnchor: 'middle',
    alignmentBaseline: 'middle',
    userSelect: 'none'
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
}), { name: 'AmauiPieChart' });

const PieChart = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiPieChart?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    names,

    gap = 0,

    boundaryWidth = 1,

    innerOffset = 0,

    values,

    PathProps,
    LegendItemProps,

    className,

    ...other
  } = props;

  const [value, setValue] = React.useState<any>();

  const refs = {
    rects: React.useRef<any>()
  };

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
          staticClassName('PieChart', theme) && [
            'AmauiPieChart-legend-item'
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
              'AmauiPieChart-legend-icon'
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

      const center = width / 2;

      const radius = (width / 2) - (boundaryWidth / 2);

      const total = 360;

      const valueTotal = values.reduce((result, value) => result += value.values[0], 0);

      const angles: any = {
        start: angleToCoordinates(0, center, center, radius)
      };

      let anglePrevious = 0;

      let value_ = [];

      let d = '';

      // Elements
      const elements_ = copy(values).map((item: IItem, index: number) => {
        const {
          color: color_,

          tone = 'main'
        } = item;

        const partPercentage = percentageFromValueWithinRange(item.values[0] as number, 0, valueTotal);

        const part = (total * (partPercentage / 100)) - (index * gap);

        let startCenter = angleToCoordinates(anglePrevious, center, center, radius * innerOffset);

        // Move to 0 deg
        if (index === 0) value_.push(
          'M', startCenter.x, startCenter.y,
          // Move to 0 deg
          'L', angles.start.x, angles.start.y
        );

        let angleEnd = anglePrevious + part;

        const angleText = anglePrevious + (part / 2);

        const angleTextCoordinates = angleToCoordinates(angleText, center, center, (radius - (radius - (radius * innerOffset)) / 2));

        angles.end = angleToCoordinates(angleEnd, center, center, radius);

        angles.move = angleToCoordinates(angleEnd + gap, center, center, radius);

        // Arc
        let invert = 0;

        if (part > 180) invert = 1;

        value_.push(
          'A', radius, radius, 0, invert, 1, angles.end.x, angles.end.y
        );

        // To donut value or center
        const endCenter = angleToCoordinates(angleEnd, center, center, radius * innerOffset);

        value_.push(
          'L', endCenter.x, endCenter.y
        );

        if (innerOffset) {
          value_.push(
            'A', radius * innerOffset, radius * innerOffset, 0, invert, 1, startCenter.x, startCenter.y
          );
        }

        value_.push(
          'Z'
        );

        // path
        d = value_.join(' ');

        // Move the gap if there's a gap
        if (gap > 0 && index < values.length - 1) {
          value_.push(
            'M', angles.move.x, angles.move.y
          );

          anglePrevious = angleEnd + gap;
        }
        else anglePrevious = angleEnd;

        // Move for the next value
        if (index < values.length - 1) {
          startCenter = angleToCoordinates(anglePrevious, center, center, radius * innerOffset);

          value_ = [
            'M', startCenter.x, startCenter.y,
            'L', angles.move.x, angles.move.y
          ];
        }

        return {
          item,

          element: (
            <g>
              <Path
                d={d}

                fill={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

                stroke='none'

                {...PathProps}
              />

              {partPercentage >= 7 && (
                <text
                  x={angleTextCoordinates.x}

                  y={angleTextCoordinates.y}

                  className={classNames([
                    staticClassName('PieChart', theme) && [
                      'AmauiPieChart-text'
                    ],

                    classes.text
                  ])}

                  fill={theme.methods.palette.color.text(!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone], true, 'light')}
                >
                  {`${partPercentage.toFixed(1)}%`.replace('.0%', '%')}
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

  const tooltipRender = (values_: any) => {
    const {
      name,

      color: color_,

      tone = 'main',

      values: values__
    } = values_;

    const valueTotal = values.reduce((result, value) => result += value.values[0], 0);

    const valueValue = values__[0];

    const valuePercentage = (((valueValue / valueTotal) * 100).toFixed(1)).replace('.0', '');

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
            <span
              className={classNames([
                staticClassName('Chart', theme) && [
                  'AmauiLineChart-append-icon'
                ],

                classes.append_icon
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
              {names?.value || 'Value'}
            </Type>

            <Type
              version='b3'
            >
              {valueValue}
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
              {names?.percentage || 'Percentage'}
            </Type>

            <Type
              version='b3'
            >
              {valuePercentage}%
            </Type>
          </Line>
        </Line>
      )
    };
  };

  return (
    <Chart
      ref={ref}

      tonal={tonal}

      color={color}

      values={values}

      names={names}

      elements={value?.elements}

      legend={value?.legend}

      labels={false}

      marks={false}

      borders={false}

      tooltipRender={tooltipRender}

      onUpdateRects={onUpdateRects}

      elementTooltip

      noMain

      className={classNames([
        staticClassName('PieChart', theme) && [
          'AmauiPieChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

PieChart.displayName = 'AmauiPieChart';

export default PieChart;
