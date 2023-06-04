import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorWeightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightFilled'

      short_name='MonitorWeight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q1.25 0 2.125-.875T15 9q0-1.25-.875-2.125T12 6q-1.25 0-2.125.875T9 9q0 1.25.875 2.125T12 12Zm-2-2.5v-1h1v1Zm1.5 0v-1h1v1Zm1.5 0v-1h1v1ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightFilled.displayName = 'AmauiIconMaterialMonitorWeightFilled';

export default IconMaterialMonitorWeightFilled;
