import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryCharging20SharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging20SharpW700Filled'
      short_name='BatteryCharging20'

      {...props}
    >
      <path d="M6.15 22.85V3.15H9.15V1.15H14.85V3.15H17.85V22.85ZM10.625 21.225 15.65 11.775H13.375V5.075L8.35 14.55H10.625Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryCharging20SharpW700Filled;
