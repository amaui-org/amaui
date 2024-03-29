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
      <path d="M12 12q1.25 0 2.125-.875T15 9q0-1.25-.875-2.125T12 6q-1.25 0-2.125.875T9 9q0 1.25.875 2.125T12 12Zm-1.5-2.5q-.2 0-.35-.15Q10 9.2 10 9q0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Zm1.5 0q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Zm1.5 0q-.2 0-.35-.15Q13 9.2 13 9q0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightFilled.displayName = 'AmauiIconMaterialMonitorWeightFilled';

export default IconMaterialMonitorWeightFilled;
