import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import { IChart } from '../Chart/Chart';
import ScatterChartItem from '../ScatterChartItem';
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
