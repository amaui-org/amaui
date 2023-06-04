import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorWeightGainW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightGainW100Filled'

      short_name='MonitorWeightGain'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M746 990V870H626v-28h120V722h28v120h120v28H774v120h-28ZM480.235 556Q522 556 551 526.765q29-29.236 29-71Q580 414 550.765 385q-29.236-29-71-29Q438 356 409 385.235q-29 29.236-29 71Q380 498 409.235 527q29.236 29 71 29ZM172 884V268h616v356q-7-1-14-1.5t-14-.5q-97.5 0-165.75 68.25T526 856q0 7 .5 14t1.5 14H172Zm228-408v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightGainW100Filled.displayName = 'AmauiIconMaterialMonitorWeightGainW100Filled';

export default IconMaterialMonitorWeightGainW100Filled;
