import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccountW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountW100Filled'

      short_name='SwitchAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 11.6q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q14.975 6.9 14 6.9q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm-6.7 5.1V3.3h13.4v13.4Zm-4 4V7.3H4V20h12.7v.7ZM8.75 16h10.5q-1.15-1.225-2.487-1.762Q15.425 13.7 14 13.7q-1.425 0-2.762.538Q9.9 14.775 8.75 16Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountW100Filled.displayName = 'AmauiIconMaterialSwitchAccountW100Filled';

export default IconMaterialSwitchAccountW100Filled;
