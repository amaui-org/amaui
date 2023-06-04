import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAltW100'

      short_name='SyncAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.75 11.85q-.125-.125-.125-.25t.125-.25l3-3H4q-.15 0-.25-.1T3.65 8q0-.15.1-.25t.25-.1h15.75l-3.025-3.025q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l3.325 3.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-3.35 3.35q-.1.1-.225.1t-.25-.125Zm-10 8-3.325-3.325q-.125-.125-.175-.25Q3.2 16.15 3.2 16q0-.15.05-.275.05-.125.175-.25l3.35-3.35q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-3 3H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H4.25l3.025 3.025q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialSyncAltW100.displayName = 'AmauiIconMaterialSyncAltW100';

export default IconMaterialSyncAltW100;
