import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShowChartTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartTwoTone'
      short_name='ShowChart'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M13.5 13.48l-4-4L2 16.99l1.5 1.5 6-6.01 4 4L22 6.92l-1.41-1.41z"/>
    </Icon>
  )
});

export default IconMaterialShowChartTwoTone;
