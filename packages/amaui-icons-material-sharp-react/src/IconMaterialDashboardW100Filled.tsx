import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardW100Filled'

      short_name='Dashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 9V4.3h6.05V9ZM4.3 11.7V4.3h6.05v7.4Zm9.35 8v-7.4h6.05v7.4Zm-9.35 0V15h6.05v4.7Z"/>
    </Icon>
  );
});

IconMaterialDashboardW100Filled.displayName = 'AmauiIconMaterialDashboardW100Filled';

export default IconMaterialDashboardW100Filled;
