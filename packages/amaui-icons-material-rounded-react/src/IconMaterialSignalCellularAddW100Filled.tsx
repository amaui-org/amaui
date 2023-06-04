import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddW100Filled'

      short_name='SignalCellularAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M759.965 924Q754 924 750 919.975T746 910V804H640q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106V670q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T889.975 800q-4.025 4-9.975 4H774v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM186 924q-15.188 0-21.094-13.5Q159 897 170 886l620-620q11-11 24.5-5.094T828 282v283q-14-5-34-7.5t-34-2.5q-97.837 0-166.418 68.582Q525 692.163 525 790q0 35 11 70t31 64H186Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddW100Filled.displayName = 'AmauiIconMaterialSignalCellularAddW100Filled';

export default IconMaterialSignalCellularAddW100Filled;
