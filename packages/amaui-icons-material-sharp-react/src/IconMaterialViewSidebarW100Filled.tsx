import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewSidebarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarW100Filled'

      short_name='ViewSidebar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.7 9.3v-4h4v4Zm0 4.7v-4h4v4ZM3.3 18.7V5.3H16v13.4Zm13.4 0v-4h4v4Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarW100Filled.displayName = 'AmauiIconMaterialViewSidebarW100Filled';

export default IconMaterialViewSidebarW100Filled;
