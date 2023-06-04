import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorDoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorDoorW100Filled'

      short_name='SensorDoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h13.4v17.4Zm10.2-7.85q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialSensorDoorW100Filled.displayName = 'AmauiIconMaterialSensorDoorW100Filled';

export default IconMaterialSensorDoorW100Filled;
