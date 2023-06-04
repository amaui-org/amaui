import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncSavedLocallyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSavedLocallyW100Filled'

      short_name='SyncSavedLocally'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.925 12.75 9.05 10.875q-.1-.1-.238-.113-.137-.012-.262.113t-.125.25q0 .125.125.25L10.4 13.2q.225.225.525.225.3 0 .525-.225l3.975-3.95q.125-.1.125-.238 0-.137-.125-.262t-.25-.125q-.125 0-.25.125ZM2 19v-.7h19.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm2.8-1.7q-.65 0-1.075-.425Q3.3 16.45 3.3 15.8V6.4q0-.65.425-1.075Q4.15 4.9 4.8 4.9h14.4q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyW100Filled.displayName = 'AmauiIconMaterialSyncSavedLocallyW100Filled';

export default IconMaterialSyncSavedLocallyW100Filled;
