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
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h5.85V5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25Zm6.55 0h5.85q.3 0 .55-.25.25-.25.25-.55V12h-6.65v7Zm0-7.7H19V5.8q0-.3-.25-.55Q18.5 5 18.2 5h-5.85v6.3Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardW100.displayName = 'AmauiIconMaterialSpaceDashboardW100';

export default IconMaterialSpaceDashboardW100;
