import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorWeightLoss = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightLoss'

      short_name='MonitorWeightLoss'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 816h320v80H600v-80Zm-400 40V296v560Zm-80 80V216h720v400h-80V296H200v560h320v80H120Zm360-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-80-100v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightLoss.displayName = 'AmauiIconMaterialMonitorWeightLoss';

export default IconMaterialMonitorWeightLoss;
