import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardRounded'
      short_name='SpaceDashboard'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H11Q11 19 11 19Q11 19 11 19V5Q11 5 11 5Q11 5 11 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM13 19H19Q19 19 19 19Q19 19 19 19V12Q19 12 19 12Q19 12 19 12H13Q13 12 13 12Q13 12 13 12V19Q13 19 13 19Q13 19 13 19ZM13 10H19Q19 10 19 10Q19 10 19 10V5Q19 5 19 5Q19 5 19 5H13Q13 5 13 5Q13 5 13 5V10Q13 10 13 10Q13 10 13 10Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardRounded.displayName = 'AmauiIconMaterialSpaceDashboardRounded';

export default IconMaterialSpaceDashboardRounded;
