import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorWeightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightW100Filled'

      short_name='MonitorWeight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11.5q1.05 0 1.775-.725Q14.5 10.05 14.5 9q0-1.05-.725-1.775Q13.05 6.5 12 6.5q-1.05 0-1.775.725Q9.5 7.95 9.5 9q0 1.05.725 1.775.725.725 1.775.725Zm-2-2v-1h1v1Zm1.5 0v-1h1v1Zm1.5 0v-1h1v1ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightW100Filled.displayName = 'AmauiIconMaterialMonitorWeightW100Filled';

export default IconMaterialMonitorWeightW100Filled;
