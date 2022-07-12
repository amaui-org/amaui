import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarChartOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChartOutlinedW100'
      short_name='BarChart'

      {...props}
    >
      <path d="M6.2 18.35V9.65H7.4V18.35ZM11.4 18.35V5.65H12.6V18.35ZM16.6 18.35V13.65H17.8V18.35Z"/>
    </Icon>
  )
});

export default IconMaterialBarChartOutlinedW100;
