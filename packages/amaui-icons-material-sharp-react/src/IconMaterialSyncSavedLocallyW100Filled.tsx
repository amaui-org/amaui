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
      <path d="M10.925 13.725 15.675 9l-.5-.5-4.25 4.25L8.8 10.625l-.5.5ZM2 19v-.7h20v.7Zm1.3-1.7V4.9h17.4v12.4Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyW100Filled.displayName = 'AmauiIconMaterialSyncSavedLocallyW100Filled';

export default IconMaterialSyncSavedLocallyW100Filled;
