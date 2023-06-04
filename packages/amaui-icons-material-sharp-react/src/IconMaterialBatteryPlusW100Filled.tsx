import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryPlusW100Filled'

      short_name='BatteryPlus'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M666 950V830H546v-28h120V682h28v120h120v28H694v120h-28Zm-340-36V299h90v-60h128v60h90v287q-83 17-136 81t-53 149q0 26 5.5 50.5T467 914H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryPlusW100Filled.displayName = 'AmauiIconMaterialBatteryPlusW100Filled';

export default IconMaterialBatteryPlusW100Filled;
