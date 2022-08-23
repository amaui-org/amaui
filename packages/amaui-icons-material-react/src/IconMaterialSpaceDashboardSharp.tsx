import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardSharp'
      short_name='SpaceDashboard'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H11V5H5ZM13 19H19V12H13ZM13 10H19V5H13Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardSharp.displayName = 'AmauiIconMaterialSpaceDashboardSharp';

export default IconMaterialSpaceDashboardSharp;
