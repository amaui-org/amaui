import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ChartElement from '../Chart';
import ScatterChartItemElement from '../ScatterChartItem';
import { IChart } from '../Chart/Chart';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-ScatterChart' });

export interface IScatterChart extends IChart {

}

const ScatterChart: React.FC<IScatterChart> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiScatterChart?.props?.default, ...props_ }), [props_]);

  const Chart = React.useMemo(() => theme?.elements?.Chart || ChartElement, [theme]);

  const ScatterChartItem = React.useMemo(() => theme?.elements?.ScatterChartItem || ScatterChartItemElement, [theme]);

  const {
    values,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Chart
      ref={ref}

      values={values}

      className={classNames([
        staticClassName('ScatterChart', theme) && [
          'amaui-ScatterChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {is('array', values) && values.map((item, index: number) => (
        <ScatterChartItem
          key={index}

          {...item}
        />
      ))}
    </Chart>
  );
});

ScatterChart.displayName = 'amaui-ScatterChart';

export default ScatterChart;
