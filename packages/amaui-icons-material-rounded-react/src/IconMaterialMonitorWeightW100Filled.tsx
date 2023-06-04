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
      <path d="M12 11.5q1.05 0 1.775-.725Q14.5 10.05 14.5 9q0-1.05-.725-1.775Q13.05 6.5 12 6.5q-1.05 0-1.775.725Q9.5 7.95 9.5 9q0 1.05.725 1.775.725.725 1.775.725Zm-1.5-2q-.2 0-.35-.15Q10 9.2 10 9q0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Zm1.5 0q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Zm1.5 0q-.2 0-.35-.15Q13 9.2 13 9q0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightW100Filled.displayName = 'AmauiIconMaterialMonitorWeightW100Filled';

export default IconMaterialMonitorWeightW100Filled;
