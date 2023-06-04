import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmptyDashboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmptyDashboardW100'

      short_name='EmptyDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 17.6h4.9v-3.4H6.4Zm0-4.8h4.9V6.4H6.4Zm6.3 4.8h4.9v-6.4h-4.9Zm0-7.8h4.9V6.4h-4.9Zm-6.9 9.9q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075V8h1.4v.7h-1.4v2.95h1.4v.7h-1.4v2.95h1.4v.7h-1.4v2.2q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25ZM5 5V19 5Z"/>
    </Icon>
  );
});

IconMaterialEmptyDashboardW100.displayName = 'AmauiIconMaterialEmptyDashboardW100';

export default IconMaterialEmptyDashboardW100;
