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
      <path d="M12 15.35q-.15 0-.25-.1t-.1-.25V6.225l-3.025 3.05q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25l3.35-3.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l3.35 3.325q.1.1.1.25t-.1.25q-.1.1-.25.1t-.25-.1l-3.025-3.05V15q0 .15-.1.25t-.25.1Zm-4 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialUpgradeW100Filled.displayName = 'AmauiIconMaterialUpgradeW100Filled';

export default IconMaterialUpgradeW100Filled;
