import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAlt'

      short_name='SyncAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="18,12 22,8 18,4 18,7 3,7 3,9 18,9"/><polygon points="6,12 2,16 6,20 6,17 21,17 21,15 6,15"/></g></g>
    </Icon>
  );
});

IconMaterialSyncAlt.displayName = 'AmauiIconMaterialSyncAlt';

export default IconMaterialSyncAlt;
