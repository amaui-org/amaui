import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardSharpFilled'
      short_name='SpaceDashboard'

      {...props}
    >
      <path d="M3 21V3H11V21ZM13 10V3H21V10ZM21 21H13V12H21Z"/>
    </Icon>
  );
});

export default IconMaterialSpaceDashboardSharpFilled;
