import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryErrorW100Filled'

      short_name='BatteryError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m656 939-19-19 84-84-84-84 19-19 84 84 84-84 19 19-83 84 83 84-19 19-84-83-84 83Zm-330-25V299h90v-60h128v60h90v329q-59 29-93 85.5T507 836q0 22 3 40t10 38H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryErrorW100Filled.displayName = 'AmauiIconMaterialBatteryErrorW100Filled';

export default IconMaterialBatteryErrorW100Filled;
