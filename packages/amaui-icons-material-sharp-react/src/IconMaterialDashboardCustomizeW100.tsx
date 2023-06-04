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
      <path d="M3.65 3.65h6.7v6.7h-6.7Zm.7.7v5.3Zm9.3-.7h6.7v6.7h-6.7Zm.7.7v5.3Zm-10.7 9.3h6.7v6.7h-6.7Zm.7.7v5.3Zm12.3-.7h.7v3h3v.7h-3v3h-.7v-3h-3v-.7h3Zm-2.3-9.3v5.3h5.3v-5.3Zm-10 0v5.3h5.3v-5.3Zm0 10v5.3h5.3v-5.3Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomizeW100.displayName = 'AmauiIconMaterialDashboardCustomizeW100';

export default IconMaterialDashboardCustomizeW100;
