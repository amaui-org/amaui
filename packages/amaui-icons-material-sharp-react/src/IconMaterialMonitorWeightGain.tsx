import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorWeightGain = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightGain'

      short_name='MonitorWeightGain'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 1016V896H600v-80h120V696h80v120h120v80H800v120h-80ZM200 856V296v560Zm-80 80V216h720v400h-80V296H200v560h320v80H120Zm360-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-80-100v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightGain.displayName = 'AmauiIconMaterialMonitorWeightGain';

export default IconMaterialMonitorWeightGain;
