import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardW100Filled'

      short_name='SpaceDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h7.35v15.4Zm8.05-8.4v-7h7.35v7Zm7.35 8.4h-7.35V12h7.35Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardW100Filled.displayName = 'AmauiIconMaterialSpaceDashboardW100Filled';

export default IconMaterialSpaceDashboardW100Filled;
