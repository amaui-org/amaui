import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import Line from '../Line';
import Type from '../Type';
import { IChart } from '../Chart/Chart';
import { staticClassName } from '../utils';

export interface IItem {
  color: string;
  tone?: string;
  name?: string;
  style?: Record<string, any>;

  values: Array<[number, number]>;
}

const useStyle = styleMethod(theme => ({
  root: {

  },

  legend_item: {
    userSelect: 'none'
  },

  legend_icon: {
    width: '8px',
    height: '8px',
    borderRadius: '50%'
  }
}), { name: 'amaui-ScatterChart' });

export interface IScatterChart extends IChart {

}

const ScatterChart = React.forwardRef((props_: IScatterChart, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiScatterChart?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    values,

    PathProps,
    LegendItemProps,

    className,

    ...other
  } = props;

  const [value, setValue] = React.useState<any>();

  const refs = {
    theme: React.useRef<any>()
  };

  refs.theme.current = theme;

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
          staticClassName('ScatterChart', theme) && [
            'amaui-ScatterChart-legend-item'
          ],

          className_,
          LegendItemProps?.className,
          classes.legend_item
        ])}

        {...other_}
      >
        <span
          className={classNames([
            staticClassName('ScatterChart', theme) && [
              'amaui-ScatterChart-legend-icon'
            ],

            classes.legend_icon
          ])}

          style={{
            background: !refs.theme.current.palette.color[color_] ? color_ : refs.theme.current.palette.color[color_][tone]
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
    if (values) {
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

      // Update children value
      setValue({
        legend: legend_
      });
    }
  };

  React.useEffect(() => {
    make();
  }, [values, theme]);

  const onUpdateRects = () => {
    make();
  };

  return (
    <Chart
      ref={ref}

      tonal={tonal}

      color={color}

      values={values}

      legend={value?.legend}

      pointsVisibility='visible'

      onUpdateRects={onUpdateRects}

      className={classNames([
        staticClassName('ScatterChart', theme) && [
          'amaui-ScatterChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

ScatterChart.displayName = 'amaui-ScatterChart';

export default ScatterChart;
