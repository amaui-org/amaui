import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAltFilled'

      short_name='SyncAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 21-5-5 5-5 1.425 1.4-2.6 2.6H21v2H5.825l2.6 2.6Zm10-8-1.425-1.4 2.6-2.6H3V7h15.175l-2.6-2.6L17 3l5 5Z"/>
    </Icon>
  );
});

IconMaterialSyncAltFilled.displayName = 'AmauiIconMaterialSyncAltFilled';

export default IconMaterialSyncAltFilled;
