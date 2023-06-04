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
      <path d="M6.8 20.7q-.625 0-1.062-.438Q5.3 19.825 5.3 19.2V4.8q0-.625.438-1.063Q6.175 3.3 6.8 3.3h10.4q.625 0 1.062.437.438.438.438 1.063v14.4q0 .625-.438 1.062-.437.438-1.062.438Zm8.7-7.85q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialSensorDoorW100Filled.displayName = 'AmauiIconMaterialSensorDoorW100Filled';

export default IconMaterialSensorDoorW100Filled;
