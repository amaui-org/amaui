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
      <path d="M480-306q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306ZM272-132q-24.75 0-42.375-17.625T212-192v-336q0-24.75 17.625-42.375T272-588h300v-80q0-62 43-105t105-43q59 0 100.5 39t46.5 95q1 6-2.929 10-3.928 4-10 4Q848-668 844-672t-5-10q-5-45-38.5-75.5T720-788q-50 0-85 35t-35 85v80h88q24.75 0 42.375 17.625T748-528v336q0 24.75-17.625 42.375T688-132H272Z"/>
    </Icon>
  );
});

IconMaterialLockOpenRightW100Filled.displayName = 'AmauiIconMaterialLockOpenRightW100Filled';

export default IconMaterialLockOpenRightW100Filled;
