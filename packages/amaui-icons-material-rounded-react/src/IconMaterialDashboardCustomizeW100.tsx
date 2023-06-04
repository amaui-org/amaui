import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboardCustomizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomizeW100'

      short_name='DashboardCustomize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.4 10.35q-.325 0-.537-.213-.213-.212-.213-.537V4.4q0-.325.213-.538.212-.212.537-.212h5.2q.325 0 .538.212.212.213.212.538v5.2q0 .325-.212.537-.213.213-.538.213Zm-.05-6v5.3Zm10.05 6q-.325 0-.537-.213-.213-.212-.213-.537V4.4q0-.325.213-.538.212-.212.537-.212h5.2q.325 0 .538.212.212.213.212.538v5.2q0 .325-.212.537-.213.213-.538.213Zm-.05-6v5.3Zm-9.95 16q-.325 0-.537-.212-.213-.213-.213-.538v-5.2q0-.325.213-.538.212-.212.537-.212h5.2q.325 0 .538.212.212.213.212.538v5.2q0 .325-.212.538-.213.212-.538.212Zm-.05-6v5.3Zm12.65 6q-.15 0-.25-.1t-.1-.25v-2.65h-2.675q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-2.675q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25v2.65h2.675q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1h-2.65v2.675q0 .125-.1.225t-.25.1Zm-2.65-16v5.3h5.3v-5.3Zm-10 0v5.3h5.3v-5.3Zm0 10v5.3h5.3v-5.3Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomizeW100.displayName = 'AmauiIconMaterialDashboardCustomizeW100';

export default IconMaterialDashboardCustomizeW100;
