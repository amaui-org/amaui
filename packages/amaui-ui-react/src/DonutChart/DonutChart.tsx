import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import PieChart from '../PieChart';
import { IPieChart } from '../PieChart/PieChart';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '& .amaui-Chart-legend-icon': {
      position: 'relative',
      background: 'none !important',
      border: '2px solid currentColor'
    }
  }
}), { name: 'amaui-DonutChart' });

export interface IDonutChart extends IPieChart {

}

const DonutChart = React.forwardRef((props_: IDonutChart, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiDonutChart?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

  return (
    <PieChart
      ref={ref}

      innerOffset={0.64}

      className={classNames([
        staticClassName('DonutChart', theme) && [
          'amaui-DonutChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

DonutChart.displayName = 'amaui-DonutChart';

export default DonutChart;
