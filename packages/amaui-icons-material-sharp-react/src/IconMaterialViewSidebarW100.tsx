import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewSidebarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarW100'

      short_name='ViewSidebar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4Zm13.15-9.15H20V6h-3.55Zm0 4.2H20v-3.5h-3.55ZM4 18h11.75V6H4Zm12.45 0H20v-3.55h-3.55Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarW100.displayName = 'AmauiIconMaterialViewSidebarW100';

export default IconMaterialViewSidebarW100;
