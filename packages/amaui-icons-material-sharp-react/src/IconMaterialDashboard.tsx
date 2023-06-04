import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dashboard'

      short_name='Dashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 9V3h8v6ZM3 13V3h8v10Zm10 8V11h8v10ZM3 21v-6h8v6Zm2-10h4V5H5Zm10 8h4v-6h-4Zm0-12h4V5h-4ZM5 19h4v-2H5Zm4-8Zm6-4Zm0 6Zm-6 4Z"/>
    </Icon>
  );
});

IconMaterialDashboard.displayName = 'AmauiIconMaterialDashboard';

export default IconMaterialDashboard;
