import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboardCustomizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomizeFilled'

      short_name='DashboardCustomize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 11V3h8v8Zm10 0V3h8v8ZM3 21v-8h8v8Zm13 0v-3h-3v-2h3v-3h2v3h3v2h-3v3Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomizeFilled.displayName = 'AmauiIconMaterialDashboardCustomizeFilled';

export default IconMaterialDashboardCustomizeFilled;
