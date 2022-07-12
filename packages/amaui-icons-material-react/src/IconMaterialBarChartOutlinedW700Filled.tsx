import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarChartOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartOutlinedW700Filled'
      short_name='BarChart'

      {...props}
    >
      <path d="M3.65 19.8V8.425H7.8V19.8ZM9.925 19.8V4.425H14.075V19.8ZM16.2 19.8V12.425H20.35V19.8Z"/>
    </Icon>
  )
});

export default IconMaterialBarChartOutlinedW700Filled;
