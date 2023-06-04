import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboardCustomizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomizeW100Filled'

      short_name='DashboardCustomize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 10.35v-6.7h6.7v6.7Zm10 0v-6.7h6.7v6.7Zm-10 10v-6.7h6.7v6.7Zm13 0v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomizeW100Filled.displayName = 'AmauiIconMaterialDashboardCustomizeW100Filled';

export default IconMaterialDashboardCustomizeW100Filled;
