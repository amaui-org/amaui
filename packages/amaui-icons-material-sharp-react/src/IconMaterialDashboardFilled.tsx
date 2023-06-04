import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardFilled'

      short_name='Dashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 9V3h8v6ZM3 13V3h8v10Zm10 8V11h8v10ZM3 21v-6h8v6Z"/>
    </Icon>
  );
});

IconMaterialDashboardFilled.displayName = 'AmauiIconMaterialDashboardFilled';

export default IconMaterialDashboardFilled;
