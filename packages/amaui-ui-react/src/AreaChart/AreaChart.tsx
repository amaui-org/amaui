import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import { IChart } from '../Chart/Chart';
import AreaChartItem from '../AreaChartItem';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-AreaChart' });

export interface IAreaChart extends IChart {
  smooth?: boolean;

  smoothRatio?: number;

  linearGradient?: boolean;
}

const AreaChart: React.FC<IAreaChart> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAreaChart?.props?.default, ...props_ }), [props_]);

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
        staticClassName('AreaChart', theme) && [
          'amaui-AreaChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {is('array', values) && values.map((item, index: number) => (
        <AreaChartItem
          key={index}

          {...item}
        />
      ))}
    </Chart>
  );
});

AreaChart.displayName = 'amaui-AreaChart';

export default AreaChart;
