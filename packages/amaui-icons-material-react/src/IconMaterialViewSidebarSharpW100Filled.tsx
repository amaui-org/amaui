import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewSidebarSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarSharpW100Filled'
      short_name='ViewSidebar'

      {...props}
    >
      <path d="M16.7 9.3V5.3H20.7V9.3ZM16.7 14V10H20.7V14ZM3.3 18.7V5.3H16V18.7ZM16.7 18.7V14.7H20.7V18.7Z"/>
    </Icon>
  );
});

export default IconMaterialViewSidebarSharpW100Filled;
