import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorDoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorDoorFilled'

      short_name='SensorDoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Zm9.5-8.5q.625 0 1.062-.438Q17 12.625 17 12t-.438-1.062q-.437-.438-1.062-.438t-1.062.438Q14 11.375 14 12t.438 1.062q.437.438 1.062.438Z"/>
    </Icon>
  );
});

IconMaterialSensorDoorFilled.displayName = 'AmauiIconMaterialSensorDoorFilled';

export default IconMaterialSensorDoorFilled;
