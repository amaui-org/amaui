import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroupedBarChartTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupedBarChartTwoTone'
      short_name='GroupedBarChart'

      {...props}
    >
      <path d="M1.55 20.5V7.475H5.575V20.5ZM6.7 20.5V14.475H10.725V20.5ZM13.3 20.5V4.475H17.325V20.5ZM18.45 20.5V9.475H22.475V20.5Z"/>
    </Icon>
  )
});

export default IconMaterialGroupedBarChartTwoTone;
