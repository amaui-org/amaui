import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockOpenRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenRightW100Filled'

      short_name='LockOpenRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-306q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306ZM212-132v-456h360v-80q0-62 43-105t105-43q62 0 105 43t43 105h-28q0-50-35-85t-85-35q-50 0-85 35t-35 85v80h148v456H212Z"/>
    </Icon>
  );
});

IconMaterialLockOpenRightW100Filled.displayName = 'AmauiIconMaterialLockOpenRightW100Filled';

export default IconMaterialLockOpenRightW100Filled;
