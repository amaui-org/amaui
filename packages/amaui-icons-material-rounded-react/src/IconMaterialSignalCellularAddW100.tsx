import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddW100'

      short_name='SignalCellularAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m170 886 620-620q11-11 24.5-5.094T828 282v283q-7-2-13.5-3t-14.5-3V296L200 896h351q4 8 7.5 14.5T567 924H186q-15.188 0-21.094-13.5Q159 897 170 886Zm576-82H640q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106V670q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T889.975 800q-4.025 4-9.975 4H774v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T750 919.975q-4-4.025-4-9.975V804Zm-546 92 600-600-170 170-139 139-134 134-157 157Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddW100.displayName = 'AmauiIconMaterialSignalCellularAddW100';

export default IconMaterialSignalCellularAddW100;
