import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardSharpFilled'
      short_name='Dashboard'

      {...props}
    >
      <path d="M13 9V3H21V9ZM3 13V3H11V13ZM13 21V11H21V21ZM3 21V15H11V21Z"/>
    </Icon>
  );
});

export default IconMaterialDashboardSharpFilled;
