import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardSharp'
      short_name='Dashboard'

      {...props}
    >
      <path d="M13 9V3H21V9ZM3 13V3H11V13ZM13 21V11H21V21ZM3 21V15H11V21ZM5 11H9V5H5ZM15 19H19V13H15ZM15 7H19V5H15ZM5 19H9V17H5ZM9 11ZM15 7ZM15 13ZM9 17Z"/>
    </Icon>
  );
});

IconMaterialDashboardSharp.displayName = 'AmauiIconMaterialDashboardSharp';

export default IconMaterialDashboardSharp;
