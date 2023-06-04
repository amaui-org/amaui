import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmptyDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmptyDashboardW100Filled'

      short_name='EmptyDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 17.6h4.9v-3.4H6.4Zm0-4.8h4.9V6.4H6.4Zm6.3 4.8h4.9v-6.4h-4.9Zm0-7.8h4.9V6.4h-4.9Zm-6.9 9.9q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075V8h1.4v.7h-1.4v2.95h1.4v.7h-1.4v2.95h1.4v.7h-1.4v2.2q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialEmptyDashboardW100Filled.displayName = 'AmauiIconMaterialEmptyDashboardW100Filled';

export default IconMaterialEmptyDashboardW100Filled;
