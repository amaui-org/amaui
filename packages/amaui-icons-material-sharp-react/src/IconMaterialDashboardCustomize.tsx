import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboardCustomize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomize'

      short_name='DashboardCustomize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 3h8v8H3Zm2 2v4Zm8-2h8v8h-8Zm2 2v4ZM3 13h8v8H3Zm2 2v4Zm11-2h2v3h3v2h-3v3h-2v-3h-3v-2h3Zm-1-8v4h4V5ZM5 5v4h4V5Zm0 10v4h4v-4Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomize.displayName = 'AmauiIconMaterialDashboardCustomize';

export default IconMaterialDashboardCustomize;
