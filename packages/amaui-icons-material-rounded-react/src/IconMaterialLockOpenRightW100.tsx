import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockOpenRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenRightW100'

      short_name='LockOpenRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-160h416q14 0 23-9t9-23v-336q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v336q0 14 9 23t23 9Zm208-146q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306ZM240-160v-400 400Zm32 28q-25 0-42.5-17.5T212-192v-336q0-25 17.5-42.5T272-588h300v-80q0-62 43-105t105-43q59 0 100.5 39t46.5 95q1 6-3 10t-10 4q-6 0-10-4t-5-10q-5-45-38.5-75.5T720-788q-50 0-85 35t-35 85v80h88q25 0 42.5 17.5T748-528v336q0 25-17.5 42.5T688-132H272Z"/>
    </Icon>
  );
});

IconMaterialLockOpenRightW100.displayName = 'AmauiIconMaterialLockOpenRightW100';

export default IconMaterialLockOpenRightW100;
