import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPointScanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointScanW100'

      short_name='PointScan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 630q-23 0-38.5-15.5T426 576q0-23 15.5-38.5T480 522q23 0 38.5 15.5T534 576q0 23-15.5 38.5T480 630Zm-.035-214Q474 416 470 411.975T466 402V282q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v120q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm0 468Q474 884 470 879.975T466 870V750q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v120q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM654 590q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h120q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975 586q-4.025 4-9.975 4H654Zm-468 0q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h120q5.95 0 9.975 4.035 4.025 4.035 4.025 10T315.975 586q-4.025 4-9.975 4H186Z"/>
    </Icon>
  );
});

IconMaterialPointScanW100.displayName = 'AmauiIconMaterialPointScanW100';

export default IconMaterialPointScanW100;
