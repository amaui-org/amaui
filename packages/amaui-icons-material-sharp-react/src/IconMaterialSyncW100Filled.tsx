import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncW100Filled'

      short_name='Sync'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.85 19.15v-.7h3.2L6.8 17.2q-1.125-1.125-1.637-2.438Q4.65 13.45 4.65 12.1q0-2.3 1.288-4.188Q7.225 6.025 9.35 5.15v.75q-1.825.8-2.912 2.487Q5.35 10.075 5.35 12.1q0 1.25.475 2.425Q6.3 15.7 7.3 16.7l1.25 1.25v-3.2h.7v4.4Zm9.8-.3v-.75q1.825-.8 2.912-2.487 1.088-1.688 1.088-3.713 0-1.25-.475-2.425Q17.7 8.3 16.7 7.3l-1.25-1.25v3.2h-.7v-4.4h4.4v.7h-3.2L17.2 6.8q1.125 1.125 1.637 2.438.513 1.312.513 2.662 0 2.3-1.288 4.187-1.287 1.888-3.412 2.763Z"/>
    </Icon>
  );
});

IconMaterialSyncW100Filled.displayName = 'AmauiIconMaterialSyncW100Filled';

export default IconMaterialSyncW100Filled;
