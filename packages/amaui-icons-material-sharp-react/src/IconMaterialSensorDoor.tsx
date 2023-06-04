import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorDoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorDoor'

      short_name='SensorDoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Zm2-2h12V4H6Zm9.5-6.5q.625 0 1.062-.438Q17 12.625 17 12t-.438-1.062q-.437-.438-1.062-.438t-1.062.438Q14 11.375 14 12t.438 1.062q.437.438 1.062.438ZM6 20V4Z"/>
    </Icon>
  );
});

IconMaterialSensorDoor.displayName = 'AmauiIconMaterialSensorDoor';

export default IconMaterialSensorDoor;
