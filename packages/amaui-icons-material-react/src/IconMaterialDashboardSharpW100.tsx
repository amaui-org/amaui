import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardSharpW100'
      short_name='Dashboard'

      {...props}
    >
      <path d="M13.65 9V4.3H19.7V9ZM4.3 11.7V4.3H10.35V11.7ZM13.65 19.7V12.3H19.7V19.7ZM4.3 19.7V15H10.35V19.7ZM5 11H9.65V5H5ZM14.35 19H19V13H14.35ZM14.35 8.3H19V5H14.35ZM5 19H9.65V15.7H5ZM9.65 11ZM14.35 8.3ZM14.35 13ZM9.65 15.7Z"/>
    </Icon>
  );
});

IconMaterialDashboardSharpW100.displayName = 'AmauiIconMaterialDashboardSharpW100';

export default IconMaterialDashboardSharpW100;
