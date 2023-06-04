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
      <path d="M6.8 20.7q-.625 0-1.062-.438Q5.3 19.825 5.3 19.2V4.8q0-.625.438-1.063Q6.175 3.3 6.8 3.3h10.4q.625 0 1.062.437.438.438.438 1.063v14.4q0 .625-.438 1.062-.437.438-1.062.438Zm0-.7h10.4q.35 0 .575-.225Q18 19.55 18 19.2V4.8q0-.35-.225-.575Q17.55 4 17.2 4H6.8q-.35 0-.575.225Q6 4.45 6 4.8v14.4q0 .35.225.575Q6.45 20 6.8 20Zm8.7-7.15q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25ZM6 4H4.7v16H6V4Z"/>
    </Icon>
  );
});

IconMaterialSensorDoorW100.displayName = 'AmauiIconMaterialSensorDoorW100';

export default IconMaterialSensorDoorW100;
