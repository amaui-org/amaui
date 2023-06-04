import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCenterFocusStrongW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusStrongW100Filled'

      short_name='CenterFocusStrong'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.7q-1.55 0-2.625-1.075T8.3 12q0-1.55 1.075-2.625T12 8.3q1.55 0 2.625 1.075T15.7 12q0 1.55-1.075 2.625T12 15.7ZM4.3 9V4.3H9V5H5v4ZM9 19.7H4.3V15H5v4h4Zm6 0V19h4v-4h.7v4.7ZM19 9V5h-4v-.7h4.7V9Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusStrongW100Filled.displayName = 'AmauiIconMaterialCenterFocusStrongW100Filled';

export default IconMaterialCenterFocusStrongW100Filled;
