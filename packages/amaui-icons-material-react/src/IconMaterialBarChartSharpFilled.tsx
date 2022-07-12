import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarChartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartSharpFilled'
      short_name='BarChart'

      {...props}
    >
      <path d="M5 20V9H8V20ZM10.5 20V5H13.5V20ZM16 20V13H19V20Z"/>
    </Icon>
  )
});

export default IconMaterialBarChartSharpFilled;
