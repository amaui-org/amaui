import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryLowRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryLowRounded'
      short_name='BatteryLow'

      {...props}
    >
      <path d="M22 16q0 .425-.288.712Q21.425 17 21 17H5q-.425 0-.713-.288Q4 16.425 4 16v-2H2v-4h2V8q0-.425.287-.713Q4.575 7 5 7h16q.425 0 .712.287Q22 7.575 22 8Zm-5-1V9H6v6Z"/>
    </Icon>
  );
});

export default IconMaterialBatteryLowRounded;
