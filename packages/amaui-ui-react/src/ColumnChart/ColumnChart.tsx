import React from 'react';

import { clamp, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Chart from '../Chart';
import { IChart } from '../Chart/Chart';
import ColumnChartItem from '../ColumnChartItem';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '& .amaui-Chart-legend-icon': {
      width: '6px',
      height: '12px',
      borderRadius: 'unset'
    }
  }
}), { name: 'amaui-ColumnChart' });

export interface IColumnChart extends IChart {

}

const ColumnChart = React.forwardRef((props_: IColumnChart, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiColumnChart?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    values,

    className,

    ...other
  } = props;

  const [rects, setRects] = React.useState<any>();

  const onUpdateRects = (valueNew: any) => {
    setRects(valueNew);
  };

  const wrapperRect = rects?.wrapper;

  const widthItem = wrapperRect ? clamp(wrapperRect?.width / (values.length * 2), undefined, 40) : undefined;

  return (
    <Chart
      ref={ref}

      values={values}

      pointsVisibility='hidden'

      elementTooltip

      onUpdateRects={onUpdateRects}

      className={classNames([
        staticClassName('ColumnChart', theme) && [
          'amaui-ColumnChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {is('array', values) && values.map((item, index: number) => (
        <ColumnChartItem
          key={index}

          width={widthItem}

          {...item}
        />
      ))}
    </Chart>
  );
});

ColumnChart.displayName = 'amaui-ColumnChart';

export default ColumnChart;
