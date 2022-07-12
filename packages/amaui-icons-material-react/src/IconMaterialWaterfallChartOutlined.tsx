import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterfallChartOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChartOutlined'
      short_name='WaterfallChart'

      {...props}
    >
      <path d="M18 20V4H21V20ZM3 20V13H6V20ZM14 7V4H17V7ZM10 9V5H13V9ZM7 14V10H10V14Z"/>
    </Icon>
  )
});

export default IconMaterialWaterfallChartOutlined;
