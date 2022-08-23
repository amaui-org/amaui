import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTeamDashboardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TeamDashboardSharp'
      short_name='TeamDashboard'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM10 19V13H5V19Q5 19 5 19Q5 19 5 19ZM12 19H19Q19 19 19 19Q19 19 19 19V13H12ZM5 11H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  );
});

IconMaterialTeamDashboardSharp.displayName = 'AmauiIconMaterialTeamDashboardSharp';

export default IconMaterialTeamDashboardSharp;
