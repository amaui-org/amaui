import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLockW100Filled'

      short_name='WaterLock'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 468h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm375.056 456Q704 924 682.5 902.54 661 881.08 661 850q0-14 5-27t13.93-23.247L735 739l55.07 60.753Q799 810 804 823t5 27q0 31.08-21.444 52.54-21.443 21.46-52.5 21.46ZM480 750q23 0 38.5-15.5T534 696q0-23-15.5-38.5T480 642q-23 0-38.5 15.5T426 696q0 23 15.5 38.5T480 750ZM272 924q-24.75 0-42.375-17.625T212 864V528q0-24.75 17.625-42.375T272 468h60v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h60q24.75 0 42.375 17.625T748 528v129q-7 0-13.774-.5-6.774-.5-14.226-.5-67 5-113 54.5T561 829q0 26 7 49.5t21 45.5H272Z"/>
    </Icon>
  );
});

IconMaterialWaterLockW100Filled.displayName = 'AmauiIconMaterialWaterLockW100Filled';

export default IconMaterialWaterLockW100Filled;
