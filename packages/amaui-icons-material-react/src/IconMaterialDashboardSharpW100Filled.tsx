import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardSharpW100Filled'
      short_name='Dashboard'

      {...props}
    >
      <path d="M13.65 9V4.3H19.7V9ZM4.3 11.7V4.3H10.35V11.7ZM13.65 19.7V12.3H19.7V19.7ZM4.3 19.7V15H10.35V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialDashboardSharpW100Filled;
