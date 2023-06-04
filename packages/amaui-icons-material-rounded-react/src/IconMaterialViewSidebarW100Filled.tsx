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
      <path d="M17.45 9.3q-.325 0-.537-.213-.213-.212-.213-.537v-2.5q0-.325.213-.538.212-.212.537-.212h2.5q.325 0 .538.212.212.213.212.538v2.5q0 .325-.212.537-.213.213-.538.213Zm0 4.7q-.325 0-.537-.213-.213-.212-.213-.537v-2.5q0-.325.213-.538.212-.212.537-.212h2.5q.325 0 .538.212.212.213.212.538v2.5q0 .325-.212.537-.213.213-.538.213Zm-13.4 4.7q-.325 0-.537-.213-.213-.212-.213-.537V6.05q0-.325.213-.538.212-.212.537-.212h11.2q.325 0 .538.212.212.213.212.538v11.9q0 .325-.212.537-.213.213-.538.213Zm13.4 0q-.325 0-.537-.213-.213-.212-.213-.537v-2.5q0-.325.213-.538.212-.212.537-.212h2.5q.325 0 .538.212.212.213.212.538v2.5q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarW100Filled.displayName = 'AmauiIconMaterialViewSidebarW100Filled';

export default IconMaterialViewSidebarW100Filled;
