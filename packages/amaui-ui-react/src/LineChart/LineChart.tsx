import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ChartElement from '../Chart';
import LineChartItemElement from '../LineChartItem';
import { IChart } from '../Chart/Chart';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-LineChart' });

export interface ILineChart extends IChart {
  smooth?: boolean;

  smoothRatio?: number;
}

const LineChart: React.FC<ILineChart> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiLineChart?.props?.default, ...props_ }), [props_]);

  const Chart = React.useMemo(() => theme?.elements?.Chart || ChartElement, [theme]);

  const LineChartItem = React.useMemo(() => theme?.elements?.LineChartItem || LineChartItemElement, [theme]);

  const {
    values,

    smooth,

    smoothRatio,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

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

          smooth={smooth}

          smoothRatio={smoothRatio}

          {...item}
        />
      ))}
    </Chart>
  );
});

LineChart.displayName = 'amaui-LineChart';

export default LineChart;
