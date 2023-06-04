import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLockW100'

      short_name='WaterLock'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 896V496v400Zm120-428h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm-88 456q-25 0-42.5-17.5T212 864V528q0-25 17.5-42.5T272 468h60v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h60q25 0 42.5 17.5T748 528v129q-4 0-7.5-.5t-7.5-.5h-13V528q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v336q0 14 9 23t23 9h302q3 8 6.5 14.5T589 924H272Zm463 0q-31 0-52.5-21.5T661 850q0-14 5-27t14-23l55-61 55 61q9 10 14 23t5 27q0 31-21.5 52.5T735 924ZM480 750q23 0 38.5-15.5T534 696q0-23-15.5-38.5T480 642q-23 0-38.5 15.5T426 696q0 23 15.5 38.5T480 750Z"/>
    </Icon>
  );
});

IconMaterialWaterLockW100.displayName = 'AmauiIconMaterialWaterLockW100';

export default IconMaterialWaterLockW100;
