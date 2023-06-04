import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryChangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryChangeW100Filled'

      short_name='BatteryChange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m470 765 20-19-19-20q-8-8-12.5-18.5T454 686q0-11 4.5-22t12.5-19l38-38q12-12 18.5-27.5T534 547q0-17-6.5-33.5T509 485l-20-19-19 20 18 19q8 8 13 18.5t5 22.5q0 12-4.5 22T489 586l-37 38q-12 12-19 28t-7 33q0 17 6.5 33.5T451 747l19 18ZM326 914V299h90v-60h128v60h90v615H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryChangeW100Filled.displayName = 'AmauiIconMaterialBatteryChangeW100Filled';

export default IconMaterialBatteryChangeW100Filled;
