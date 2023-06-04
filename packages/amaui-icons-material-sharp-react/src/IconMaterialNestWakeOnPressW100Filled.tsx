import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressW100Filled'

      short_name='NestWakeOnPress'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.925 12.325v-6.35h1.4v6.35Zm-11.8 7.5-4.5-4.45.75-.75 3.8.75v-9.75q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.2l4.8 2.35-1.15 6.55Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPressW100Filled.displayName = 'AmauiIconMaterialNestWakeOnPressW100Filled';

export default IconMaterialNestWakeOnPressW100Filled;
