import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardW100Filled'

      short_name='Dashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 8.25v-3.2q0-.325.213-.538.212-.212.537-.212h4.55q.325 0 .538.212.212.213.212.538v3.2q0 .325-.212.537Q19.275 9 18.95 9H14.4q-.325 0-.537-.213-.213-.212-.213-.537Zm-9.35 2.7v-5.9q0-.325.213-.538.212-.212.537-.212H9.6q.325 0 .538.212.212.213.212.538v5.9q0 .325-.212.537-.213.213-.538.213H5.05q-.325 0-.537-.213-.213-.212-.213-.537Zm9.35 8v-5.9q0-.325.213-.538.212-.212.537-.212h4.55q.325 0 .538.212.212.213.212.538v5.9q0 .325-.212.537-.213.213-.538.213H14.4q-.325 0-.537-.213-.213-.212-.213-.537Zm-9.35 0v-3.2q0-.325.213-.538Q4.725 15 5.05 15H9.6q.325 0 .538.212.212.213.212.538v3.2q0 .325-.212.537-.213.213-.538.213H5.05q-.325 0-.537-.213-.213-.212-.213-.537Z"/>
    </Icon>
  );
});

IconMaterialDashboardW100Filled.displayName = 'AmauiIconMaterialDashboardW100Filled';

export default IconMaterialDashboardW100Filled;
