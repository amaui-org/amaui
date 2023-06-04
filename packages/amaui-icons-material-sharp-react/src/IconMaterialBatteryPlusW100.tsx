import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryPlusW100'

      short_name='BatteryPlus'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M326 914V299h90v-60h128v60h90v287q-8 2-14.5 3.5T606 593V326H354v560h102q2.065 7.667 5.032 14.333Q464 907 467 914H326Zm28-28h102-11 11-102Zm312 64V830H546v-28h120V682h28v120h120v28H694v120h-28Z"/>
    </Icon>
  );
});

IconMaterialBatteryPlusW100.displayName = 'AmauiIconMaterialBatteryPlusW100';

export default IconMaterialBatteryPlusW100;
