import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import PieChart from '../PieChart';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '& .AmauiChart-legend-icon': {
      position: 'relative',
      background: 'none !important',
      border: '2px solid currentColor'
    }
  }
}), { name: 'AmauiDonutChart' });

const DonutChart = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDonutChart?.props?.default }), [props_]);

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
          'AmauiDonutChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

DonutChart.displayName = 'AmauiDonutChart';

export default DonutChart;
