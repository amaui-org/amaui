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
      <path d="M666 830H560q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106V696q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T809.975 826q-4.025 4-9.975 4H694v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T670 945.975q-4-4.025-4-9.975V830Zm-310 84q-12.75 0-21.375-8.625T326 884V329q0-12.75 8.625-21.375T356 299h60v-30q0-12.75 8.625-21.375T446 239h68q12.75 0 21.375 8.625T544 269v30h60q12.75 0 21.375 8.625T634 329v257q-83 17-136 81t-53 149q0 26 5.5 50.5T467 914H356Z"/>
    </Icon>
  );
});

IconMaterialBatteryPlusW100Filled.displayName = 'AmauiIconMaterialBatteryPlusW100Filled';

export default IconMaterialBatteryPlusW100Filled;
