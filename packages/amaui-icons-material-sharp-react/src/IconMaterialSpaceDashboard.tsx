import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceDashboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboard'

      short_name='SpaceDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h6V5H5Zm8 0h6v-7h-6Zm0-9h6V5h-6Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboard.displayName = 'AmauiIconMaterialSpaceDashboard';

export default IconMaterialSpaceDashboard;
