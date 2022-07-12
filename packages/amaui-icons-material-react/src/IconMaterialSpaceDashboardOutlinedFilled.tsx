import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardOutlinedFilled'
      short_name='SpaceDashboard'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H11V21ZM13 21V12H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM13 10V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V10Z"/>
    </Icon>
  )
});

export default IconMaterialSpaceDashboardOutlinedFilled;
