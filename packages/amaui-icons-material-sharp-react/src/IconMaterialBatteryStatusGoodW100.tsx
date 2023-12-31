import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryStatusGoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGoodW100'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m638-150-77-76 20-20 57 57 141-141 20 19-161 161Zm-312 8v-615h90v-60h128v60h90v287q-8 2-14.5 3.5T606-463v-267H354v560h102q2.065 7.667 5.032 14.333Q464-149 467-142H326Zm28-28h102-11 11-102Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGoodW100.displayName = 'AmauiIconMaterialBatteryStatusGoodW100';

export default IconMaterialBatteryStatusGoodW100;
