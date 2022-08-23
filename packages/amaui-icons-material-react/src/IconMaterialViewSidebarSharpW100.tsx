import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewSidebarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarSharpW100'
      short_name='ViewSidebar'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM16.45 9.55H20V6H16.45ZM16.45 13.75H20V10.25H16.45ZM4 18H15.75V6H4ZM16.45 18H20V14.45H16.45Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarSharpW100.displayName = 'AmauiIconMaterialViewSidebarSharpW100';

export default IconMaterialViewSidebarSharpW100;
