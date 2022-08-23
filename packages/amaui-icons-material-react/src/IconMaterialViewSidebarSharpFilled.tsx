import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewSidebarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarSharpFilled'
      short_name='ViewSidebar'

      {...props}
    >
      <path d="M18 8V4H22V8ZM18 14V10H22V14ZM2 20V4H16V20ZM18 20V16H22V20Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarSharpFilled.displayName = 'AmauiIconMaterialViewSidebarSharpFilled';

export default IconMaterialViewSidebarSharpFilled;
