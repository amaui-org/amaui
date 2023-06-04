import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpgradeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeW100Filled'

      short_name='Upgrade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 19.35v-.7h8.7v.7Zm4-4V6.225L8.375 9.5 7.9 9.025l4.1-4.1 4.1 4.1-.475.475-3.275-3.275v9.125Z"/>
    </Icon>
  );
});

IconMaterialUpgradeW100Filled.displayName = 'AmauiIconMaterialUpgradeW100Filled';

export default IconMaterialUpgradeW100Filled;
