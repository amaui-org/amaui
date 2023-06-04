import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardW100'

      short_name='SpaceDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h6.65V5H5Zm7.35 0H19v-7h-6.65Zm0-7.7H19V5h-6.65Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardW100.displayName = 'AmauiIconMaterialSpaceDashboardW100';

export default IconMaterialSpaceDashboardW100;
