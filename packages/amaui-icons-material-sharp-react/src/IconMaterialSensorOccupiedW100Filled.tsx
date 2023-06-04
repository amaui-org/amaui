import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorOccupiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorOccupiedW100Filled'

      short_name='SensorOccupied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10.85q-.975 0-1.662-.688Q9.65 9.475 9.65 8.5q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Zm-5.35 5V14.6q0-.4.175-.7.175-.3.525-.5 1.05-.625 2.225-.938Q10.75 12.15 12 12.15q1.225 0 2.413.312 1.187.313 2.237.938.325.2.513.512.187.313.187.688v1.25Zm14.575-7.7Q20.45 6.3 19.05 4.912q-1.4-1.387-3.2-2.137l.275-.65q2.05.925 3.425 2.275 1.375 1.35 2.35 3.475Zm-18.45 0-.65-.275q.925-2.1 2.3-3.463Q5.8 3.05 7.875 2.125l.275.65q-1.825.775-3.212 2.162Q3.55 6.325 2.775 8.15ZM7.85 21.875Q5.825 21 4.4 19.55 2.975 18.1 2.125 16.1l.65-.25q.775 1.825 2.163 3.212 1.387 1.388 3.212 2.163Zm8.25 0-.25-.65q1.825-.775 3.212-2.163 1.388-1.387 2.163-3.212l.65.275q-.925 2.05-2.337 3.462Q18.125 21 16.1 21.875Z"/>
    </Icon>
  );
});

IconMaterialSensorOccupiedW100Filled.displayName = 'AmauiIconMaterialSensorOccupiedW100Filled';

export default IconMaterialSensorOccupiedW100Filled;
