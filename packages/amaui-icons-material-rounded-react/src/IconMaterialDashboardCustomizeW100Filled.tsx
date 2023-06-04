import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboardCustomizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomizeW100Filled'

      short_name='DashboardCustomize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.4 10.35q-.325 0-.537-.213-.213-.212-.213-.537V4.4q0-.325.213-.538.212-.212.537-.212h5.2q.325 0 .538.212.212.213.212.538v5.2q0 .325-.212.537-.213.213-.538.213Zm10 0q-.325 0-.537-.213-.213-.212-.213-.537V4.4q0-.325.213-.538.212-.212.537-.212h5.2q.325 0 .538.212.212.213.212.538v5.2q0 .325-.212.537-.213.213-.538.213Zm-10 10q-.325 0-.537-.212-.213-.213-.213-.538v-5.2q0-.325.213-.538.212-.212.537-.212h5.2q.325 0 .538.212.212.213.212.538v5.2q0 .325-.212.538-.213.212-.538.212Zm12.6 0q-.15 0-.25-.1t-.1-.25v-2.65h-2.675q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-2.675q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25v2.65h2.675q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1h-2.65v2.675q0 .125-.1.225t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomizeW100Filled.displayName = 'AmauiIconMaterialDashboardCustomizeW100Filled';

export default IconMaterialDashboardCustomizeW100Filled;
