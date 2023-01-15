import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import { IChart } from '../Chart/Chart';
import LineChartItem from '../LineChartItem';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '& .amaui-Chart-legend-icon': {
      width: '11px',
      height: '2px',
      borderRadius: 'unset'
    }
  }
}), { name: 'amaui-LineChart' });

export interface ILineChart extends IChart {
  smooth?: boolean;

  smoothRatio?: number;
}

const LineChart = React.forwardRef((props_: ILineChart, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiLineChart?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    values,

    className,

    ...other
  } = props;

  return (
    <Chart
      ref={ref}

      values={values}

      className={classNames([
        staticClassName('LineChart', theme) && [
          'amaui-LineChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {is('array', values) && values.map((item, index: number) => (
        <LineChartItem
          key={index}

          {...item}
        />
      ))}
    </Chart>
  );
});

LineChart.displayName = 'amaui-LineChart';

export default LineChart;
