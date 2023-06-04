import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorDoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorDoorW100'

      short_name='SensorDoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h13.4v17.4ZM6 20h12V4H6Zm9.5-7.15q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25ZM4.7 20H6V4H4.7Z"/>
    </Icon>
  );
});

IconMaterialSensorDoorW100.displayName = 'AmauiIconMaterialSensorDoorW100';

export default IconMaterialSensorDoorW100;
