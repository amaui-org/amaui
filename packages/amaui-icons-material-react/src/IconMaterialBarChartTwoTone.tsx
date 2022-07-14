import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarChartTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartTwoTone'
      short_name='BarChart'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 9.2h3V19H5zM16.2 13H19v6h-2.8zm-5.6-8h2.8v14h-2.8z"/>
    </Icon>
  );
});

export default IconMaterialBarChartTwoTone;
