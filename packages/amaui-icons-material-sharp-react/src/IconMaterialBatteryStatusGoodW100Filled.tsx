import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryStatusGoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGoodW100Filled'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m638-150-77-76 20-20 57 57 141-141 20 19-161 161Zm-312 8v-615h90v-60h128v60h90v287q-83 17-136 81t-53 149q0 26 5.5 50.5T467-142H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGoodW100Filled.displayName = 'AmauiIconMaterialBatteryStatusGoodW100Filled';

export default IconMaterialBatteryStatusGoodW100Filled;
