import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardFilled'

      short_name='SpaceDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h8v18Zm10-11V3h8v7Zm8 11h-8v-9h8Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardFilled.displayName = 'AmauiIconMaterialSpaceDashboardFilled';

export default IconMaterialSpaceDashboardFilled;
