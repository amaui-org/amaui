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
      <path d="M4 18.7q-.275 0-.487-.213Q3.3 18.275 3.3 18V6q0-.275.213-.488Q3.725 5.3 4 5.3h16q.275 0 .488.212.212.213.212.488v12q0 .275-.212.487-.213.213-.488.213Zm12.45-9.15H20V6h-3.55v3.55Zm0 4.2H20v-3.5h-3.55v3.5ZM4 18h11.75V6H4v12Zm12.45 0H20v-3.55h-3.55V18Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarW100.displayName = 'AmauiIconMaterialViewSidebarW100';

export default IconMaterialViewSidebarW100;
